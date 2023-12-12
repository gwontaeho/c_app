import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Layout, Text} from '@/components';
import {FlatList, Pressable} from 'react-native';
import {getMock} from '@/utils';

export const MyOffers = props => {
  const {navigation} = props;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header back={true}>My Offers</Header>
      <FlatList
        data={getMock(20)}
        contentContainerStyle={{padding: 16, gap: 16}}
        renderItem={() => (
          <Pressable onPress={() => navigation.navigate('MyOffer')}>
            <Layout p={16} b={true}>
              <Text>asd</Text>
            </Layout>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};
