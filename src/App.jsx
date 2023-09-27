import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Dex from './components/Dex'
import AddBtn from './components/AddBtn'
import SubBtn from './components/SubBtn'

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/"
  
  const [loading, setLoading] = useState(true)
  const [pokemon, getPokemon] = useState()
  const [dexNumber, setDexNum] = useState(1)

  useEffect(() =>{
    setLoading(true)
    axios.get(url + dexNumber).then(res => {
      setLoading(false)
      getPokemon(res.data)
    })
  }, [dexNumber]) // This array checks for values that get updated, 
  //reruns the effect everytime something in this array changes. 

  function updateDex(){
    setDexNum(a => a + 1); // Updates the dexNumber
  }

  if (loading) return "loading..."

  //Next step is adding functionality to the subtract button
  //Then figure out a search bar!
  return (
    <>
      <SubBtn/>
      <Dex pokemon = {pokemon}/> 
      <AddBtn onClick = {updateDex}/>
    </>
  )
}

export default App
