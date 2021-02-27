import "./app.scss";
import React from "react";

class App extends React.Component {
  state = {
    search: "",
    cats: [
     {
        name: "Marvin",
        email: "marvin@mail.com",
      }, 
      {
        name: "Darvin",
        email: "darvin@mail.com",
      },
      {
        name: "Harry Potter",
        email: "harry@mail.com",
      },
      {
        name: "Kitty",
        email: "kitty@mail.com",
      }, 
      {
        name: "Petya",
        email: "petya@mail.com",
      }, 
    ]
  };

  handleChange = (event) => {
    //INPUTVALUE
    const searchValue = event.target.value;
    //SET INPUT VALUE TO STATE
    this.setState({ search: searchValue });
  };

  render() {
    const mySearchInputValue = this.state.search;
    const filteredCatsData = this.state.cats.filter((cat) => {
      const catLowerCaseName = cat.name.toLowerCase();
        return cat.name.includes(mySearchInputValue);
    });
    console.log(filteredCatsData);
    return (
      <div className="app">
        <h1 className="app__header">Catty shop</h1>

        <div className="app__search">
          <input
            onChange={(event) => this.handleChange(event)}
            value={this.state.search}
            className="app__search-input"
            type="text"
            name="search"
            placeholder="Search cats"
          />
        </div>

        <main className="app__main">
          <ul className = "app__main-list">
            {this.state.cats.map((cat, idx) => {
              console.log(cat);
              return (
                <li className="item">
                  <img src={`https://robohash.org/DQ1.png${idx + 1}?set=set4`} alt="cat" className="item__image"/>
                  <div className="item__header">{cat.name}</div>
                  <div>{cat.email}</div>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
