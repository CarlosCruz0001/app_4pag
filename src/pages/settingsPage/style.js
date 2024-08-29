import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  containerInput: {
    display: "flex",
    alignItems: "row",
    marginTop: 20,
  },
  inputLetra: {
    borderWidth: 1,
    height: 50,
    width: 290,
    borderRadius: 30,
    paddingLeft: 15,
  },
  inputBio: {
    borderWidth: 1,
    height: 300,
    width: 290,
    borderRadius: 30,
    paddingLeft: 15,
  },
  botaoPublicar: {
    borderRadius: 30,
    backgroundColor: "#aaa",
    width: 100,
    height: 60,
    margin: 10,
    alignSelf: 'center',
    alignItems:'center',
  },

  textoBotao:{
    color: '#ccc',
    fontSize:20,
    marginTop:13,
    marginBottom:13,
  }
});
