import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  TextInput,
} from "react-native";
import { Swipeout } from "react-native-swipeout-component";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../Style/General";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [cards, setCards] = useState([
    {
      title: "PS5 Gamepad",
      description:
        "The PS5 gamepad, officially known as the DualSense controller, features advanced haptic feedback and adaptive triggers that provide a more immersive gaming experience. The haptic feedback allows players to feel a range of sensations, from the texture of surfaces to the impact of in-game actions. The adaptive triggers can adjust resistance based on gameplay",
      img: require("../assets/cards/card-1.png"),
      testimonials: [
        {
          author: "Helen T. Anthony",
          quote:
            "Laughter is the best medicine, except when you have diarrhea, then Pepto is definitely the best medicine.",
          score: 4,
        },
        {
          author: "Shannon V. Evans",
          quote: "this app is a life saver! I just started a company",
          score: 3,
        },
        {
          author: "Michael R. Mulhall",
          quote:
            "I got this app for the whole family, and it frees up so much time! Plus,",
          score: 2,
        },
        { author: "Emily R. Penn", quote: "🔥🔥🔥🔥", score: 5 },
      ],
      id: 0,
    },
    {
      title: "Macbook Pro",
      description:
        "The MacBook Pro is a high-performance laptop designed by Apple, known for its sleek design, powerful hardware, and advanced features. It comes in various sizes, typically 13-inch and 16-inch models, and is equipped with Apple M-series chips, offering impressive processing power and energy efficiency. The Retina display provides vibrant colors and sharp resolution.",
      img: require("../assets/cards/card-2.png"),
      testimonials: [{ author: "Emily R. Penn", quote: "🔥🔥🔥🔥", score: 5 }],
      id: 1,
    },
    {
      title: "Galaxy S24 Ultra",
      description:
        "The Samsung Galaxy S24 Ultra is expected to be a flagship smartphone featuring cutting-edge technology and premium design. It typically boasts a large, high-resolution AMOLED display with a high refresh rate for smooth visuals. The device is likely to include advanced camera capabilities, including multiple lenses for versatile photography",
      img: require("../assets/cards/card-3.png"),
      testimonials: [
        {
          author: "Anna P. Morales",
          quote:
            "Laughter is the best medicine, except when you have diarrhea, then Pepto is definitely the best medicine.",
          score: 2,
        },
        {
          author: "Victoria B. Selby",
          quote: "this app is a life saver! I just started a company",
          score: 2,
        },
      ],
      id: 2,
    },
    {
      title: "Guitar Alhambra cutable",
      description:
        "Alhambra guitars are renowned for their craftsmanship and quality, particularly in the realm of classical and flamenco music. Founded in 1965 in Spain, Alhambra combines traditional luthier techniques with modern technology to produce instruments that offer rich tonal qualities and excellent playability",
      img: require("../assets/cards/card-4.png"),
      testimonials: [
        { author: "Eric R. Cole", quote: "Awesome 🔥", score: 5 },
        { author: "James R. Carter", quote: "Bullshit 💩", score: 2 },
      ],
      id: 3,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filterdCards, setFilterdCards] = useState([]);

  // Buttons
  let globalTitle = null,
    globalItem = null;

  const rightButtons = [
    {
      component: (
        <Pressable
          style={styles.swipeoutBtnDelete}
          onPress={() => {
            globalItem?.description.replace(globalItem, "");
            deleteCard(cards, setCards, globalItem.id);
          }}
        >
          <Icon name="trash" size={24} color="#fa5252" />
        </Pressable>
      ),
    },
    {
      component: (
        <Pressable
          style={styles.swipeoutBtnEdit}
          onPress={() => {
            globalItem?.description.replace(globalItem, "");
            const item = { title: globalTitle, ...globalItem };
            navigation.navigate("EditScreen", { item, cards, setCards });
          }}
        >
          <Icon name="pencil" size={24} color="#212529" />
        </Pressable>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      {/* SearchBar */}
      <View>
        <Icon
          name="search"
          size={24}
          color="#212529"
          style={styles.searchIcon}
        />
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          onChange={searchHandler.bind(
            this,
            search,
            cards,
            setCards,
            filterdCards,
            setFilterdCards
          )}
          style={styles.searchInput}
          placeholder="Just Search it! 😉"
        />
      </View>

      {/* Cards */}
      <View style={styles.primaryCards}>
        <FlatList
          data={cards}
          renderItem={({ item }) => (
            <Swipeout
              style={styles.swipeout}
              right={rightButtons}
              buttonWidth={80}
              autoClose={true}
              onOpen={() => {
                globalItem = item;
                globalTitle = item.title;
              }}
            >
              <View>
                <Pressable
                  style={styles.primaryCard}
                  onPress={() =>
                    navigation.navigate("ProductScreen", {
                      item,
                      cards,
                      setCards,
                    })
                  }
                >
                  <Image source={item.img} style={styles.image} />
                  <Text style={styles.primaryCardText}>{item.title}</Text>
                </Pressable>
              </View>
            </Swipeout>
          )}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Home Btn */}
        <Pressable style={styles.footerItem}>
          <Icon name="home" size={52} color="#212529" />
          <Text style={styles.footerText}>Home</Text>
        </Pressable>
        {/* New Btn */}
        <Pressable
          style={styles.footerItem}
          onPress={(_) => navigation.navigate("NewScreen", { cards, setCards })}
        >
          <Icon name="plus" size={52} color="#212529" />
          <Text style={styles.footerText}>New</Text>
        </Pressable>
      </View>
    </View>
  );
}

const deleteCard = (cards, setCards, id) => {
  const newCards = cards.filter((card) => card.id !== id);
  setCards(newCards);
};

const searchHandler = (
  search,
  cards,
  setCards,
  filterdCards,
  setFilterdCards
) => {
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
};
