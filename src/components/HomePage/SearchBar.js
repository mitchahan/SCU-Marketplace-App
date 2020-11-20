/* @author Beau Burnight
 * @lastModifiedBy Griffin Langsdorf
 * Description: This the homepage. Expected functionality includes the nav bar, a search par for producs, and a button to create a new listing.
 */

import React from 'react'
import ProductDetails from '../../test-data/ProductDetails'

const SearchBar = ({input:keyword,onChange:setKeyword}) => {
  const BarStyling = {width:"40rem", background:"#F2F1F9", border:"solid", padding:".5rem", float:"left"};
  return(
    //search bar
    <div className = "base-container">
      <input style={BarStyling}
      key="random1"
      value= {keyword}
      placeholder={"Search Product"}
      //onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
