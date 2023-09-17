import React from 'react'
import '../styles/style.css'

export default function Search({searchresult}) {
  return (
    <>
     {searchresult.map((res) => {
          return (
           <>
           <div className='main'>
           <a href={res.url}>
            <div className='container'>
                {res.thumbnailUrl && <img src={res.thumbnailUrl} ></img>}
            
            <h2 className="list-group-item" key={res.id} >
              {res.name}
            </h2>
            <a href={res.displayUrl}>{res.displayUrl}</a>
            <p>{res.snippet}</p>
            </div></a></div>
            </>
          );
        })}</>
  )
}
