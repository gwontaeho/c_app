import {FlatList, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Layout, Button, Text} from '@/components';
import {IcoFilter} from '@/assets/icons';

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
      ListHeaderComponent={() => (
        <Layout direction="row" ai="center" px={8}>
          <Layout flex={1}>
            <Text size="sm">전체</Text>
          </Layout>
          <IcoFilter width={24} height={24} />
        </Layout>
      )}
      renderItem={({item}) => (
        <Pressable onPress={() => navigation.navigate('Offer')}>
          <Item title={item} />
        </Pressable>
      )}
      contentContainerStyle={{padding: 16, gap: 16}}
    />
  );
};
