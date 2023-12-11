import {SafeAreaView} from 'react-native-safe-area-context';
import {Pressable, Text, FlatList} from 'react-native';
import {Layout} from '@/components';

const DATA = () =>
  Array(6)
    .fill(null)
    .map((_, i) => String(i));

export const Talks = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={DATA()}
        renderItem={({item}) => (
          <Pressable>
            <Layout p={16} style={{borderWidth: 1, borderRadius: 8}}>
              <Text>asd</Text>
            </Layout>
          </Pressable>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{padding: 16, gap: 16}}
      />
    </SafeAreaView>
  );
};
