import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import RepoData from "./RepoData";

const FetchRepo = () => {

    const [repo, setRepo] =useState([]);

    useEffect(()=>{ 

        const fetchRepo = async ()=> { 
            try{ 
                const response = await fetch(`https://api.github.com/users/cjwalt/repos?page=1&per_page=2`)
                const data = await response.json(); 
                // const {result} = data
                console.log(data)
                setRepo(data)
            }catch(err){ 
                if(err){ 
                    throw new Error('something went wrong')
                }
            }
        }
        fetchRepo();
    }, [])
    



    return (
    <>
      <div className="container">
        <h4>repositories</h4>
        <div className="repos__wrap">
            
          {repo.map((repo)=>{
            return(
                <article className="repo">
                <div className="repo__name--privacy">
                  <Link to="/FetchRepo/RepoData" className="repo__name">
                    {repo.name}
                  </Link>
                  <div className="repo__privacy">{repo.private ? "private" : "public"}</div>
                  </div>
                  <div className="repo__des">
                  <p>{repo.description}</p>
                </div>
                <small className="repo__lang">{repo.language}</small>
                {/* <div className="repo__fav"> <FaStar /> </div> */}
               
                  </article>
                  
                  )})}
            
                  
{/* 
                  </div>
                   <div className="repo__privacy">public</div>
                </div>
    
                <div className="repo__des">
                  <p>A single webpage for a furniture company</p>
                </div>
                <small className="repo__lang">HTML</small>
                <div className="repo__fav"> <FaStar /> </div>
               </article>
               */}
               {/* <article className="repo">
                 <div className="repo__name--privacy">
                   <Link to="/FetchRepo/RepoData" className="repo__name">
                     Fdassignment
                   </Link>
                   <div className="repo__privacy">public</div>
                 </div>
    
                 <div className="repo__des">
                   <p>A single webpage for a furniture company</p>
                 </div>
                 <small className="repo__lang">HTML</small>
                 <div className="repo__fav"> <FaStar /> </div>
               </article> 
             */}
          
        </div>
        <div className="pagination">
            <ul className="pagination__wrap">
                <li> <a href="#" className="pg__link prev pg-btn"> prev</a> </li>
                <li> <a href="#" className="pg__link active">1</a>  </li>
                <li> <a href="#" className="pg__link">2</a>  </li>
                <li> <a href="#" className="pg__break pg__link">..</a></li>
                <li> <a href="#" className="pg__link">5</a>  </li>
                <li> <a href="#" className="pg__link">6</a>  </li>
                <li> <a href="#" className="pg__link next pg-btn">next</a>  </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/RepoData" element={<RepoData />} />
      </Routes>    
      </>
  );
};

export default FetchRepo;
