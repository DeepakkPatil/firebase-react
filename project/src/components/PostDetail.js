import React from 'react'
 import { useState,useEffect } from 'react'
import { firestore } from '../firebase'

import Radium from 'radium' ;

import { useParams  } from 'react-router-dom'

function PostDetail() {
  
  const [post, setPost] = useState({})
  const { postId} =useParams() ;

    useEffect(() => {
      
      firestore.collection('posts').doc(postId).get()
      .then((snapshot)=>{


        console.log(snapshot.data()) ;
        setPost(snapshot.data()) ;
      })

      }
    
     
    , [])
    


  return (
    <div className='post-detail'>

        <h1>{post.title}</h1>
          <p>{post.content}</p>
    </div>
  )
}

export default PostDetail ;