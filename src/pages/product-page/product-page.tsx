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

  //TODO: use debounce for search
  const handleInputChange = () => null;

  /* const categories = () => {

  }; */

  return (
    <div style={{ width: '100%' }}>
      <div style={{ margin: '0 1.5rem' }}>
        <input type='text' placeholder='Search' onChange={handleInputChange} />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
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
