import React, { FC, useMemo } from 'react';
import { BookCardProps } from '../../components/book-card';
import { CategoryCard } from '../../components/category-card';
import useBooks from '../../provider/book-provider';

const CategoriesPage: FC<{}> = () => {
  const {
    state: { books },
  } = useBooks();

  const categoriesData = useMemo(() => {
    return books.reduce(
      (
        acc: { [key: string]: number },
        { discount_set = 'other' }: Pick<BookCardProps, 'discount_set'>
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
    [label, value]: [string, number],
    index: number
  ) => (
    <CategoryCard
      key={`${label}-#${index}`}
      title={label}
      totalItems={value}
      additionalStyle={{ margin: '1rem 0.5rem' }}
    />
  );

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gridTemplateRows: 'repeat(auto-fill, 250px)',
        }}
      >
        {Object.entries(categoriesData).map(renderCategoryCard)}
      </div>
    </div>
  );
};

export default CategoriesPage;
