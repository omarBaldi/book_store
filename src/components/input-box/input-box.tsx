import { FC } from 'react';
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
  );
};

export default InputBox;
