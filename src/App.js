import React, { useEffect, useRef, useState } from "react";
import { Input } from "./components/Input";

function App() {
  const ref = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enable = username && password;

  useEffect(() => {
    let images = ref.current.querySelectorAll('img'),
      total = images.length,
      current = 0

    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add('opacity-0');
      }
      else {
        images[total - 1].classList.add('opacity-0');
      }
      images[current].classList.remove('opacity-0');
      if (current === total - 1) {
        current = 0;
      }
      else {
        current += 1;
      }
    }
    imageSlider();
    const slider = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(slider);
    }
  }, [ref]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[380px] h-[581px] relative bg-hero-pattern mr-8 mb-3 bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transiton-opacity duration-1000 ease-linear" alt="" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transiton-opacity duration-1000 ease-linear" alt="" src="	https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transiton-opacity duration-1000 ease-linear" alt="" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transiton-opacity duration-1000 ease-linear" alt="" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" />
        </div>
      </div>
      <div className="w-[350px] py-2.5 bg-white mb-2.5">
        <a href="#" className="flex justify-center mt-9 mb-3">
          <img className="h-[51px]" alt="" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
        </a>
        <form className="px-[46px] mt-8 grid gap-y-1.5">
          <Input type="text" value={username} onChange={e => { setUsername(e.target.value) }} label="Telefon numarası, kullanıcı adı veya e-posta" />
          <Input type="password" value={password} onChange={e => { setPassword(e.target.value) }} label="Şifre" />
          <button type="submit" disabled={!enable} className="h-[30px] my-[8px] rounded bg-brand text-[14px] text-white font-semibold disabled:opacity-50">Giriş Yap</button>
          <div className="items-center flex mt-[4px] mb-4">
            <div className="h-px bg-gray-300 flex-1" />
            <span className="px-4 text-[13px] font-semibold text-gray-500">YA DA</span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
