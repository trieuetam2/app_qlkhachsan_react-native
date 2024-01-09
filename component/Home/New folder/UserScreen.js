import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from './Header';
import BottomBar from './BottomBar';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../assets/themes';
import { Linking } from 'react-native';

const userData = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phoneNumber: '123-456-7890',
  imgUrl: require('../../assets/hero1.jpg'),
};

const UserScreen = ({navigation}) => {
  //const navigate = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleFavorites = () => {
    navigation.navigate('FavouriteScreen');
  };
  const handleRoom= () => {
    navigation.navigate('Heart');
  };
  const handleService = () => {
    navigation.navigate('Service');
  };
  const handleCall = () => {
    const phoneNumber = '19005000';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Header />

        <View style={styles.userInfoContainer}>
          <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 50 }}>
            <Image style={styles.avatar} source={userData.imgUrl} />
            
            <View style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Text style={styles.sectionTitle1t}> {userData.name}</Text>
              <Text style={styles.sectionTitlet}>{userData.email}</Text>
              <Text style={styles.sectionTitlet}>{userData.phoneNumber}</Text>
            </View>
 
          </View>

          <TouchableOpacity onPress={handleRoom}>
          <View style={styles.sectionTitle1}>
            <Ionicons name="business-outline" size={30} color="#fff" style={styles.icon} />
            <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Xem phòng</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleService}>
            <View style={styles.sectionTitle}>
              <Ionicons name="add-circle-outline" size={30} color="#fff" style={styles.icon} />
              <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Dịch Vụ</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCall}>
        <View style={styles.sectionTitle}>
          <Ionicons name="call-outline" size={30} color="#fff" style={styles.icon} />
          <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Gọi lễ tân</Text>
        </View>
      </TouchableOpacity>

          <TouchableOpacity style={styles.sectionTitle} onPress={handleFavorites}>
            <Ionicons name="heart-outline" size={30} color="#fff" style={styles.icon} />
            <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Mục yêu thích</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout}>
          <View style={[styles.sectionTitle, { textAlign: 'center', color: 'white', backgroundColor: 'red', flexDirection: 'row', alignItems: 'center'}]}>
            <Text style={[styles.sectionTitleText, { color: 'white', textAlign: 'center' }]}>Đăng xuất</Text>
          </View>
          </TouchableOpacity>
 
        </View>
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  body: {
    flex: 1,
  },
  userInfoContainer: {
    padding: 16,
  },
  avatar: {
    width: 150,
    height: 150,

    borderRadius: 100,

  },
  sectionTitle1t: {
    width: '100%',
    fontSize: 35,
    fontWeight: 'bold',

    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -10
  },
  sectionTitlet: {
    width: '100%',
    fontSize: 25,
    fontWeight: 'bold',

    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle1: {
    width: '100%',
    fontSize: 35,
    fontWeight: '500',
    color: 'white',
    backgroundColor: Colors.main,
    padding: 30,

    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 80
  },
  sectionTitle: {
    width: '100%',
    fontSize: 35,
    fontWeight: '500',
    color: '#333',
    marginBottom: 0,
    backgroundColor: Colors.main,
    padding: 30,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  sectionTitleText: {
    flex: 1,
    fontSize: 25, // This allows the text to take up all available space
    color: 'white'
  },
});
