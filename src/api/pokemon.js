import {API_HOST} from '../utils/constans'
export async function getPokemonsApi() {
    try {
        const url      = `${API_HOST}/pokemon?limit=10&offset=0`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'API-Key': 'secret'
            }
          }
            );
        const result   = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getPokemonsDetailsByUrlApi(url) {
    try {
        const response = await fetch(url);
        const result   = await response.json();
        return result;
    } catch (error) {
        throw error;
    } 
}