import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useBalanceStore } from '@/store/balanceStore';
import Colors from '@/constants/Colors';

const Dropdown = () => {
  const { switchProfile, currentProfile } = useBalanceStore();
  
  return (
    <View style={styles.dropdown}>
      <TouchableOpacity onPress={() => switchProfile('TR')}>
        <Image
          source={require('@/assets/flags/tr.png')} // Turkish flag
          style={styles.flag}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => switchProfile('AZ')}>
        <Image
          source={require('@/assets/flags/az.png')} // Azerbaijani flag
          style={styles.flag}
        />
      </TouchableOpacity>
      <Text style={styles.currentProfileText}>
        {currentProfile === 'TR' ? 'Turkey' : 'Azerbaijan'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  currentProfileText: {
    fontSize: 16,
    color: Colors.dark,
  },
});

export default Dropdown;
