import { FC, useMemo } from 'react';
import { BookCardProps } from '../../components/book-card';
import { CategoryCard } from '../../components/category-card';
import useBooks from '../../provider/book-provider';
import CategoriesPageProps from './dto';
import Styles from './categories-page.module.scss';

const CategoriesPage: FC<CategoriesPageProps> = ({
  additionalStyle = {},
}: CategoriesPageProps) => {
  const {
    state: { books },
  } = useBooks();

  const categoriesData = useMemo(() => {
    return books.reduce(
      (
        acc: { [key: string]: number },
        { discount_set }: Pick<BookCardProps, 'discount_set'>
      ) => {
        return {
          ...acc,
          [discount_set]: (acc[discount_set] ?? 0) + 1,
        };
      },
      {}
    );
  }, [books]);

  const renderCategoryCard = (
    [label, totalItems]: [string, number],
    index: number
  ) => (
    <CategoryCard
      key={`${label}-#${index}`}
      title={label}
      {...{ totalItems }}
      additionalStyle={{ margin: '1rem 0.5rem' }}
    />
  );

  return (
    <div className={Styles.categoriesPage} style={{ ...additionalStyle }}>
      <div className={Styles.categoriesGrid}>
        {Object.entries(categoriesData).map(renderCategoryCard)}
      </div>
    </div>
  );
};

export default CategoriesPage;
