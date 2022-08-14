type BookCardProps = {
  id: number;
  image_url: string;
  price: number;
  stock_quantity: number;
  title: string;
  discount_set: string;
  additionalStyle?: React.CSSProperties;
} & {
  stockQuantityLabel?: string;
};

export default BookCardProps;
