import {Pressable, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Layout, Button, Text} from '@/components';

export const Offer = () => {
  const handlePressNext = () => {};

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header></Header>
      <ScrollView contentContainerStyle={{paddingBottom: 64}}>
        <Layout p={16} gap={32}>
          <Text size="xl">
            Lorem Ipsum is simply dummy text of the printing
          </Text>
          <Layout style={{borderWidth: 1, borderRadius: 8}}>
            <Layout p={16}>
              <Text>시급</Text>
              <Text>9,620</Text>
            </Layout>
            <Layout p={16}>
              <Text>주소</Text>
              <Text>인천 부평구 마장로 36번길 26 401호</Text>
            </Layout>
          </Layout>
          <Text size="lg">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Pressable>
            <Text>더보기</Text>
          </Pressable>
        </Layout>
      </ScrollView>
      <Layout
        p={16}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        <Button onPress={handlePressNext}>다음</Button>
      </Layout>
    </SafeAreaView>
  );
};
