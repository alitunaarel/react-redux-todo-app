import React from 'react';
import {connect} from 'react-redux'

import './App.css';


const App=(props) => {
  console.log(props)
 
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="ekleme_formu">
        <input placeholder="Add to the list..."/>
        <button>Add</button>
      </div>
      <div className="liste">
        {/* {liste.map(item => (
          <div className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
        ))} */}
      </div>
      <button className="temizle">Clean up the dones</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    liste:state.liste
  }
}

export default connect(mapStateToProps)(App); 
