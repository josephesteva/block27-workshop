import {useState, useEffect } from 'react'


const PokeList = () => {
	const [pokemonList,setPokemonList] = useState([]);

	useEffect(()=> {
		try {
			const fetchPokemon = async () => {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
				const result = await response.json();
				setPokemonList(result.results);
			}
			fetchPokemon();
		} catch {
			console.log(`Didn't work`);
		}
	},[])



	return (
		<>
			<h1>List of Pokemon</h1>
			<section>
				{pokemonList.map((pokemon)=> {
					return <p key={pokemon.name}>{pokemon.name}</p>
				})}
			</section>
			{/* {console.log(pokemonList)} */}
		</>
	)

}

export default PokeList