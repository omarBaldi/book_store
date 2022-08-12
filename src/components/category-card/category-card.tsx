import { FC } from 'react';
import CategoryCardProps from './dto';
import Styles from './category-card.module.scss';

const CategoryCard: FC<CategoryCardProps> = ({
  title,
  totalItems,
  totalItemsLabel = 'items',
  additionalStyle = {},
}: CategoryCardProps) => {
  return (
    <div className={Styles.categoryCardWrapper} style={{ ...additionalStyle }}>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{totalItems}</span>
          <span>{totalItemsLabel}</span>
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
