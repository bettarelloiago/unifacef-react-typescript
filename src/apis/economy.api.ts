import axios from 'axios';

export const getPrice = async () => {
  return axios.request({method: 'GET', url: 'https://economia.awesomeapi.com.br/json/all' })
  // return axios.get('https://economia.awesomeapi.com.br/json/all');
}