import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ImgPicker from "../components/ImgPicker";


export default function EditScreen({ route }) {
    const navigation = useNavigation();
    const [image, setImage] = useState('../assets/cards/card-1.png');


    const { item, cards, setCards } = route.params;
    // Data
    const [cardTitle, setCardTitle] = useState(item.title);
    const [cardDescription, setCardDescription] = useState(item.description);

    return <View style={styles.container}>
        <View style={styles.newForm}>
            <View style={styles.label}>
                <Text style={styles.labelText}>Title</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCardTitle}
                    value={cardTitle}
                    maxLength={24}
                    placeholder="Mobile: Galaxy A30"
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
                    maxLength={400}
                    placeholder="Galaxy A30 is great and fast android mobile"
                />
            </View>

            <ImgPicker image={image} setImage={setImage} />


            <Pressable onPress={() => editThisCard(navigation, cards, setCards, cardTitle, cardDescription, item)}>
                <Text style={styles.submitBtn}>Apply</Text>
            </Pressable>
        </View>
    </View>
}

const editThisCard = (navigation, cards, setCards, cardTitle, cardDescription, item) => {

    const newCards = cards.map((card, i) => {
        if (card.id === item.id) {
            return { title: cardTitle, description: cardDescription, img: card.img, id: card.id, testimonial: card.testimonial };
        } else {
            return card;
        }
    })

    setCards(newCards)

    navigation.goBack()
}

const styles = StyleSheet.create({
    container: {
        // Spaces
        position: 'relative',
        height: '100%',
        backgroundColor: '#fff',

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
        borderRadius: 28,
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
        fontFamily: 'roboto'
    }
})