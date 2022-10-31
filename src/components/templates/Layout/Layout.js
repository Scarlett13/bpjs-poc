import React from "react";
import Sidebar from "../../molecules/Sidebar/Sidebar";
import ModalComponent from "../../molecules/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { resetModalAction } from "../../../redux/actions/coreActions";


const Layout = (props) => {
    const { children } = props;
    const dispatch = useDispatch()
    const { type, title, message, show } = useSelector((state) => state.modal)
    return (
        <div className="flex flex-row min-w-screen min-h-screen">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-full p-4">
                {children}
            </div>
            <ModalComponent type={type} title={title} message={message} isOpen={show} okHandler={() => dispatch(resetModalAction())} cancelHandler={() => dispatch(resetModalAction())} />
        </div>);
}

export default Layout