import { Stack } from "expo-router";

export default function MainLayout(){
    return(
        
        <Stack>
            <Stack.Screen name="index" options={{headerShown:false}} />
            <Stack.Screen name="(logar)/cadastro/page" options={{headerShown:false}} />
            <Stack.Screen name="(panel)/profile/page" options={{headerShown:false}} />
        </Stack>

       
    )
}