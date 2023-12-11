import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, FlatList, Pressable} from 'react-native';
import {Header, Layout, Text, Switch} from '@/components';
import {IcoRight} from '@/assets/icons';

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
    id: '58694a0f-3da241-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da133-471f-bd96-141115571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1123145571e29d72',
    title: 'Third Item',
  },
];

export const My = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header>test page</Header>
      <ScrollView>
        <Layout p={16} gap={16}>
          <Pressable onPress={() => navigation.navigate('OfferCreate')}>
            <Layout b={true} r={true} p={16} direction="row" ai="center">
              <Text f={1}>
                There are many variations of passages of Lorem Ipsum available
              </Text>
              <IcoRight width={16} height={16} />
            </Layout>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Applicants')}>
            <Layout b={true} r={true} p={16} direction="row" ai="center">
              <Text f={1}>
                There are many variations of passages of Lorem Ipsum available
              </Text>
              <IcoRight width={16} height={16} />
            </Layout>
          </Pressable>
        </Layout>
        {/* <Layout gap={16} py={24}>
          <Text size="xxl" px={24}>
            Lorem Ipsum is not simply
          </Text>
        </Layout>
        <Layout gap={16} py={24}>
          <Text size="xxl" px={24}>
            Lorem Ipsum is not simply
          </Text>
          <FlatList
            data={DATA}
            horizontal={true}
            contentContainerStyle={{gap: 16, paddingHorizontal: 24}}
            renderItem={({item}) => (
              <Layout
                p={16}
                style={{
                  borderWidth: 1,
                  borderRadius: 8,
                  width: 240,
                  height: 160,
                }}>
                <Text>asd</Text>
              </Layout>
            )}
            keyExtractor={item => item.id}
          />
        </Layout> */}
      </ScrollView>
    </SafeAreaView>
  );
};
