import { useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import StarRating from "react-native-star-rating-widget";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Testimonial({ item }) {
    const [rating, setRating] = useState(item?.score | 0);

    return <View style={styles.card} pointerEvents="none">
        <View style={styles.author}>
            <View style={styles.cardIcon}>
                <Icon name="user" size={24} color="#212529" />
            </View>
            <Text style={styles.cardText}>{item.author}</Text>
        </View>
        <Text style={styles.quote}>{item.quote}</Text>
        <StarRating rating={rating} starSize={24}
            onChange={setRating} starStyle={styles.rating} />
    </View>
}

const styles = StyleSheet.create({
    rating: {
        marginTop: 28,
        width: '4.5%',
    },
    container: {
        backgroundColor: '#fff',
        height: '100%',
    },
    imageBox: {
        paddingTop: 32
    },
    image: {
        width: 100,
        margin: "auto"
    },
    contentBox: {
        padding: 20
    },
    heading: {
        color: '#212529',
        fontWeight: 900,
        fontSize: 28,
        textAlign: 'center',
        marginTop: 42,
        letterSpacing: -0.5
    },
    description: {
        color: '#adb5bd',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 400,
        marginTop: 21,
        lineHeight: 18
    },
    quote: {
        color: '#adb5bd',
        fontSize: 14,
        fontWeight: 400,
        marginTop: 18,
        lineHeight: 18,
        marginLeft: 8,
        lineHeight: 20
    },

    card: {
        // Spaces
        margin: 14,
        marginBottom: 4,
        padding: 24,
        // Colors
        backgroundColor: '#fff',
        borderRadius: 12,
        boxShadow: '0 5px 20px rgba(0,0,0,0.075)',
    },
    cardText: {
        color: '#181725',
        fontSize: 16,
        fontWeight: 600,
        // marginTop: 20
    },
    author: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    cardIcon: {
        // Colors
        backgroundColor: 'rgba(33, 37, 41, 0.1)',
        // Spaces
        width: 40,
        height: 40,
        borderRadius: '50%',
        // Move to center
        alignItems: 'center',
        justifyContent: 'center'
    },
})