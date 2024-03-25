import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
        <Image className="h-full w-full absolute bottom-14" source={require('../assets/images/library.png')}/>
        <LinearGradient 
          colors={['transparent', '#101010']}
          style={{width: wp(100), height: hp(100)}}
          start={{x: 0.5, y: 0.3}}
          end={{x: 0.5, y: 0.7}}
          className='flex justify-end space-y-6 pb-12'
        >
          <Animated.View entering={FadeInDown.delay(100).springify()} className='flex items-center'>
            <Text style={{fontSize: hp(3)}} className='text-white font-bold tracking-wide text-center'>
              Kitaplarınızı <Text className='text-sky-500'>Dijitalde</Text>
            </Text>
            <Text style={{fontSize: hp(3)}} className='text-white font-bold tracking-wide text-center'>
              Yönetmenin Pratik Yolu!
            </Text>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200).springify()}>
            <TouchableOpacity
              onPress={ () => router.push('/home')}
              style={{height: hp(7), width: wp(70)}}
              className='bg-sky-500 flex items-center justify-center mx-auto rounded-full'
            >
              <Text style={{fontSize: 20}} className='text-white font-bold tracking-widest'>Hemen Başla</Text>
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
    </View>
  )
}