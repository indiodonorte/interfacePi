import { Text, View, Image } from "react-native";
import { Link } from "expo-router";

export default function Index() {



  return (
    <View
      style={{
        flex: 1,
        marginLeft:20,
     
      }}
    >

      <Text style={{fontWeight:"bold", fontSize:25}}>Bem Vindo Lucas</Text>
      <View style={{ flexDirection: "row", gap: 8, width: 320, height: 120, backgroundColor: "#B2BEC3", padding: 5,marginTop:40 }}>
        <Image source={require('../../assets/image2.png')} />
        <View>

          <Link href="/(dentista)/agendarHorario">
            <Text style={{ fontWeight: 400, fontSize: 16 }}>Clínica: Fada Do Dente</Text>
          </Link>

          <Text style={{ fontSize: 13, fontWeight: 400}}>Especialidades:</Text>
          <View style={{flexWrap: "wrap", flexDirection:"row", width:200,gap:2}}>
            <Text style={{ backgroundColor: "rgba(217, 217, 217, 1)", paddingLeft:5,paddingRight:5,fontSize: 14, textAlign:'center'}} >Limpeza</Text>
           <Text style={{ backgroundColor: "rgba(217, 217, 217, 1)", paddingLeft:5,paddingRight:5,fontSize: 14, textAlign:'center', marginLeft:20}}>Care</Text>
            <Text style={{ backgroundColor: "rgba(217, 217, 217, 1)", paddingLeft:5,paddingRight:5,fontSize: 14, textAlign:'center'}}>Especialidades  Especiais</Text>
            <Text style={{ marginTop:5, textAlign:"right", width:"100%", fontWeight:"bold",fontSize:16}}>Local: 130m</Text>
          </View>
        </View>


      </View>


    </View>
  );
}
