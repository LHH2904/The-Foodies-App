import {useFormStatus} from "react-dom";

export default function MealsFormSubmit() {
    const {pending} = useFormStatus();
    return (
        <button
            className='border-0 px-8 py-3 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-sm cursor-pointer text-[1.25rem] shadow-[0_2px_5px_rgba(0,0,0,0.3)] hover:from-[#fd4715] hover:to-[#f9b241] focus:from-[#fd4715] focus:to-[#f9b241] disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed'
        >
            {pending ? 'Submitting...' : 'Share Meal'}
        </button>
    )
}