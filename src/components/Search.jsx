import React from 'react'

export default function Search(props) {
  return (
    <>
        <input type='number' min={1} max={1000} className='searchBar'></input> 
        {/* problem: I don't know how to get the data from searchBar */}
        {/* <button onClick={props.Clicked(document.getElementById("searchBar").innerText)}> Search </button> */}
    </>
  )
}
