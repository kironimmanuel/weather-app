import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search(props) {
  return (
    <form id="loactionInput" onSubmit={props.handleSubmit}>
      <input
        ref={props.inputRef}
        type="text"
        className="search"
        placeholder="Search City.."
        name="search"
      />
      <button type="submit" className="submit">
        <FaSearch onClick={props.handleSubmit} />
      </button>
    </form>
  )
}

export default Search
