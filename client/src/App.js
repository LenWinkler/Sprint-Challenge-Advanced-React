import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data);
      })
  }
  

    render() {
    return (
      <div className="App">
        
      <p>my app</p>

      </div>
    );
  }
}

export default App;
