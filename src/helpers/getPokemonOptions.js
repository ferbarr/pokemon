import pokemonApi from "../api/pokemonApi";

// Crear funcion para crear arreglo de pokemones
export const getPokemons=()=>{
    const pokemonsArr=Array.from(Array(650));//Se crea un arreglo basado en el arreglo que nos da 650 posiciones
    return pokemonsArr.map((_,index)=>index+1)//Desestructaramos el arreglo y le damos un valor a el indice que sume 1
}


// Funcion para obtener el nombre de los pokemones
export const getPokemonNames=async ([a,b,c,d]=[])=>{//Desestructuramos el array, guardando los datos en esas letras, esas letras traen el numero de indice del array
   const promiseArr=[//Creamos un array de peticiones a la api, indicando el numero de pokemon a buscar
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
   ]
   const [pk1,pk2,pk3,pk4]=await Promise.all(promiseArr) //Nos permite ejecutar varias promesas de manera simultanea,recibe un arreglo de promesas y lo desestructuramos para guardar cada una de las respuestas de las peticiones
   return [ //Retornamos un arreglo con los nombres de los pokemones
       {name:pk1.data.name,id: pk1.data.id},
       {name:pk2.data.name,id: pk2.data.id},
       {name:pk3.data.name,id: pk3.data.id},
       {name:pk4.data.name,id: pk4.data.id}
   ]
}

//Funcion para obtener las opciones mezcladas

const getPokemonOptions=async ()=>{
    const mixPokemons=getPokemons().sort(()=>Math.random()-0.5)//Esto hara mostrar al azar posiciones del arreglo
    const pokemons=await getPokemonNames(mixPokemons.splice(0,4));//Ejecutamos la funcion que obtiene el nombre de los pokemones y le pasamos los primeros 4 numeros del array
    console.log(pokemons)
    return pokemons
}

export default getPokemonOptions