import {useRef} from 'react';
import {TextInput} from 'react-native';

export const useForm = () => {
  const formRef = useRef<{[name: string]: {ref?: TextInput; value?: string}}>(
    {},
  );

  const getValues = (name?: string) => {
    if (name === undefined) return;
    return formRef.current[name].value;
  };

  const setValue = (name: string, value: string) => {
    formRef.current[name].ref?.setNativeProps({text: value});
    formRef.current[name].value = value;
  };

  const setFocus = (name: string) => {
    formRef.current[name].ref?.focus();
  };

  const register = (name: string) => {
    formRef.current[name] = {};
    return {
      ref: (node: any) => {
        formRef.current[name].ref = node;
      },
      onChangeText: (value: string) => {
        formRef.current[name].value = value;
      },
    };
  };

  return {register, getValues, setFocus, setValue};
};
