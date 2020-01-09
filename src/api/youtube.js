import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 8,
        key: 'AIzaSyB0Me-qi63T5-WjBwga0UzeeiaNI9yFnXc'
    }
});