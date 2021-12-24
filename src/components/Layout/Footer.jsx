import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    footerDiv:{
        padding: "3.6rem 0",
        backgroundColor:"#1f1f1f",
        color: "#284168",
        textAlign: "center",
    },

    icon:{
        width: 50,
        height: 50,
        marginTop: 50,
        margin: "0 1.5rem",
        color: "#fff"
    },

    copyright:{
        paddingTop: "1.8rem",
        fontSize: "1.4rem",
        lineHeight: 1.6,
        color: "#767676",
        marginTop: "auto"
    }
    
}
));


const Footer = () => {
    const classes = useStyles();
    const currentYear = new Date().getFullYear();
    return (
        <footer className={classes.footerDiv}>
        <Grid container direction="row" justifyContent="space-around" alignItems="stretch" spacing={0}>
            <Grid item xs={12} sm={12}>
                <a href="https://www.linkedin.com/in/yoonsuk-chang-577b64125/">
                    <LinkedInIcon className={classes.icon}/>
                </a>
                <a href="https://yoondev83.github.io/Yoon_Portfolio/">
                    <GitHubIcon className={classes.icon}/>
                </a>
            </Grid>
            <Grid item xs={12} sm={12}>
                <p className={classes.copyright}>&copy; {currentYear} Yoonsuk Chang</p>
            </Grid>
        </Grid>
        </footer>
    );
};

export default Footer;