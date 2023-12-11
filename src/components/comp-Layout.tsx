import {View, ViewProps} from 'react-native';

type LayoutProps = ViewProps & {
  direction?: 'row' | 'column';
  flex?: number;
  gap?: number;
  w?: number;
  h?: number;
  p?: number;
  px?: number;
  py?: number;
  b?: boolean;
  r?: boolean;
  jc?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  ai?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
};

export const Layout = (props: LayoutProps) => {
  const {
    children,
    style,
    direction = 'column',
    flex,
    gap,
    p,
    px,
    py,
    jc,
    ai,
    w,
    h,
    b,
    r,
  } = props;

  return (
    <View
      style={[
        {
          flex,
          gap,
          flexDirection: direction,
          padding: p,
          paddingHorizontal: px,
          paddingVertical: py,
          justifyContent: jc,
          alignItems: ai,
          width: w,
          height: h,
          borderWidth: b ? 1 : 0,
          borderRadius: r ? 8 : 0,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
