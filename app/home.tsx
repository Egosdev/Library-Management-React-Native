import { View, Text, TouchableOpacity, FlatList, Image, TextInput, Modal, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from '@/theme'
import {LinearGradient} from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

interface Book {
    id: number;
    name: string;
    author: string;
    genre: string;
}

const items: Book[] = [
    {
        id: 1,
        name: 'Sapiens',
        author: 'Yuval Noah Harari',
        genre: 'Tarih'
    },
    {
        id: 2,
        name: 'Test',
        author: 'YENI',
        genre: 'Tarih'  
    },
    {
        id: 3,
        name: 'YENI',
        author: 'TEST',  
        genre: 'Asd'
    },
    {
        id: 4,
        name: 'Hey',
        author: 'asd',  
        genre: 'Bilim Kurgu'
    },
]


interface Option {
    label: string;
    value: string;
  }
  
  const SortRadioButton: React.FC<{ options: Option[]; selectedOption: string; onSelect: (value: 'asc' | 'desc' | 'latest' | 'oldest') => void }> = ({
    options,
    selectedOption,
    onSelect,
  }) => {
    return (
      <View style={styles.sortRadioButtonContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[styles.radioButton, { backgroundColor: selectedOption === option.value ? '#3892E4' : 'white' }]}
            onPress={() => onSelect(option.value as 'asc' | 'desc' | 'latest' | 'oldest')}
          >
            <Text style={{ color: selectedOption === option.value ? 'white' : 'black' }}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  const SortOptions: Option[] = [
    { label: 'A-Z', value: 'asc' },
    { label: 'Z-A', value: 'desc' },
    { label: 'Yeniden Eskiye', value: 'latest' },
    { label: 'Eskiden Yeniye', value: 'oldest' },
  ];

  const genreOptions = [
    { id: '1', title: 'Tümü' },
    { id: '2', title: 'Bilim Kurgu' },
    { id: '3', title: 'Tarih' },
    { id: '4', title: 'Asd' },
    { id: '5', title: 'sfafsafas' },
];

export default function HomeScreen() {
    
    const router = useRouter();
    
    const [searchText, setSearchText] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<Book[]>(items);
    const [selectedSortOption, setSelectedSortOption] = useState<string>('oldest');
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalAnimation] = useState(new Animated.Value(0));
    const [selectedGenre, setSelectedGenre] = useState<string>('1'); 

    const filterItems = (text: string): void => {
        setSearchText(text);
        const filtered = items.filter(
          (item) =>
            item.name.toLowerCase().includes(text.toLowerCase()) ||
            item.author.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    const sortItems = (order: 'asc' | 'desc' | 'latest' | 'oldest'): void => {
    let sorted = [...filteredItems];
    switch (order) {
      case 'asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'latest':
        sorted.sort((a, b) => b.id - a.id);
        break;
      case 'oldest':
        sorted.sort((a, b) => a.id - b.id);
        break;
      default:
        break;
    }
    setFilteredItems(sorted);
    setSelectedSortOption(order);
    setModalVisible(false);
    };

    const showModal = () => {
        Animated.timing(modalAnimation, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
        setModalVisible(true);
      };
    
      const hideModal = () => {
        Animated.timing(modalAnimation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => setModalVisible(false));
      };
    
      const animatedStyle = {
        transform: [
          {
            translateY: modalAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [600, 0],
            }),
          },
        ],
      };

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
                        <TextInput style={styles.inputStyle} 
                        className='px-2' 
                        placeholder="Kitap ara..." 
                        placeholderTextColor="#989898"
                        onChangeText={filterItems}
                        value={searchText}
                        />
                        <TouchableOpacity style={[styles.filterButtonStyle, {right: 48}]}>
                            <Image style={styles.iconStyle} source={require('../assets/icons/filter.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.filterButtonStyle, {right: 5}]} onPress={showModal}>
                            <Image style={styles.iconStyle} source={require('../assets/icons/sort.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            
            <Modal
                animationType="fade"
                transparent
                visible={modalVisible}
                onRequestClose={hideModal}
            >
                <TouchableOpacity
                style={styles.modalBackdrop}
                activeOpacity={1}
                onPressOut={hideModal}
                >
                    <Animated.View style={[styles.modalView, animatedStyle]}>
                    <Text className='text-base font-bold'>Sıralama</Text>
                    <SortRadioButton
                        options={SortOptions}
                        selectedOption={selectedSortOption}
                        onSelect={sortItems}
                    />
                    </Animated.View>
                </TouchableOpacity>
            </Modal>

            <View>
                <View className='items-center'>
                    <TouchableOpacity style={{marginTop: '-18%',}} onPress={ () => {
                        const randomBookIndex = Math.floor(Math.random() * items.length);
                        const randomBook = items[randomBookIndex];
                        router.push({pathname: '/details', params: {name: randomBook.name, authors: randomBook.author, genre: randomBook.genre}});
                    }}>
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
                    data={genreOptions}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            className="p-2 px-4 mb-1 bg-white rounded-2xl shadow-sm shadow-black"
                            style={[
                                { backgroundColor: selectedGenre === item.id ? '#3892E4' : 'white' },
                            ]}
                            onPress={() => {
                                setSelectedGenre(item.id);
                                if (item.id === '1') {
                                    setFilteredItems(items);
                                } else {
                                    const filtered = items.filter((book) => book.genre === item.title); 
                                    setFilteredItems(filtered);
                                }
                            }}
                        >
                            <Text style={{ color: selectedGenre === item.id ? 'white' : 'black' }}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )}
                    horizontal
                    />
                </View>
            </View>
            <View className='px-4 space-y-4'>
                <View style={{height: 470}}>
                {filteredItems.length === 0 ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 125 }}>
                        <Image source={require('../assets/icons/no_book.png')} style={{ resizeMode: 'contain', width: 200, height: 200 }} />
                        <Text style={{fontSize: 16, color: '#666666' }}>Aradığınız kriterlere uygun kitap bulunamadı.</Text>
                    </View>
                ) :
                    (
                    <FlatList 
                        data={filteredItems}
                        numColumns={2}
                        keyExtractor={(item: Book) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        className='mx-4'
                        contentContainerStyle={{ paddingBottom: 160 }}
                        columnWrapperStyle={
                            {
                                justifyContent: 'space-between'
                            }
                        }
                        renderItem={ ({item}) => {
                            return (
                                <TouchableOpacity onPress={ () => router.push({pathname: '/details', params: {name: item.name, authors: item.author, genre: item.genre}})} className='bg-white p-3 rounded-2xl mb-3 shadow-sm'>
                                    <View>
                                        <Image source={require('../assets/no_photo.png')} style={{height:210}} className='w-36 mb-2 rounded-2xl'/>
                                        <Text className='font-bold'>{item.name}</Text>
                                        <Text className='text-xs'>{item.author}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    )}
                </View>
            </View>
        </View>
    )
}