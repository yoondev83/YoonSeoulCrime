import {Box, Container,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AccountProfileDetails from './AccountProfileDetails';

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'background.default',
        height: '100%',
        py: 3,
        paddingTop: 120,
        paddingBottom: 100,
        textAlign: "center",
        // float:"left"
    },
}));


const MyPage = () => {
    const classes                       = useStyles();

    return(
        <Box className={classes.box}>
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Grid item lg={12} md={12} xs={12}>
              <AccountProfileDetails />
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
};

export default MyPage;