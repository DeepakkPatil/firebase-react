import React, { useEffect } from 'react';
import { firestore } from '../firebase';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components' ;

//it is compoenent now we can use it anywhere
const BlogHeading =styled.h1` 

  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`

const Subtitlep =styled.p`
  font-size: 13px;
  color : gray ;

`




function Home() {
  const [posts, setPosts] = useState([]);


    useEffect(() => {
      
      firestore.collection('posts').get().then((snapshot)=>{

        const posts= snapshot.docs.map((doc)=>{

            return {
                id :doc.id ,
                ...doc.data()
            }
        })
     console.log(posts) ;
     setPosts(posts) ;
      })
    
     
    }, [])
    


  return (
    <div className="home">
      <BlogHeading>Tech Blog</BlogHeading>
      <div id="blog-by">Deepak</div>

      { posts.map((post, index) => {return<div className="post" key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
                
            </Link>
            <Subtitlep>{post.subTitle}</Subtitlep>
        </div>})}
    </div>
  );
};

export default Home;
