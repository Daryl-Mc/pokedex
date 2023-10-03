import React from 'react'

export default function Dex(props) {
  return (
    <div>
        <img src={props.pokemon.sprites.front_default}/>
        {/* {console.log(props.pokemon)} */}
    </div>
  )
}
