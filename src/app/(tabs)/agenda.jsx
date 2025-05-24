import { Text, View ,Image} from "react-native";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#DFE6E9",
      }}
    >
      <Image source ={require('../../assets/image.png')}
      style ={{width:300 , height:307}}/>
        
      <Text> Não há agendamentos.</Text>

      
    </View>
  );
}
