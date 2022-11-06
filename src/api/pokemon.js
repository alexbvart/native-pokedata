import {API_HOST} from '../utils/constans'
export async function gerPokemonsApi() {
    try {
        const url      = `${API_HOST}/pokemon?limit=10&offset?0`;
        const response = await fetch(url);
        const result   = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}