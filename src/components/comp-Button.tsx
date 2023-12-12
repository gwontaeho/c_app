import {Pressable, PressableProps, Text} from 'react-native';

const buttonSizes = {
  sm: 32,
  md: 40,
  lg: 48,
};

type ButtonProps = PressableProps & {
  size?: keyof typeof buttonSizes;
};

export const Button = (props: ButtonProps) => {
  const {children, size = 'md', style} = props;

  return (
    <Pressable
      {...props}
      style={[
        {
          borderRadius: 8,
          paddingHorizontal: 8,
          backgroundColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
          height: buttonSizes[size],
        },
        style,
      ]}>
      <Text style={{color: '#fff'}}>{children}</Text>
    </Pressable>
  );
};
