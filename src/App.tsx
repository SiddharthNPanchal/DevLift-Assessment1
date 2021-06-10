import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Grow,
  Link,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import { ContainerDiv } from "./ContainerDiv";

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url("bg.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  container: {
    paddingTop: 100,
    padding: theme.spacing(4),
  },
  content: {
    paddingTop: theme.spacing(6),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  orange:{
    backgroundColor: 'orange'
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.container}>
        <form>
          <Grow in>
            <ContainerDiv>
              
                <Avatar className={classes.orange}>
                <AssignmentIndRoundedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  style={{ width: "100%" }}
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>


            </ContainerDiv>
          </Grow>
        </form>
      </Container>
    </div>
  );
}

export default App;