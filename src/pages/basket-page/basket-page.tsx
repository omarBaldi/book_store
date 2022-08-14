import { FC, useMemo, useRef } from 'react';
import { BookCardProps } from '../../components/book-card';
import { CheckoutCard } from '../../components/checkout-card';
import {
  ShoppingCard,
  ShoppingCardProps,
} from '../../components/shopping-card';
import { AUGUST_MONTH_INDEX, DISCOUNT_PERCENTAGE_AUGUST } from '../../constant';
import useBooks from '../../provider/book-provider';
import BasketPageProps from './dto';
import Styles from './basket-page.module.scss';

const TODAY = new Date();

const BasketPage: FC<BasketPageProps> = ({
  additionalStyle = {},
}: BasketPageProps) => {
  const {
    state: { books, selectedBooks },
  } = useBooks();

  const applyDiscount = useRef<boolean>(
    TODAY.getMonth() === AUGUST_MONTH_INDEX && TODAY.getDate() === 1
  ).current;

  const { productsChosen, totalCheckoutAmount } = useMemo(() => {
    let totalCheckoutAmount: number = 0;

    const productsChosen = [...selectedBooks].reduce(
      (acc: ShoppingCardProps[], [bookSelectedID, quantity = 0]) => {
        const bookInfo: BookCardProps | undefined = books.find(
          ({ id }) => id === +bookSelectedID
        );

        if (bookInfo) {
          const updatedBook: ShoppingCardProps = {
            ...bookInfo,
            quantitySelected: quantity,
            totalBookPrice: quantity * bookInfo.price,
          };

          totalCheckoutAmount += updatedBook.price * quantity;

          acc.push(updatedBook);
        }

        return acc;
      },
      []
    );

    return {
      productsChosen,
      totalCheckoutAmount,
    };
  }, [books, selectedBooks]);

  return (
    <div className={Styles.basketPage} style={{ ...additionalStyle }}>
      <div className={Styles.basketContent}>
        {productsChosen.length > 0 ? (
          productsChosen.map((pd) => <ShoppingCard key={pd.id} {...pd} />)
        ) : (
          <h1>The basket is empty</h1>
        )}
      </div>

      <CheckoutCard
        subTotalValue={totalCheckoutAmount}
        discountValue={applyDiscount ? DISCOUNT_PERCENTAGE_AUGUST : 0}
      />
    </div>
  );
};

export default BasketPage;
