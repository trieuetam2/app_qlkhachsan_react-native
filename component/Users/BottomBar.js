import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../assets/themes';

const Menus = [
  {
    id: 'Home',
    icon: require('../../assets/icons/home.png'),
    routeName: 'Home',
  },
  {
    id: 'Service',
    icon: require('../../assets/icons/comment-outline.png'),
    routeName: 'Service',
  },
  {
    id: 'Heart',
    icon: require('../../assets/icons/heart-outline.png'),
    routeName: 'Heart',
  },
  {
    id: 'User',
    icon: require('../../assets/icons/user.png'),
    routeName: 'User',
  },
];

const BottomBar = () => {
  const navigation = useNavigation();

  const handlePress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      {Menus.map((e) => (
        <Pressable
          key={e.id}
          style={styles.btn}
          onPress={() => handlePress(e.routeName)}
        >
          <Image source={e.icon} />
        </Pressable>
      ))}
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.main,
    borderRadius: 30,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
