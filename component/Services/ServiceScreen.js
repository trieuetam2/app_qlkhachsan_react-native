import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import SearchService from './SearchService';
import BottomBar from './BottomBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const ServiceScreen = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Header />
        <SearchService />
        <Text style={{padding: 20}}>Serivce page</Text>
        
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  body: {
    flex: 1,
  },
});
