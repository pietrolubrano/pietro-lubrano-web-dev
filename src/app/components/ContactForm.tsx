"use client"

import { useFormState } from "react-dom";
import { sendMail } from "../actions/mail";

export default function ContactForm() {

    /* const { pending, data, method, action } = useFormStatus(); */
    const [state, formAction] = useFormState(sendMail, {
        res: '',
        message: ''
    })

    if(!state.res || state.res === "Error"){
        return (
            <form action={formAction}>
    
                <div className="space-y-12 ">
                    <div className="border-b border-gray-900/10 pb-12">
                        {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This information will be displayed publicly so be careful what you share.
                        </p> */}
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    
                            <div className="sm:col-span-4">
                                <label htmlFor="from" className="block text-sm font-medium leading-6 text-white">
                                    Indirizzo Email
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="from"
                                    name="from"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
    
                            <div className="col-span-full">
                                <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">
                                    Messaggio
                                </label>
                                <div className="mt-2">
                                    <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-white">Write a few sentences about yourself.</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button> */}
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Send
                    </button>
                </div>
            </form>
        )
    }

    if(state.res === 'OK'){
        return(
            <p>
                {state.message}
            </p>
        )

    }
    
}
