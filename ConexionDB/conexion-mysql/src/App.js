import React, {Component} from 'react';
import './App.css';


class App extends Component{
  state ={
    users: [],
    user:{ nombre: ""}
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = _ => {
    fetch('http://localhost:4000/users')
    .then(response=> response.json())
    .then(response => this.setState({users: response.data}))
    .catch(err => console.error(err))
  }

   addUser = _ => {
  const {user} = this.state;
  fetch(`http://localhost:4000/users/add?nombre=${user.nombre}`)
  .then(response => response.text())
  .then(this.getUsers)
  .catch(err => console.error(err))
  }

renderUser = ({id, nombre}) => <div key={id}>{nombre}</div>

  render(){
    const {users, user}= this.state;
    return(
    <div className="App">
      {users.map(this.renderUser)}
      <div>
        <input value= {user.nombre} onChange={e=> this.setState({user: {...user, nombre: e.target.value}})}></input>
        <button onClick={this.addUser}>Agregar</button>
      </div>
    </div>
    );
  };
}


export default App;
