import { BookCardProps } from '../book-card';

type ShoppingCardProps = BookCardProps & {
  quantitySelected: number;
  totalBookPrice: number;
};

export default ShoppingCardProps;
