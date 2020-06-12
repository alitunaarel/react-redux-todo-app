import React, { useState } from "react";
import { connect } from "react-redux";
import { listeyeEkle, isaretle, temizle } from "./actions";

import "./App.css";

const App = props => {
  const [text, setText] = useState("");
  console.log(props);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="ekleme_formu">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add to the list..."
        />
        <button className="big-button" onClick={() => {
          setText('');
          props.listeyeEkle(text)
        }
        }>Add</button>
      </div>
      <div className="liste">
        {props.liste.map(item => (
          <div
            onClick={() => props.isaretle(item.id)}
            key={item.id} className={item.tamamlandi ? "yapildi" : ""}>
            {item.baslik}
          </div>
        ))}
      </div>
      <button
        onClick={() => props.temizle()}
        className="temizle">Clean up the dones</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    liste: state.liste
  };
};

export default connect(mapStateToProps, { listeyeEkle, isaretle, temizle })(App);
