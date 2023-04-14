// import { PaperClipIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'
import { fetchUser } from '../../redux/slices/userSlice'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import { Modal } from '../modal';
export const Account = () => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector(state => state.user.user.userData)
    console.log(data);
    const addLabel = () => {
        setOpen(true)
    }
    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg max-w-screen-lg mt-9 mx-auto">
            <div className="account px-4 py-5 sm:px-6 ">
                <h3 className="text-center text-2xl font-semibold leading-6 text-gray-900">Profile</h3>
                <Link className="link-account" onClick={(e) => addLabel()}>Edit</Link>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Full name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {data?.name}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Email</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {data?.email}
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">City</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {data?.addressData.city}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Country</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {data?.addressData.nation}
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Street</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {data?.addressData.street}
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Avatar</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {data?.avatar !== null ? data?.avatar : "No avatar"}
                        </dd>
                    </div>
                </dl>
            </div>
            <Modal
                open={open}
                data={data}
                onClose={() => setOpen(false)}
            />
        </div>

    )
}
