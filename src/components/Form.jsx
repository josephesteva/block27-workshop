import { useState } from "react";
import ContactList from "../../../../block26/contact-list/src/components/ContactList";

const Form = ({pokemonList, setPokemonList}) => {
	const [pokemonName, setPokemonName] = useState(``)
	
	return (
		<>
		<form>
			<label>Pokemon: 
				<input type="text" name="pokemon" onChange={(event) => setPokemonName(event.target.value)}/>
			</label>
			<button onClick={
			(event) => {
				event.preventDefault();
				// console.log(pokemonName);
				setPokemonList([...pokemonList, {name: pokemonName}])
				}
			}>Submit</button>
		</form>
		<p>{pokemonName}</p>
		</>
	)
}

export default Form;