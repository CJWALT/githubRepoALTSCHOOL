import React from 'react'

const PageNotFound = () => {
  return (
    <>
        <div className="container">
          <div className="err__pg-wrap">
          <div className="err__pg--txt">
            <h3>404 PAGE <br/> 
              not found</h3>
          <p>What you're looking for is not here.</p>  
           
          </div>
            
            <img src="img/err.png" className="err__png" alt="404 error" />
          </div>
         
        </div>

    </>
  )
}

export default PageNotFound