import { useState, useEffect } from "react";

import { getUser } from "../services/expense.service";

export const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUser()
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return { user, loading };
};