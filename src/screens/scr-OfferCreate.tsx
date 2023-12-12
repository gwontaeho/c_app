import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Input, Layout, Text, Button} from '@/components';

export const OfferCreate = () => {
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{flex: 1}}>
      <Header back={true}>Offer Create</Header>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Layout flex={1} p={24} gap={32} b>
            <Layout gap={8}>
              <Text size="lg">Platform</Text>
              <Input />
            </Layout>
            <Layout gap={8}>
              <Text size="lg">ScrollView</Text>
              <Input keyboardType="number-pad" />
            </Layout>
            <Layout gap={8}>
              <Text size="lg">SafeAreaView</Text>
              <Input multiline={true} />
            </Layout>
            <Layout gap={8}>
              <Button>불러오기</Button>
            </Layout>
          </Layout>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
};
