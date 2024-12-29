import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import StarRating from "react-native-star-rating-widget";


export default function CreateTestimonialScreen({ route }) {
    const { item, cards, setCards } = route.params;

    const navigation = useNavigation();

    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(0);

    return <View style={styles.container}>
        <View style={styles.newForm}>
            <View style={styles.label}>
                <Text style={styles.labelText}>Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setAuthor}
                    value={author}
                    placeholder="GnuMobin"
                />
            </View>

            <View style={styles.label}>
                <Text style={styles.labelText}>Comment</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setDescription}
                    value={description}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="That's a amzing app 🔥🔥"
                />
            </View>

            <View style={styles.average}>
                <Text style={styles.averageText}>Your Vote</Text>
                <StarRating rating={rating}
                    onChange={setRating} style={styles.averageRating} />
            </View>

            <Pressable onPress={() => postNewComment(navigation, cards, setCards, author, description, item, rating)}>
                <Text style={styles.submitBtn}>Post</Text>
            </Pressable>
        </View>
    </View>
}

const postNewComment = (navigation, cards, setCards, author, description, item, rating) => {

    const comment = { author, quote: description, score: rating | 1 };
    // console.log([...item.testimonial, comment])

    const newCards = cards.map((card, i) => {
        if (card.id === item.id) {
            return { title: card.title, description: card.description, img: card.img, id: card.id, testimonial: [...item.testimonial, comment] };
        } else {
            return card;
        }
    })

    setCards(newCards);

    navigation.popTo("ProductScreen", { item, cards, setCards,flag:true });
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
    },
    average: {
        alignItems: 'center',
        gap: 12,
        marginTop: 32,
    },
    averageText: {
        color: '#343a40',
        fontWeight: 700,
        fontSize: 14,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
})