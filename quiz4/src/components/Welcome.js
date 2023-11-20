import React from 'react';
import Button from 'react-bootstrap/Button';
import welcomeImg from '../assets/images/div.png';
import ToolsImg from '../assets/images/div (1).png';
import ArrowImg from '../assets/images/a_after.png';

function Welcome() {
  return (
    <>
    <div className='welcome' style={{backgroundColor:'#FFF0EC'}}>
      <div className="row" style={{paddingTop:'30px', paddingBottom:'40px'}}>
        <div className="col col-sm-12 col-md-6 col-lg-6" style={{ paddingLeft:'100px'}}> 
            <h1 style={{paddingLeft:'80px'}}> Brainstorm </h1>
            <h2 style={{paddingLeft:'80px'}}> your book </h2>
            <h2 style={{paddingLeft:'80px'}}> easily. </h2>
            <p style={{color:'gray', paddingLeft:'80px'}}> World-class companies use Writealy </p>
            <p style={{color:'gray', paddingLeft:'80px'}}> AI writing platform to unlock </p>
            <p style={{color:'gray', paddingLeft:'80px'}}>brainstorming for publishing a book. </p>
            <Button size="lg" style={{marginLeft:'80px', backgroundColor:'#FFF0EC', color:'black', borderColor:'black', borderRadius:'30px'}}>
                <b>Request a demo</b>
            </Button>
            <Button size="lg" style={{backgroundColor:'#EB7A65', color:'white', borderColor:'black', borderRadius:'30px', marginLeft:'10px'}}>
                <b>Try for free</b>
            </Button>
        </div>
        
        <div className="col col-sm-12 col-md-6 col-lg-6" style={{textAlign:'center'}}>
            <img src={welcomeImg} alt='welcomeimage' width={400} height={250}/>
            <p style={{marginTop:'30px'}}> <b> Watch the product overview</b> 3 min </p>
        </div>
      </div>

      <div className='services' style={{backgroundColor:'#EB7A65', paddingTop:'30px', paddingBottom:'30px', textAlign:'center'}}>
            <p> <b>The world’s most effective content teams use Writer </b>
            <img src={ArrowImg} alt='welcomeimage' style={{marginLeft:'10px', backgroundColor:'white', borderRadius:'360px'}} width={30} height={30} />
            </p>
            <img src={ToolsImg} alt="providedtools" />
      </div>

    </div>
    </>
  );
}

export default Welcome;