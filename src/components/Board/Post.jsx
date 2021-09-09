import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import clsx from "clsx";
import BoardList from "./BoardList";

const useStyles = makeStyles({
    container:{
        marginTop: "5%",
    },
    paper:{
        paddingLeft: "10px",
        borderRadius: "0",
        border:"none",
        backgroundColor:"#1f1f1f"
    },
    section: {
        paddingBottom: "100px",
        minHeight: "1000px"
    },
    
    title:{
        fontSize:"40px",
        fontWeight: "bold",
        textAlign: "left",
        color: "#fff",
    },
    postInfoDate:{
        fontSize: "16px",
        color: "grey",
        paddingLeft: "3px"
    },
    postInfoUser:{
        fontSize: "24px",
        color: "#52CDB9",
        paddingLeft: "3px",
        paddingTop:"10px"
    },
    postInfoGrid:{
        borderBottom: "0.5px solid grey",
    },
    content:{
        color:"#6B6B6B"
    },
    Heart:{
        width: "68px",
        height: "80px",
        paddingBottom: 0,
        
      },
      BrokenHeart:{
        width: "60px",
        height: "65px",
        marginTop:"10px"
      },
      iconGrid:{
          textAlign:"right",
          paddingRight: "15px",
        },
        iconGrid2:{
            textAlign:"left",
            paddingLeft: "15px",
      }
});

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate pulvinar risus, auctor luctus ligula congue non. Donec commodo sapien lectus, in auctor metus tempor sed. Sed eleifend vulputate lacus, sed feugiat magna vestibulum a. Sed in erat massa. Nunc luctus magna non posuere aliquet. Etiam rutrum, lectus vel scelerisque sagittis, eros mauris tempor mi, id tempus ex magna eget ex. Duis consequat arcu vel sollicitudin gravida.

Mauris vehicula bibendum lacus, aliquam rutrum magna eleifend eu. Sed porta accumsan fermentum. Nulla placerat accumsan pulvinar. Vestibulum accumsan efficitur gravida. Nunc gravida tincidunt nulla, molestie viverra justo auctor ut. Donec quis venenatis felis, in aliquam justo. In condimentum massa ante, porttitor aliquam nisl fermentum in. Cras euismod diam vitae commodo vehicula. Nunc tincidunt condimentum eros sit amet ullamcorper.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ornare mi eget quam finibus finibus. Vivamus sed tincidunt augue, ut iaculis nulla. Suspendisse eget lobortis erat. Proin elit nisl, tincidunt non feugiat id, ultrices eget leo. Praesent non ante at elit lacinia accumsan a vel lectus. Proin sed velit cursus, pretium justo mollis, aliquam massa. Sed semper semper orci sit amet scelerisque. Sed ultricies hendrerit velit, nec vehicula magna suscipit nec. Sed efficitur enim eu libero varius cursus sed sit amet tellus. Morbi nec accumsan justo.

Suspendisse potenti. Donec in nunc neque. Cras nunc felis, vestibulum vel varius vel, semper ac neque. Aenean eget ultricies nisi. Mauris eget tristique mi. Phasellus placerat massa augue, a semper magna viverra ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vehicula libero ac urna tincidunt fermentum. Nam auctor, dolor non gravida tincidunt, leo erat mattis quam, sed porttitor arcu ipsum sed velit. Cras pulvinar lacus eu velit viverra, quis ultrices tellus convallis. Curabitur accumsan posuere nibh semper iaculis. Sed a nibh lobortis, euismod elit in, mollis velit. Nullam consectetur eros sed condimentum iaculis. Cras et laoreet metus.

Sed non lectus eget diam pulvinar tincidunt id ac est. Vestibulum sit amet diam velit. In rhoncus quam eu feugiat pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean dignissim eros id neque faucibus, eu pharetra quam luctus. Quisque laoreet, eros gravida sollicitudin gravida, risus justo suscipit nulla, non congue quam ex vel nibh. Pellentesque a rhoncus sapien. Integer at malesuada sapien. Curabitur sit amet justo leo.`;


const Post = () => {
    const classes = useStyles();
    //하트는 useReducer로 해볼 것.

    return(
        <section className={classes.section}>

            <Container maxWidth="lg" className={classes.container}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={0} >
                <Grid item xs={12}>
                    <Paper className={clsx(classes.paper)}><Typography variant="h2" className={classes.title}>Thie is the title section </Typography></Paper>
                </Grid>
                <Grid item xs={12}> 
                    <Paper className={clsx(classes.postInfoGrid, classes.paper)}><Typography variant="h5" className={classes.postInfoDate}>09/08/2021</Typography></Paper>
                    <Paper className={clsx(classes.paper)}><Typography variant="h5" className={classes.postInfoUser}>username </Typography></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={clsx(classes.paper)}><Typography variant="h6" className={classes.content}>{text}</Typography></Paper>
                </Grid>
                <Grid item xs={6} className={classes.iconGrid}>
                    <IconButton aria-label="heart">
                        <img className={classes.Heart} src="/icons/heart.png"/>
                    </IconButton>
                </Grid>
                <Grid item xs={6} className={classes.iconGrid2}>
                    <IconButton aria-label="brokenHeart">
                        <img className={classes.BrokenHeart} src="/icons/broken_heart.png"/>
                    </IconButton>
                </Grid>

            </Grid>

            <BoardList />
            </Container>
        </section>
    );
};

export default Post;