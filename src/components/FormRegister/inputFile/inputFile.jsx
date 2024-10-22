export default function InputFile() {
    return (
        <div>
            <label for="file-upload" className="custom-file-upload">
                <i></i> Subir imagen
            </label>
            <input type="file" id="file-upload" name="file" accept="image/*" />
        </div>
    )
}