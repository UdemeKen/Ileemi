'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from 'next/navigation';

interface StateContextType {
    currentUser: Record<string, any>;
    userToken: string | null;
    setCurrentUser: (user: Record<string, any>) => void;
    setUserToken: (token: string | null) => void;
}

const StateContext = createContext<StateContextType>({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => { },
    setUserToken: () => { },
});

interface ContextProviderProps {
    children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState<Record<string, any>>({});
    const [userToken, _setUserToken] = useState<string | null>(null);

    React.useEffect(() => {
        const token = localStorage.getItem("TOKEN");
        if (token) {
            _setUserToken(token);
        } else if (window.location.pathname !== '/sign-in') {
            // router.push('/activation');
            router.push('/sign-in');
        }
    }, [router]);

    const setUserToken = (token: string | null): void => {
        if (token) {
            localStorage.setItem("TOKEN", token);
        } else {
            localStorage.removeItem("TOKEN");
            // router.push('/activation');
            router.push('/sign-in');
        }
        _setUserToken(token);
    };

    return (
        <StateContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                userToken,
                setUserToken
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = (): StateContextType => useContext(StateContext);
