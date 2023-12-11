import {ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Layout, Button, Input, Text, Header} from '@/components';

const DATA = () =>
  Array(5)
    .fill(null)
    .map((_, i) => String(i));

export const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Text size="xxxl" p={16}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
        <FlatList
          horizontal={true}
          data={DATA()}
          renderItem={() => (
            <Layout p={24} w={160} h={120} b={true} r={true}></Layout>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{padding: 16, gap: 16}}
        />
        <Text size="xxxl" p={16}>
          Where does it come from
        </Text>
        <FlatList
          horizontal={true}
          data={DATA()}
          renderItem={() => (
            <Layout p={24} w={240} h={160} b={true} r={true}></Layout>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{padding: 16, gap: 16}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
