import { FC, useMemo } from 'react';
import {
  getDiscountPrice,
  getPriceAfterDiscount,
  getPriceWithDecimals,
} from '../../utils/checkout-fn';
import CheckoutCardProps from './dto';
import Styles from './checkout-card.module.scss';

const CheckoutRow = ({ children }: { children: React.ReactNode }) => {
  return <div className={Styles.checkoutCardRow}>{children}</div>;
};

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
      <CheckoutRow>
        <>
          <h3>{subTotalLabel}</h3>
          <p>{getPriceWithDecimals(subTotalValue, 2)}</p>
        </>
      </CheckoutRow>

      <CheckoutRow>
        <>
          <h3>{`${discountLabel} ${discountValue.toString()} %`}</h3>
          <p>{getPriceWithDecimals(priceDiscount, 2)}</p>
        </>
      </CheckoutRow>

      <hr className={Styles.divider} />

      <CheckoutRow>
        <>
          <h3>{totalLabel}</h3>
          <p>{getPriceWithDecimals(total, 2)}</p>
        </>
      </CheckoutRow>
    </div>
  );
};

export default CheckoutCard;
