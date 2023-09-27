import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Dex from './components/Dex'
import Up from './components/Up'

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/"
  
  const [loading, setLoading] = useState(true)
  const [pokemon, getPokemon] = useState()
  const [dexNumber, updateDexNum] = useState(1)

  function updateDex(){
    console.log("updated");
    updateDexNum(a => a + 1);
  }

  useEffect(() =>{
    setLoading(true)
    axios.get(url + dexNumber).then(res => {
      setLoading(false)
      getPokemon(res.data)
    })
  }, [])

  if (loading) return "loading..."

  return (
    <>
      <Dex pokemon = {pokemon}/>
      <Up onClick={updateDex}/>
    </>
  )
}

export default App
