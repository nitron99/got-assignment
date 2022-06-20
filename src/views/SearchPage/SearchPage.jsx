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
         {loading && <img src={"https://c4.wallpaperflare.com/wallpaper/28/832/21/ultrawide-8k-no-mans-sky-poster-wallpaper-thumb.jpg"} alt="" id='homeImage'/>}
       </div>
      }
    </div>
  )
}

export default SearchPage