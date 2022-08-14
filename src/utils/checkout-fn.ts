export const getDiscountPrice = (
  initialPrice: number,
  discountPercentage: number
) => {
  return initialPrice * (discountPercentage / 100);
};

export const getPriceAfterDiscount = ({
  price,
  discountPercentage,
}: {
  price: number;
  discountPercentage: number;
}) => {
  const discountPrice = getDiscountPrice(price, discountPercentage);
  const priceAfterDiscount = price - discountPrice;
  return priceAfterDiscount;
};

export const getPriceWithDecimals = (price: number, decimals: number) => {
  return price.toFixed(decimals);
};
