<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />
    <template v-if="showAnswer" class="fade-in">
      <h2>{{ msj }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonGame",
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      msj: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4); //Numero aleatorio pra elegir pokemon
      this.pokemon = this.pokemonArr[rndInt]; //Le asignamos un pokemon aleatorio que sera el que adivinara
      console.log(this.pokemon);
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer=true;
      if (pokemonId === this.pokemon.id) {
        this.msj = `Correcto ${this.pokemon.name}`;
      } else {
        this.msj = `Oops! era ${this.pokemon.name}`;
      }
    },
    newGame(){
      this.showPokemon = false;
      this.showAnswer=false;
      this.pokemonArr=[];
      this.pokemon=null;
      this.mixPokemonArray();
    }
  },
  mounted() {
    //Se dispara cada que el componente ya esta montado
    this.mixPokemonArray();
  },
};
</script>

<style>
</style>