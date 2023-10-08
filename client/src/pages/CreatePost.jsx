import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {preview} from '../assets';
import {getRandomPrompt} from '../utils';
import {FormField, Loader} from '../components';

const CreatePost = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '', prompt: '', photo: '',
    });

    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

    const generateImage = () => {

    }

    const handleSubmit = async (e) => {
    };

    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({...form, prompt: randomPrompt});
    };

    return (<section className="max-w-7xl mx-auto">
        <div>
            <h1 className="font-extrabold text-antiflash-white text-5xl">Create n' Share</h1>
        </div>
        <div className={"flex flex-row justify-between"}>
            <form className="mt-12 max-w-3xl">
                <div className="flex flex-col gap-5">
                    <FormField
                        labelName="Your Name"
                        type="text"
                        name="name"
                        placeholder="Ex., john doe"
                        value={form.name}
                        handleChange={handleChange}
                    />

                    <FormField
                        labelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />
                </div>


                <div className="mt-10">
                    <p className="mt-2 text-gray-500 text-[14px]">** Once you have created the image you want, you
                        can share it with others in the community **</p>
                    <div className={"flex flex-row justify-between mt-3"}>
                        <button
                            type="button"
                            onClick={generateImage}
                            className="font-inter font-medium bg-alabaster px-5 py-1 rounded-3xl"
                        >
                            {generatingImg ? 'Generating...' : 'Generate'}
                        </button>

                        <button
                            type="submit"
                            className="font-inter font-medium bg-tomato px-5 py-1.5 rounded-3xl"
                        >
                            {loading ? 'Sharing...' : 'Share with the Community'}
                        </button>
                    </div>
                </div>
            </form>
            <div
                className="relative top-10 right-2 bg-alabaster border border-alabaster text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-1/3 p-3 h-1/3 flex justify-center items-center">
                {form.photo ? (<img
                    src={form.photo}
                    alt={form.prompt}
                    className="w-full h-full object-contain"
                />) : (<img
                    src={preview}
                    alt="preview"
                    className="w-9/12 h-9/12 object-contain opacity-40"
                />)}

                {generatingImg && (<div
                    className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                    <Loader/>
                </div>)}
            </div>
        </div>

    </section>);
}

export default CreatePost;