import {forwardRef} from 'react';
import {TextInput, TextInputProps} from 'react-native';

const inputSizes = {
  sm: 32,
  md: 40,
  lg: 48,
};

type InputProps = TextInputProps & {
  size?: keyof typeof inputSizes;
};

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const {size = 'md'} = props;
  return (
    <TextInput
      {...props}
      ref={ref}
      style={{
        borderBottomWidth: 1,
        padding: 8,
        minHeight: inputSizes[size],
      }}
    />
  );
});
