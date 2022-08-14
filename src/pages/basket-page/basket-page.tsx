import { FC, useMemo } from 'react';
import { BookCardProps } from '../../components/book-card';
import {
  ShoppingCard,
  ShoppingCardProps,
} from '../../components/shopping-card';
import useBooks from '../../provider/book-provider';
import { getPriceAfterDiscount } from '../../utils/percentage';

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
      <div
        style={{
          minWidth: '20rem',
          backgroundColor: 'white',
          height: '100%',
          position: 'sticky',
          top: 0,
          marginLeft: '1rem',
          borderRadius: '5px',
          padding: '1rem',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>SubTotal</h3>
          <p>{totalCheckoutAmount.toFixed(2)}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Discount 20%</h3>
          <p>
            {getPriceAfterDiscount({
              price: totalCheckoutAmount,
              discountPercentage: 20,
            })}
          </p>
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Total</h3>
          <p>{totalCheckoutAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
