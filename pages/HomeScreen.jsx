import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, TextInput } from "react-native";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Swipeout } from "react-native-swipeout-component";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
    const navigation = useNavigation();

    // Data
    const [testimonial, setTestimonial] = useState([]);

    const [cards, setCards] = useState([
        {
            title: 'PS5 Gamepad', description: 'The PS5 gamepad, officially known as the DualSense controller, features advanced haptic feedback and adaptive triggers that provide a more immersive gaming experience. The haptic feedback allows players to feel a range of sensations, from the texture of surfaces to the impact of in-game actions. The adaptive triggers can adjust resistance based on gameplay', img: require('../assets/cards/card-1.png'), testimonial: [
                { author: 'Helen T. Anthony', quote: 'Laughter is the best medicine, except when you have diarrhea, then Pepto is definitely the best medicine.', score: 4 },
                { author: 'Shannon V. Evans', quote: 'this app is a life saver! I just started a company', score: 3 },
                { author: 'Michael R. Mulhall', quote: 'I got this app for the whole family, and it frees up so much time! Plus,', score: 2 },
                { author: 'Emily R. Penn', quote: '🔥🔥🔥🔥', score: 5 },
            ], id: 0
        },
        {
            title: 'Macbook Pro', description: 'The MacBook Pro is a high-performance laptop designed by Apple, known for its sleek design, powerful hardware, and advanced features. It comes in various sizes, typically 13-inch and 16-inch models, and is equipped with Apple M-series chips, offering impressive processing power and energy efficiency. The Retina display provides vibrant colors and sharp resolution.', img: require('../assets/cards/card-2.png'), testimonial: [
                { author: 'Emily R. Penn', quote: '🔥🔥🔥🔥', score: 5 },
            ], id: 1
        },
        {
            title: 'Galaxy S24 Ultra', description: 'The Samsung Galaxy S24 Ultra is expected to be a flagship smartphone featuring cutting-edge technology and premium design. It typically boasts a large, high-resolution AMOLED display with a high refresh rate for smooth visuals. The device is likely to include advanced camera capabilities, including multiple lenses for versatile photography', img: require('../assets/cards/card-3.png'), testimonial: [
                { author: "Anna P. Morales", quote: 'Laughter is the best medicine, except when you have diarrhea, then Pepto is definitely the best medicine.', score: 2 },
                { author: 'Victoria B. Selby', quote: 'this app is a life saver! I just started a company', score: 2 },
            ], id: 2
        },
        {
            title: 'Guitar Alhambra cutable', description: 'Alhambra guitars are renowned for their craftsmanship and quality, particularly in the realm of classical and flamenco music. Founded in 1965 in Spain, Alhambra combines traditional luthier techniques with modern technology to produce instruments that offer rich tonal qualities and excellent playability', img: require('../assets/cards/card-4.png'), testimonial: [
                { author: 'Eric R. Cole', quote: 'Awesome 🔥', score: 5 },
                { author: 'James R. Carter', quote: 'Bullshit 💩', score: 2 },
            ], id: 3
        },
    ])

    const [search, setSearch] = useState('')
    const [filterdCards, setFilterdCards] = useState([]);

    // Buttons
    let globalTitle = null;
    let globalItem = null;

    const rightButtons = [
        {
            component: <Pressable style={styles.swipeoutBtnDelete} onPress={() => {
                globalItem?.description.replace(globalItem, "")
                editCard(cards, setCards, globalItem.id)
            }}>
                <Icon name="trash" size={24} color="#fa5252" />
            </Pressable>,
        },
        {
            component: <Pressable style={styles.swipeoutBtnEdit} onPress={() => {
                globalItem?.description.replace(globalItem, "")
                // globalItem['title'] = 'sdsd'
                const item = { title: globalTitle, ...globalItem };
                // item.title = 'sdsd';
                // console.log(item)
                navigation.navigate('EditScreen', { item, cards, setCards })
            }}>
                <Icon name="pencil" size={24} color="#212529" />
            </Pressable>,
        },
    ];

    return <View style={styles.container}>

        <View>
            <Icon name="search" size={24} color="#212529" style={styles.searchIcon} />
            <TextInput value={search} onChangeText={text => setSearch(text)} onChange={searchHandler.bind(this, search, cards, setCards, filterdCards, setFilterdCards)} style={styles.input} placeholder="Just Search it! 😉" />
        </View>
        <View style={styles.cards}>

            <FlatList
                data={cards}
                renderItem={({ item }) => <Swipeout style={styles.swipeout} right={rightButtons} buttonWidth={80} autoClose={true} onOpen={() => {
                    globalItem = item;
                    globalTitle = item.title;
                }}>
                    <View>
                        <Pressable style={styles.card} onPress={() => navigation.navigate('ProductScreen', { item, cards, setCards })}>
                            <Image source={item.img} style={styles.image} />
                            <Text style={styles.cardText}>{item.title}</Text>


                            {/* <View style={styles.float}>
                        <Pressable style={styles.cardBtnEdit} onPress={_ => navigation.navigate('EditScreen', { item, cards, setCards })}>
                            <Icon name="pencil" size={24} color="#212529" />
                        </Pressable>
                        <Pressable style={styles.cardBtnDelete} onPress={_ => editCard(cards, setCards, item.id)}>
                            <Icon name="trash" size={24} color="#fa5252" />
                        </Pressable>
                    </View> */}
                        </Pressable>
                    </View>
                </Swipeout>}
            />

        </View>
        <View style={styles.footer}>
            <Pressable style={styles.footerItem}
                onPress={_ => navigation.navigate('HomeScreen')}>
                <Icon name="home" size={48} color="#212529" />
                <Text style={styles.footerText}>Home</Text>
            </Pressable>
            <Pressable style={styles.footerItem}
                onPress={_ => navigation.navigate('NewScreen', { cards, setCards, testimonial, setTestimonial })}>
                <Icon name="plus" size={48} color="#212529" />
                <Text style={styles.footerText}>New</Text>
            </Pressable>
        </View>
    </View>
}

