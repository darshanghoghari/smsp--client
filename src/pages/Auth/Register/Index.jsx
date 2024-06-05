// src/RegisterPage.js

import React, { useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography, Box, Stack } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { signup } from '../../../features/auth/authSlice';
import { useDispatch } from 'react-redux';


const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = useCallback((values) => {
        dispatch(signup(values))
            .unwrap()
            .then(() => {
                navigate('/');
            });
    }, [dispatch, navigate]);

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <Formik
                    initialValues={{ fullName: '', email: '', contactNo: '', password: '', confirmPassword: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={Yup.object({
                        fullName: Yup.string().required('Full Name is required'),
                        email: Yup.string().email('Invalid email address').required('Required'),
                        contactNo: Yup.string().matches(/^[0-9]{10}$/, 'Contact No must be exactly 10 digits').required('Required'),
                        password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Required'),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                            .required('Required')
                    })}
                >
                    {({ isSubmitting, errors, touched, values, handleChange, handleBlur }) => (
                        <Form>
                            <Box sx={{ mt: 1 }}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="fullName"
                                    label="Full Name"
                                    name="fullName"
                                    autoComplete="name"
                                    autoFocus
                                    value={values.fullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.fullName && !!errors.fullName}
                                    helperText={touched.fullName && errors.fullName}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="contactNo"
                                    label="Contact No"
                                    name="contactNo"
                                    autoComplete="tel"
                                    value={values.contactNo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.contactNo && !!errors.contactNo}
                                    helperText={touched.contactNo && errors.contactNo}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.password && !!errors.password}
                                    helperText={touched.password && errors.password}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="new-password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.confirmPassword && !!errors.confirmPassword}
                                    helperText={touched.confirmPassword && errors.confirmPassword}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Register
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
                <Stack direction="row">
                    You already have an account?<NavLink to="/">Login here</NavLink>
                </Stack>
            </Box>
        </Container>
    );
}

export default RegisterPage;
