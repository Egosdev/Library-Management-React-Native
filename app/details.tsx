import { View, Text, Image, Pressable  } from 'react-native'
import React from 'react'
import { styles } from '@/theme'
import { useLocalSearchParams, useRouter } from 'expo-router'

export default function Details() {
  const router = useRouter();
  const item = useLocalSearchParams();
  return (
    <View>
      <View className='flex-row text-center items-center px-6 pt-12'>
        <View>
            <Pressable style={{width: 30, height: 30}} onPress={ () => router.back()}>
              <Image style={styles.iconStyle} source={require('../assets/icons/back.png')}/>
            </Pressable >
        </View>
        <Text className="m-auto right-4 font-bold text-xl shadow-sm">Detaylar</Text>
      </View>
      <View className='pt-4 items-center'>
        <Pressable className='shadow-xl shadow-black h-auto'>
          <Image source={require('../assets/book.jpg')} style={{ height: 260, width: 180 }} className='w-36 mb-2 rounded-lg'/>
        </Pressable>
      </View>
      <View className='px-10 pt-5'>
        <Text style={[styles.detailsTextStyle, {color: '#2F2D2C'}]} className='font-bold'>Kitap adı: {item.name}</Text>
        <Text style={styles.detailsTextStyle}>Yazarlar: {item.authors}</Text>
        <Text style={styles.detailsTextStyle}>ISBN: {item.isbn}</Text>
        <Text style={styles.detailsTextStyle}>Tür: {item.genre}</Text>
        <Text style={[styles.detailsTextStyle, {color: '#2F2D2C', paddingTop: 15}]} className='font-bold'>Kısa Açıklama</Text>
        <Text style={styles.detailsTextStyle}>{item.desc}</Text>
      </View>
    </View>
  )
}