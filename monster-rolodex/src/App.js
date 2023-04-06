import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/serach-box.component';
import './App.css';


const App = () => {
  const [searchField, setSearchFiled] = useState("a"); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => { return response.json() })
      .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    console.log("effect is firing");
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchFiled(searchFieldString);
  }


  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className="monsters-search-box" />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ""
//     }
//     // console.log("constructor");
//   }

// componentDidMount() {
//   // console.log("componentDidMount");
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => { return response.json() })
//     .then((users) => this.setState(() => {
//       return { monsters: users }
//     }))
// }

//   onSearchChange = (event) => {
//     // console.log(event.target.value);

//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     })
//   }

//   render() {
//     // console.log("render from appjs");

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className="monsters-search-box" />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
