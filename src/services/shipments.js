import http from './httpService';
import { apiUrl } from '../config.js';


export function getShipments() {
  return http.get(`${apiUrl}/shipments`, {});
}

