import { useEffect } from 'react';
import './App.css';
import useAxios from './hooks/useAxios';


function App() {
  const {loading, error, data, refetch} = useAxios({
    url : "https://yts.mx/api/v2/list_movies.json"
  });
  console.log(`loading : ${loading}, error : ${error}, data : ${JSON.stringify(data)}`);

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={refetch}>refetch</button>
      <h2>{loading && "Loading"}</h2>
      <h1>{!loading && JSON.stringify(data)}</h1>
    </div>
  );
}

export default App;