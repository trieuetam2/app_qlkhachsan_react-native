import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Colors } from '../../assets/themes';

const SodoPhong = ({ selectedFloor, onPress }) => {
  const data = generateRoomData(selectedFloor);

  renderItem = ({ item }) => <Item item={item} onPress={onPress} />;
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.titleList}>Danh sách phòng trống</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const generateRoomData = (floor) => {
  const roomsPerFloor = 6; // Change this number based on the number of rooms per floor
  const startingRoomNumber = (floor - 1) * roomsPerFloor + 1;

  const roomData = [];
  for (let i = 0; i < roomsPerFloor; i++) {
    const roomNumber = startingRoomNumber + i;
    const room = {
      id: `${floor}${roomNumber}`,
      name: `Phòng ${floor}${roomNumber}`,
      hourPrice: `HP00${roomNumber} / giờ`,
      dayPrice: `${Math.floor(Math.random() * 200000) + 300000} / ngày`, // Random price greater than 300,000
    };
    roomData.push(room);
  }

  return roomData;
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
    width: '48%',
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
    marginBottom: 10,
  },
  roomText1: {
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '500',
  },
});

export default SodoPhong;
