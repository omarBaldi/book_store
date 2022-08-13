import { FC, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookCard } from '../../components/book-card';
import { Button } from '../../components/button';
import useBooks from '../../provider/book-provider';
import Styles from './category-page.module.scss';

const CategoryPage: FC<{}> = () => {
  const {
    state: { books },
  } = useBooks();
  const { category: currentCategoryParam } = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => navigate(-1);

  const elements = useMemo(() => {
    const filteredBooks = books.filter(
      (book) => book.discount_set === currentCategoryParam
    );
    return filteredBooks;
  }, [currentCategoryParam, books]);

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'inline-flex', padding: '1rem' }}>
        <Button cbFunc={handleBackButtonClick}>
          <p>Go back</p>
        </Button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        }}
      >
        {elements.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
