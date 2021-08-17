import React from 'react'
import { Text, View, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface'
import CurrencyFormatter from 'currency-formatter'
import CastItem from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" color="gray" size={16} />
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                {/* Historia de la pelicula */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Sinopsis
                </Text>
                <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

                {/* Presupuesto */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>
                    {CurrencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>

                {/* Casting */}
                <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                        Actores
                    </Text>
                    <FlatList
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <CastItem actor={item}/>}
                        horizontal={true}
                        style={{marginTop: 10, height:70}}
                    />  
                </View>
            </View>
        </>
    )
}

export default MovieDetails
