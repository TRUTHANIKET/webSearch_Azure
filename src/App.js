import { useState } from "react";
import Search from "./components/Search";
import './index.css'

function App() {
  const [query,setQuery]=useState('')
  const [searchresult,setSearchResult]=useState([])
  const [totalres,setTotalRes]=useState('')
  const [isLoaded,setisLoaded]=useState(false)
  const searchTrigger=async(e)=>{
    e.preventDefault();
    const res=await fetch(`https://api.bing.microsoft.com/v7.0/search?q=${query}`,{
      method:"GET",
      headers:{
        'ocp-apim-subscription-key':process.env.REACT_APP_AZURE_SUB_KEY
      }
    })
    const data=await res.json(res)
    setisLoaded(true)
   await  setSearchResult(data.webPages.value)
   await  console.log(data.webPages.value)
    await setTotalRes(data.webPages.totalEstimatedMatches)
  }

  return (
  
   <>
  {totalres &&  <p>Total Results Found: {totalres}</p>}
   <center>
   <h1>Sorry NoName</h1>
   <form onSubmit={searchTrigger}>
    <input className="inputbox" type="text" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Enter your Search Query here .."></input><br></br>
    <button className="buttonbox" type="submit"><div className="searchmetext">Search</div> <div className="searchicon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></div></button>
   </form>
   {!isLoaded && <><p>Nothing's here you may search something ... </p>  <img src="https://i2.wp.com/recommendmeanime.com/wp-content/uploads/2018/10/doubt-manga.jpg?resize=616%2C473&ssl=1" height="220px"></img></>}
   
 {searchresult && <Search searchresult={searchresult}/>}
 <br></br>
 <br></br>
 <br></br>

 <br></br>
 <hr></hr>
 
 <p>AniketSingh©2023.All rights reserved</p>
   </center>
   </>
  );
}

export default App;
