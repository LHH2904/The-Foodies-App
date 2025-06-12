'use client'

import {ChangeEvent, useRef, useState} from "react";
import Image from "next/image";

interface ImagePickerProps {
    label: string;
    name: string;
}

export default function ImagePicker({label, name}: ImagePickerProps) {
    const [pickedImage, setPickedImage] = useState<string | null>()
    const imageInput = useRef<HTMLInputElement>(null);

    function handlePickClick() {
        imageInput.current?.click();
    }

    function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) {
            setPickedImage(null);
            return
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            if (typeof fileReader.result === 'string') {
                setPickedImage(fileReader.result);
            }
        }

        fileReader.readAsDataURL(file);
    }

    return <div>
        <label
            htmlFor={name}
            className='mt-2 block mb-2 text-base font-bold uppercase text-[#b3aea5] font-montserrat'
        >
            {label}
        </label>
        <div className='flex items-start gap-6 mb-4'>
            <div
                className='w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative'
            >
                {!pickedImage && <p className='m-0 p-4'>No image picked yet</p>}
                {pickedImage && <Image
                    src={pickedImage}
                    alt='The image selected by the user'
                    fill
                    className='object-cover'
                />
                }
            </div>
            <input
                type="file"
                id={name}
                accept='image/png, image/jpeg'
                name={name}
                className='hidden'
                ref={imageInput}
                onChange={handleImageChange}
                required
            />
            <button
                className='border-0 px-6 py-2 bg-[#a4abb9] rounded-sm cursor-pointer text-[1rem] font-inherit hover:bg-[#b3b9c6] focus:bg-[#b3b9c6]'
                type='button'
                onClick={handlePickClick}
            >
                Pick an Image
            </button>
        </div>
    </div>
}