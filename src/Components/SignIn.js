import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './Copyright';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import signInSchema from '../validationSchema/signinSchema';
import { FormHelperText } from '@mui/material';


const theme = createTheme();

export default function SignIn() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: signInSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box noValidate sx={{ width: '100%', mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <FormHelperText error>{formik.errors.email}</FormHelperText>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        <FormHelperText error>{formik.errors.password}</FormHelperText>

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={formik.handleSubmit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <MuiLink component={Link} to="/forgot-password" variant="body2">
                                    Forgot password?
                                </MuiLink>
                            </Grid>
                            <Grid item>
                                <MuiLink component={Link} to="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </MuiLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}