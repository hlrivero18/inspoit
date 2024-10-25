"use client"

import { useEffect } from "react";
import useStore from "@/store/useStore";
import { getJwt } from "@/utils/setLogin/loginJwt";
import axios from "axios";
import Loader from "../loader/loader";

export default function Token() {
    const { setAccess, setUser, loaded, setLoaded } = useStore();

    const getID = async (jwtToken) => {
        try {
            const response = await axios.get(`${request}/token/${jwtToken}`);
            setUser(response.data.id);
            // Aquí puedes manejar la respuesta como necesites
        } catch (error) {
            console.error("Error al obtener el ID:", error);
            // Manejo de error, por ejemplo, mostrar un mensaje al usuario
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
