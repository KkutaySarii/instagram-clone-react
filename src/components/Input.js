import classNames from "classnames";
import { useField } from "formik";
import React, { useEffect, useState } from "react"

export const Input = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
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
            <input type={type} className={classNames({
                "bg-zinc-50 text-sm w-full h-12 outline-none px-1.5": true,
                "pt-3": field.value
            })} {...props} {...field} />
            <small className={classNames({
                "absolute left-2 -translate-y-1/2  text-gray-400 transition-all": true,
                "text-base top-1/2": !field.value,
                "top-2.5 text-xs": field.value
            })}>{label}</small>
            {isPass === "password" && field.value && (
                <button type="button" onClick={() => setShow(show => !show)} className="h-full bg-zinc-50 active:text-gray-400 text-sm text-[14px] font-semibold flex items-center pr-[8px]">
                    {show ? "Gizle" : "Göster"}
                </button>)}
        </label>
    )
}