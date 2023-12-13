import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';
import BottomBar from './BottomBar';
import SodoPhong from './SodoPhong';

const BookingScreen = () => {
  const [selectedFloor, setSelectedFloor] = useState(1);

  const handleFloorChange = (floor) => {
    setSelectedFloor(floor);
    // You can fetch and update the available rooms for the selected floor here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Header />
        <View style={styles.floorSelector}>
          {[1, 2, 3, 4, 5].map((floor) => (
            <TouchableOpacity
              key={floor}
              style={[
                styles.floorButton,
                selectedFloor === floor && styles.selectedFloorButton,
              ]}
              onPress={() => handleFloorChange(floor)}
            >
              <Text style={styles.floorButtonText}>{`Tầng ${floor}`}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <SodoPhong selectedFloor={selectedFloor} />
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  body: {
    flex: 1,
  },
  floorSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  floorButton: {
    paddingVertical: 10,
  },
  selectedFloorButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue', // Change the color to your preference
  },
  floorButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingScreen;
