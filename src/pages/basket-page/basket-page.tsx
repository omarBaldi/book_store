import { FC, useMemo /* useRef */ } from 'react';
import { BookCardProps } from '../../components/book-card';
import useBooks from '../../provider/book-provider';

/**
 * TODO: implement use of useMemo hook to return the total price...
 * TODO: ...(+ possible discout if 1st of August) if the selected books change
 * TODO: create cart card
 */
const BasketPage: FC<{}> = () => {
  const {
    state: { books, selectedBooks },
  } = useBooks();

  //const discount = useRef<boolean>(false).current;

  const { productsChosen, totalCheckoutAmount } = useMemo(() => {
    let totalCheckoutAmount: number = 0;

    const productsChosen = [...selectedBooks].reduce(
      (acc: any, [bookSelectedID, quantity = 0]) => {
        const bookInfo: BookCardProps | undefined = books.find(
          ({ id }) => id === +bookSelectedID
        );

        if (bookInfo) {
          const updatedBook = {
            ...bookInfo,
            quantity,
            totalPriceBook: quantity * bookInfo.price,
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

  console.log(productsChosen);

  return (
    <div>
      <h1>Total {totalCheckoutAmount}</h1>
    </div>
  );
};

export default BasketPage;
