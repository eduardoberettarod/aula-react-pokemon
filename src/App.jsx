import './App.css'
import Card from './Card'
import SomFundo from './SomFundo'
import Planta from '/img/energia-planta.png'
import Fogo from '/img/energia-fogo.png'
import Agua from '/img/energia-agua.png'

function App() {
  const item1 = {
    nome: 'Bulbasaur',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    numero: '#1',
    tipo: 'Planta e Venenoso',
    energia: Planta
  }

  const item2 = {
    nome: 'Ivysaur',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    numero: '#2',
    tipo: 'Planta e Venenoso',
    energia: Planta
  }

  const item3 = {
    nome: 'Venusaur',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    numero: '#3',
    tipo: 'Planta e Venenoso',
    energia: Planta
  }
  const item4 = {
    nome: 'Charmander',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    numero: '#4',
    tipo: 'Fogo',
    energia: Fogo
  }

  const item5 = {
    nome: 'Charmeleon',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
    numero: '#5',
    tipo: 'Fogo',
    energia: Fogo
  }

  const item6 = {
    nome: 'Charizard',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    numero: '#6',
    tipo: 'Fogo',
    energia: Fogo
  }
  const item7 = {
    nome: 'Squirtle',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    numero: '#7',
    tipo: 'Água',
    energia: Agua
  }

  const item8 = {
    nome: 'Wartortle ',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
    numero: '#8',
    tipo: 'Água',
    energia: Agua
  }

  const item9 = {
    nome: 'Blastoise',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
    numero: '#9',
    tipo: 'Água',
    energia: Agua
  }
  const pokemon = [item1, item2, item3, item4, item5, item6, item7, item8, item9]
  return (
    <>
    <div className='container-pokemon'>
    <img src='./img/pokemon.png' className='titulo' />
    <img src='./img/pokebola-vermelha.png' className='pokebola1' />
     <img src='./img/pokebola-branca.png' className='pokebola2' />
    </div>
      <div className='lista'>
        {
          pokemon.map(function (umPokemon) {
            return <Card info={umPokemon} />
          })
        }
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/mE8E3nT2U70?si=ta58Z0-XqVDbrjzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <SomFundo />
    </>
  )
}

export default App
