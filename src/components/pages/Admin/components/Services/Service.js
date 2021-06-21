import React, {useEffect} from 'react';
import {Context} from "../../../../../index";
import Modal from "../../Modal/Modal";
import ModalAddService from "./Modals/ModalAddService";
import Test from "../../Test/Test";

const Service = () => {


    return (
        <div>
            {/*{ loading ? <h1 style={{color:'red'}}>Загрузка</h1> : null }*/}
            <div style={{position: 'relative'}}>
                <Test/>
                {/*<div style={{*/}
                {/*    display:'grid',*/}
                {/*    gridTemplateColumns:'1fr 1fr 1fr',*/}
                {/*    gap: '30px',*/}
                {/*    }}>*/}
                {/*    {*/}
                {/*        service.map((elem,index) => (*/}
                {/*                <div style={{backgroundColor:'#F5F5F5', padding:'30px 25px', overflow:'hidden', borderRadius:'8px'}}>*/}
                {/*                    <img src={elem.src} style={{width:'100%', height:'400px'}}/>*/}
                {/*                    <h1 key={index} style={{fontSize:'30px', textAlign:'center', marginTop:'20px'}}>{elem.title}</h1>*/}
                {/*                    <p style={{textAlign:'justify', marginTop:'20px', fontSize:'20px'}}>{elem.description}</p>*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        )*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Service;
