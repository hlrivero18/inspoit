"use client"

import { useEffect } from "react";
import useStore from "@/store/useStore";
import { getJwt } from "@/utils/setLogin/loginJwt";
import axios from "axios";
import Loader from "../loader/loader";
import { GETTOKENID } from "@/request/userRequest";

export default function Token() {
    const { setAccess, setUser, loaded, setLoaded } = useStore();

    const getID = async (jwtToken) => {
        try {
            const response = await axios.get(GETTOKENID + jwtToken);
            console.log(response.data.id)
            setUser(response.data.id);
            
        } catch (error) {
            console.error("Error al obtener el ID:", error);
           
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const jwtToken = getJwt();
            if (jwtToken) {
                setAccess(true);
                getID(jwtToken);
                setLoaded(false)
            }else{
                setAccess(false)
                setLoaded(false)
            }
        }
    }, []);

    return <div>
    </div>;
}
