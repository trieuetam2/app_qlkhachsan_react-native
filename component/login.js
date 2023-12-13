import { View, Text, Image, Pressable, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import COLORS from '../constant/colors';
import { AlignCenter } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigation=useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary, justifyContent: 'center' }}>
      <View style={{ flex: 1, marginHorizontal: 22, backgroundColor: COLORS.primary, padding: 16, borderRadius: 12 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 12,
            color: COLORS.white,
            textAlign: 'center',
          }}>
            Login! 👋
          </Text>

          <Text style={{
            fontSize: 16,
            color: COLORS.white,
            textAlign: 'center',
          }}>Đã lâu không gặp!</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '400',
            marginVertical: 8,
            color: COLORS.white,
          }}>Email address</Text>

          <View style={{
            width: '100%',
            height: 48,
            borderColor: COLORS.white,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 22,
          }}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={COLORS.white}
              keyboardType="email-address"
              style={{
                width: '100%',
                color: COLORS.white,
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '400',
            marginVertical: 8,
            color: COLORS.white,
          }}>Password</Text>

          <View style={{
            width: '100%',
            height: 48,
            borderColor: COLORS.white,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 22,
          }}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.white}
              secureTextEntry={isPasswordShown}
              style={{
                width: '100%',
                color: COLORS.white,
              }}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: 'absolute',
                right: 12,
              }}
            >
              {
                isPasswordShown === true ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.white} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.white} />
                )
              }
            </TouchableOpacity>
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          marginVertical: 6,
          alignItems: 'center',
        }}>
        

      
        </View>

        <Pressable onPress={() => navigation.navigate('Home1')}>
         <Text style={{textAlign:
        'center',
        borderColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 8,
        padding:10,
         backgroundColor: '#0074cc',
        color:'white'}}>Login</Text>
        </Pressable>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
          <Text style={{ fontSize: 14, color: COLORS.white }}>Or Login with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
          <TouchableOpacity
            onPress={() => console.log('Pressed')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              backgroundColor: COLORS.primary,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require('../assets/facebook.png')}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />

            <Text style={{ color: COLORS.white }}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('Pressed')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              backgroundColor: COLORS.primary,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require('../assets/google.png')}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />

            <Text style={{ color: COLORS.white }}>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <Text style={{ fontSize: 16, color: COLORS.white, textAlign:'center' }}>Don't have an account? </Text>
          <Pressable
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={{
              fontSize: 16,
              color: COLORS.white,
              fontWeight: 'bold',
              marginLeft: 6,
            }}>Register</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
