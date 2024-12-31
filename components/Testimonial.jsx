import { useState } from "react";
import { Text, View } from "react-native"
import StarRating from "react-native-star-rating-widget";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "../Style/General";


export default function Testimonial({ item }) {
    const [rating, setRating] = useState(item?.score | 0);

    return <View style={styles.testimonialCard} pointerEvents="none">
        <View style={styles.author}>
            <View style={styles.testimonialCardIcon}>
                <Icon name="user" size={24} color="#212529" />
            </View>
            <Text style={styles.testimonialCardText}>{item.author}</Text>
        </View>
        <Text style={styles.quote}>{item.quote}</Text>
        <StarRating rating={rating} starSize={24}
            onChange={setRating} starStyle={styles.rating} />
    </View>
}