import styled from "styled-components";

const HeaderWrapper = styled.div`
     background-color: #24292e;
     display: flex;
     position:fixed;
     width:100%;
     align-self: center;
     height: 2.5rem;
     align-items:center;
     z-index:1;
     padding:0.5em;

     img{
          width:2rem;
          cursor: pointer;
          height:2rem;
     }
`

export default HeaderWrapper;