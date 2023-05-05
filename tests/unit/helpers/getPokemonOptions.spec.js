import getPokemonOptions,{ getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions.js'

describe('GetPokemonOptions helpres', () => {

    // test('Debe regresar un arreglo de numeros',()=>{
    //     const pokemons=getPokemons();
    //     // console.log(pokemons);
    //     expect(pokemons.length).toBe(650);
    //     expect(pokemons[0]).toBe(1);
    // });

    // test('Debe retornar un arreglo de 4 elementos con nombres de pokemons', async () => {
    //     const pokemons = await getPokemonNames([1, 2, 3, 4]);
    //     console.log(pokemons);
    //     expect(pokemons).toStrictEqual([
    //         { name: 'bulbasaur', id: 1 },
    //         { name: 'ivysaur', id: 2 },
    //         { name: 'venusaur', id: 3 },
    //         { name: 'charmander', id: 4 }])
    // })

    test('getPokemonOptions debe retonar un array mezclado',async ()=>{
        const pokemons=await getPokemonOptions();
        console.table(pokemons);
        expect(pokemons.length).toBe(4);
        expect(pokemons).toEqual([
            {name:expect.any(String),id:expect.any(Number)},
            {name:expect.any(String),id:expect.any(Number)},
            {name:expect.any(String),id:expect.any(Number)},
            {name:expect.any(String),id:expect.any(Number)}
        ])
    })
})