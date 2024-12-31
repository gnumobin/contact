import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import StarRating from "react-native-star-rating-widget";
import { styles } from "../Style/General";

export default function CreateTestimonialScreen({ route }) {
  const navigation = useNavigation();

  const { item, cards, setCards } = route.params;

  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
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
          <StarRating
            rating={rating}
            onChange={setRating}
            style={styles.averageRating}
          />
        </View>

        <Pressable
          onPress={() =>
            postNewComment(
              navigation,
              cards,
              setCards,
              author,
              description,
              item,
              rating
            )
          }
        >
          <Text style={styles.submitBtn}>Post</Text>
        </Pressable>
      </View>
    </View>
  );
}

const postNewComment = (
  navigation,
  cards,
  setCards,
  author,
  description,
  item,
  rating
) => {
  const comment = { author, quote: description, score: rating | 1 };

  const newCards = cards.map((card) => {
    if (card.id === item.id) {
      return {
        title: card.title,
        description: card.description,
        img: card.img,
        id: card.id,
        testimonials: [...item.testimonials, comment],
      };
    } else {
      return card;
    }
  });

  setCards(newCards);

  navigation.popTo("HomeScreen");
};