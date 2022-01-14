import React ,{useState} from 'react'
import styled from "styled-components"
import {AiOutlineArrowUp} from 'react-icons/ai';
export default function ScrollToTop() {
    const [scrollstate,setscrollstate] = useState(false);
    const toTop = () => {
        window.scrollTo({top:0});
    };
    window.addEventListener("scroll",()=>{
        window.pageYOffset > 200 ? setscrollstate(true) : setscrollstate(false);
    });
    return (
        <ToTop onClick = {toTop} scrollstate = {scrollstate}>
        <AiOutlineArrowUp/>
        </ToTop>
    );
}


const ToTop = styled.div`
display: ${({scrollstate})=>scrollstate ? "block" : "none"};
position: fixed;
cursor: pointer;
z-index: 10;
bottom: 1rem;
right: 2rem;
background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
border-radius: 2rem;
padding: 1rem 1.15rem;
svg{
    font-siz : 1.5rem;
    color: white;
    transition : 0.6s ease-in-out;

}
&:hover{
svg{
    transform : scale(1.8);
    
}
}
`;