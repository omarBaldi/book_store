import { FC } from 'react';
import useBooks from '../../provider/book-provider';
import { BookI } from '../../provider/dto';
import { ProductPageProps } from './dto';

/**
 * TODO: implement component for rendering book
 */
const ProductPage: FC<ProductPageProps> = ({
  title = 'Catalog',
}: ProductPageProps) => {
  const {
    state: { data: books },
  } = useBooks();

  const renderBook = ({
    id,
    image_url,
    price,
    stock_quantity,
    title,
    discount_set = 'Other',
  }: BookI): JSX.Element => {
    return (
      <div key={id} style={{ padding: '1rem' }}>
        <img src={image_url} alt='' style={{ width: '100%' }} />
        <h3>Title: {title}</h3>
        <p>Price: {price}</p>
        <p>Quantity: {stock_quantity}</p>
        <p>Category: {discount_set}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        }}
      >
        {books.map(renderBook)}
      </div>
    </div>
  );
};

export default ProductPage;
