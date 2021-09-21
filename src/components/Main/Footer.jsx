import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerDiv:{
        backgroundColor:"#1f1f1f",
        color: "#284168",
        width: "100%",
        height: "200px",
        textAlign: "center"
    },

    icon:{
        width: 50,
        height: 50,
        marginTop: 50,
        margin: "0 15px",
        color: "#fff"
    },

    copyright:{
        paddingTop: 35
    }
    
}
));


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footerDiv}>
            <a href="https://www.linkedin.com/in/yoonsuk-chang-577b64125/">
                <LinkedInIcon className={classes.icon}/>
            </a>
            <a href="https://yoondev83.github.io/portfolio_Yoon/">
                <GitHubIcon className={classes.icon}/>
            </a>
            <p className={classes.copyright}>©2021 Yoonsuk Chang</p>
        </div>
    );
};

export default Footer;