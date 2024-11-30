import { useDispatch } from 'react-redux';
import s from './SearchBar.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBar = () => {
    const dispatch = useDispatch()
    return (
        <input type='text' placeholder='Search...' className={s.input} onChange={(e) => {dispatch(changeFilter(e.target.value))} } />
    )
}

export default SearchBar;