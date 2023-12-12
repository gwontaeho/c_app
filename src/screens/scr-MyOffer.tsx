import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import {Header, Layout, Text, Button} from '@/components';

export const MyOffer = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header back={true}>Offer</Header>
      <ScrollView contentContainerStyle={{paddingBottom: 64}}>
        <Layout p={24} gap={32}>
          <Text size="xxl">Offer Title</Text>
          <Layout gap={8}>
            <Text>Info</Text>
            <Layout gap={1}>
              <Layout
                p={16}
                direction="row"
                jc="space-between"
                style={{
                  backgroundColor: '#fff',
                  borderTopRightRadius: 8,
                  borderTopLeftRadius: 8,
                }}>
                <Text>a</Text>
                <Text>asd</Text>
              </Layout>
              <Layout
                p={16}
                direction="row"
                jc="space-between"
                style={{
                  backgroundColor: '#fff',
                }}>
                <Text>a</Text>
                <Text>asd</Text>
              </Layout>
              <Layout
                p={16}
                direction="row"
                jc="space-between"
                style={{
                  backgroundColor: '#fff',
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                }}>
                <Text>a</Text>
                <Text>asd</Text>
              </Layout>
            </Layout>
          </Layout>

          <Layout gap={8}>
            <Text>Detail</Text>
            <Text size="xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Text>
          </Layout>
        </Layout>
      </ScrollView>
      <Layout
        p={16}
        direction="row"
        gap={8}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        <Button style={{flex: 1}}>d</Button>
        <Button style={{flex: 1}}>f</Button>
      </Layout>
    </SafeAreaView>
  );
};
