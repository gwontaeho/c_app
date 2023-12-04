import {View, ViewProps} from 'react-native';

type LayoutProps = ViewProps & {
  direction?: 'row' | 'column';
  flex?: number;
  p?: number;
  gap?: number;
};

export const Layout = (props: LayoutProps) => {
  const {children, style, flex, p, gap, direction = 'column'} = props;

  return (
    <View style={[style, {flex, gap, flexDirection: direction, padding: p}]}>
      {children}
    </View>
  );
};
