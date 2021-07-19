import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10%',
        height: '45vh',
    }
}));


export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }} bgcolor="text.secondary" color="white">
                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Kurtis</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Github
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contact Us
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Private Policy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Ryan</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Github
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contact Us
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Private Policy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Stephen</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Github
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contact Us
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Private Policy
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        Copy Write by Group3 Project 3 &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}