import {Box, Container,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AccountProfileDetails from './AccountProfileDetails';

const useStyles = makeStyles((theme) => ({
    container:{
      maxWidth: "120rem",
        padding: "0 3.2rem",
        margin: "6.4rem auto 7.4rem auto"
    },
    box: {
        backgroundColor: 'background.default',
        height: '100%',
        py: 3,
        // paddingTop: "11rem",
        paddingBottom: "9rem",
        textAlign: "center",
        // float:"left"
    },
}));


const MyPage = () => {
    const classes                       = useStyles();

    return(
        <Container fixed className={classes.container}>
          <Box className={classes.box}>
            <Grid container>
              <Grid item lg={12} md={12} xs={12}>
                <AccountProfileDetails />
              </Grid>
            </Grid>
          </Box>
      </Container>
    )
};

export default MyPage;