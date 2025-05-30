import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { createUser } from '@/services/appwrite';
import { Link, router } from 'expo-router';
import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';

const signUp = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

const handleSignup = async () => {
    try {
      await createUser(email, password,);
      router.replace('/'); 
    } catch (err: any) {
      alert(err.message);
    }
  };
  return (
     <View className='flex-1 bg-primary items-center justify-center relative'>
              <Image source={images.bg} className='absolute w-full h-full z-0' />
              <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
              <Text className='text-white text-lg font-bold '>Welcome to the Movie App</Text>
      

              <TextInput value={email} placeholder='Email' onChangeText={setEmail} className='w-80 bg-dark-200 rounded-full px-5 py-3 mt-5 text-white' placeholderTextColor='#a8b5db' />
              <TextInput value={password} placeholder='Password' onChangeText={setPassword} secureTextEntry className='w-80 bg-dark-200 rounded-full px-5 py-3 mt-5 text-white' placeholderTextColor='#a8b5db' />
              <Button title="SignUp" color="#007AFF" onPress={handleSignup}  />
               <View className="flex-row mt-3">
        <Text className="text-white text-sm">Already have an account? </Text>
        <Link href="/" asChild>
  <Text
    onPress={() => router.replace("/")}
    className="text-blue-300 font-bold text-sm"
  >
    Login
  </Text>
</Link>

      </View>      
          </View>
  )
}

export default signUp