import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import Dropdown from '@/components/Dropdown';
import RoundBtn from '@/components/RoundBtn';
import WidgetList from '@/components/SortableList/WidgetList';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { useBalanceStore } from '@/store/balanceStore';
import { Ionicons } from '@expo/vector-icons';

const Page = () => {
  const { balance, runTransaction, profiles, currentProfile, clearTransactions } = useBalanceStore();
  const headerHeight = useHeaderHeight();

  const onAddMoney = () => {
    runTransaction({
      id: Math.random().toString(),
      amount: 1630, // Her basıldığında 100000 ekleyecek
      date: new Date(),
      title: 'Added money',
    });
  };

  const transactions = profiles[currentProfile]?.transactions || [];

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance().toFixed(2)}</Text>
          <Text style={styles.currency}> {profiles[currentProfile].currency}</Text>
        </View>
        <TouchableOpacity
          style={[
            defaultStyles.pillButtonSmall,
            { backgroundColor: Colors.lightGray, marginVertical: 20 },
          ]}>
          <Text style={[defaultStyles.buttonTextSmall, { color: Colors.dark }]}>Accounts</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionRow}>
        <RoundBtn icon={'add'} text={'Add money'} onPress={onAddMoney} />
        <RoundBtn icon={'refresh'} text={'Exchange'} onPress={clearTransactions} />
        <RoundBtn icon={'list'} text={'Details'} />
        <Dropdown />
      </View>

      <Text style={defaultStyles.sectionHeader}>Transactions</Text>
      <View style={styles.transactions}>
        {transactions.length === 0 && (
          <Text style={{ padding: 14, color: Colors.gray }}>No transactions yet</Text>
        )}
        {transactions.map((transaction) => (
          <View
            key={transaction.id}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <View style={styles.circle}>
              <Ionicons
                name={transaction.amount > 0 ? 'add' : 'remove'}
                size={24}
                color={Colors.dark}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '400' }}>{transaction.title}</Text>
              <Text style={{ color: Colors.gray, fontSize: 12 }}>
                {transaction.date.toLocaleString()}
              </Text>
            </View>
            <Text>{transaction.amount}{profiles[currentProfile].currency}</Text>
          </View>
        ))}
      </View>
      <Text style={defaultStyles.sectionHeader}>Widgets</Text>
      <WidgetList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
  },
  account: {
    margin: 80,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 10,
  },
  balance: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 20,
    fontWeight: '500',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  transactions: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Page;
