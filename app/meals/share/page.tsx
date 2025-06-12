'use client';
import ImagePicker from "@/components/meals/image-picker";
import {shareMeal} from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import {useActionState} from "react";


export default function ShareMealsPage() {
    const [state, formAction] = useActionState(shareMeal, {message: ''});

    return (
        <>
            <header className='gap-12 my-12 mb-20 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem]'>
                <h1>
                    Share your <span
                    className='bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent'>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className='w-[90%] max-w-[75rem] my-12 mx-auto text-white'>
                <form className='max-w-[50rem]' action={formAction}>
                    <div className='flex gap-4'>
                        <p className='w-[100%]'>
                            <label
                                htmlFor="name"
                                className='block mb-2 text-base font-bold uppercase text-[#b3aea5] font-montserrat'
                            >
                                Your name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className='block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] text-[#ddd6cb] font-montserrat'
                            />
                        </p>
                        <p>
                            <label
                                htmlFor="email"
                                className='block mb-2 text-base font-bold uppercase text-[#b3aea5] font-montserrat'
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className='block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] text-[#ddd6cb] font-montserrat'
                            />
                        </p>
                    </div>
                    <p>
                        <label
                            htmlFor="title"
                            className='mt-2 block mb-2 text-base font-bold uppercase text-[#b3aea5] font-montserrat'
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            className='block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] text-[#ddd6cb] font-montserrat'
                        />
                    </p>
                    <p>
                        <label
                            htmlFor="summary"
                            className='mt-2 block mb-2 text-base font-bold uppercase text-[#b3aea5] font-montserrat'
                        >
                            Short Summary
                        </label>
                        <input
                            type="text"
                            id="summary"
                            name="summary"
                            required
                            className='block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] text-[#ddd6cb] font-montserrat'
                        />
                    </p>
                    <p>
                        <label
                            htmlFor="instructions"
                            className='mt-2 block mb-2 text-base font-bold uppercase text-[#b3aea5] font-montserrat'
                        >
                            Instructions
                        </label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows={10}
                            required
                            className='block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] text-[#ddd6cb] font-montserrat'
                        ></textarea>
                    </p>
                    <ImagePicker name='image' label='Your image'/>
                    {state.message && (
                        <p className={state.message.includes('successfully') ? 'text-green-500' : 'text-red-500'}>
                            {state.message}
                        </p>
                    )}
                    <p className='text-right'>
                        <MealsFormSubmit/>
                    </p>
                </form>
            </main>
        </>
    );
}