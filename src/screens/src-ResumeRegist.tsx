import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {useEffect} from 'react';
import {
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {Text, Header, Layout, Input} from '@/components';

export const ResumeRegist = () => {
  /**
   * name
   * birth(year)
   * content
   * career
   */

  return (
    <SafeAreaView style={{flex: 1, borderWidth: 1, borderColor: 'red'}}>
      <Header back={true} />
      <Layout p={16} b>
        <Text size="xxxl">text</Text>
        <Input />
      </Layout>
    </SafeAreaView>
  );
};
