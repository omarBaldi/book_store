import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArchiveIcon } from '../../assets';
import CategoryCardProps from './dto';
import Styles from './category-card.module.scss';
import { Button } from '../button';
import { BUTTON_SIZES } from '../button/dto';

const CategoryCard: FC<CategoryCardProps> = ({
  title,
  totalItems,
  totalItemsLabel = 'items',
  buttonLabel = 'Discover more',
  additionalStyle = {},
}: CategoryCardProps) => {
  const navigate = useNavigate();
  const handleCardClick = (): void => navigate(`/categories/${title}`);

  return (
    <div className={Styles.categoryCardWrapper} style={{ ...additionalStyle }}>
      <div>
        <ArchiveIcon className={Styles.icon} />
        <h2 className={Styles.cardTitle}>{title}</h2>
        <p
          className={Styles.itemsLabel}
        >{`${totalItems} ${totalItemsLabel}`}</p>
      </div>

      <Button cbFunc={handleCardClick} size={BUTTON_SIZES.SMALL}>
        <p>{buttonLabel}</p>
      </Button>
    </div>
  );
};

export default CategoryCard;
