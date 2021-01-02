import React from 'react';
import styled from 'styled-components';
// import {PopUp} from './component/heading';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// const popUp=function(image){
//     if(PopUp.styled.display==="none"){
//         image.onclick=function(){
//             PopUp.styled.display==="block";
//         }
//     }
// };


export const UnsplashImage = ({ url, key }) => {
  return (
    <>
      <Img key={key} src={url} alt="" />
     {/* {popUp()} */}
    </>
  )
}