import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  Modal,
} from 'react-native';
import { Colors, Fonts } from '../../assets/themes';
import ListAgent from './ListAgent';
import ListButton from './ListButton';
import { useRoute, useNavigation } from '@react-navigation/native';

import { useFavorites } from '../../Context/FavoritesContext';

const w = Dimensions.get('screen').width;

const DetailScreen = () => {
  const { addFavorite, removeFavorite, getFavorites } = useFavorites();

  const route = useRoute();
  const item = route.params.item;
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(getFavorites().some(favItem => favItem.id === item.id));
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleBooking = () => {
    toggleModal();
    // Perform booking logic here
  };

  const handleFavorite = () => {
    const isFavorite = getFavorites().some((favItem) => favItem.id === item.id);
    if (isFavorite) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: item.images[0]}} style={styles.image} />
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image source={require('../../assets/icons/back.png')} />
        </Pressable>
        <View style={styles.cardPos}>
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.adress}>{item.adress}</Text>
            <View>
              <View style={styles.startCon}>
                <Image source={require('../../assets/icons/star.png')} />
                <Text style={styles.textStart}>{item.star}</Text>
              </View>
            </View>
            {/* <View style={styles.heartButton}>
              <Image source={require('../../assets/icons/heart.png')} />
            </View> */}
             <Pressable style={styles.heartButton} onPress={handleFavorite}>
              <Image source={isFavorite ? require('../../assets/icons/heart.png') : require('../../assets/icons/heart-outline.png')} />
            </Pressable>

          </View>
          <View style={styles.view1} />
          <View style={styles.view2} />
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Hạng</Text>
        <ListAgent />
      </View>
      <View style={[styles.body, {marginTop: 0}]}>
        <Text style={styles.title}>Các tiện ích sẵn có</Text>
        <View style={styles.specContainer}>
          <ListButton
            icon={require('../../assets/icons/badroom.png')}
            num={3}
            title="Phòng tắm"
          />
          <ListButton
            icon={require('../../assets/icons/bathroom.png')}
            num={2}
            title="Nhà vệ sinh"
          />
          <ListButton
            icon={require('../../assets/icons/fit.png')}
            num={200}
            title="m/vuông"
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.price}>
          {item.price} vnđ
          <Text style={{ fontWeight: 'normal', fontSize: 14 }}> /năm</Text>
        </Text>
        <Pressable style={styles.btn} onPress={handleBooking}>
          <Text style={styles.txtBtn}>Đặt phòng</Text>
        </Pressable>
      </View>

      {/* Booking Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>Xác nhận thanh toán</Text>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 16}}>Kiểu: {item.type}</Text>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 16}}>Loại: {item.star} sao</Text>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 16}}>Hạng phòng: {item.name}</Text>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 16}}>Số phòng: {item.adress}</Text>
            <Text style={{color: 'red', fontWeight: 'bold', fontSize: 20}}>Giá tiền: {item.price}</Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable
              style={[styles.btn, { marginTop: 20, marginRight: 10, backgroundColor: 'red' }]}
              onPress={toggleModal}>
              
              <Text style={styles.txtBtnCancel}>Hủy</Text>
            </Pressable>
            <Pressable
              style={[styles.btn, { marginTop: 20,  }]}
              onPress={toggleModal}>
              
              <Text style={styles.txtBtn}>Xác nhận</Text>
            </Pressable>
            </View>
            
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.main,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: Colors.main,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  txtBtn: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  txtBtnCancel: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  specContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  price: {
    fontWeight: '900',
    color: Colors.accent,
    fontSize: 20,
  },
  body: {
    marginTop: 100,
    padding: 20,
  },
  title: {
    color: Colors.black,
    fontSize: 20,
    // fontFamily: Fonts.Bold,
  },

  view1: {
    position: 'absolute',
    width: '90%',
    height: 30,
    backgroundColor: '#CADADC',
    borderRadius: 30,
    alignSelf: 'center',
    bottom: -10,
    zIndex: 2,
  },
  view2: {
    position: 'absolute',
    width: '80%',
    height: 30,
    backgroundColor: '#E5f1f1',
    borderRadius: 30,
    alignSelf: 'center',
    bottom: -20,
  },
  cardPos: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    bottom: -80,
  },
  card: {
    backgroundColor: Colors.main2,
    padding: 20,
    shadowColor: Colors.main,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderRadius: 10,
    zIndex: 10,
  },
  heartButton: {
    width: 40,
    height: 40,
    borderRadius: 35,
    position: 'absolute',
    backgroundColor: Colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    bottom: 20,
    shadowColor: Colors.main,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  startCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStart: {
    fontSize: 18,
  },
  name: {
    // fontFamily: Fonts.Bold,
    fontSize: 25,
    color: Colors.main,
    marginTop: 10,
  },
  adress: {
    color: Colors.gray,
    marginVertical: 10,
  },
  image: {
    width: w,
    height: w,
    borderRadius: 30,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 9,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
});
