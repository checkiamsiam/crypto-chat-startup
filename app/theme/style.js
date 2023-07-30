import { StatusBar, StyleSheet } from "react-native";
import { Colors } from "./color";

export default StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: Colors.bg,
    paddingTop: StatusBar.currentHeight,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.bg,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: Colors.active,
    fontFamily: "Poppins-Bold",
  },
  title1: {
    fontSize: 30,
    fontFamily: "Poppins-Bold",
  },
  subtitle: {
    fontSize: 18,
    color: Colors.active,
    fontFamily: "Poppins-Bold",
  },
  subtitle1: {
    fontSize: 18,
    color: Colors.active,
    fontFamily: "Poppins-Regular",
  },
  txt: {
    fontSize: 16,
    color: Colors.disable,
    fontFamily: "Poppins-Regular",
  },
  txt1: {
    fontSize: 16,
    color: Colors.active,
    fontFamily: "Poppins-Regular",
  },
  btntxt: {
    fontSize: 16,
    color: Colors.secondary,
    fontFamily: "Poppins-Regular",
  },
  subtxt: {
    fontSize: 14,
    color: Colors.disable,
    lineHeight: 20,
    fontFamily: "Poppins-Regular",
  },
  btn: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 25,
  },
  indicator: {
    borderColor: "#A9A9A9",
    borderWidth: 1,
    padding: 4,
    borderRadius: 20,
    backgroundColor: "#A9A9A9",
    marginHorizontal: 5,
  },
  logintitle: {
    fontSize: 26,
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    color: Colors.active,
  },

  txtinput: {
    // backgroundColor:'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    borderColor: Colors.primary,
    color: Colors.active,
    height: 55,
    fontFamily: "Poppins-Regular",
  },

  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginTop: 20,
    marginBottom: 25,
  },

  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.primary,
    // flex:1,
    color: Colors.active,
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 55,
  },
  btnoutline: {
    borderColor: Colors.bord,
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 10,
  },
  input: {
    height: 55,
    paddingHorizontal: 20,
    color: Colors.active,
  },
});
