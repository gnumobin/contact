import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ImgPicker from "../components/ImgPicker";


export default function NewScreen({ route }) {
    const navigation = useNavigation();

    const [image, setImage] = useState('../assets/cards/card-1.png');

    const { cards, setCards, testimonial, setTestimonial } = route.params;
    // Data
    const [cardTitle, setCardTitle] = useState();
    const [cardDescription, setCardDescription] = useState();

    return <View style={styles.container}>
        <View style={styles.newForm}>
            <View style={styles.label}>
                <Text style={styles.labelText}>Title</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCardTitle}
                    value={cardTitle}
                    placeholder="Mobile: Galaxy A30"
                    maxLength={24}
                />
            </View>

            <View style={styles.label}>
                <Text style={styles.labelText}>Description</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCardDescription}
                    value={cardDescription}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Galaxy A30 is great and fast android mobile"
                    maxLength={400}
                />
            </View>

            <ImgPicker image={image} setImage={setImage} />

            <Pressable onPress={() => createNewCard(navigation, cards, setCards, cardTitle, cardDescription, testimonial, setTestimonial)}>
                <Text style={styles.submitBtn}>Create</Text>
            </Pressable>
        </View>
        <View style={styles.footer}>
            <Pressable style={styles.footerItem}
                onPress={_ => navigation.goBack()}>
                <Icon name="home" size={48} color="#212529" />
                <Text style={styles.footerText}>Home</Text>
            </Pressable>
            <Pressable style={styles.footerItem}>
                <Icon name="plus" size={48} color="#212529" />
                <Text style={styles.footerText}>New</Text>
            </Pressable>
        </View>
    </View>
}

const createNewCard = (navigation, cards, setCards, cardTitle, cardDescription, testimonial, setTestimonial) => {
    const createID = Math.random();

    setTestimonial([...testimonial,[]])
    // const img = require(image + '')
    const newCard = {
        title: cardTitle, description: cardDescription, img: '', id: createID, testimonial:[]
    };

    setCards([...cards, newCard])

    navigation.goBack()
}

const styles = StyleSheet.create({
    container: {
        // Spaces
        position: 'relative',
        height: '100%',
        backgroundColor: '#fff',

    },
    footer: {
        // Colors
        backgroundColor: 'white',
        boxShadow: '0 5px 20px rgba(0,0,0,0.075)',
        // Spaces
        width: '90%',
        padding: 15,
        margin: 20,
        // Move To bottom
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 999,
        // Axis
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // Border
        borderRadius: 28
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
        color: '#adb5bd',
    },
    // Cards
    cards: {
        padding: 22,
        gap: 15,
    },
    // Form
    newForm: {
        padding: 15,
        gap: 24
    },
    label: {
        gap: 12
    },
    labelText: {
        fontSize: 16,
        fontWeight: 600,
        color: '#212529',
        marginLeft: 12
    },
    input: {
        backgroundColor: 'rgba(173, 181, 189, 0.1)',
        padding: 16,
        fontSize: 14,
        borderRadius: 12,
        color: '#495057'
    },
    submitBtn: {
        backgroundColor: 'rgba(33, 37, 41, 1)',
        padding: 18,
        fontSize: 16,
        borderRadius: 999,
        color: 'white',
        fontWeight: 600,
        textAlign: 'center',
        marginTop: 42,
        width: '85%',
        margin: 'auto'
    },
    heading: {
        color: '#212529',
        fontWeight: 900,
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 42,
        letterSpacing: -0.5
    }
})