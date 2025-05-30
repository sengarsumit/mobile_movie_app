import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const user = {
    profilePic: "na",
    name: "Sumit Sengar",
    username: "@sumitsengar",
    savedCount: 24,
  };
const profile = () => {
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='absolute w-full z-0'/>
       <View className="items-center mt-10">
         <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
         <Image source={images.profile} className="w-20 h-20 rounded-full border-4 border-gray-800" />
        <Text className="text-white text-xl font-bold mt-4">{user.name}</Text>
        <Text className="text-gray-400 text-sm mt-1">{user.username}</Text>
      </View>

      <View className="flex-row justify-center mt-8">
        <View className="items-center mx-6">
          <Text className="text-white text-xl font-semibold">
            {user.savedCount}
          </Text>
          <Text className="text-gray-400 text-sm">Saved</Text>
        </View>
    </View>
     <TouchableOpacity className="mt-8 mx-auto bg-gray-800 px-6 py-2 rounded-full">
        <Text className="text-white text-base">Edit Profile</Text>
      </TouchableOpacity>

    </View>
  )
}

export default profile;