import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Header from './Header';
import SearchService from './SearchService';
import BottomBar from './BottomBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const servicesData = [
  { id: '1', name: 'Ăn uống', icon: 'fast-food-outline', image: require('../../assets/nhung-quan-pizza-ngon-nhat-Ha-Noi-9.jpg') },
  { id: '2', name: 'Giải trí', icon: 'game-controller-outline', image: require('../../assets/giaitri.jpg') },
  { id: '3', name: 'Mát xa', icon: 'body-outline', image: require('../../assets/matxa.jpg') },
  { id: '4', name: 'Dọn dẹp', icon: 'trash-outline', image: require('../../assets/dondep.jpg') },
  // Add more services as needed
];

const ServiceScreen = () => {
  const navigate = useNavigation();

  const renderServiceItem = ({ item }) => (
    <View style={styles.serviceItem}>
      <Image source={item.image} style={styles.serviceImage} />
      <View style={styles.textContainer}>
        <Ionicons name={item.icon} size={30} color="#333" style={styles.icon} />
        <Text>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Header />
        <SearchService />
        <Text style={{ padding: 20, fontSize: 30, fontWeight: 'bold' }}>Loại dịch vụ</Text>
        <FlatList
          data={servicesData}
          renderItem={renderServiceItem}
          keyExtractor={(item) => item.id}
          numColumns={2} // Set the number of columns as needed
          contentContainerStyle={styles.flatListContainer}
        />
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
  flatListContainer: {
    padding: 16,
  },
  serviceItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  serviceImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});
