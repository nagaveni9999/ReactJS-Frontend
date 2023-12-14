import React from "react";
export default function Home()
{
    return(
        <div class="mt-5 pt-5">
            <div
        style={{
          height: '85vh',
          width: '100%',
          overflow: 'hidden',
          background: 'url("images/lv.jpg")',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'leftcenter',
          alignItems: 'center',
        }}
        
      ><img src="https://i.ytimg.com/vi/2mRlUWNIPzo/maxresdefault.jpg"height="200" width="300"></img>
        <h1
          style={{
            fontFamily: 'poppins',
            fontSize: '2.5rem',
            color: '#FFDDD0',
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            padding: '15px',
            fontWeight: 'bold',
          }}
        >
         TO THE FINEST GARMENT STORE
        </h1>
        
      </div>
            <div>            </div>
        </div>
    )
}
