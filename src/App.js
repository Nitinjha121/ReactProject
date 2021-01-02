import React, {useState, useEffect} from 'react';
import {Heading} from './component/heading';
import {Loader} from './component/Loader';
import {UnsplashImage} from './component/UnsplashImage';

import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import {PopUp} from './component/heading';
// import logo from './logo.svg';
// import './App.css';

const popUp=PopUp;
const Styles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
}
`;

const WrapperImages = styled.section`
max-width: 70rem;
margin: 4rem auto 4rem auto;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-auto-rows: 300px;

`;


  
function App() {
  const [images, setImage]= useState([]);

useEffect(() => {
  fetchImages() ;},[])

  
function fetchImages (count = 10) {
    const apiRoot = "https://api.unsplash.com";
    // const accessKey = process.env.REACT_APP_ACCESSKEY;
    const accessKey ="-akdvaT9VX9bcdrgriJV1KvjLXN6fMcjHIq7i18TQUM";

    axios
    .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
    .then(res => {
        setImage([...images, ...res.data]);
        // console.log(res.data)
      })
    //   .catch((error) => {
    //     console.warn('Not good man :(');
    // })
  }

  // function randomSize (size) {
  //   size=[full, regular, raw, small, thumb]
  //   const random= Math.floor(Math.random() * size.length);
  //   size[random];
  // }

  // function popUp(image){
  //   image.onclick={
  //    popUp
  // }}

  return (
    <div className="App">
  <Heading/>
  <Styles/>
  <InfiniteScroll dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={<Loader/>}
    >
  <WrapperImages>
  {images.map(image=>(
    <UnsplashImage url={image.urls.thumb} key={image.id}/>)
        )}
  </WrapperImages>

  </InfiniteScroll>
    </div>
  );
}

export default App;
