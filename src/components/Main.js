import React, { useEffect, useRef, useState } from "react";
import { Input } from "./Input";
import { useDispatch } from "react-redux";
import { setUser } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { login } from "../my-firebase.js";
import { Form, Formik } from "formik";
import * as Yup from 'yup';

export const Main = () => {
    const ref = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        let images = ref.current.querySelectorAll('img'),
            total = images.length,
            current = 0

        const imageSlider = () => {
            images[(current > 0 ? current : total) - 1].classList.add('opacity-0');
            images[current].classList.remove('opacity-0');
            current = current === total - 1 ? 0 : current + 1;
        }
        imageSlider();
        const slider = setInterval(imageSlider, 3000);
        return () => {
            clearInterval(slider);
        }
    }, [ref]);

    const handleSubmit = async (values, actions) => {
        const res = await login(values.username, values.password);
        dispatch(setUser(values.username));
        if (res) {
            navigate(location.state?.return_url || '/', {
                replace: true
            })
        }
    }

    return (
        <div className="h-full w-full flex items-center justify-center pb-[32px] mt-[32px]">
            <div className=" w-[380px] hidden md:flex h-[581px] relative bg-hero-pattern mr-[32px] mb-4 bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
                <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
                    <img className="w-full h-full absolute top-0 left-0 opacity-0 transiton-opacity duration-1000 ease-linear" alt="" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" />
                    <img className="w-full h-full absolute top-0 left-0 opacity-0 transiton-opacity duration-1000 ease-linear" alt="" src="	https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" />
                    <img className="w-full h-full absolute top-0 left-0 opacity-0 transiton-opacity duration-1000 ease-linear" alt="" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" />
                    <img className="w-full h-full absolute top-0 left-0 opacity-0 transiton-opacity duration-1000 ease-linear" alt="" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" />
                </div>
            </div>
            <div className="w-[350px]">
                <div className="py-2.5 bg-white mb-2.5 border-formBorder border">
                    <a href="#" className="flex justify-center mt-12 mb-4">
                        <img className="h-[51px]" alt="" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
                    </a>
                    <Formik
                        validationSchema={Yup.object({
                            username: Yup.string().required("Required"),
                            password: Yup.string().required("Required")
                        })}
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, isValid, dirty, values }) => (
                            <Form className="px-[40px] mt-8 grid gap-y-1.5">
                                <Input type="text" name="username" label="Telefon numarası, kullanıcı adı veya e-posta" />
                                <Input name="password" label="Şifre" />
                                <button type="submit" disabled={isSubmitting || !dirty || !isValid} className="h-[30px] my-[8px] rounded bg-brand text-[14px] text-white font-semibold disabled:opacity-50">Giriş Yap</button>
                                <div className="items-center flex mt-[4px] mb-4">
                                    <div className="h-px bg-gray-300 flex-1" />
                                    <span className="px-4 text-[13px] font-semibold text-gray-500">YA DA</span>
                                    <div className="h-px bg-gray-300 flex-1" />
                                </div>
                                <div className="justify-center flex">
                                    <button className="items-center flex">
                                        <img className="h-[16px] mr-[8px]" src="https://cdn-icons-png.flaticon.com/512/174/174848.png" />
                                        <span className="text-facebookC text-[14px] font-semibold">Facebook ile giriş yap</span>
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className="justify-center flex my-4">
                        <button className="text-[12px] text-forgetPass">Şifreni mi unuttun?</button>
                    </div>
                </div>
                <div className="bg-white py-[10px] mb-[10px] border-formBorder border">
                    <div className="justify-center flex">
                        <p className="m-5 text-[14px] font-normal">Hesabın yok mu? <a href="#" className="text-signIn">Kaydol</a></p>
                    </div>
                </div>
                <p className="justify-center flex text-common py-[10px]">Uygulamayı indir.</p>
                <div className="flex justify-center py-[10px]">
                    <a href="#" className="mr-[8px]">
                        <img alt="App Store" className="h-[40px]" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png"></img>
                    </a>
                    <a href="#">
                        <img alt="Google Play" className="h-[40px]" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}
