import logo from './logo.svg';
import './App.css';
import { Appreact } from './components2/appreact'
import { Component } from 'react'
const back = 'https://upload.wikimedia.org/wikipedia/vi/3/3b/Pokemon_Trading_Card_Game_cardback.jpg'
const finish = 'https://media.istockphoto.com/illustrations/cartoon-finish-sign-illustration-id478290143'
let pokemon_data = [
  '001.png','002.png','003.png','004.png','005.png','006.png','007.png','008.png']

pokemon_data = [].concat(pokemon_data,pokemon_data)
pokemon_data = pokemon_data.map(img => {
  return {
    name: 'pokemon',
    front: img,
    back: back,
    finish: finish,
    isUp: false,
    isFlip: 0,
    isFinish: false
  }
})
// console.log(pokemon_data)


class App extends Component {
  constructor(props) {
    super(props)
    pokemon_data.sort((a, b) => Math.random() - Math.random())
    this.state = {
      data: pokemon_data,
      selected: []
    }
  }
    render() {
      return (
        <div className="app-cont ">
          {
            this.state.data.map((pokemon, index) => {
              return <Appreact {...pokemon} />

            })
          }
        </div>
      );
    }
  }
  export default App





  /////////////////////////////
  