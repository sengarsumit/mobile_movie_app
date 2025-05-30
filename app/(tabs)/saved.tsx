import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import React from 'react';
import { Image, View } from 'react-native';

const saved = () => {
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='absolute w-full z-0'/>
      <View className="items-center mt-10">
          <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
      </View>
    </View>
  )
}

export default saved;