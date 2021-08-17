import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext'
import useFade from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({ children }: Props) => {

    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);

    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn( () => {
            setPrevMainColors(colors);
            fadeOut();
        } )
    }, [colors])

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, 'white']}
                start={{ x: 1, y: 0.1 }}
                end={{ x: 0.8, y: 0.8 }}
                style={{ ...StyleSheet.absoluteFillObject }}
            />

            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity }}
            >
                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    start={{ x: 1, y: 0.1 }}
                    end={{ x: 0.8, y: 0.8 }}
                    style={{ ...StyleSheet.absoluteFillObject }}
                />
            </Animated.View>

            {children}
        </View>
    )
}

export default GradientBackground
