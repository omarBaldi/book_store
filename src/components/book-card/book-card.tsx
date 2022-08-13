import React, { FC } from 'react';
import useBooks from '../../provider/book-provider';
import { ACTIONS } from '../../actions/book-actions';
import { Button } from '../button';
import { PlusIcon, MinusIcon } from '../../assets/icons';
import BookCardProps from './dto';
import Styles from './book-card.module.scss';
import { BUTTON_CATEGORIES, BUTTON_SIZES } from '../button/dto';

const BookCard: FC<BookCardProps> = ({
  id,
  image_url,
  price,
  stock_quantity,
  title,
  discount_set,
  stockQuantityLabel = 'items left',
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
    <div style={{ margin: '1rem' }} className={Styles.bookCardWrapper}>
      {quantityChosen ? (
        <div className={Styles.quantityLeft}>{quantityChosen}</div>
      ) : (
        <></>
      )}

      <div className={Styles.imageWrapper}>
        <img src={image_url} alt='' loading='lazy' className={Styles.image} />

        <div className={Styles.buttonsWrapper}>
          <Button
            category={BUTTON_CATEGORIES.SECONDARY}
            size={BUTTON_SIZES.SMALL}
            cbFunc={handleDecrement}
            disabled={quantityChosen <= 0}
          >
            <MinusIcon height={10} width={10} />
          </Button>

          <Button
            category={BUTTON_CATEGORIES.SECONDARY}
            size={BUTTON_SIZES.SMALL}
            cbFunc={handleIncrement}
            disabled={quantityChosen >= stock_quantity}
          >
            <PlusIcon height={10} width={10} />
          </Button>
        </div>
      </div>
      <div className={Styles.cardTextWrapper}>
        <h3 style={{ margin: 0, marginBottom: '0.5rem', fontWeight: 'bolder' }}>
          {title}
        </h3>
        <p style={{ margin: 0, marginBottom: '0.5rem' }}>
          <span>$</span>
          <span>{price}</span>
        </p>
        <p style={{ margin: 0, marginBottom: '0.5rem' }}>
          {`${stock_quantity - quantityChosen} ${stockQuantityLabel}`}
        </p>
      </div>
    </div>
  );
};

export default React.memo(BookCard);
