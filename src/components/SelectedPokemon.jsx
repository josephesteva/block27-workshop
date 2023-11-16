import { useState, useEffect } from "react";

const SelectedPokemon = ({ selectedPokemonId, setSelectedPokemonId }) => {
	const [pokemonDetails, setPokemonDetails] = useState(null);

	useEffect(() => {
		const fetchSelectedPokemon = async () => {
			try {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonId}`)
				const results = await response.json();
				setPokemonDetails(results);
			} catch {
				console.log("Did not work")
			}
		}
		fetchSelectedPokemon();
	}, [])
	return (
		<>
			{pokemonDetails ? 
			<>
			<h1>{(pokemonDetails.name)} #{pokemonDetails.id}</h1>
			<img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name}/>
			<br/>
			<button onClick={ () => {setSelectedPokemonId(null)}}>Back</button>
			</> : 
			<h2>Loading</h2>
		}
		</>
	)
}

export default SelectedPokemon