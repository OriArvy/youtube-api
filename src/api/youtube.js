import axios from 'axios'

const key = "AIzaSyANWdoEml_p8g6Kx6NwBQFiw4bXkRCKYfE"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: key,
        type: 'video'
    },
    headers: {}
});