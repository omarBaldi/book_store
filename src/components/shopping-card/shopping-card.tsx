import { FC } from 'react';
import { ACTIONS } from '../../actions/book-actions';
import { MinusIcon, PlusIcon } from '../../assets/icons';
import useBooks from '../../provider/book-provider';
import { Button } from '../button';
import { BUTTON_CATEGORIES, BUTTON_SIZES } from '../button/dto';
import ShoppingCardProps from './dto';
import Styles from './shopping-card.module.scss';

const ShoppingCard: FC<ShoppingCardProps> = ({
  id,
  title,
  image_url,
  price,
  stock_quantity,
  quantitySelected,
  totalBookPrice,
}: ShoppingCardProps) => {
  const { dispatch } = useBooks();

  const handleIncrement = (): void => {
    dispatch({ type: ACTIONS.INCREASE_BOOK_QUANTITY, id });
  };

  const handleDecrement = (): void => {
    dispatch({ type: ACTIONS.DECREASE_BOOK_QUANTITY, id });
  };

  return (
    <div className={Styles.shoppingCard}>
      <div className={Styles.imageWrapper}>
        <img src={image_url} alt='' />
      </div>

      <div className={Styles.textWrapper}>
        <div className={Styles.textFirstRow}>
          <h3 className={Styles.title}>{title}</h3>
          <p>
            <span
              className={Styles.quantitySelectedLabel}
            >{`${quantitySelected}`}</span>
            <span>items</span>
            <span>for</span>
            <span
              className={Styles.totalBookPriceLabel}
            >{`$ ${totalBookPrice.toFixed(2)}`}</span>
          </p>
        </div>

        <div className={Styles.textSecondRow}>
          <p className={Styles.priceLabel}>{`$ ${price}`}</p>
          <p>
            {stock_quantity - quantitySelected > 0
              ? `${stock_quantity - quantitySelected} items left`
              : 'No items left'}
          </p>
        </div>

        <div className={Styles.buttonsRow}>
          <div className={Styles.buttonActionsWrapper}>
            <Button
              category={BUTTON_CATEGORIES.SECONDARY}
              size={BUTTON_SIZES.SMALL}
              cbFunc={handleDecrement}
            >
              <MinusIcon height={10} width={10} />
            </Button>

            <Button
              category={BUTTON_CATEGORIES.SECONDARY}
              size={BUTTON_SIZES.SMALL}
              cbFunc={handleIncrement}
            >
              <PlusIcon height={10} width={10} />
            </Button>
          </div>

          <div>
            <Button cbFunc={() => null} size={BUTTON_SIZES.SMALL}>
              <p>Delete</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
