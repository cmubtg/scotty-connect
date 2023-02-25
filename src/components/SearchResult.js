import React from 'react'
import david from '../images/team/david.jpg'
import '../css/searchResult.css'

const SearchResult = ({data}) => {
  return (
    // Individual person
    <div className='searchResults_card'>
        <img src={david} alt="David Photo" className='searchResults_img'/>
        <div className='searchResults_info'>
          <h2 className='searchResults_name'>{data.name}</h2>
          <h4>
            {data.major.map((major, index) => {
                  return (
                    <span className='searchResults_major'>{major}  </span>
                  )
              })}
          </h4>

          
        </div>
    </div>
        
  )
}

export default SearchResult