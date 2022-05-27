import React from 'react'
import styles from 'styled-components';
const Wrapper = styles.div`
padding :2rem;
border:1px solid ;
border-color :red;
h1{
  color:blue;
}
h2{
color:gray;

@media all and (max-width:620px)
{
  color:red;
}
}`;


const A = styles.a`
text-decoration:none;
font-size :20px;
color:${(props)=>(props.col ==="red" ? "yellow":"green" )}
`;
const B = styles.h3`
color:green;
`

export default function Styletome() {



  return (
    <div>
<Wrapper>

<A col="yellow" href="https://www.google.com">google</A>
<h1>Hello Coe Sandboock</h1>
<B>Hi im here</B>
<h2>Start editing to  see some magic happens</h2>
</Wrapper>


    </div>
  )
}
