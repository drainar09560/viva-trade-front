import './index.scss'
import React from 'react';

import { useFormik } from "formik"
import { Context } from '../../index'
import { validateAuth } from "../../utils/validation";
import { Link, useHistory } from "react-router-dom";


const Auth = () => {
    const history = useHistory();
    const { auth, firebase } = React.useContext(Context);



    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validate: validateAuth,
        onSubmit: (values) => {
            auth.signInWithEmailAndPassword(values.email, values.password).then(() => {
                history.push("/adminpanel");
            });
        }

    })
    console.log(formik.errors)

    return (
        <div className="auth">
            <div className="auth-wrapper container">
                <div className="auth-form">
                    <p className="auth-title">Авторизация</p>
                    <form onSubmit={formik.handleSubmit} className="auth-f">
                        <input type="text" className="auth-inp" placeholder="Логин" onChange={formik.handleChange} value={formik.values['email']} name='email' id='email'/>
                        <input type="text" className="auth-inp" placeholder="Пароль" onChange={formik.handleChange} value={formik.values['password']} name='password' id='email'/>
                        <button className="auth-btn" type="submit">Войти</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Auth;
