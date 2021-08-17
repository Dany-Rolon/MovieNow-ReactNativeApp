import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string,
    movies: Movie[];
}

const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ height: 220 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} width={100} height={160} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default HorizontalSlider
