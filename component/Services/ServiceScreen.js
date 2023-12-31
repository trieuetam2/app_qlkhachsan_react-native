import React from 'react';
import { StyleSheet, Text, View, FlatList, Image ,TouchableOpacity} from 'react-native';
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

const anUongData = [
  { id: '1', name: 'Pho', price: 30000, image: 'https://cdn-icons-png.flaticon.com/512/7499/7499400.png' },
  { id: '2', name: 'Banh Mi', price: 15000, image: 'https://cdn-icons-png.flaticon.com/512/3296/3296623.png' },
  { id: '3', name: 'Bun Bo Hue', price: 25000, image: 'https://ih1.redbubble.net/image.1525975323.3981/st,small,507x507-pad,600x600,f8f8f8.jpg' },
  { id: '4', name: 'Pepsi', price: 10000, image: 'https://icons.iconarchive.com/icons/michael/coke-pepsi/512/Pepsi-Can-icon.png' },
  // Add more items as needed
];

const giaitriData = [
  { id: '1', name: 'PS5', price: 1000000, image: 'https://cdn2.iconfinder.com/data/icons/logos-brands-5/2017/playstation-5-seeklogo.com-5-512.png' },
  { id: '2', name: 'VR', price: 150000, image: 'https://cdn-icons-png.flaticon.com/512/3646/3646965.png' },
  { id: '3', name: 'Bi A', price: 25000, image: 'https://png.pngtree.com/element_pic/16/11/15/9013c885a1b04485b51905594ad4cd4b.jpg' },
  // Add more items as needed
];

const matxaData = [
  { id: '1', name: 'SPA toàn thân', price: 300000, image: 'https://img.pikbest.com/png-images/body-massage-icon--relax-muscle--spa-center-_1564405.png!sw800' },
  { id: '2', name: 'Liệu trình 5 bước', price: 250000, image: 'https://htspa.vn/kcfinder/upload//images/Tri%20Mun%20Nam%20Nu/t%E1%BA%A9y%20t%E1%BA%BF%20b%C3%A0o%20ch%E1%BA%BFt.png' },
  { id: '3', name: 'SPA mặt', price: 55000, image: 'https://oxspa.vn/uploads/images/info/spa-lam-trang-da-mat-o-quan-9.jpg' },
  // Add more items as needed
];

const donDepData = [
  { id: '1', name: 'Dọn dẹp phòng tắm', price: 100000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83hecDYkDr_lvkKIRM7NTm9R9OGu8cuu9mozFeDvnm9aags5v1726cqOioQ_RYHBVYdY&usqp=CAU' },
  { id: '2', name: 'Dọn tổng thể', price: 150000, image: 'https://chuyennhalocphat.vn/wp-content/uploads/2022/09/icon-ve-sinh-van-phong-cong-nghe-hang-dau-1-300x300-1.png' },
  { id: '3', name: 'Dọn WC', price: 100000, image: 'https://png.pngtree.com/png-vector/20190615/ourlarge/pngtree-bathroomcleaningtoiletwashroom-turquoise-highlight-circle-png-image_1484763.jpg' },
  // Add more items as needed
];

const ServiceScreen = () => {
  const navigate = useNavigation();

  const renderServiceItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        switch (item.id) {
          case '1':
            navigate.navigate('AnUongScreen', { data: anUongData });
            break;
          case '2':
            navigate.navigate('GiaiTriScreen', { data: giaitriData });
            break;
          case '3':
            navigate.navigate('MatxaScreen', { data: matxaData });
            break;
          case '4':
            navigate.navigate('DonDepScreen', { data: donDepData });
            break;
          default:
            break;
        }
      }}
    >
    <View style={styles.serviceItem}>
      <Image source={item.image} style={styles.serviceImage} />
      <View style={styles.textContainer}>
        <Ionicons name={item.icon} size={30} color="#333" style={styles.icon} />
        <Text>{item.name}</Text>
      </View>
    </View>
    </TouchableOpacity>
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
    width: 300,
    height: 300,
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
