import React from 'react';
import EditUser from "./components/EditUser";
import ShowUsers from "./components/ShowUsers";
import store from '.redux/store'
//store - to hold all the data/ the grand or global state

//Actions - FETCH_DATA, PATCH_DATA

//Reducer - How actions describe state to the next state

//Dispatch


function App() {
  return (
      <ShowUsers/>
  );
}

export default App;
