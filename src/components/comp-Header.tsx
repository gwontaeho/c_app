import {ReactNode} from 'react';
import {Pressable, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IcoLeft, IcoClose} from '@/assets/icons';
import {Layout} from './comp-Layout';

type HeaderProps = {
  children?: ReactNode;
  back?: boolean;
  close?: boolean;
};

export const Header = (props: HeaderProps) => {
  const {children, back, close} = props;
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {back && (
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            height: '100%',
            justifyContent: 'center',
            paddingHorizontal: 16,
          }}>
          <IcoLeft width={20} height={20} />
        </Pressable>
      )}

      <Text style={{flex: 1, fontSize: 16, paddingHorizontal: back ? 0 : 24}}>
        {children}
      </Text>

      {close && (
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            height: '100%',
            justifyContent: 'center',
            paddingHorizontal: 16,
          }}>
          <IcoClose width={20} height={20} />
        </Pressable>
      )}
    </View>
  );
};
