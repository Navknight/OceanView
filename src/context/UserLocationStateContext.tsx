import React, { ReactNode, createContext, useContext, useState } from 'react';



interface LocaitionStateContextProviderProps {
    children: ReactNode
}

type UserLocation = {
    coords: {
        latitude: number;
        longitude: number;
    }
}


const useUserLocationStateContextValue = () => {
    const [userLocation, setUserLocation] = useState<UserLocation>();

    return {
        userLocation,
        setUserLocation
    }
}

type UserLocationStateContextValue =
    ReturnType<typeof useUserLocationStateContextValue>;

const UserLocationStateContext =
    createContext<UserLocationStateContextValue | null>(null);

export const UserLocaitionStateContextProvider = ({
    children
}: LocaitionStateContextProviderProps) => {

    const userLocationStateContextValue = useUserLocationStateContextValue();

    return (
        <UserLocationStateContext.Provider value={userLocationStateContextValue}>
            {children}
        </UserLocationStateContext.Provider>
    )
}

export const useUserLocationStateContext = () => {
    const context = useContext(UserLocationStateContext);

    if (!context) {
        throw new Error("User Location Not Found");
    }
    return context;
}