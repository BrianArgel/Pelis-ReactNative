import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, Switch, TouchableRipple, Text } from 'react-native-paper'
export default function DrawerContent(props) {
    const { navigation } = props;
    const [active, setActive] = useState('home')

    const onChangeScreen = (screen) => {
        setActive(screen)
        navigation.navigate(screen)
    }
    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item 
                active={active === "home"} 
                label="inicio" 
                onPress={() => onChangeScreen("home")}/>
                <Drawer.Item 
                active={active === "popular"} 
                label="Peliculas Populares" 
                 onPress={() => onChangeScreen("popular")}
                />
                <Drawer.Item 
                active={active === "news"}
                 label="Nuevas Peliculas" 
                 onPress={() => onChangeScreen("news")}
                />



            </Drawer.Section>

        </DrawerContentScrollView>
    )
}