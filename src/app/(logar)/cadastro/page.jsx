import { View, Text, StyleSheet, TextInput, Pressable ,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

export default function Cadastro() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
              <View style={styles.header}>
                <Pressable style={styles.backButton} onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={24}  />
                </Pressable>
    
                <Text style={styles.logoText}>
                  Dev <Text>App</Text>
                </Text>
    
                <Text style={styles.slogan}>Criar uma conta</Text>
              </View>
    
              <View style={styles.form}>
                <View>
                  <Text style={styles.label}>Nome completo</Text>
                  <TextInput
                    placeholder="Nome completo..."
                    style={styles.input}
                  
                  />
                </View>
    
                <View>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    placeholder="digite o seu email..."
                    style={styles.input}
                  />
                </View>
    
                <View>
                  <Text style={styles.label}>Senha</Text>
                  <TextInput
                    placeholder="digite a sua senha..."
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
                <Pressable style={styles.button} >
                  <Text style={styles.buttonText}>Cadastrar</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 34,
      
      },
      header: {
        paddingLeft: 14,
        paddingRight: 14,
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
        
      },
      button: {
         backgroundColor:"#00B894FF",
        paddingTop: 14,
        paddingBottom: 14,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderRadius: 8,
      },
    
      buttonText: {
        fontWeight: 400,
        color:"white"
      },
    
      backButton: {
       
        alignSelf: "flex-start",
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
      },
    });
    