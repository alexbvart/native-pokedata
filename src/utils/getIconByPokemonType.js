import {POKEMON_TYPE_ICON} from './constans'

const getIconByPokemonType = (type)=> POKEMON_TYPE_ICON[type.toLowerCase()]
export default  getIconByPokemonType;