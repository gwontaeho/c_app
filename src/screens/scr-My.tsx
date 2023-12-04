import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Layout, Text} from '@/components';

export const My = () => {
  return (
    <SafeAreaView>
      <Header>test</Header>
      <Layout>
        <Layout p={16}>
          <Layout p={16} style={{borderWidth: 1, borderRadius: 8}}>
            <Text size="xxl">Lorem Ipsum is not simply</Text>
          </Layout>
        </Layout>
        <Layout p={16} gap={16}>
          <Layout p={16} style={{borderWidth: 1, borderRadius: 8}}>
            <Text>you can click any</Text>
          </Layout>
          <Layout p={16} style={{borderWidth: 1, borderRadius: 8}}>
            <Text>you can click any</Text>
          </Layout>
          <Layout p={16} style={{borderWidth: 1, borderRadius: 8}}>
            <Text>you can click any</Text>
          </Layout>
          <Layout p={16} style={{borderWidth: 1, borderRadius: 8}}>
            <Text>you can click any</Text>
          </Layout>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};
