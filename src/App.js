import React, {useState} from 'react';
import NavigationBar from './components/NavigationBar';
import LatestRelease from './components/LatestRelease';


const App = () => {
  const [query, setQuery] = useState('');
  const [selectedAsin, setSelectedAsin] = useState(null);


  return (
    <>
    <NavigationBar query = {query} setQuery = {setQuery} />
    <LatestRelease query = {query} selectedAsin = {selectedAsin} setSelectedAsin = {setSelectedAsin} />
    </>
  );
}

export default App;
