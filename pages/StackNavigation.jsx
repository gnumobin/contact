import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import EditScreen from "./EditScreen";
import NewScreen from "./NewScreen";
import ProductScreen from "./Product";
import CreateTestimonialScreen from "./CreateTestimonialScreen";

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator>
      {/* Page: Home */}
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShadowVisible: false,
          headerTitleAlign: "center",
          title: "Home",
          headerBackVisible: false,
        }}
      />
      {/* Page: Edit */}
      <Stack.Screen
        name="EditScreen"
        component={EditScreen}
        options={{
          headerShadowVisible: false,
          headerTitleAlign: "center",
          title: "Edit Product",
        }}
      />
      {/* Page: New */}
      <Stack.Screen
        name="NewScreen"
        component={NewScreen}
        options={{
          headerShadowVisible: false,
          headerTitleAlign: "center",
          title: "Create New Product",
          headerBackVisible: false,
        }}
      />
      {/* Page: New */}
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          headerShadowVisible: false,
          headerTitleAlign: "center",
          title: "Product",
        }}
      />
      {/* Page: New */}
      <Stack.Screen
        name="commentScreen"
        component={CreateTestimonialScreen}
        options={{
          headerShadowVisible: false,
          headerTitleAlign: "center",
          title: "Leave a Comment",
        }}
      />
    </Stack.Navigator>
  );
}
