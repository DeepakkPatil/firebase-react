import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const StyledLink=styled(Link)`

text-decoration: none;
  color: #9e9e9e;

`

function Navbar() {
  return (
    <div>
            <ul id="nav">
                <li><StyledLink to="/">Home</StyledLink></li>
                   <li><StyledLink to="/create-post">Create Post</StyledLink></li>
            </ul>
    </div>
  )
}

export default Navbar