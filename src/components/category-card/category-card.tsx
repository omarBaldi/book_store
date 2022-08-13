import { FC } from 'react';
import CategoryCardProps from './dto';
import Styles from './category-card.module.scss';
import { useNavigate } from 'react-router-dom';

const CategoryCard: FC<CategoryCardProps> = ({
  title,
  totalItems,
  totalItemsLabel = 'items',
  additionalStyle = {},
}: CategoryCardProps) => {
  const navigate = useNavigate();
  const handleCardClick = (): void => navigate(`/categories/${title}`);

  return (
    <div
      className={Styles.categoryCardWrapper}
      style={{ ...additionalStyle }}
      onClick={handleCardClick}
    >
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
