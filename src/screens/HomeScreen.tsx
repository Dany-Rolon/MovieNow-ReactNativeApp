import React from 'react'
import { ActivityIndicator, Dimensions, Text, View, FlatList } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { };

const HomeScreen = ({ navigation }: Props) => {

    const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="red" size={120} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>

                {/* Carrusel principal */}
                <View style={{ width: 280, height: 320 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster navigation={navigation} movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={230}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                {/* Peliculas mas populares */}
                <HorizontalSlider navigation={navigation} title='Populares' movies={popular}/>

                {/* Peliculas mejor valoradas */}
                <HorizontalSlider navigation={navigation} title='Mejor valoradas' movies={topRated}/>

                {/* Peliculas que se vienen */}
                <HorizontalSlider navigation={navigation} title='Lo que se viene' movies={upcoming}/>
                
            </View>
        </ScrollView>
    )
}

export default HomeScreen
