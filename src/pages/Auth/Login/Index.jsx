import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Container, Typography, Box, Stack } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SetCookie } from "../../../utils/Cookies";

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector(state => state.auth);

    useEffect(() => {
        if (user) {
            SetCookie('Authorization', user?.data?.token?.token, user?.data?.token?.expiresIn);
            navigate('/admin/dashboard');
        }

        if (error) {
            alert(error); // You can use a toast notification here if you prefer
        }
    }, [user, error, navigate]);

    const handleSubmit = (values) => {
        dispatch(login(values));
    };


    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Field
                                as={TextField}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <Field
                                as={TextField}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Login'}
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Stack direction="row" >
                    You don't have an account?<NavLink to="/register">Register here</NavLink>
                </Stack>
            </Box>
        </Container>
    );
}

export default LoginPage