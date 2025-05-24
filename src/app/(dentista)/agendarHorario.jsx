import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router"


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#DFE6E9'
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: 'space-between', backgroundColor: '#17718A', padding: 5, width: '100%', alignItems: 'center' }}>

        < TouchableOpacity style={{ alignItems: 'center' }}>
          <Link href="/(tabs)/buscar" style={{ height: 40, alignItems: "center" }}>
            <Image source={require('../../assets/icon.png')} />
          </Link>
        </TouchableOpacity>


        < TouchableOpacity>
          <FontAwesome name="bars" size={30} color="#000000" />
        </TouchableOpacity>


      </View>

      <View style={{ marginLeft: 20, marginTop: 5 }}>
        <Text style={{ fontSize: 16 }}>Murilo lopes</Text>
        <Text style={{ fontSize: 16 }}>CRO : 987654 - SP</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Especialidades</Text>
        <Text style={{ fontSize: 14 }}>Care   Protase    Necessidades Epeciais</Text>

        <View style={{ flexDirection: "row", gap: 20, justifyContent: 'space-around', marginTop: 10, alignItems: 'center' }}>
          <TouchableOpacity style={{ backgroundColor: '#B2BEC3', padding: 7, width: 102, borderRadius: 5, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Dentista</Text>
          </TouchableOpacity>


          <Link href="/clinica" style={{ backgroundColor: '#B2BEC3', padding: 7, width: 102, borderRadius: 5, alignItems: 'center', textAlign: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Clínica</Text>
          </Link>

        </View>

        <View style={{ justifyContent: 'center', width: '100%', gap: 5 }}>
          <Image source={require("../../assets/image3.png")} style={{ resizeMode: "cover", width: '95%', height: 165, marginTop: 10 }} />

          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Horários:</Text>
            <View style={{ flexDirection: "row", flexWrap: 'wrap', width: 300, gap: 5, marginTop: 5, alignItems: 'center' }}>
              <TouchableOpacity style={{ backgroundColor: '#B2BEC3', padding: 7 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>10:00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#B2BEC3', padding: 7 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>11:00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#B2BEC3', padding: 7 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>12:00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#B2BEC3', padding: 7 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>13:00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#B2BEC3', padding: 7 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>14:00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#B2BEC3', padding: 7 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>15:00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#B2BEC3', padding: 7 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>16:00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#B2BEC3', padding: 7 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>17:00</Text>
              </TouchableOpacity>


            </View>

            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>Outros Horários</Text>
            <Image source={require('../../assets/calendario.png')} style={{ marginTop: 10 }} />
          </View>

        </View>
      </View>


      <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#17718A', paddingVertical: 10, position: 'absolute', bottom: 0, width: '100%' }}>
        <FontAwesome name="phone" size={30} color="#000000" />
        <FontAwesome name="whatsapp" size={30} color="#000000" />
        <Image source={require('../../assets/compartilhar.png')} />
        <FontAwesome name="heart" size={30} color="#000000" />
      </View>


    </View>
  );
}
