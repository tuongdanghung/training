import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slices/userSlice'

export const Modal = (props) => {
    const cancelButtonRef = useRef(null)
    const [userId, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [nation, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const dispatch = useDispatch()
    const handleClose = () => {
        if (props.onClose) {
            props.onClose();
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({ userId, name, email, city, nation, street }))
        handleClose()
    }
    useEffect(() => {
        setId(props?.data?.id)
        setName(props?.data?.name)
        setEmail(props?.data?.email)
        setCity(props?.data?.addressData.city)
        setCountry(props?.data?.addressData.nation)
        setStreet(props?.data?.addressData.street)
    }, [props])
    return (
        <Transition.Root show={props.open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <Dialog.Title as="h2" className="text-base font-semibold leading-6 text-gray-900">
                                            Edit Account
                                        </Dialog.Title>
                                        <form className="mt-6">
                                            <div className="mb-2">
                                                <label className="block text-sm font-semibold text-gray-800"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    type="name"
                                                    className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <label className="block text-sm font-semibold text-gray-800"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    type="email"
                                                    className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <label className="block text-sm font-semibold text-gray-800"
                                                >
                                                    City
                                                </label>
                                                <input
                                                    value={city}
                                                    onChange={(e) => setCity(e.target.value)}
                                                    type="text"
                                                    className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <label className="block text-sm font-semibold text-gray-800"
                                                >
                                                    Country
                                                </label>
                                                <input
                                                    value={nation}
                                                    onChange={(e) => setCountry(e.target.value)}
                                                    type="text"
                                                    className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <label className="block text-sm font-semibold text-gray-800"
                                                >
                                                    Street
                                                </label>
                                                <input
                                                    value={street}
                                                    onChange={(e) => setStreet(e.target.value)}
                                                    type="text"
                                                    className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 sm:ml-3 sm:w-auto"
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={props.onClose}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
