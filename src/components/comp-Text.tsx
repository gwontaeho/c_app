import {ReactNode} from 'react';
import {Text as NativeText} from 'react-native';

const textSizes = {
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
  xxxl: 22,
};

type TextProps = {
  children?: ReactNode;
  size?: keyof typeof textSizes;
  p?: number;
  px?: number;
  py?: number;
  f?: number;
};

export const Text = (props: TextProps) => {
  const {children, size = 'md', p, px, py, f} = props;
  return (
    <NativeText
      style={{
        fontSize: textSizes[size],
        padding: p,
        paddingHorizontal: px,
        paddingVertical: py,
        flex: f,
      }}>
      {children}
    </NativeText>
  );
};
