import PokeList from './components/PokeList.jsx'
import SelectedPokemon from './components/SelectedPokemon.jsx'
import { useState } from 'react'
import './App.css'

// Component to get list of pokemon
	// Fetch list of pokemon from the api
	// Store pokemon in an array
	// Map through each item in the array, creating a card for each pokemon

// Component to render a pokemon card	
	// Render a pokemon card upon state change
	// Set card so that additional details are displayed if pokemon card is clicked


// Create form to add new pokemon to the array

function App() {
const [selectedPokemonId, setSelectedPokemonId] = useState(null)

  return (
    <> { !selectedPokemonId ? 
			<PokeList setSelectedPokemonId={setSelectedPokemonId}/> : 
			<SelectedPokemon selectedPokemonId = {selectedPokemonId} setSelectedPokemonId={setSelectedPokemonId} />}
    </>
  )
}

export default App

