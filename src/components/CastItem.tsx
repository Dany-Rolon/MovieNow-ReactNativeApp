import React from 'react'
import { Cast } from '../interfaces/creditsInterface';
import { Image, Text, View, StyleSheet } from 'react-native';

interface Props {
    actor: Cast
}

const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={styles.container}>
            {
                actor.profile_path && 
                <Image
                    source={{ uri }}
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                />
            }

            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 14, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:50,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        elevation: 9,
        paddingRight: 15,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 2 
    }
})

export default CastItem
