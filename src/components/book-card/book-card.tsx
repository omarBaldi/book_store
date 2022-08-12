import React, { FC } from 'react';
import useBooks from '../../provider/book-provider';
import { ACTIONS } from '../../actions/book-actions';
import { Button } from '../button';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg';
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
      <div>
        <p style={{ margin: 0, marginBottom: '0.5rem' }}>{discount_set}</p>
      </div>
      <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
        <img src={image_url} alt='' loading='lazy' style={{ width: '100%' }} />
      </div>
      <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ margin: 0, marginBottom: '0.5rem' }}>
        <span>$</span>
        <span>{price}</span>
      </p>
      <p style={{ margin: 0, marginBottom: '0.5rem' }}>
        Quantity: {stock_quantity}
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Button
          cbFunc={handleDecrement}
          additionalStyle={{ marginRight: '1rem', flex: 1 }}
          disabled={quantityChosen <= 0}
        >
          <p style={{ margin: 0 }}>
            <MinusIcon />
          </p>
        </Button>
        <p style={{ margin: 0 }}>{quantityChosen}</p>
        <Button
          cbFunc={handleIncrement}
          additionalStyle={{ marginLeft: '1rem', flex: 1 }}
          disabled={quantityChosen >= stock_quantity}
        >
          <p style={{ margin: 0 }}>
            <PlusIcon />
          </p>
        </Button>
      </div>
    </div>
  );
};

export default React.memo(BookCard);
