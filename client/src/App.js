import React from 'react';
import axios from "axios";
import PlayerCard from "./components/playerCard";
import useLocalStorage from "./hooks/useLocalStorage";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players: [res.data]
        });
        console.log('get res', this.state)
      })
  }
  

    render() {
    return (
      <div className="App">
        
      <p>Women's World Cup Player's Ranked by Search Interest(June-July 2019)</p>
      {this.state.players[0].map(item => {
        return (
          <PlayerCard key={item.id} name={item.name} country={item.country} searches={item.searches}/>
        )
      })}
      </div>
    );
  }
}

export default App;
