"use client"

import { useFormState, useFormStatus } from "react-dom";
import { sendMail } from "../actions/mail";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"]})

const FormBody = () => {

    const { pending } = useFormStatus();

    return(<>
        <div className="space-y-12 ">
            <div className="border-b border-gray-900/10 pb-12">
                {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2> */}
                {/* <p className="mt-1 text-sm leading-6 text-gray-400">
                    Manda qui il tuo messaggio
                </p> */}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <div className="sm:col-span-4">
                        <label htmlFor="from" className={`${orbitron.className} block text-sm font-medium leading-6 text-white"`}>
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                            id="from"
                            name="from"
                            type="email"
                            placeholder="paolorossi@gmail.com"
                            autoComplete="email"
                            required
                            disabled={pending}
                            className="block border-0 border-b-2 border-white bg-black w-full py-1.5 text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:border-lime-300 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="message" className={`${orbitron.className} block text-sm font-medium leading-6 text-white`}>
                            Messaggio
                        </label>
                        <div className="mt-2">
                            <textarea
                            id="message"
                            name="message"
                            rows={3}
                            placeholder="Scrivi qui il tuo messaggio."
                            required
                            disabled={pending}
                            className="block bg-black border-l-2 border-white text-white w-full border-0 py-1.5 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:border-lime-300 sm:text-sm sm:leading-6"
                            defaultValue={''}
                            />
                        </div>
                        {/* <p className="mt-3 text-sm leading-6 text-white">Scrivi qui il tuo messaggio.</p> */}
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
            {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
            </button> */}
            {
                !pending ?
                    <button
                        type="submit"
                        disabled={pending}
                        className="border bg-black text-white px-3 py-2 text-sm font-semibold shadow-sm hover:text-lime-400 hover:border-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                        >
                        Invia
                    </button>
                :
                    <ArrowPathIcon className="size-8 animate-spin text-lime-400" />
            }
            
        </div>
    </>)
}

export default function ContactForm() {

    const [state, formAction] = useFormState(sendMail, {
        res: '',
        message: ''
    })

    if(!state.res || state.res === "Error"){
        return (
            <form action={formAction}>
                <FormBody />
            </form>
        )
    }

    if(state.res === 'OK'){
        return(
            <p className="text-xl border-4 p-2 border-lime-400" dangerouslySetInnerHTML={{ __html: state.message.replaceAll('\n', '<br/>') }}>
            </p>
        )

    }
    
}
