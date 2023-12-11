import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Layout, Text} from '@/components';
import {FlatList, Pressable} from 'react-native';
import {getMock} from '@/utils';

export const Applicant = props => {
  const {navigation} = props;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header close={true}>Applicant</Header>
    </SafeAreaView>
  );
};