const editCard = (cards, setCards, id) => {
    const newCards = cards.filter(card => card.id !== id);
    setCards(newCards)
}

const searchHandler = (search, cards, setCards, filterdCards, setFilterdCards) => {
    // setFilterdCards(cards);
    // const flag = search.length > 1;
    // if (flag) {
    //     const newFilterdCards = cards.filter(item => {
    //         return item.title, item.title.includes(search)
    //     });
    //     setCards(newFilterdCards)
    // } else {
    //     setCards(filterdCards)
    // }
}

const styles = StyleSheet.create({
    container: {
        // Spaces
        position: 'relative',
        height: '100%',
        backgroundColor: '#fff',
    },
    swipeout: {
        backgroundColor: '#fff',
    },
    input: {
        backgroundColor: 'rgba(173, 181, 189, 0.1)',
        padding: 16,
        paddingLeft: 64,
        fontSize: 14,
        // Border
        borderRadius: 12,
        color: '#495057',
        marginTop: 0,
        margin: 16,
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: 24,
        height: 24,
        transform: 'translate(150%,-135%)'
    },
    footer: {
        // Colors
        backgroundColor: '#fff',
        boxShadow: '0 5px 20px rgba(0,0,0,0.075)',
        // Spaces
        padding: 14,
        height: 100,
        width: '90%',
        marginLeft: 16,
        marginRight: 16,
        // Move To bottom
        position: 'absolute',
        left: 4,
        top: '86%',
        // width:'10%',
        zIndex: 999,
        // Axis
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // Border
        borderRadius: 48,
        // filter:'blur(1.1px)'
    },
    footerItem: {
        // Move Text to center
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // Spaces
        gap: 2
    },
    footerText: {
        fontSize: 10,
        fontWeight: 400,
        color: '#adb5bd'
    },
    // Cards
    cards: {
        // padding: 16,
        // height: '76%'
        marginBottom: 190,
    },
    card: {
        // Spaces
        margin: 16,
        marginTop: 16,
        marginBottom: 0,
        padding: 32,
        // Colors
        backgroundColor: 'rgba(173, 181, 189, 0.1)',
        // Border
        borderColor: 'rgba(173, 181, 189, 0.35)',
        borderStyle: 'inset',
        borderWidth: 1,
        borderRadius: 12,
        // Move content to center
        alignItems: 'center',
        // Pos
        position: 'relative',
    },
    cardText: {
        color: '#181725',
        fontSize: 16,
        fontWeight: 600,
        marginTop: 20
    },
    float: {
        position: 'absolute',
        right: 20,
        top: 15,
        // Axis
        // flexDirection: 'row',
        gap: 8
    },
    cardBtnEdit: {
        // Colors
        backgroundColor: 'rgba(33, 37, 41, 0.1)',
        // Spaces
        width: 42,
        height: 42,
        borderRadius: '50%',
        // Move to center
        alignItems: 'center',
        justifyContent: 'center'
    },
    swipeoutBtnDelete: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '52',
        height: '52',
        margin: 'auto',
        borderRadius: '50%',
        backgroundColor: 'rgba(250, 82, 82, 0.1)',
    },
    swipeoutBtnEdit: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '52',
        height: '52',
        margin: 'auto',
        borderRadius: '50%',
        backgroundColor: 'rgba(33, 37, 41, 0.1)',
    },
    cardBtnDelete: {
        // Colors
        backgroundColor: 'rgba(250, 82, 82, 0.1)',
        // Spaces
        width: 40,
        height: 40,
        borderRadius: '50%',
        // Move to center
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 100,
        objectFit: 'contain'
    },
})