import axios from 'axios';

export default axios.create({
  baseURL: 'https://graph.facebook.com/v2.8/',
});
