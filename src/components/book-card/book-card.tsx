import { FC } from 'react';
import BookCardProps from './dto';

const BookCard: FC<BookCardProps> = ({
  id,
  image_url,
  price,
  stock_quantity,
  title,
  discount_set = 'Other',
}: BookCardProps) => {
  return (
    <div style={{ padding: '1rem' }}>
      <img src={image_url} alt='' loading='lazy' style={{ width: '100%' }} />
      <h3>Title: {title}</h3>
      <p>Price: {price}</p>
      <p>Quantity: {stock_quantity}</p>
      <p>Category: {discount_set}</p>
    </div>
  );
};

export default BookCard;
