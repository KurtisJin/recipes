import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../component/Header/Header';
import { FormBtn, Search } from '../component/Form';
import ClickByType from '../component/ClickByType';
import API from '../utils/API'

const useStyles = makeStyles((theme) => ({
    // root: {
    //     minHeight: '100vh',
    //     backgroundImage: `url(${process.env.PUBLIC_URL + "cooking3.jpg"})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: 'cover',
    // },
    searchbar: {

    }


}));

function Receipes() {
    const [receipes, setReceipes] = useState([]);
    const [formObject, setFormObject] = useState({
        title:" ",
        name: "",

    })
}

useEffect(() => {
    SearchRecipes()
}, [])

function SearchRecipes() {
    API.getReceipes()
    .then(res =>
        setRecipes(res.data)
        )
        .catch(err => console.log(err))
}

function handleInputChange(event) {
    setFormObject({name, value} = event.target);
    setFormObject({...formObject, [name]: value})
}


export default function ProfilePage() {

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Header />
            <form>
                <Search
                onChange={handleInputChange}
                placeholder="Type in your search"
                />
                <FormBtn 
                    onClick={handleFormSubmit}
                />
            </form>
            <div className={classes.secondary}>
                <ClickByType />
            </div>
            <Footer />
        </div>


    )
}



