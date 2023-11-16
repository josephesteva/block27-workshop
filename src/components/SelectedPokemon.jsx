import { useState, useEffect } from "react";

const SelectedPokemon = ({ selectedPokemonId, setSelectedPokemonId }) => {
	const [pokemonDetails, setPokemonDetails] = useState(null);

	useEffect(() => {
		const fetchSelectedPokemon = async () => {
			try {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonId}`)
				const results = await response.json();
				setPokemonDetails(results);
				console.log(results);
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
			<h2>Base Stats</h2>
			<p>{pokemonDetails.stats[0].stat.name} : {pokemonDetails.stats[0].base_stat}</p>
			<p>{pokemonDetails.stats[1].stat.name} : {pokemonDetails.stats[1].base_stat}</p>
			<p>{pokemonDetails.stats[2].stat.name} : {pokemonDetails.stats[2].base_stat}</p>
			<p>{pokemonDetails.stats[3].stat.name} : {pokemonDetails.stats[3].base_stat}</p>
			<p>{pokemonDetails.stats[4].stat.name} : {pokemonDetails.stats[4].base_stat}</p>
			<p>{pokemonDetails.stats[5].stat.name} : {pokemonDetails.stats[5].base_stat}</p>
			<br/>
			<button onClick={ () => {setSelectedPokemonId(null)}}>Back</button>
			</> : 
			<h2>Loading</h2>
		}
		</>
	)
}

export default SelectedPokemon