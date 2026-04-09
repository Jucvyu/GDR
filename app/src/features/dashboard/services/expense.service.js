import api from "../../api/api";

export const getUser = () => {
    return api.get("/auth/me");
}

export const getExpenses = () => {
    return api.get("/expenses");
}

export const createExpense = (data) => {
    return api.post("/expenses", data);
}

export const updateExpense = (id, data) => {
    return api.put(`/expenses/${id}`, data);
}

export const deleteExpense = (id) => {
    return api.delete(`/expenses/${id}`);
}