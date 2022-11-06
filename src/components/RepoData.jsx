import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';

const RepoData = () => {

  const {repoId} = useParams();
  console.log(repoId);  
  return (
    <>
      <p>hey</p>
      
    </>
  )
}

export default RepoData;