import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Link, router } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <MaterialCommunityIcons name="tooth-outline" size={90} color="black" />
        <Text style={styles.slogan}>Acessar</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput placeholder="digite o seu email..."  style={styles.input} />  
        </View>


        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder="digite a sua senha..."
            style={styles.input}
            secureTextEntry
          />
        </View>

        <Pressable style={styles.button}>
          <Link href={"/(tabs)/home"}>
          <Text style={styles.buttonText}>Acessar</Text>
          </Link>
        </Pressable>

        

        <Link href="/(logar)/cadastro/page" style={styles.link2}>
          <Text>Esqueci a senha</Text>
        </Link>

         <Link href="/(logar)/cadastro/page" style={styles.link}>
          <Text>Ainda não possui uma conta? Cadastre-se</Text>
        </Link>
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
    top:50,
    paddingLeft: 14,
    paddingRight: 14,
    alignItems:'center',
     justifyContent:'center',
  },

  logoText: {
    fontSize: 20,
    fontWeight: "bold",

    marginTop: 8,
  },

  slogan: {
    fontSize: 34,

    marginBottom: 34,
  },

  form: {
    flex: 1,
    justifyContent:'center',
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    paddingTop: 24,
    paddingLeft: 14,
    paddingRight: 14,
  },
  label: {
    marginBottom: 4,
  },

  input: {
    borderWidth: 1,

    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 14,
    paddingBottom: 14,
     backgroundColor:"#DFE6E9FF"
  },
  button: {
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 8,
    backgroundColor:'#00B894FF'
  },

  buttonText: {
    fontWeight: 400,
    color:'white'
  },

  link: {
    marginTop: 16,
    textAlign: "center",
  },
  
    link2: {
    marginTop: 16,
    textAlign: "center",
    color:'#FF7200FF'
  },
});
