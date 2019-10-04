import React from 'react';
import axios from "axios";
import PlayerCard from "./components/playerCard";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState(res.data[0]);
      })
  }
  
  currentPlayer = () => {
    
  }
  

    render() {
    return (
      <div className="App">
        
      <p>Women's World Cup Player's Ranked by Search Interest(June-July 2019)</p>
      <PlayerCard player={this.state}/>

      </div>
    );
  }
}

export default App;
