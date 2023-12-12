import {View, ViewProps} from 'react-native';

type LayoutProps = ViewProps & {
  flex?: number;
  gap?: number;
  direction?: 'row' | 'column';
  pos?: 'absolute' | 'relative';

  w?: number;
  h?: number;

  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  px?: number;
  py?: number;

  b?: boolean;
  bt?: boolean;
  bb?: boolean;
  bl?: boolean;
  br?: boolean;
  bx?: boolean;
  by?: boolean;

  r?: boolean;
  rt?: boolean;
  rb?: boolean;

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
