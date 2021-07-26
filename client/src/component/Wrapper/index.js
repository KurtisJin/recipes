import React from "react";
import "./style.css";
import { makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles({
  page: {
    width: '100%',
  },
})

function Wrapper({children}) {
  const classes = useStyles();
  return (

    <div>
        <div className={classes.page}>
          {children}
        </div>

    </div>

  ) 

}



export default Wrapper;
