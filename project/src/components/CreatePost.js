import React, { useState } from 'react'
import { firestore } from '../firebase';
import  { useFormInput} from '../hooks' ;


import styled, { css } from 'styled-components';

const StyledButton=styled.button`


 height: 33px;
  background: ${(props)=>props.bgcolor};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;

  ${(props)=>props.primary && css`
  height: 33px;
  background: #4caf50;
  border: 1px solid gray;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
`}

`

function CreatePost() {

    const title= useFormInput('') ;
    const subTitle =useFormInput('') ;
    const content = useFormInput('') ;


    function handleSubmit(e)
    {
        e.preventDefault();

        console.log('title',title.value) ;
        console.log('subTitle',subTitle.value) ;
        console.log('content',content.value) ;


    firestore.collection('posts').add({

        title:title.value,
        content:content.value,
        subTitle:subTitle.value,
        createdAt :new Date()
    })

    }


  return (
    <div className='create-post'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-field'>
                <label >Title</label>
                <input  {...title} required/>
            </div>
             <div className='form-field'>
                <label >Subtitle</label>
                <input {...subTitle} required/>
            </div>
             <div className='form-field'>
                <label >Content</label>
                <textarea {...content} required fixed></textarea>
            </div>
             <StyledButton primary>Create Post primary</StyledButton>
             <hr></hr>
             <StyledButton bgcolor='gray' >Create Post normal</StyledButton>
        </form>
    </div>
  )
}

export default CreatePost ;