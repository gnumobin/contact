import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    backgroundColor: "#fff",
  },
  swipeout: {
    backgroundColor: "#fff",
  },
  searchInput: {
    backgroundColor: "rgba(173, 181, 189, 0.1)",
    padding: 16,
    paddingLeft: 64,
    fontSize: 14,
    // Border
    borderRadius: 12,
    color: "#495057",
    marginTop: 0,
    margin: 16,
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 24,
    height: 24,
    transform: "translate(150%,-135%)",
  },
  footer: {
    // Colors
    backgroundColor: "#fff",
    boxShadow: "0 5px 20px rgba(0,0,0,0.075)",
    // Spaces
    padding: 14,
    height: 100,
    width: "90%",
    marginLeft: 16,
    marginRight: 16,
    // Move To bottom
    position: "absolute",
    left: 4,
    top: "86%",
    zIndex: 999,
    // Axis
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // Border
    borderRadius: 48,
  },
  footerItem: {
    // Move Text to center
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // Spaces
    gap: 2,
  },
  footerText: {
    fontSize: 10,
    fontWeight: 400,
    color: "#adb5bd",
  },
  // Cards
  primaryCards: {
    marginBottom: 190,
  },
  primaryCard: {
    // Spaces
    margin: 16,
    marginTop: 16,
    marginBottom: 0,
    padding: 32,
    // Colors
    backgroundColor: "rgba(173, 181, 189, 0.1)",
    // Border
    borderColor: "rgba(173, 181, 189, 0.35)",
    borderStyle: "inset",
    borderWidth: 1,
    borderRadius: 12,
    // Move content to center
    alignItems: "center",
    // Pos
    position: "relative",
  },
  primaryCardText: {
    color: "#181725",
    fontSize: 16,
    fontWeight: 600,
    marginTop: 20,
  },
  float: {
    position: "absolute",
    right: 20,
    top: 15,
    gap: 8,
  },
  cardBtnEdit: {
    // Colors
    backgroundColor: "rgba(33, 37, 41, 0.1)",
    // Spaces
    width: 42,
    height: 42,
    borderRadius: "50%",
    // Move to center
    alignItems: "center",
    justifyContent: "center",
  },
  swipeoutBtnDelete: {
    alignItems: "center",
    justifyContent: "center",
    width: "52",
    height: "52",
    margin: "auto",
    borderRadius: "50%",
    backgroundColor: "rgba(250, 82, 82, 0.1)",
  },
  swipeoutBtnEdit: {
    alignItems: "center",
    justifyContent: "center",
    width: "52",
    height: "52",
    margin: "auto",
    borderRadius: "50%",
    backgroundColor: "rgba(33, 37, 41, 0.1)",
  },
  cardBtnDelete: {
    // Colors
    backgroundColor: "rgba(250, 82, 82, 0.1)",
    // Spaces
    width: 40,
    height: 40,
    borderRadius: "50%",
    // Move to center
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 100,
    objectFit: "contain",
  },
  newComment: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#212529",
    width: 64,
    height: 64,
    zIndex: 999,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.075)",
  },
  imageBox: {
    paddingTop: 24,
  },
  contentBox: {
    padding: 16,
    paddingTop: 0,
    height: 280,
  },
  heading: {
    color: "#212529",
    fontWeight: 900,
    fontSize: 28,
    textAlign: "center",
    marginTop: 32,
    letterSpacing: -0.5,
  },
  description: {
    color: "#868e96",
    fontSize: 14,
    fontWeight: 400,
    marginTop: 16,
    marginLeft: 16,
    lineHeight: 20,
  },
  quote: {
    color: "#adb5bd",
    fontSize: 14,
    fontWeight: 400,
    marginTop: 18,
    lineHeight: 18,
    marginLeft: 12,
  },
  // Testimonial
  testimonialCards: {
    marginTop: 32,
    paddingBottom: 48,
    flex: 1,
  },
  average: {
    alignItems: "center",
    gap: 12,
    marginTop: 32,
  },
  averageText: {
    color: "#343a40",
    fontWeight: 700,
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
  },
  // Form
  newForm: {
    padding: 15,
    gap: 24,
  },
  label: {
    gap: 12,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 600,
    color: "#212529",
    marginLeft: 12,
  },
  input: {
    backgroundColor: "rgba(173, 181, 189, 0.1)",
    padding: 16,
    fontSize: 14,
    borderRadius: 12,
    color: "#495057",
  },
  submitBtn: {
    backgroundColor: "rgba(33, 37, 41, 1)",
    padding: 18,
    fontSize: 16,
    borderRadius: 999,
    color: "white",
    fontWeight: 600,
    textAlign: "center",
    marginTop: 42,
    width: "85%",
    margin: "auto",
  },
  rating: {
    marginTop: 28,
    width: "4.5%",
  },
  testimonialCard: {
    // Spaces
    margin: 14,
    marginBottom: 4,
    padding: 24,
    // Colors
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 5px 20px rgba(0,0,0,0.075)",
  },
  testimonialCardText: {
    color: "#181725",
    fontSize: 16,
    fontWeight: 600,
    // marginTop: 20
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  testimonialCardIcon: {
    // Colors
    backgroundColor: "rgba(33, 37, 41, 0.1)",
    // Spaces
    width: 40,
    height: 40,
    borderRadius: "50%",
    // Move to center
    alignItems: "center",
    justifyContent: "center",
  },
});
