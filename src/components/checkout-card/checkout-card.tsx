import { FC, useMemo } from 'react';
import {
  getDiscountPrice,
  getPriceAfterDiscount,
  getPriceWithDecimals,
} from '../../utils/percentage';
import CheckoutCardProps from './dto';
import Styles from './checkout-card.module.scss';

const CheckoutCard: FC<CheckoutCardProps> = ({
  subTotalLabel = 'SubTotal',
  discountLabel = 'Discount',
  totalLabel = 'Total',
  subTotalValue,
  discountValue = 0,
}: CheckoutCardProps) => {
  const { total, priceDiscount } = useMemo(() => {
    const discountPrice = getDiscountPrice(subTotalValue, discountValue);

    const priceDiscount = getPriceAfterDiscount({
      price: subTotalValue,
      discountPercentage: discountValue,
    });

    return {
      total: priceDiscount,
      priceDiscount: discountPrice,
    };
  }, [subTotalValue, discountValue]);

  return (
    <div className={Styles.checkoutCard}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>{subTotalLabel}</h3>
        <p>{getPriceWithDecimals(subTotalValue, 2)}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>{`${discountLabel} ${discountValue.toString()} %`}</h3>
        <p>{getPriceWithDecimals(priceDiscount, 2)}</p>
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>{totalLabel}</h3>
        <p>{getPriceWithDecimals(total, 2)}</p>
      </div>
    </div>
  );
};

export default CheckoutCard;
