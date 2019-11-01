import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

/* Component is react lib */
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchBox: ""
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users2 => this.setState({ users: users2 }));


    // Fetch local json file
    // fetch("http://localhost:3000/fakejsondata.json")
    // .then(response => response.json())
    // .then(users2 => this.setState({ users: users2 }));
    
  }

  handleChange = e => {
    this.setState({ searchBox: e.target.value });
  };

  render() {
    // Pulling the property off of state
    const { users, searchBox } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchBox.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Searching user demo with React</h1>
        <SearchBox
          placeholder="search users"
          handleChange={this.handleChange}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
