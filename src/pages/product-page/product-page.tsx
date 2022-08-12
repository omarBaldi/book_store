import { FC } from 'react';
import { BookCard } from '../../components/book-card';
import useBooks from '../../provider/book-provider';
import { ProductPageProps } from './dto';

const ProductPage: FC<ProductPageProps> = ({
  title = 'Catalog',
}: ProductPageProps) => {
  const {
    state: { books },
  } = useBooks();

  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        }}
      >
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
