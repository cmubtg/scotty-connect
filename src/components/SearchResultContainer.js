import React from 'react'
import SearchResult from './SearchResult'

const SearchResultContainer = () => {
    const ContainerStyles = {
        layout: {
            display: "flex",
            margin: "4rem",
            padding: "1rem",
            height: "1000px",
            width: "100%",
            border: "1px solid #FF000000"
        }
    }
  return (
    <div style={ContainerStyles.layout}>
        <SearchResult data={"11"}/>
    </div>
  )
}

export default SearchResultContainer