import { FC, useMemo } from 'react';
import { BookCardProps } from '../../components/book-card';
import { CheckoutCard } from '../../components/checkout-card';
import {
  ShoppingCard,
  ShoppingCardProps,
} from '../../components/shopping-card';
import useBooks from '../../provider/book-provider';

const BasketPage: FC<{}> = () => {
  const {
    state: { books, selectedBooks },
  } = useBooks();

  //const discount = useRef<boolean>(false).current;

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
    <div
      style={{
        width: '100%',
        padding: '1rem',
        display: 'flex',
      }}
    >
      <div style={{ flex: 1 }}>
        {productsChosen.length > 0 ? (
          productsChosen.map((pd) => <ShoppingCard key={pd.id} {...pd} />)
        ) : (
          <>
            <h1 style={{ color: 'white' }}>No product selected yet!</h1>
          </>
        )}
      </div>

      <CheckoutCard
        subTotalValue={totalCheckoutAmount}
        //TODO: apply 20 only if 1st of august
        discountValue={20}
      />
    </div>
  );
};

export default BasketPage;
