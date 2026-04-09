import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token);

        // exp viene en segundos → lo pasamos a ms
        return decoded.exp * 1000 < Date.now();
    } catch {
        return true;
    }
};