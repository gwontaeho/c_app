import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {useEffect} from 'react';

export const Signin = () => {
  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    try {
      const res = await axios.get('http://localhost:4000/user');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return <SafeAreaView style={{flex: 1}}></SafeAreaView>;
};
