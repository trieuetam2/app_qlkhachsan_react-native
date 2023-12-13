import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import SearchHeart from './SearchHeart';
import BottomBar from './BottomBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const HeartScreen = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Header />
        <SearchHeart />
        <Text style={{padding: 20}}>Farvories page</Text>
        
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

export default HeartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  body: {
    flex: 1,
  },
});
