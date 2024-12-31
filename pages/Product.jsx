import { View, Image, Text, Pressable, ScrollView } from "react-native";
import Testimonial from "../components/Testimonial";
import { useState } from "react";
import StarRating from "react-native-star-rating-widget";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../Style/General";

export default function Product({ route }) {
  const navigation = useNavigation();

  const { item, showCards, setShowCards } = route.params;
  const { title, description, img, testimonials } = item;

  const destImage = !img.toString().includes("file") ? img : { uri: img };

  const [scores, setScores] = useState(testimonials.map((i) => i.score));

  const [averageRating, setAverageRating] = useState(
    testimonials.length > 0 &&
      (scores.reduce((a, b) => a + b) / scores.length) | 0
  );

  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={styles.newComment}
        onPress={() =>
          navigation.navigate("commentScreen", {
            item,
            showCards,
            setShowCards,
          })
        }
      >
        <Icon name="plus" size={32} color="#f8f9fa" />
      </Pressable>

      <View style={styles.imageBox}>
        <Image source={destImage} style={styles.image} />
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.average} pointerEvents="none">
        <Text style={styles.averageText}>Average Rating</Text>
        <StarRating
          rating={averageRating}
          onChange={setAverageRating}
          style={styles.averageRating}
        />
      </View>
      <View style={styles.testimonialCards}>
        {testimonials.map((item, i) => (
          <Testimonial item={item} key={i} />
        ))}
      </View>
    </ScrollView>
  );
}
