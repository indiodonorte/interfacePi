import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";



export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarStyle: { backgroundColor: '#16718A', alignItems: 'center',height:70 }, tabBarInactiveTintColor: '#000000' }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          headerStyle: { backgroundColor: '#16718A',height:80},
          headerRight: () => (
            <FontAwesome name="bars" size={24} color="#000" style={{ marginRight: 10,alignItems:'center',height:"100%"}} />
          ),
         headerTitle: "logo da empresa",
         headerTitleStyle:{
          height:"100%",
          alignItems:'center'
         }
         
        }}
      />
      <Tabs.Screen
        name="buscar"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
          headerStyle: { backgroundColor: '#16718A',height:80 },
          headerRight: () => (
            <FontAwesome name="bars" size={24} color="#000" style={{ marginRight: 10,alignItems:'center',height:"100%"}} />
          ),
         headerTitle: "logo da empresa",
         headerTitleStyle:{
          height:"100%",
          alignItems:'center'
         }
         
        }}
        

      />
      <Tabs.Screen
        name="agenda"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" color={color} size={size} />
          ),
          headerStyle: { backgroundColor: '#16718A',height:80 },
          headerRight: () => (
            <FontAwesome name="bars" size={24} color="#000" style={{ marginRight: 10,alignItems:'center',height:"100%"}} />
          ),
         headerTitle: "logo da empresa",
         headerTitleStyle:{
          height:"100%",
          alignItems:'center'
         }
         
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
          headerStyle: { backgroundColor: '#16718A',height:80},
          headerRight: () => (
            <FontAwesome name="bars" size={24} color="#000" style={{ marginRight: 10,alignItems:'center',height:"100%"}} />
          ),
         headerTitle: "logo da empresa",
         headerTitleStyle:{
          height:"100%",
          alignItems:'center'
         }
         
        }}
      />

        

    </Tabs>
  );
}