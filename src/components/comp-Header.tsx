import {ReactNode} from 'react';
import {Pressable, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  children?: ReactNode;
  right?: ReactNode;
};

export const Header = (props: HeaderProps) => {
  const {children, right} = props;
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <Pressable
          style={{
            height: '100%',
            justifyContent: 'center',
            paddingHorizontal: 16,
          }}
          onPress={() => navigation.goBack()}>
          <Text>뒤로</Text>
        </Pressable>
      </View>
      <View>
        <Text>{children}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Pressable
          style={{
            height: '100%',
            justifyContent: 'center',
            paddingHorizontal: 16,
          }}
          onPress={() => navigation.goBack()}>
          {right}
        </Pressable>
      </View>
    </View>
  );
};
