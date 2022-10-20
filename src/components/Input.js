import React, { useEffect, useRef, useState } from "react"

export const Input = ({ label, ...props }) => {

    const [show, setShow] = useState(false);
    const [type, setType] = useState(props?.type || "password");
    const [isPass, setIsPass] = useState(props?.type || "password");

    useEffect(() => {
        if (show) {
            setType('text');
        }
        else {
            setType('password');
        }
    }, [show]);

    return (
        <label className="block relative flex cursor-text border rounded-sm focus-within:border-gray-400">
            <input required={true} type={type} className="bg-zinc-50 text-sm w-full h-12 outline-none px-1.5 peer valid:pt-3" {...props} />
            <small className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400 transition-all peer-valid:text-xs peer-valid:top-2.5">{label}</small>
            {isPass === "password" && props?.value && (
                <button type="button" onClick={() => setShow(show => !show)} className="h-full text-sm text-[14px] font-semibold flex items-center pr-[8px]">
                    {show ? "Gizle" : "Göster"}
                </button>)}
        </label>
    )
}