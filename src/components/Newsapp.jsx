import React from 'react'
import Card from './Card'
import NavBar from './NavBar'
const Newsapp = () => {
  const API_KEY = "1b3886ba52d1472dac5314501faa50ea";
  const [inputSearch,setInputSearch]=React.useState('india');
  const [fetchedData,setFetchedData]=React.useState(null);
  const getData=async()=>{
    const response=await fetch(`https://newsapi.org/v2/everything?q=${inputSearch}&apiKey=${API_KEY}`);
    const data=await response.json();
    console.log(data.articles);
    setFetchedData(data.articles);
  }

  const handleInput=(e)=>{
    console.log(e.target.value);
    setInputSearch(e.target.value);
  }
  const inputBtn=(e)=>{
    console.log(e.target.value);
    setInputSearch(e.target.value);
    getData();
  }
  React.useEffect(()=>{
    getData ();
  },[]);

  /**
   Why We Use useEffect Hook
    Data Fetching: In your Newsapp component, you use the useEffect hook to fetch 
    data from an API when the component mounts. This ensures that the data is 
    fetched as soon as the component is rendered.
   */
  return (
    <div>
      <NavBar handleInput={handleInput} getData={getData} inputSearch={inputSearch}/>
      <marquee direction="left">Stay Updated With Minute News</marquee>
      <div className="categoryBtn">
        <button onClick={inputBtn} value="politics">Politics</button>
        <button onClick={inputBtn} value="sports">Sports</button>
        <button onClick={inputBtn} value="entertainment">Entertainment</button>
        <button onClick={inputBtn} value="health">Health</button>
      </div>

      
      <div>
        <Card  data={fetchedData}/>
      </div>
    </div>
  )
}

export default Newsapp
