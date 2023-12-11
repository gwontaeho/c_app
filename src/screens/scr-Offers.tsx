import {Text, FlatList, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Layout, Button, Input} from '@/components';
import {IcoPlus} from '@/assets/icons';

import {getMock} from '@/utils';

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <Layout p={16} gap={8} style={{backgroundColor: '#fff', borderRadius: 8}}>
    <Text>{title}</Text>
    <Layout>
      <Text>test 123</Text>
      <Text>test 123</Text>
    </Layout>
  </Layout>
);

export const Offers = props => {
  const {navigation} = props;

  return (
    <FlatList
      data={getMock()}
      ListHeaderComponent={
        <Layout ai="flex-end">
          <Pressable onPress={() => navigation.navigate('OfferCreate')}>
            <Layout direction="row" p={4}>
              <IcoPlus width={16} height={16} />
              <Text>등록</Text>
            </Layout>
          </Pressable>
        </Layout>
      }
      renderItem={({item}) => (
        <Pressable onPress={() => navigation.navigate('Offer')}>
          <Item title={item} />
        </Pressable>
      )}
      contentContainerStyle={{padding: 16, gap: 16}}
    />
  );
};
