import React, {ComponentProps, useState} from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';

export default function TextInput() {
  const [value, setValue] = useState<string>('');

  const handleChangeInput: ComponentProps<
    typeof RNTextInput
  >['onChangeText'] = text => {
    setValue(text);
  };

  return (
    <RNTextInput
      style={styles.input}
      value={value}
      onChangeText={handleChangeInput}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#c8c8c8',
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});
