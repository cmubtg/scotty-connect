import React from 'react';
import icon from '../images/team/icon.png';
import blank from '../images/searchResults/blankStar.png';
import filled from '../images/searchResults/filledStar.png';
import '../css/searchResult.css';

const SearchResult = ({data, index}) => {
  const starId = `star-${index}`;

  function changeTofilled(event) {
    event.preventDefault();
    event.stopPropagation();
    const star = event.target;
    if (star.getAttribute('src') === blank) {
      star.setAttribute('src', filled);
    } else {
      star.setAttribute('src', blank);
    }
  }

  return (
    <>
      <img src={icon} alt="Photo" className='searchResults_img'/>
      <div className='searchResults_info'>
        <h2 className='searchResults_name'>{data.name}</h2>
        <h4>
          {data.major.map((major, index) => {
            return (
              <span className='searchResults_major' key={index}>{major}  </span>
            )
          })}
        </h4>
        <img id={starId} src={blank} alt="BlankStar" className='searchResults_star' onClick={changeTofilled}/>
      </div>
    </>
  )
}

export default SearchResult;
