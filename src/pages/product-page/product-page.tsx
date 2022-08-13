import { FC } from 'react';
import { BookCard } from '../../components/book-card';
import useBooks from '../../provider/book-provider';
import { ProductPageProps } from './dto';
import Styles from './product-page.module.scss';

const ProductPage: FC<ProductPageProps> = ({
  title = 'Catalog',
}: ProductPageProps) => {
  const {
    state: { books },
  } = useBooks();

  const debounce = (cbFunc: (args: any) => void, ms: number) => {
    let timeout: NodeJS.Timeout;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => cbFunc(args), ms);
    };
  };

  const executeSearch = () => console.log('here!');

  return (
    <div className={Styles.productPage}>
      <div style={{ margin: '0 1.5rem' }}>
        <input
          type='text'
          placeholder='Search'
          onChange={debounce(executeSearch, 1000)}
        />
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
