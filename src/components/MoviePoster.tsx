import React from 'react'
import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/Navigation';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

type DetailScreenNavigation = StackNavigationProp<RootStackParams, 'DetailScreen'>

const MoviePoster = ({ movie, height = 300, width = 200 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const navigation = useNavigation<DetailScreenNavigation>()

    return (
        <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen',movie)}
            activeOpacity={0.7}
            style={{
                width,
                height,
                marginHorizontal: 8
            }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.20,
        shadowRadius: 4.65,

        elevation: 12,
    }
});

export default MoviePoster
