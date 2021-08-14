import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string,
    movies: Movie[];
    navigation: StackNavigationProp<any,any>
}

const HorizontalSlider = ({ title, movies, navigation }: Props) => {
    return (
        <View style={{ height: 220 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster navigation={navigation} movie={item} width={100} height={160} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default HorizontalSlider
