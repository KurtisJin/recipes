import React from "react";
import words from "./words";
import Typed from 'typed.js';
import { classes } from "istanbul-lib-coverage";
import "./style.css"
// import { IconButton } from "@material-ui/core";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpendArrow from '../ExpendArrow/ExpendArrow'

class Typing extends React.Component {
  
  componentDidMount() {

    const options = {
    strings: words,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: "|",
           
          };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
        }
  componentWillUnmount() {
          // Please don't forget to cleanup animation layer
  this.typed.destroy();
    }
        
    render() {
       return (
        <div className="landingPage">
          <br>
          </br>
          <br>
          </br>
          <br>
          </br><br>
          </br><br>
          </br><br>
          </br><br>
          </br><br>
          </br><br>
          </br>
          <p className="intro">Welcome! You can:
          </p>
          <span className="auto-type"
            style={{ whiteSpace: "pre" }}
            ref={(el) => {
              this.el = el;
            }}
          />
          {/* <div className="expend"> */}
           
              
                <ExpendArrow />
              
           
          {/* </div> */}
        </div>
      );
      
    }
}

export default Typing;