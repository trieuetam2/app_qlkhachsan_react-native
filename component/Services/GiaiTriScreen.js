import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import CheckBox from 'expo-checkbox';
import Header from './Header';
import BottomBar from './BottomBar';
import { Colors } from '../../assets/themes';
const GiaiTriScreen = ({ route }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { data } = route.params;

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id]
    );
  };

  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, itemId) => {
      const selectedItem = data.find((item) => item.id === itemId);
      return total + selectedItem.price;
    }, 0);
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <View style={styles.detailsContainer}>
                <Text>{item.price}</Text>
              </View>
              <CheckBox
                value={selectedItems.includes(item.id)}
                onValueChange={() => handleCheckboxChange(item.id)}
                style={{ marginBottom: 10 }}
              />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={{ textAlign: 'right', fontSize: 30, color: 'red', fontWeight: 'bold', padding: 10 }}>
        Tổng giá tiền: {calculateTotalPrice()}
      </Text>
      <View style={{backgroundColor: Colors.main, color: Colors.white,  flexDirection: 'row', justifyContent: 'center', marginBottom: 10, borderRadius: 10, marginLeft: 20, marginRight: 20}}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', fontWeight: 'bold', padding: 10, }}>
          Thanh toán</Text>
      </View>
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  detailsContainer: {
    flex: 2,
    paddingLeft: 10,
  },
  checkboxContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default GiaiTriScreen;
