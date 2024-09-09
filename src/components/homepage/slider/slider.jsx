"use client"
import slider1 from '@/images/homePage/slider/slider1.png'
import slider2 from '@/images/homePage/slider/slider2.jpg'
import slider3 from '@/images/homePage/slider/slider3.jpg'
import style from './slider.module.css'
import { useState, useEffect } from 'react'

export default function Slider(){
    const sliders = [slider1.src, slider2.src, slider3.src]

    const [imgCurrent, setImgCurrent] = useState(0)

    const slide = ()=>{
        if(imgCurrent === sliders.length - 1){
            setImgCurrent(0)
        }else{
            setImgCurrent(imgCurrent + 1)
        }
        
    }

    useEffect(() => {
        const interval = setInterval(slide, 5000);

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, [imgCurrent]);
    

    return(
        <section className={`${style.container}`}>
            <div className={`${style.image_container}`}>
                <img src={sliders[imgCurrent]} className=' h-full m-auto' alt="imagen de organizacion" />
                <h1 className={style.textoverlay}>Descubre nuevos desafios y proyectos desde donde estés</h1>
            </div>
            
        </section>
    )
}