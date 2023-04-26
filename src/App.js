import React from 'react';

import './App.css';
import { fetchData } from './redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.fetchDataReducer.user)
  const dispatch = useDispatch();

  const handleFetchData = () => {
    dispatch(fetchData(2));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div> Pokemon app </div>
        <button onClick={handleFetchData}>Fetch</button>
        <div>
          {
            user
          }
        </div>
      </header>
    </div>
  )

}


export default App;


