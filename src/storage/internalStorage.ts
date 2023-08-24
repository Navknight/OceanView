import { useState } from "react";
import { ImageURISource } from "react-native";

export type CustomMarker = {
    id: string,
    coordinate: {
        latitude: number,
        longitude: number,
    },
    title: string,
    description: string,
    image: ImageURISource,
    type: string
};
export const internalStorage = () => {
    const [markers, setMarkers] = useState<CustomMarker[]>([]);


    return {
        internalModels: {
            markers,
        },
        internalOperations: {
            setMarkers
        }
    }
}
