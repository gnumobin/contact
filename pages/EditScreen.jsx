import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import ImgPicker from "../components/ImgPicker";
import { styles } from "../Style/General";

export default function EditScreen({ route }) {
  const navigation = useNavigation();
  const [image, setImage] = useState("../assets/cards/card-1.png");

  const { item, showCards, setShowCards } = route.params;
  // Data
  const [cardTitle, setCardTitle] = useState(item.title);
  const [cardDescription, setCardDescription] = useState(item.description);

  return (
    <View style={styles.container}>
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

        <Pressable
          onPress={() =>
            editThisCard(
              navigation,
              showCards,
              setShowCards,
              cardTitle,
              cardDescription,
              item
            )
          }
        >
          <Text style={styles.submitBtn}>Apply</Text>
        </Pressable>
      </View>
    </View>
  );
}

const editThisCard = (
  navigation,
  showCards,
  setShowCards,
  cardTitle,
  cardDescription,
  item
) => {
  const newCards = showCards.map((card) => {
    if (card.id === item.id) {
      return {
        title: cardTitle,
        description: cardDescription,
        img: card.img,
        id: card.id,
        testimonials: card.testimonials,
      };
    } else {
      return card;
    }
  });

  setShowCards(newCards);

  navigation.goBack();
};
