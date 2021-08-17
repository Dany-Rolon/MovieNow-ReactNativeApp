import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';


const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

    const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();
    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext(GradientContext);

    async function getPosterColors(index: number) {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const {primary = 'green', secondary = "orange"} = await getImageColors(uri);
        setMainColors({primary, secondary })
    }

    useEffect(() => {
        if(nowPlaying.length > 0){
            getPosterColors(0)
        }
    }, [ nowPlaying ])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="red" size={120} />
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>

                    {/* Carrusel principal */}
                    <View style={{ width: 280, height: 320 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={230}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={ index => getPosterColors(index) }
                        />
                    </View>

                    {/* Peliculas mas populares */}
                    <HorizontalSlider title='Populares' movies={popular} />

                    {/* Peliculas mejor valoradas */}
                    <HorizontalSlider title='Mejor valoradas' movies={topRated} />

                    {/* Peliculas que se vienen */}
                    <HorizontalSlider title='Lo que se viene' movies={upcoming} />

                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen
