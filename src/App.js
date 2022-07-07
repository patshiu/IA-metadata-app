import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

const App = () => { 
  const [itemMetadata, setItemMetadata] = useState({})

  const fetchData = () => { 
  console.log('effect')
  axios
    .get('https://archive.org/metadata/InformationM')
    .then(
      response => {
        console.log('promise fulfilled')
        setItemMetadata(response.data)
      })
  }
  
  useEffect(fetchData, [])
  console.log(itemMetadata)
} 

export default App;
