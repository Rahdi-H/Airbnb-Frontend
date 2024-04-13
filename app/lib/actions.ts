"use server"
import { cookies } from "next/headers"

export async function handlelogin(userID: string, accessToken: string, refreshToken: string) {
    cookies().set('session_userID', userID, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    }),
    cookies().set('session_accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60,
        path: '/'
    }),
    cookies().set('session_refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    })
}

export async function resetAuthCookies() {
    cookies().set('session_userID', '');
    cookies().set('session_accessToken', '');
    cookies().set('session_refreshTokan', '');
}

export async function getUserID() {
    const userID = cookies().get('session_userID')?.value
    return userID ? userID : null
}

export async function getAccessToken() {
    let token = cookies().get('session_accessToken')?.value
    return token
}