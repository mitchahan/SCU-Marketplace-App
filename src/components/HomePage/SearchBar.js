/* @author Beau Burnight
 * @lastModifiedBy Beau Burnight
 * Description: This the homepage. Expected functionality includes the nav bar, a search par for producs, and a button to create a new listing.
 */

import React from 'react'
import ProductCard from './ProductCard.js';

const SearchBar = ({input:keyword,onChange:setKeyword}) => {
  const BarStyling = {width:"40em", backround:"#F2F1F9", border:"solid", padding:".5em", float:"left"};
  return(
    //search bar
    <input style={BarStyling}
    key="random1"
    value= {keyword}
    placeholder={"Search Product"}
    //onChange={(e) => setKeyword(e.target.value)}
    />

  )
}

export default SearchBar
