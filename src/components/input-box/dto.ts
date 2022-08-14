export enum INPUTBOX_TYPE {
  TEXT = 'text',
}

type InputBoxProps = {
  type?: INPUTBOX_TYPE;
  placeholderText?: string;
  value: string;
  cbFunc: (args: any) => void;
  additionalStyle?: React.CSSProperties;
};

export default InputBoxProps;
