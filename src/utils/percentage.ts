export const getPriceAfterDiscount = ({
  price,
  discountPercentage,
  decimals = 2,
}: {
  price: number;
  discountPercentage: number;
  decimals?: number;
}) => {
  const priceAfterDiscount = price - price * (discountPercentage / 100);
  const roundedFinalPrice = priceAfterDiscount.toFixed(decimals);

  return roundedFinalPrice;
};
