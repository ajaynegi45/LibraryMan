import { NavLink } from 'react-router-dom';

const Navlink = () => {
    return (
        <>
            <NavLink to={`/`} >Home</NavLink>

            <NavLink to={`/borrow`} >Borrow</NavLink>

            <NavLink to={`/books`} >Books</NavLink>

            <NavLink to={`/about`}  >About</NavLink>

            <NavLink to={`/contact`} >Contact</NavLink>
        </>
    )
}

export default Navlink