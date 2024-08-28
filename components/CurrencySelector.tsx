import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useProfileStore from '../store/profileStore';

const CurrencySelector = () => {
  const { profile, setProfile } = useProfileStore();

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={profile}
        style={styles.picker}
        onValueChange={(itemValue) => setProfile(itemValue)}
      >
        <Picker.Item label="🇹🇷 Türkiye" value="TRY" />
        <Picker.Item label="🇦🇿 Azerbaycan" value="AZN" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: 150,
  },
});

export default CurrencySelector;
