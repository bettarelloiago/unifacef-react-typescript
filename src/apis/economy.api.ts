import axios from 'axios';
import { configs } from '../configs';

export const getPrice = async () => {
  return axios.request({method: 'GET', url: configs.apis.economia })
  // return axios.get('https://economia.awesomeapi.com.br/json/all');
}