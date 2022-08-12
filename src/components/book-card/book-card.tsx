import React, { FC } from 'react';
import { ACTIONS } from '../../actions/book-actions';
import useBooks from '../../provider/book-provider';
import { Button } from '../button';
import BookCardProps from './dto';

const BookCard: FC<BookCardProps> = ({
  id,
  image_url,
  price,
  stock_quantity,
  title,
  discount_set = 'Other',
}: BookCardProps) => {
  const {
    state: { selectedBooks },
    dispatch,
  } = useBooks();

  const handleIncrement = (): void => {
    dispatch({ type: ACTIONS.INCREASE_BOOK_QUANTITY, id });
  };

  const handleDecrement = (): void => {
    dispatch({ type: ACTIONS.DECREASE_BOOK_QUANTITY, id });
  };

  const quantityChosen = selectedBooks.get(id.toString()) ?? 0;

  return (
    <div style={{ margin: '1rem 1.5rem' }}>
      <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
        <img src={image_url} alt='' loading='lazy' style={{ width: '100%' }} />
      </div>
      <h3>Title: {title}</h3>
      <p>Price: {price}</p>
      <p>Quantity: {stock_quantity}</p>
      <p>Category: {discount_set}</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Button
          cbFunc={handleDecrement}
          additionalStyle={{ marginRight: '1rem' }}
          disabled={quantityChosen <= 0}
        >
          <p style={{ margin: 0 }}>-</p>
        </Button>
        <p>{quantityChosen}</p>
        <Button
          cbFunc={handleIncrement}
          additionalStyle={{ marginLeft: '1rem' }}
          disabled={quantityChosen >= stock_quantity}
        >
          <p style={{ margin: 0 }}>+</p>
        </Button>
      </div>
    </div>
  );
};

export default React.memo(BookCard);
