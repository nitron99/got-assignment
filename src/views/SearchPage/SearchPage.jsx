import React, {useState, useEffect} from 'react';
import "./styles.css";
import InputField from '../../components/FormElements/InputField/InputField';

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    setTimeout(() => {
      setLoading(true)
    },2000);
  },[query])

  return (
    <div className='search-container'>
      <InputField 
        name="query"
        value={query}
        placeHolder={"Enter Search Query"}
        onChange={(e) => {setQuery(e.target.value); setLoading(false)}}
         />
      {query !== "" && 
        <div className='homeCard item3 skeleton'>
         {loading && <img src={"http://cdn.shopify.com/s/files/1/0510/7489/articles/MachinCreationsInc-seotool-28081-TheDifferentTypes-BlogBanner1_1024x1024.jpg?v=1576163202"} alt="" id='homeImage'/>}
       </div>
      }
    </div>
  )
}

export default SearchPage