import axios from "axios";
import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import { BACKEND_URL } from "../config";
import type { UserType } from "../components/Users";

interface AuthContextType {
    user: UserType | null;
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
    refreshUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserType | null>(null);
    const refreshUser = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        try {
            const response = await axios.get(`${BACKEND_URL}/user/`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            setUser(response.data.user);
        } catch (error) {
            localStorage.removeItem("token");
            setUser(null);
        }
    };

    useEffect(() => {
        refreshUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, refreshUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}
