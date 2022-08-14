import { FC } from 'react';
import { MinusIcon, PlusIcon } from '../../assets/icons';
import { Button } from '../button';
import { BUTTON_CATEGORIES, BUTTON_SIZES } from '../button/dto';
import ShoppingCardProps from './dto';
import Styles from './shopping-card.module.scss';

const ShoppingCard: FC<ShoppingCardProps> = ({
  title,
  image_url,
  price,
  stock_quantity,
  quantitySelected,
  totalBookPrice,
}: ShoppingCardProps) => {
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
              className={Styles.totalBookPriceLabel}
            >{`$ ${totalBookPrice}`}</span>
            <span>for</span>
            <span
              className={Styles.quantitySelectedLabel}
            >{`${quantitySelected}`}</span>
            <span>items</span>
          </p>
        </div>

        <div className={Styles.textSecondRow}>
          <p className={Styles.priceLabel}>{`$ ${price}`}</p>
          <p>{`${stock_quantity - quantitySelected} items left`}</p>
        </div>

        <div className={Styles.buttonsRow}>
          <div className={Styles.buttonActionsWrapper}>
            <Button
              category={BUTTON_CATEGORIES.SECONDARY}
              size={BUTTON_SIZES.SMALL}
              cbFunc={() => null}
            >
              <MinusIcon height={10} width={10} />
            </Button>

            <Button
              category={BUTTON_CATEGORIES.SECONDARY}
              size={BUTTON_SIZES.SMALL}
              cbFunc={() => null}
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
