import pokemonApi from '@/api/pokemonApi.js';
describe('PokemonApi',()=>{
    test('baseURL de axios debe ser la de pokemon api',()=>{
        // console.log(pokemonApi);
        let url;
        url=pokemonApi.defaults.baseURL;
        expect(url).toBe('https://pokeapi.co/api/v2/pokemon');

        
    })
})