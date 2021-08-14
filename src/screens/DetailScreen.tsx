import React from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route}: Props) => {

    const movie = route.params;

    console.log(movie.title);

    return (
        <View>
            <Text>DetailScreen</Text>
        </View>
    )
}

export default DetailScreen
