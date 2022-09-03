import React, { useEffect } from "react"
import { Button, Text, View } from "react-native";

export const HomeView = (props: any) => {
    // Getting the navigation from the props 
    const { navigation } = props;
    useEffect(() => { });

    return (
        <View style={{ backgroundColor: "red", flex: 1 }}>
            {/*
                Navigating to Details screen with data.
            */}
            <Button title="My Profile" onPress={() => { navigation.navigate("Profile", { name: "Sohrab" }) }} />
        </View>
    )
}