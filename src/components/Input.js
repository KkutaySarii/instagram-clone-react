import React, { useEffect, useState } from "react"

export const Input = ({ label, ...props }) => {

    const [show, setShow] = useState(false);
    const [type, setType] = useState(props?.type || "text");

    useEffect(() => {
        if (show) {
            setType("text");
        }
        else {
            setType("password")
        }
    }, [show]);

    return (
        <label className="block relative cursor-text">
            <input required={true} type={type} className="rounded-sm border text-sm w-full h-12 outline-none focus:border-gray-400 px-1.5 peer valid:pt-3" {...props} />
            <small className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400 transition-all peer-valid:text-xs peer-valid:top-2.5">{label}</small>
            {type === "password" && props?.value &&
                <button type="button" onClick={() => setShow(show => !show)} className="h-full absolute top-0 right-0 text-sm text-[14px] font-semibold flex items-center pr-[8px]">
                    {show ? "Gizle" : "Göster"}
                </button>}
        </label>
    )
}