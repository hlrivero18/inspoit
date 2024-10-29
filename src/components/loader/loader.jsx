"use client"
import React from "react";
import styled from "styled-components";
import useStore from "@/store/useStore";
import style from "./loader.module.css"

const Loader = () => {
    const { loaded } = useStore()
    return (
        <div>
            {loaded &&
                <div className={style.container}>

                    <div className={style.loader}>
                        <div className={style.circle}></div>
                        <div className={style.circle}></div>
                        <div className={style.circle}></div>
                        <div className={style.circle}></div>
                    </div>

                </div>
            }
        </div>


    );
};

export default Loader;
