import React from "react";
import imgg from "./5987424.png"



 class Person extends React.Component{
    constructor(){
    super()
    this.state={
        fullName : "Mohamed riahi",
        bio : "Aspiring developer and development student. Passionate about coding, learning, and building innovative solutions. 🚀 #TechEnthusiast #CodingJourney",
        profession : "Developpeur Fullstack ",
        imgSrc :imgg ,
        timer : 0    
    }
    }
    componentDidMount (){
        setInterval(()=>(this.setState({timer:this.state.timer + 1}) ),1000)
    }

render() {
    
    return(
        <>
         
             <h1>{this.state.fullName}</h1><br/>
             <h2>{this.state.profession}</h2><br/>
             <h3>{this.state.bio}</h3><br/>
             <img src={this.state.imgSrc} alt="avatar" /><br/>
             <p>{this.state.timer}</p>
        

        </>
      
    )
}}
;

export default Person