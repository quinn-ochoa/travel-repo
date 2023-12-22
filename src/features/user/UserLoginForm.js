import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import defaultAvatar from '../../app/assets/img/unicorn.png';
// import { validateUserLoginForm } from '../../utils/validateUserLoginForm';

const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const handleLogin = (values) => {
        // const currentUser = {
        //     id: Date.now(),
        //     username: values.username,
        //     password: values.password
        // }
       
        setLoginModalOpen(false);
    };
    return (
        <>
            
                    <Button
                        outline
                        onClick={() => setLoginModalOpen(true)}
                        style={{ color: 'white', backgroundColor:'#43A271' }}
                    >
                        <i className='fa fa-sign-in fa-lg' /> Login
                    </Button>
    
                <Modal isOpen={loginModalOpen}>
                    <ModalHeader toggle={() => setLoginModalOpen(false)}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Formik
                            initialValues={{
                                username: '',
                                password: '',
                            }}
                            onSubmit={handleLogin}>
                            {/* validate={validateUserLoginForm}> */}
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Field
                                        id='username'
                                        name='username'
                                        placeholder='Username'
                                        className='form-control' />
                                    <ErrorMessage name='username'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Field
                                        id='password'
                                        name='password'
                                        placeholder='Password'
                                        className='form-control' />
                                    <ErrorMessage name='password'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <Button type='submit' >Login</Button>
                            </Form>
                        </Formik>
                    </ModalBody>
                </Modal>

        </>
    );
};

export default UserLoginForm;