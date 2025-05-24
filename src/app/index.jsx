import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Link, router } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>Bem-vindo ao Aplicativo !</Text>
        <Text style={styles.slogan}>Agenda Digital</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Selecione o tipo de acesso</Text>
        </View>

        <View style={styles.caixaB}>
          <Text style={styles.label2}>Agenda consultas de forma rápida e fácil.</Text>
          <Pressable style={styles.button}>
            <Link href={"/firstPage"}>
              <Text style={styles.buttonText}>Entrar como Paciente     </Text>
              <FontAwesome5 name="laugh" size={20} color="black" /> 
            </Link>
          </Pressable>
        </View>

        <View style={styles.caixaB}>
          <Text style={styles.label2}>Selecione o tipo de acesso</Text>
          <Pressable style={styles.button}>
            <Link href={"/secondPage"}>
             
              <Text style={styles.buttonText}>Entrar com clínica     </Text>
               <FontAwesome5 name="tooth" size={20} color="black" />
            </Link>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
    backgroundColor:'#DDDDDDFF'
  },
  header: {

    flex:0.5,
    justifyContent:'center',
    alignItems:'center',
  
  },

  logoText: {
    fontSize: 15,
    marginTop: 80,
    marginBottom:-10
  },

  slogan: {
    fontSize: 34,
  },

  form: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    paddingTop: 24,
    paddingLeft: 14,
    paddingRight: 14,
  },

  caixaB: {
    marginBottom:-15,
    justifyContent: "center",
    alignContent: "center",
    marginTop:40
  },

  label: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
    textAlign: "center",
  },

  label2: {
    marginBottom: -15,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,

    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 14,
    paddingBottom: 14,
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#17718AFF",
    marginTop: 20,
  },

  buttonText: {
    fontWeight: "bold",
    fontSize:16
  },

  link: {
    marginTop: 16,
    textAlign: "center",
  },
});
