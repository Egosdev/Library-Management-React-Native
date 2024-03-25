import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from '@/theme'
import {LinearGradient} from 'expo-linear-gradient';


interface Book {
    id: number;
    name: string;
    author: string;
}

const items: Book[] = [
    {
        id: 1,
        name: 'Sapiens',
        author: 'Yuval Noah Harari',  
    },
    {
        id: 2,
        name: 'Sapiens',
        author: 'Yuval Noah Harari',  
    },
    {
        id: 3,
        name: 'Sapiens',
        author: 'Yuval Noah Harari',  
    },
    {
        id: 4,
        name: 'Sapiens',
        author: 'Yuval Noah Harari',  
    },    {
        id: 2,
        name: 'Sapiens',
        author: 'Yuval Noah Harari',  
    },
    {
        id: 3,
        name: 'Sapiens',
        author: 'Yuval Noah Harari',  
    },
    {
        id: 4,
        name: 'Sapiens',
        author: 'Yuval Noah Harari',  
    },
]

export default function HomeScreen() {
    return (
        <View className="flex-1">
            <LinearGradient
            colors={['#131313', '#313131']}
            start={{ x: 1, y: 0 }} 
            end={{ x: 0, y: 1 }} 
            style={{height: 240}}>
                <View className='flex-row justify-between items-center px-10 pt-10'>
                    <View>
                        <Text style={{color: '#B7B7B7'}} className='text-sm'>Merhaba, Ege</Text>
                        <Text style={{color: '#DDDDDD'}} className={`font-bold text-xl shadow-sm`}>Üye</Text>
                    </View>
                    <TouchableOpacity className="p-2 bg-[#f44336] rounded-lg flex-row">
                        <Image style={[styles.iconStyle, {marginRight: 3}]} source={require('../assets/icons/exit.png')}/>
                        <Text className="color-white">Çıkış</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.sectionStyle}>
                        <Image style={styles.iconStyle} source={require('../assets/icons/search.png')}/>
                        <TextInput style={styles.inputStyle} className='px-2' placeholder="Kitap ara..." placeholderTextColor="#989898"/>
                        <TouchableOpacity style={[styles.filterButtonStyle, {right: 48}]}>
                            <Image style={styles.iconStyle} source={require('../assets/icons/filter.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.filterButtonStyle, {right: 5}]}>
                            <Image style={styles.iconStyle} source={require('../assets/icons/sort.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>

            <View>
                <View className='items-center'>
                    <TouchableOpacity style={{marginTop: '-18%',}}>
                            <Image source={require("../assets/images/random-button.png")}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList 
                    className='mx-8 py-3'
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={
                        () => <View style={{ width: 12, backgroundColor: 'transparent' }}/>
                    }
                    data={
                        [
                            { id: '1', title: 'Tümü' },
                            { id: '2', title: 'Bilim Kurgu' },
                            { id: '3', title: 'Tarih' },
                            { id: '4', title: 'Asd' },
                            { id: '5', title: 'sfafsafas' },
                        ]
                    }
                    renderItem={({ item }: { item: { id: string; title: string } }) => (
                        <TouchableOpacity className="p-2 px-4 mb-1 bg-white rounded-2xl shadow-sm shadow-black">
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    horizontal
                    />
                </View>
            </View>
            <View className='px-4 space-y-4'>
                <View style={{height: 430}}>
                    <FlatList 
                        data={items}
                        numColumns={2}
                        keyExtractor={(item: Book) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        className='mx-4 '
                        columnWrapperStyle={
                            {
                                justifyContent: 'space-between'
                            }
                        }
                        renderItem={ ({item}) => {
                            return (
                                <TouchableOpacity className='bg-white p-3 rounded-2xl mb-3 shadow-sm'>
                                    <View>

                                        <Image source={require('../assets/book.jpg')} style={{height:210}} className='w-36 mb-2 rounded-2xl'/>
                                        <Text className='font-bold'>{item.name}</Text>
                                        <Text className='text-xs'>{item.author}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        </View>
    )
}