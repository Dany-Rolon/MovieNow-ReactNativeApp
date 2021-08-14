import Axios from 'axios'

const movieDB = Axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'f594ab914f5b6917440c4c35314c4d58',
        language: 'es-ES'
    }
});

export default movieDB;