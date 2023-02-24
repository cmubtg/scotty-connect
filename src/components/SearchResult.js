import React from 'react'

const SearchResult = ({data}) => {
  const SearchResultStyles = {
    layout: {
      position: 'relative',
      width: '100%',
      height: '100%',

      background: '#FF00000',
      boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.13)',
      borderRadius: '30px'
    },
    image: {
      position:' absolute',
      width: '140px',
      height: '140px',
      left: '147px',
      top: '358px',
      background: '#D9D9D9'
    },
    name: {
      position: 'absolute',
      width: '126px',
      height: '36px',
      left: '314px',
      top: '392px',

      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '30px',
      lineHeight:'36px',
      /* identical to box height */
      color: '#000000'
    }, 
    major: {
      position: 'absolute',
      width: '822px',
      height: '30px',
      left: '314px',
      top: '433px',

      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontHeight: '400',
      fontSize: '25px',
      lineHeight: '30px',
      /* identical to box height */
      color: '#000000'
    }
  }
  
  return (
    // Individual person
    <div style={SearchResultStyles.layout}>
        <img href="" style={SearchResultStyles.image}/>
        <h1 style={SearchResultStyles.name}>Ire</h1>
        <h1 style={SearchResultStyles.major}>Information Systems</h1>
    </div>
        
  )
}

export default SearchResult