import { View, Pressable, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router"




export default function Index() {

    return (

        <View style={styles.container}>


            <View style={styles.header}>

                <Pressable style={styles.iconButton} >
                    <Link href="/(tabs)/buscar" style={{height:40,alignItems:"center"}}>
                        <Image source={require('../../assets/icon.png')} />
                    </Link>
                </Pressable>

                <TouchableOpacity>
                    <FontAwesome name="bars" size={30} color="#000000" />
                </TouchableOpacity>
            </View>


            <View style={styles.info}>

                <Text style={styles.font}>R. DR Cincinato pamponet, 92</Text>
                <Text style={styles.font}>Lapa - São Paulo - SP - Cep: 00504220</Text>
                <Text style={styles.font}>CPNJ: 38/348-328/00-1</Text>

            </View>

            <View style={styles.buttons}>
                <Pressable style={{ backgroundColor: '#B2BEC3', padding: 7, width: 102, borderRadius: 5, alignItems: 'center' }}>
                    <Link href="/(dentista)/agendarHorario" >
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Dentista</Text>
                    </Link>
                </Pressable>

                < Pressable style={{ backgroundColor: '#B2BEC3', padding: 7, width: 102, borderRadius: 5, alignItems: 'center' }}>
                    <Link href="/clinica" >
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Clínica</Text>
                    </Link>
                </Pressable>
            </View>

            <View style={styles.carouselContainer}>
                <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
                    <Pressable style={styles.page} key="1" onPress={() => console.log("clicou")}>
                        <Image source={require('../../assets/doutora.png')} style={styles.image} resizeMode="stretch" />
                    </Pressable>
                    <Pressable style={styles.page} key="2" onPress={() => console.log("clicou")}>
                        <Image source={require('../../assets/doutora1.png')} style={styles.image} resizeMode="stretch" />
                    </Pressable>
                    <Pressable style={styles.page} key="3" >
                        <Image source={require('../../assets/doutora2.png')} style={styles.image} resizeMode="stretch" />
                    </Pressable>
                </PagerView>
            </View>


            <View style={styles.clinica}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Sobre a clínica</Text>
                <Text style={{ fontSize: 15 }}> Funcionamento</Text>
                <Text style={{ fontSize: 14 }}>2ª a 6ª das 9h às 18h / Sábados : 9h às 13h</Text>

                <Text style={{ marginTop: 10, marginBottom: 10, fontSize: 16, fontWeight: "bold" }}>Especialidades:</Text>
                <View style={styles.especidalidades}>
                    <Text style={styles.text}>Care</Text>
                    <Text style={styles.text}>Prótese</Text>
                    <Text style={styles.text}>Limpeza</Text>
                    <Text style={styles.text}>Cirurgia</Text>

                    <View style={styles.especidalidades}>
                        <Text style={styles.text}>Manuteção</Text>
                        <Text style={styles.text}>Obturação</Text>
                        <Text style={styles.text}>Implantes</Text>
                    </View>

                </View>
            </View>


            <View style={styles.footer}>
                <FontAwesome name="phone" size={30} color="#000000" />
                <FontAwesome name="whatsapp" size={30} color="#000000" />
                <Image source={require('../../assets/compartilhar.png')} />
                <FontAwesome name="heart" size={30} color="#000000" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFE6E9',
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#17718A',
        padding: 5,
        width: '100%',
        alignItems: 'center',
        
        
    },
    iconButton: {
        alignItems: 'center',
        
    },
    carouselContainer: {
        width: '100%',
        height: 144,
        borderRadius: 16,
        marginTop: 20,
        marginBottom: 16,
    },
    page: {
        width: '100%',
        height: 144,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    footer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#17718A',
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },

    buttons: {
        flexDirection: "row",
        gap: 5,
        justifyContent: 'space-around',
        marginTop: 10,
        alignItems: 'center',

    },

    clinica: {
        marginLeft: 10
    },

    info: {
        marginLeft: 10,
    },
    font: {
        fontSize: 16
    },

    especidalidades: {
        width: '100%',
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    text: {
        backgroundColor: "rgba(217, 217, 217, 1)",
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 15,
        padding: 15,
        fontSize: 14

    }

});








