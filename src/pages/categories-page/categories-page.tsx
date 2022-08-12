import React, { FC, useMemo } from 'react';
import { BookCardProps } from '../../components/book-card';
import useBooks from '../../provider/book-provider';

const CategoriesPage: FC<{}> = () => {
  const {
    state: { books },
  } = useBooks();

  const categoriesData = useMemo(() => {
    console.log('here!');

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

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      }}
    >
      {Object.entries(categoriesData).map(
        ([label, totalItems], index: number) => {
          return (
            <div key={`${label}-#${index}`}>
              <h3>{label}</h3>
              <p>{totalItems} items</p>
            </div>
          );
        }
      )}
    </div>
  );
};

export default CategoriesPage;
