import React from 'react'

const SearchInput = ({setpokeSearch}) => {

const handleSubmit = e => {
    e.preventDefault()
    setpokeSearch(e.target.searchText.value.trim().toLowerCase())

}

  return (
    <form onSubmit={handleSubmit}>
        <input id='searchText' type="text"/>
        <button>Search</button>

    </form>
  )
}

export default SearchInput