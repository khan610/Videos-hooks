import axios from 'axios';

const KEY = 'AIzaSyDco6_h5uCiPEmjUYpRHDv_r7UTt4jMSNY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
