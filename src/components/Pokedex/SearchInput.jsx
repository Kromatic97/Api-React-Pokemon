import React from 'react'

const SearchInput = ({setPokeSearch, setOptionType}) => {

const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchText.value=''

}

  return (
    <form className='search__input' onSubmit={handleSubmit}>
        <input placeholder='Search your pokemon'className = 'home__input' id='searchText' type="text"/>
        <button className='home__btn'>Search</button>
    </form>
  )
}

export default SearchInput