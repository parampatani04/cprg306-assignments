"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";



export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    return (
        <div className="m-4 p-6 bg-white shadow-md rounded-lg">
            <h1 className='text-3xl font-bold text-gray-800'>{user ? `Welcome ${user.displayName}` : `Please Sign In to continue`}</h1>
            {user && <h1 className="mt-4 mb-4 text-lg text-gray-600">User Email: <span className="font-bold text-gray-800">{user.email}</span></h1>}
            {user ? 
            <div>
                <Link className="text-xl text-blue-600 hover:underline hover:text-blue-800" href='/week-9/shopping-list/'>Continue to Shopping List</Link><br />
                <button className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 mt-4' onClick={firebaseSignOut}>Sign Out</button>
            </div> : 
            <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 mt-4" onClick={gitHubSignIn}>Sign In Using GitHub</button>}
        </div>
    )
}