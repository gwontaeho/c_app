import {Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Layout, Button, Input} from '@/components';

export const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <List />
    </SafeAreaView>
  );
};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <Layout p={16} gap={8} style={{backgroundColor: '#fff', borderRadius: 8}}>
    <Text>{title}</Text>
    <Layout>
      <Text>test 123</Text>
      <Text>test 123</Text>
      <Text>test 123</Text>
      <Text>test 123</Text>
    </Layout>
    <Button size="sm">ad</Button>
  </Layout>
);

const List = () => {
  return (
    <FlatList
      data={DATA}
      ItemSeparatorComponent={() => <Layout p={8} />}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      contentContainerStyle={{padding: 16}}
    />
  );
};
