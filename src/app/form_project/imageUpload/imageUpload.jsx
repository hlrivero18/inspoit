import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./imageUpload.module.css"

export default function UploadImage(props) {
    const { handleImage, type, value } = props
    const [imageFile, setImageFile] = useState(null)
    const [imagePreview, setImagePreview] = useState('')
    

    const handleChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file)
        setImagePreview(URL.createObjectURL(file))
    }

    const submitImage = () => {
        if (!imageFile) return;

        const data = new FormData();
        data.append("file", imageFile);
        data.append("cloud_name", "pokeapp");
        data.append("upload_preset", "poke_img");

        axios.post('https://api.cloudinary.com/v1_1/pokeapp/image/upload', data)
            .then((res) => {
                setImagePreview(res.data.secure_url);
                if (handleImage) {
                    handleImage(res.data.secure_url, type);
                }
            })
            .catch((err) => {
                console.log(err.response ? err.response.data : err);
            });
    };
    useEffect(() => {
        submitImage()
    }, [imageFile])

    return (
        <div>
            <input className={style.inputFile} type="file" id="imagenes_urls"
              name="imagenes_urls" value={value} onChange={handleChange}/>
        </div>

    )
}