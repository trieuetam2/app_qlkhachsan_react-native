// FavouriteScreen.js
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useFavorites } from '../../Context/FavoritesContext';
import Header from './Header';
import BottomBar from './BottomBar';

const FavouriteScreen = () => {
  const { getFavorites } = useFavorites();
  const favorites = getFavorites();

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Danh sách phòng yêu thích</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.favoriteItem}>
            <Image source={{ uri: item.images[0] }} style={styles.thumbnail} />
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.type}</Text>
              <Text>{item.adress}</Text>
              <Text>Giá: {item.price} vnđ</Text>
              <Text>Số sao: {item.star}</Text>
              {/* Add more details as needed */}
            </View>
          </View>
        )}
      />
      <BottomBar/>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  favoriteItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
