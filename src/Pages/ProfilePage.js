import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../component/Header/Header';
import { FormBtn, Search } from '../component/Form/Index.js';
import ButtonBaseContainer from '../component/ButtonBaseContainer/ButtonBaseContainer.js';
import API from '../utils/API'
import Footer from '../component/Footer/Footer';

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







// function handleInputChange(event) {
//     setFormObject({name, value} = event.target);
//     setFormObject({...formObject, [name]: value})
// }


export default function ProfilePage() {
    useEffect(() => {
        SearchRecipes()
    }, [])

    const [receipes, setRecipes] = useState([]);
    const [formObject, setFormObject] = useState({
        title: " ",
        name: "",

    })

    function SearchRecipes() {
        API.getRecipe()
            .then(res =>
                setRecipes(res.data),
                // console.log(res.data)
            )
            .catch(err => console.log(err))
    }

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Header />
            <form>
                <Search
                    // onChange={handleInputChange}
                    placeholder="Type in your search"
                />
                <FormBtn
                 onClick={SearchRecipes}
                />
            </form>
            <div className={classes.secondary}>
                <ButtonBaseContainer />
            </div>
            <Footer />
        </div>


    )
}



