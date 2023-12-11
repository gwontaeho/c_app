import {Text, FlatList, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Layout, Button, Input} from '@/components';

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
    id: '58694a0f-3da121-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da121-4711f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da121-471f-bd96-4145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da121-471f-bd296-145571e29d72',
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
    </Layout>
  </Layout>
);

export const Searches = props => {
  const {navigation} = props;

  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => (
        <Pressable onPress={() => navigation.navigate('Offer')}>
          <Item title={item.title} />
        </Pressable>
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={{padding: 16, gap: 16}}
    />
  );
};
