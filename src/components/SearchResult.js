import React from 'react';
import david from '../images/team/david.jpg';
import blank from '../images/searchResults/blankStar.png';
import filled from '../images/searchResults/filledStar.png';
import '../css/searchResult.css';

const SearchResult = ({data}) => {
  function changeTofilled(event) {
    event.preventDefault();
    event.stopPropagation();
    let blankStar = document.getElementById("star");
    if (blankStar.getAttribute('src') === blank) {
      blankStar.setAttribute('src', filled);
    } else {
      blankStar.setAttribute('src', blank);
    }
  }

  return (
    <>
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
        <img id="star" src={blank} alt="BlankStar" className='searchResults_star' onClick={changeTofilled}/>
      </div>
    </>
  )
}

export default SearchResult;
