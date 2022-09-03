import React from "react";
import { Button, Text, View } from "react-native";

export const Profile = (props: any) => {
    // Getting the navigation & rote from the props 
    // Here route.params contains all the data that has been sent from the previous screen. 
    const { navigation, route } = props;
    const { name } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: "yellow" }}>
            <Text>{name}</Text>
            {/*
                navigation.goBack() is used to go back to the previous screen.
            */}
            <Button title="Go Back" onPress={() => { navigation.goBack() }} />
        </View>
    )

}