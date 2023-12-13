import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './Header';
import BottomBar from './BottomBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, TouchableOpacity, } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const userData = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phoneNumber: '123-456-7890',
  imgUrl: require('../../assets/hero1.jpg'),
};

const UserScreen = () => {
  const navigate = useNavigation();

  const handleLogout = () => {
    navigate.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Header />

        <View style={styles.userInfoContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 50 }}>
            <Image style={styles.avatar} source={userData.imgUrl} />
            
            <View>
              <Text style={styles.sectionTitle1t}> {userData.name}</Text>
              <Text style={styles.sectionTitlet}>{userData.email}</Text>
              <Text style={styles.sectionTitlet}>{userData.phoneNumber}</Text>
            </View>
 
          </View>

          <View style={styles.sectionTitle1}>
            <Ionicons name="business-outline" size={30} color="#333" style={styles.icon} />
            <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Xem phòng</Text>
          </View>

          <View style={styles.sectionTitle}>
            <Ionicons name="add-circle-outline" size={30} color="#333" style={styles.icon} />
            <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Dịch Vụ</Text>
          </View>

          <View style={styles.sectionTitle} >
            <Ionicons name="call-outline" size={30} color="#333" style={styles.icon} />
            <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Gọi lễ tân</Text>
          </View>

          <View style={styles.sectionTitle}>
            <Ionicons name="heart-outline" size={30} color="#333" style={styles.icon} />
            <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Mục yêu thích</Text>
          </View>

          <View style={[styles.sectionTitle, { textAlign: 'center', color: 'white', backgroundColor: 'red', flexDirection: 'row', alignItems: 'center',}]}>
            <Text style={[styles.sectionTitleText, { color: 'white', textAlign: 'center' }]}>Đăng xuất</Text>
          </View>
 
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
    marginLeft: 8,
    borderRadius: 100,
    marginRight: 30
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
    color: '#333',
    marginBottom: 0,
    backgroundColor: '#fff',
    padding: 30,

    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50
  },
  sectionTitle: {
    width: '100%',
    fontSize: 35,
    fontWeight: '500',
    color: '#333',
    marginBottom: 0,
    backgroundColor: '#fff',
    padding: 30,

    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  sectionTitleText: {
    flex: 1,
    fontSize: 25, // This allows the text to take up all available space
  },
});
