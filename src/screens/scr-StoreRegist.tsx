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
import {Text, Header} from '@/components';

export const StoreRegist = () => {
  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    try {
      const res = await axios.post(
        `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=9kx4trW/5MF2DVClu2NUNDsHwpcexouSvyhreIUr0rMZHTY4zQQ/TkRNgzd/gpQ7rjzaRqG1Gw0641QQGcMK9g==`,
        {
          b_no: ['7160402552'],
        },
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{flex: 1, borderWidth: 1, borderColor: 'red'}}>
        <Header back={true} />
        <Text size="xxxl">ㅁㄴㅇ</Text>
        <View style={{padding: 20}}>
          <TextInput
            maxLength={10}
            style={{
              borderBottomWidth: 1,
              padding: 8,
              width: '100%',
              textAlign: 'center',
            }}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
