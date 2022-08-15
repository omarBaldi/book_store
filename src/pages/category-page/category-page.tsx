import React, { FC, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookCard } from '../../components/book-card';
import { Button } from '../../components/button';
import useBooks from '../../provider/book-provider';
import CategoryPageProps from './dto';
import Styles from './category-page.module.scss';

const CategoryPage: FC<CategoryPageProps> = ({
  additionalStyle = {},
}: CategoryPageProps) => {
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
    <div style={{ ...additionalStyle }}>
      <div className={Styles.goBackButtonWrapper}>
        <Button cbFunc={handleBackButtonClick}>
          <p>Go back</p>
        </Button>
      </div>
      <div className={Styles.categoryElementsGrid}>
        {elements.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(CategoryPage);
