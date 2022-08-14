import { FC } from 'react';
import { SearchIcon } from '../../assets/icons';
import InputBoxProps, { INPUTBOX_TYPE } from './dto';
import Styles from './input-box.module.scss';

const InputBox: FC<InputBoxProps> = ({
  value,
  type = INPUTBOX_TYPE.TEXT,
  placeholderText = 'Search',
  additionalStyle = {},
  cbFunc,
}: InputBoxProps) => {
  return (
    <div className={Styles.inputBoxWrapper}>
      <SearchIcon className={Styles.inputBoxIcon} />
      <input
        {...{
          type,
          value,
          placeholder: placeholderText,
          onChange: cbFunc,
          className: Styles.inputBox,
          style: { ...additionalStyle },
        }}
      />
    </div>
  );
};

export default InputBox;
