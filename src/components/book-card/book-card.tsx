import React, { FC } from 'react';
import useBooks from '../../provider/book-provider';
import { ACTIONS } from '../../actions/book-actions';
import { Button } from '../button';
import BookCardProps from './dto';
import Styles from './book-card.module.scss';
import { PlusIcon, MinusIcon } from '../../assets/icons';

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
    <div style={{ margin: '1rem 1.5rem' }} className={Styles.bookCardWrapper}>
      {quantityChosen ? (
        <div className={Styles.quantityLeft}>{quantityChosen}</div>
      ) : (
        <></>
      )}

      {/* <div>
        <p style={{ margin: 0, marginBottom: '0.5rem' }}>{discount_set}</p>
      </div> */}
      <div
        style={{
          overflow: 'hidden',
          borderRadius: '10px',
          position: 'relative',
        }}
      >
        <img src={image_url} alt='' loading='lazy' style={{ width: '100%' }} />

        <div className={Styles.buttonsWrapper}>
          <Button cbFunc={handleDecrement} disabled={quantityChosen <= 0}>
            <MinusIcon height={10} width={10} />
          </Button>

          <Button
            cbFunc={handleIncrement}
            disabled={quantityChosen >= stock_quantity}
          >
            <PlusIcon height={10} width={10} />
          </Button>
        </div>
      </div>
      <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ margin: 0, marginBottom: '0.5rem' }}>
        <span>$</span>
        <span>{price}</span>
      </p>
      <p style={{ margin: 0, marginBottom: '0.5rem' }}>
        Quantity: {stock_quantity}
      </p>
    </div>
  );
};

export default React.memo(BookCard);
