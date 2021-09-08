import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";

const useStyles = makeStyles({
    container:{
        marginTop: "5%",
    },
    paper:{
        paddingLeft: "10px",
        borderRadius: "0",
        border:"none"
    },
    section: {
        paddingBottom: "100px",
        minHeight: "1000px"
    },
      test:{
        border: "none"

    },
    
    title:{
        fontWeight: "bold",
        textAlign: "left",
    },
    postInfoDate:{
        fontSize: "18px",
        color: "grey"
    },
    postInfoUser:{
        fontSize: "20px"
    },
    postInfoGrid:{
        borderBottom: "0.5px solid grey",
    },
    content:{

    },
});

const text = "asf sdsad asdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas dfafasf asdasdsa das dsad sadas das sad sad sa " +
" asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas " +
" asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas "+
" asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas "+
" asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas "+
" asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas "
+ "asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas asdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdasasdas";
 


const Post = () => {
    const classes = useStyles();
    return(
        <section className={classes.section}>

            <Container maxWidth="lg" className={classes.container}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={0} >
                <Grid item xs={12}>
                    <Paper className={clsx(classes.title, classes.paper)}><Typography variant="h2">Title </Typography></Paper>
                </Grid>
                <Grid item xs={12}> 
                    <Paper className={clsx(classes.postInfoGrid, classes.paper)}><Typography variant="h5" className={classes.postInfoDate}>09/08/2021</Typography></Paper>
                    <Paper className={clsx(classes.paper)}><Typography variant="h5" className={classes.postInfoUser}>username </Typography></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={clsx(classes.content, classes.paper)}><Typography variant="h6">{text}</Typography></Paper>
                </Grid>

            </Grid>
            </Container>
        </section>
    );
};

export default Post;