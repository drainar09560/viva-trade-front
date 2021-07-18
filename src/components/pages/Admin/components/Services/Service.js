import React, {useEffect} from 'react';
import {Context} from "../../../../../index";
import Modal from "../../Modal/Modal";
import ModalAddService from "./Modals/ModalAddService";
import TestService from "../../Test/TestService";

const Service = () => {


    return (
        <div>
            <div style={{position: 'relative'}}>
                <TestService/>
            </div>
        </div>
    );
};

export default Service;
