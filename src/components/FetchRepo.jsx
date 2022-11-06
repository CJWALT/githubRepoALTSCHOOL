import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import RepoData from "./RepoData";
import ReactPaginate from "react-paginate"


const FetchRepo = () => {

  
    const [repo, setRepo] =useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{ 

        const fetchRepo = async ()=> { 
            try{ 
              setLoading(true)
                const response = await fetch(`https://api.github.com/users/cjwalt/repos?page=1&per_page=2`)
                const data = await response.json(); 
                setLoading(false)
                setRepo(data)
            }catch(err){ 
                if(err){ 
                    throw new Error('something went wrong')
                }
                setLoading(false)
            }
        }
        fetchRepo();
    }, [])
    
    const fetchRepoPg = async (currentPage) =>{ 
      const res = await fetch (`https://api.github.com/users/cjwalt/repos?page=${currentPage}&per_page=2`)
      const data = await res.json(); 
      return data
    };

    const handlePageClick = async (data) => { 
      let currentPage = data.selected + 1
      const repoFromServer = await fetchRepoPg(currentPage)
      setRepo(repoFromServer)
    }

    return (
    <>
      <div className="container">
        <h4>repositories</h4>
        <div className="repos__wrap">
            
          {loading ? <p className='loading'>Loading...</p> :repo.map((repo)=>{
            return(
                <article className="repo" key={repo.id}>
                  <div className="repo__name--privacy" >
                    <Link to={`/FetchRepo/RepoData/${repo.id}`} className="repo__name">
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
          </div>
          <ReactPaginate 
                previousLabel = {'prev'}
                nextLabel = {'next'}
                breakLabel = {'...'}
                pageCount = {11}
                marginPageDisplayed={5}
                pageRangeDisplayed = {3}
                onPageChange={handlePageClick}
                containerClassName={'pagination__wrap'}
                pageClassName={'pg__link'}
                pageLinkClassName={'pg__link'}
                previousClassName={'pg-btn prev'}
                previousLinkClassName={'pg__link'}
                nextClassName={'pg-btn next'}
                nextLinkClassName={'pg__link'}
                breakClassName={'pg-break'}
                breakLinkClassName={'pg__link'}
                activeClassName={'pg-active'}
                />
        
      </div>
      <Routes>
        <Route path={`/FetchRepo/RepoData/${repo.id}`}  exact element={<RepoData/>} />
      </Routes>    
      </>
  );
};

export default FetchRepo;
