import React from 'react'
import Footer from './components/Footer'

function Iframe({ el }) {
  return (
    <div style={{ display:"flex", alignItems: 'center', marginLeft:"10px", marginTop:"10px"}}>

     {" "}
        {
          <iframe
            width="200"
            height="120"
            src={el.src}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen style={{ borderRadius: "10px", margin: "10px" }}>
          </iframe>}


          <div>
          




        <div> {el.name  } </div></div>
      </div>
  )
};

export default Iframe