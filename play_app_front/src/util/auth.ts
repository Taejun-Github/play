import {redirect} from "react-router-dom";

export const getAuthToken = (): string | null => {
    return localStorage.getItem('token');
}

export const tokenLoader = (): string | null => {
    return getAuthToken();
}

export const checkAuthLoader = (): any => {
    const token = getAuthToken();

    if (!token) {
        return redirect('/login');
    }
}
