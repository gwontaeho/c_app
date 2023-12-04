import {ReactNode} from 'react';
import {Text as NativeText} from 'react-native';

const textSizes = {
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
};

type TextProps = {
  children?: ReactNode;
  size?: keyof typeof textSizes;
};

export const Text = (props: TextProps) => {
  const {children, size = 'md'} = props;
  return (
    <NativeText style={{fontSize: textSizes[size]}}>{children}</NativeText>
  );
};
