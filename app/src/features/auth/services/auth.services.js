import api from "../../api/api";

// login
export const login = (data) => {
    return api.post("/auth/login", data);
};

// registro
export const register = (data) => {
    return api.post("/auth/register", data);
};