import React from "react";

export const Footer = () => {
    return (
        <div className="justify-items-start mb-[52px]">
            <div className="mt-8">
                <div className="justify-center flex ">
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Meta</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Hakkında</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Blog</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">İş Fırsatları</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Yardım</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">API</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Gizlilik</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Koşullar</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Başlıca Hesaplar</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Konu Etiketleri</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Konumlar</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Instagram Lite</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Kişi Yükleme ve Hesabı Olmayan Kişiler</a>
                </div>
                <div className="justify-center flex">
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Dans</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Yiyecek ve İçecek</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Ev ve Bahçe</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Müzik</a>
                    <a href="#" className="mx-[8px] mb-[8px] text-footer">Görsel Sanatlar</a>
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