import React from 'react'
import {Route, Routes} from "react-router-dom"
import PokeItems from '../Components/PokiItems/PokeItems'
import PokeDetails from '../Components/PokeDetails/PokeDetails'


function RoutePodex() {
  return (
        <>
        <Routes>
            <Route path='/' element ={<PokeItems />}/>
            <Route path='/pokemon/:id' element ={<PokeDetails/>}/>
        </Routes>
        </>
  )
}

export default RoutePodex