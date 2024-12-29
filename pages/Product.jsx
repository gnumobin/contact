import { Alert, FlatList, Pressable, ScrollView } from "react-native";
import { StyleSheet, View, Image, Text } from "react-native";
import Testimonial from "../components/Testimonial";
import { useEffect, useState } from "react";
import StarRating from "react-native-star-rating-widget";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export default function Product({ route }) {
    const { item, cards, setCards, flag } = route.params;
    const { title, description, img, testimonial } = item;
    const navigation = useNavigation();

    const [scores, setScores] = useState(testimonial.map(i => i.score));

    const [averageRating, setAverageRating] =
        useState(testimonial.length > 0 && (scores.reduce((a, b) => a + b) / scores.length) | 0);


    return <ScrollView style={styles.container}>
        <Pressable style={styles.newComment} onPress={() => navigation.navigate('commentScreen', { item, cards, setCards })}>
            <Icon name="plus" size={32} color="#f8f9fa" />
        </Pressable>

        <View style={styles.imageBox}>
            <Image source={img} style={styles.image} />
        </View>
        <View style={styles.contentBox}>
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.average} pointerEvents="none">
            <Text style={styles.averageText}>Average Rating</Text>
            <StarRating rating={averageRating}
                onChange={setAverageRating} style={styles.averageRating} />
        </View>
        <View style={styles.cards}>
            {testimonial.map((item, i) => (
                <Testimonial item={item} key={i}/>
            ))}
        </View>

    </ScrollView>
}

const styles = StyleSheet.create({
    newComment: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#212529',
        width: 64,
        height: 64,
        zIndex: 999,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 5px 20px rgba(0,0,0,0.075)',
    },
    container: {
        backgroundColor: '#fff',
        height: '100%',
        position: 'relative'
    },
    imageBox: {
        paddingTop: 24
    },
    image: {
        width: '100%',
        height: 100,
        objectFit: 'contain'
    },
    contentBox: {
        padding: 16,
        paddingTop: 0,
        height: 280,
    },
    heading: {
        color: '#212529',
        fontWeight: 900,
        fontSize: 28,
        textAlign: 'center',
        marginTop: 32,
        letterSpacing: -0.5
    },
    description: {
        color: '#868e96',
        fontSize: 14,
        // textAlign: 'center',
        fontWeight: 400,
        marginTop: 16,
        marginLeft: 16,
        lineHeight: 20
    },
    quote: {
        color: '#adb5bd',
        fontSize: 14,
        fontWeight: 400,
        marginTop: 18,
        lineHeight: 18,
        marginLeft: 12
    },
    // Cards
    cards: {
        marginTop: 32,
        paddingBottom: 48,
        flex: 1
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