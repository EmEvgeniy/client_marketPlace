import { FC } from 'react';
import classes from './searchInput.module.css'
import {AiOutlineSearch} from 'react-icons/ai'

interface searchInputInterface {
	ph: string;
}
const SearchInput:FC<searchInputInterface> = ({ph}) => {
	return (
		<div className={classes.search}>
			<AiOutlineSearch/>
			<input type='text' placeholder={ph}/>
		</div>
	)
}

export default SearchInput