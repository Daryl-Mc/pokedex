import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Dex from './components/Dex'
import AddBtn from './components/AddBtn'
import SubBtn from './components/SubBtn'
import Search from './components/Search'

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/"
  
  const [loading, setLoading] = useState(true) 
  const [pokemon, getPokemon] = useState({})
  const [dexNumber, setDexNum] = useState(1)

  useEffect(() =>{
    setLoading(true)
    axios.get(url + dexNumber).then(res => {
      setLoading(false)
      getPokemon(res.data)
    })
    .catch(error => {
      setLoading(false)
      console.log(error)
    })
  }, [dexNumber]) // This array checks for values that get updated, 
  //reruns the effect everytime something in this array changes. 

  function updateDex(operator) {
    if (operator === "increment"){
      setDexNum(a => a + 1);
    }
    else if(operator === "decrement" && dexNumber > 1){
      setDexNum(a => a - 1);
    }
  }

  function search(input){
    setDexNum(input);
    setLoading(true);
  }

  if (loading) return "loading..."

// So the problem is I need a function that checks the number input into the search bar
// call the function when a button is clicked and update the state of dexnumber to the value
  return (
    <>
      <Search Clicked={() => search}></Search>
      <SubBtn Clicked={() => updateDex("decrement")}/> 
      <Dex pokemon = {pokemon}/> 
      <AddBtn Clicked ={() => updateDex("increment")}/>
    </>
  )
}

export default App
