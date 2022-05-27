import logo from '../../logo.svg';
import styled from 'styled-components';


const Top = styled.div`
text-align: center;

`;
const Header = styled.header`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;
const A = styled.img`
height: 40vmin;
pointer-events: none;


@media (prefers-reduced-motion: no-preference) {
 
    animation: App-logo-spin infinite 20s linear;
  
}

`;
const B = styled.a`
 color: #61dafb;
`;


function ClsWork() {

  return (
  
    <Top >
    
    <Header >
      <A src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      
      <B
       
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </B>
    </Header>
  </Top>
  );
}

export default ClsWork;
