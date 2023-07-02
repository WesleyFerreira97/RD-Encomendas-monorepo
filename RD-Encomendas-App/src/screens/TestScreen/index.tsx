import React, { useEffect, useState } from 'react';
import { Animated, Button, ScrollView, Text, View } from 'react-native';
import { Header, Sheet } from 'tamagui';
import { styles } from './styles';
import { themeColors } from '../../style/theme';

const ListItem = () => {
    return (
        <View style={{
            height: 150,
            width: '100%',
            backgroundColor: "#1F1D36",
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
        }}>
            <Text style={{
                color: themeColors.white,
                fontSize: 24,
            }}
            >Item</Text>
        </View>
    )
}

export function TestScreen() {

    let AnimatedHeaderValue = new Animated.Value(0);
    const Header_Max_Height = 300;
    const Header_Min_Height = 100;

    const animateHeaderHeight = AnimatedHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp',
    })
    console.log(animateHeaderHeight);

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.headerContainer,
                {
                    height: animateHeaderHeight,
                }
            ]}>
                <Text style={styles.headerText}>Test Header Stick</Text>
            </Animated.View>
            <View style={[
                styles.headerContainer,
                {
                    height: Header_Min_Height,
                }
            ]}>

            </View>
            <ScrollView
                scrollEventThrottle={16}
                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
                        { useNativeDriver: false }
                    )
                }
            >

                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </ScrollView>
        </View >
    );
}