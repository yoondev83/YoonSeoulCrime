import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    container:{
        marginTop: "5%",
        backgroundColor:"#fff",
    },

    section: {
        paddingBottom: "100px",
      }
});

const Post = () => {
    const classes = useStyles();
    return(
        <section className={classes.section}>

            <Container maxWidth="lg" className={classes.container}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Typography variant="h2">Title </Typography></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}><Typography variant="h5">username </Typography></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}><Typography variant="h5">date </Typography></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Typography variant="h6">Content </Typography></Paper>
                </Grid>

            </Grid>
            </Container>
        </section>
    );
};

export default Post;