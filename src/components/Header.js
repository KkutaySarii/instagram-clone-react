import classNames from "classnames";
import { useState } from "react"
import { Icon } from "./Icon"
import { AiFillCloseCircle } from 'react-icons/ai';
import { logout } from "../my-firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/auth";

export const Header = () => {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        const res = await logout();
        dispatch(setUser(false));
        if (res) {
            navigate(location.state?.return_url || '/', {
                replace: true
            })
        }
    }

    return (
        <header className="bg-white border-b-[1px] border-gray-300  items-center flex justify-center">
            <div className=" grid grid-cols-3 flex-row justify-between h-20 w-full max-w-[975px] items-center px-[20px]">
                <div className="">
                    <img className="h-[29px]" alt="" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
                </div>
                <div className="relative cursor-text bg-searchBar rounded-lg w-[268px] py-1 h-12 items-center flex pl-[16px]" role="button" >
                    <span className={classNames({
                        "absolute left-[16px]": true,
                        "hidden": open
                    })}>
                        <Icon name="search" width="16px" height="16px"></Icon>
                    </span>
                    <input className="pl-[25px] w-full rounded-xl focus:pl-0 outline-none bg-searchBar h-12 text-xl" onFocus={() => setOpen(true)} onBlur={() => { setSearch(""); setOpen(false) }} placeholder="Ara" type="text" value={search} onChange={e => { setSearch(e.target.value) }}></input>
                    <button onClick={() => {
                        setOpen(false)
                    }} className={classNames({
                        "hidden text-[#c7c7c7] pr-[16px] ": true,
                        "!flex": open
                    })}>
                        <AiFillCloseCircle className="w-[16px] h-[16px]" />
                    </button>
                </div>
                <div>
                    <button onClick={handleLogOut}>Log out</button>
                </div>
            </div>
        </header>
    )
}