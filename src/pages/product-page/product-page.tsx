import React, { FC, useCallback, useEffect, useState } from 'react';
import useBooks from '../../provider/book-provider';
import { useDebounce } from '../../hooks/useDebounce';
import { BookCard, BookCardProps } from '../../components/book-card';
import { ProductPageProps } from './dto';
import Styles from './product-page.module.scss';

const ProductPage: FC<ProductPageProps> = ({
  title = 'Catalog',
}: ProductPageProps) => {
  const {
    state: { books },
  } = useBooks();

  const [currentWordSearched, setCurrentWordSearched] = useState<string>('');
  const [filteredBooks, setFilteredBooks] = useState<BookCardProps[]>([]);

  const filterBooksBasedOnKeySearched = useCallback(
    (currentKey: string) => {
      const newFilteredBooks = filteredBooks.filter((book) =>
        book.title.includes(currentKey)
      );

      setFilteredBooks((prevBooks) =>
        !currentKey ? prevBooks : newFilteredBooks
      );
    },
    [filteredBooks]
  );

  const handleInputChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const currentWord = target.value;
      setCurrentWordSearched(currentWord);
    },
    []
  );

  useDebounce({
    value: currentWordSearched,
    cbFunc: () => filterBooksBasedOnKeySearched(currentWordSearched),
  });

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  return (
    <div className={Styles.productPage}>
      <div style={{ margin: '0 1.5rem' }}>
        <input
          type='text'
          placeholder='Search'
          value={currentWordSearched}
          onChange={handleInputChange}
        />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        }}
      >
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
