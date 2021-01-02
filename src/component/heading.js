import React from 'react'
import styled from 'styled-components';
import Backgroud from './image.jpg';

const Background=Backgroud;

const Main=styled.html`
        
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    overflow-x: hidden;
}
nav{
    position: fixed;
    width: 100%;
    height: 10vh;
    background-color: #fff;
    z-index: 1;
}
nav ul{
    display: flex;
    float: right;
    margin: 0px 100px 0px 0px;
}
nav ul li{
    list-style: none;
    margin:20px 30px 0px 0px;
    color: #000000;
}
a{
    text-decoration: none;
    color: #000000;
    font-weight: bold;
}
a:hover{
    color: #000000;
}
#home{
    background:url("./image.jpg") no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 100vh;
}
.text{
    color:#ffffff;
    position: relative;
    top: 150px;
    left:200px;
}
.search{
    height: 10vh;
    width: 60vw;
    border-radius: 3px;
    border: none;
}
.search-logo{
    height: 10vh;
    background-color: #fff;
    color: #000000;
    
}
.icons{
    position: absolute;
    top: 76%;
    left: 1%;
    margin: 0px;
    
    background-color: #ffffff;
    color: #000000;
}
.input-field{
    width:100%;
    height: 90%;
    padding: 30px;
}
.btn{
    background-color: #ffffff;
    color: #000000;
    height: 35%;
    position: absolute;
    top: 65%;
    border: 1px solid grey;
    left: 52%;
}
#collection{
    background-color: #ffffff;
    display: flex;
    position: sticky;
    z-index: 0;
    height: 10vh;
    width: 100%;
}
#collection p{
    margin: 30px;
    font-weight: bold;
}
.icon{
    display:none;
}
@media screen and (max-width: 600px) {
    nav{
        position: fixed;
        width: 100%;
        height: 10vh;
        background-color: #fff;
        z-index: 1;
       
    }
    nav ul{
        display: inline;
        float: right;
        position:relative;
        top:50%;
        left:-20%;
        margin: 0px 100px 0px 0px;
        display:none;
        
    }
    nav ul li{
        list-style: none;
        margin:20px 30px 0px 0px;
        color: #000;
        width:100%;

    }
    a{
        text-decoration: none;
        color: #000000;
        font-weight: bold;
    }
    a:hover{
        color: #000000;
    }
    .icon{
        display:block;
        margin:0px 0px 0px 10px;
        position:relative;
        top:10%;
    }
    #home{
        background:url("./image.jpg") no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        width: 100%;
        height: 100vh;
    }
    .text{
        color:#ffffff;
        position: relative;
        top: 150px;
        left:8%;
    }
    .search{
        height: 4vh;
        position:relative;
        
        width: 90vw;
        border-radius: 3px;
        border: none;
    }
    .search-logo{
        height: 4vh;
        background-color: #fff;
        color: #000000;
        
    }
    .icons{
        position: absolute;
        top: 123%;
        left: 4%;
        margin: 0px;
        
        background-color: #ffffff;
        color: #000000;
    }
    .input-field{
        width:100%;
        height: 90%;
        border-radius:10px;
        border:1px solid grey;
        padding: 30px;
    }
    .btn{
        background-color: #ffffff;
        color: #000000;
        height: 35%;
        position: absolute;
        top: 65%;
        border: 1px solid grey;
        left: 52.5%;
        display:none;
    }
  }



        `;

 export const PopUp=styled.div`
        #popUp{
            width:80%;
            position:absolute;
            top:115%;
            display:flex;
            left:400%
            align-items:center;
            justify-content: center;
            height:80vh;
            background-color:#fff;
            margin-left:10%;
            display:none;
        }
        #popUp h1{
            font-weight:200;
            display:inline-block;
            width:150%;
            height:10vh;
            position:relative;
            left:40%;
        }
        
        .first input{
            height:9%;
            width:100%
            position:relative;
            margin-left:65%;
            margin-top:40%;
        }
        
        .first button{
            height:7%;
            width:60%;
            position:relative;
            border-radius:5px;
            top:-8%;
            background-color:#800080;
            color:white;
        left:170%;
        }
        
        .first label{
            position:relative;
            left:67%;
            top:17%;
        }
        .commentsInput{
            width:170%;
            height:20%;
            
            padding:0px 24%;
            position:relative;
            top:45%;
            right:22%;
        }
        
        #comment{
            position:relative;
            top:38%;
            right:10.5%
        }
        .clickImage{
            border:1px solid black;
           height:38vh;
           position:relative;
           top:25%;
           padding:0% 25%;
           width:0%;
           left:11%;
        }
        `;

export const Heading = () => {
    return (
      <Main><head>
     
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  
    
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" 
      rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" 
      crossOrigin="anonymous" />
      <link rel="stylesheet"
          href= 
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 
      <link href="./style.css" rel="stylesheet" />
      <script src="./script.js" defer></script>
      <script
    src="https://code.jquery.com/jquery-3.5.1.slim.js"
    integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM="
    crossOrigin="anonymous" defer></script>
      <title>Hello, world!</title>
    </head>
    <body>
      
      <nav>
          <ul id="mylinks">
              <li className="right-option" id="links"><a href="#home">Home</a></li>
              <li className="right-option" id="links"><a href="#home">Collection</a></li>
              <li className="right-option" id="links"><a href="#home">Explore</a></li>
  
          </ul>
          <a className="icon" onClick={function myFunction() {
  const toolBar = document.getElementById("mylinks");
   if(toolBar.style.display === "none") {
    toolBar.style.display = "block";
  } else {
    toolBar.style.display = "none";
  }
// toolBar.style.display === "none"?toolBar.style.display = "block":toolBar.style.display = "none";
}}>
    <i className="fa fa-bars"></i>
  </a>
      </nav>

  <div id="home" style={{ backgroundImage:`url(${Background})` }}>
      <div className="text">
          <h1>Unsplash</h1>
          <p>Beautiful, free Photos </p>
          <div className="search">
          <i className="fa fa-search icons"> </i>
          <input className="input-field " type="text" placeholder="Search" />
          <button className="btn">Search</button>
          </div>
      </div>
  </div>
  <div id="collection">
    <p>Trending</p>
    <p>New</p>
  </div>
  {/* <div id="photo">
    <div id="photo1"> 
  
    </div>
    <div id="photo2"></div>
    <div id="photo3"></div>
  </div> */}
  <PopUp>
  <div id="popUp">
      <h1>Enter Your Comments</h1>
      <div className="clickImage">

      </div>
      <div className="first">
          <label>Name</label>
      <input type="text" className="nameInput" />
      <button>Submit</button></div>
      <label id="comment">Comment</label>
      <input type="text" className="commentsInput" />
  </div> </PopUp>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>

      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossOrigin="anonymous"></script>

    </body></Main>
    )
}
