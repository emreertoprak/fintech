import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useBalanceStore } from '@/store/balanceStore';

const CustomHeader = () => {
  const { top } = useSafeAreaInsets();
  const { switchProfile, currentProfile } = useBalanceStore();

  const items = [
    { label: 'Turkey', value: 'TR', key: 'TR' },
    { label: 'Azerbaijan', value: 'AZ', key: 'AZ' }
  ];

  return (
    <BlurView intensity={80} tint={'extraLight'} style={{ paddingTop: top }}>
      <View
        style={[
          styles.container,
          {
            height: 60,
            gap: 10,
            paddingHorizontal: 20,
            backgroundColor: 'transparent',
          },
        ]}>
        <Link href={'/(authenticated)/(modals)/account'} asChild>
          <TouchableOpacity
            style={styles.profileButton}>
            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>YEE</Text>
          </TouchableOpacity>
        </Link>
        <View style={styles.searchSection}>
          <Ionicons style={styles.searchIcon} name="search" size={20} color={Colors.dark} />
          <TextInput style={styles.input} placeholder="Search" placeholderTextColor={Colors.dark} />
        </View>
        <View style={styles.circle}>
          <Ionicons name={'stats-chart'} size={20} color={Colors.dark} />
        </View>
        <TouchableOpacity style={styles.circle} onPress={() => this.picker.togglePicker()}>
          <Image
            source={
              currentProfile === 'TR'
                ? require('@/assets/flags/tr.png')
                : require('@/assets/flags/az.png')
            }
            style={styles.flag}
          />
        </TouchableOpacity>
        <RNPickerSelect
          ref={(el) => { this.picker = el; }}
          onValueChange={(value) => switchProfile(value)}
          items={items}
          placeholder={{}}
          value={currentProfile}
          style={pickerSelectStyles}
          useNativeAndroidPickerStyle={false}
          textInputProps={{ underlineColorAndroid: 'transparent' }}
        />
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    borderRadius: 30,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: Colors.lightGray,
    color: Colors.dark,
    borderRadius: 30,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    display: 'none', // Input alanını gizle
  },
  inputAndroid: {
    display: 'none', // Input alanını gizle
  },
});

export default CustomHeader;
