import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Colors } from '../../assets/themes';

const SodoPhong = ({ onPress }) => {
  const data = [
    { id: '1', name: 'Phòng 501', hourPrice: 'HP003 / giờ', dayPrice: '400,000 / ngày' },
    { id: '2', name: 'Phòng 502', hourPrice: 'HP004 / giờ', dayPrice: '700,000 / ngày' },
    { id: '3', name: 'Phòng 503', hourPrice: 'HP006 / giờ', dayPrice: '700,000 / ngày' },
    // Add more room data as needed
  ];

  renderItem = ({ item }) => <Item item={item} onPress={onPress} />;
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.titleList}>Sơ đồ phòng trống mới</Text>
       
      </View>
      <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2} // Set to 2 for two columns
          contentContainerStyle={styles.flatListContainer}
        />
    </View>
  );
};

const Item = ({ item, onPress }) => (
  <View style={styles.roomContainer}>
    <Text style={styles.roomText}>{item.name}</Text>
    <Text style={styles.roomText1}>{item.hourPrice}</Text>
    <Text style={styles.roomText1}>{item.dayPrice}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20,
  },
  titleList: {
    fontSize: 20,
  },
  flatListContainer: {
    padding: 10,
  },
  roomContainer: {
    width: '48%', // Adjusted width for two columns
    height: 200,
    padding: 15,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',

  },
  roomText: {
    backgroundColor: Colors.main,
    color: 'white',
    padding: 10,
    borderRadius: 15,
    width: '40%',
    fontSize: 20,
    marginBottom: 10
  },
  roomText1: {
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '500'
  },
});

export default SodoPhong;
