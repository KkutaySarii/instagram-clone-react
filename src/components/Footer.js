import React from "react";

export const Footer = () => {
    return (
        <div className="justify-items-start mb-[52px]">
            <div className="mt-8">
                <div className="justify-center flex flex-wrap ">
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Meta</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Hakkında</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Blog</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">İş Fırsatları</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Yardım</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">API</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Gizlilik</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Koşullar</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Başlıca Hesaplar</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Konu Etiketleri</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Konumlar</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Instagram Lite</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Kişi Yükleme ve Hesabı Olmayan Kişiler</a>
                </div>
                <div className="justify-center flex flex-wrap">
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Dans</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Yiyecek ve İçecek</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Ev ve Bahçe</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Müzik</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer flex">Görsel Sanatlar</a>
                </div>
            </div>
            <div className="my-4 justify-center flex">
                <select className="text-footer bg-zinc-50 cursor-pointer">
                    <option value="en">English</option>
                    <option value="de">Deutsh</option>
                    <option value="tr">Türkçe</option>
                </select>
                <a href="#" className="ml-[16px] text-footer cursor-text">© 2022 Instagram from Meta</a>
            </div>
        </div>
    )
}