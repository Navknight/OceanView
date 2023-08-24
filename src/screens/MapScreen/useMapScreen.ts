import { useEffect, useRef, useState } from 'react'
import type { UserLocationChangeEvent } from 'react-native-maps'
import type MapView from 'react-native-maps'
import { useUserLocationStateContext } from '../../context/UserLocationStateContext'
import { ImageURISource } from 'react-native'

export type CustomMarker = {
    id: string,
    location: {
        latitude: number,
        longitude: number,
    },
    event_name: string,
    event_desc: string,
    image: ImageURISource,
    event_type: string
};

const LATITUDE_DELTA = 0.0022
const LONGITUDE_DELTA = 0.005



export const useMapScreen = () => {

    const mapRef = useRef<MapView>(null)
    const [modelVisible, setModelVisible] = useState(false)
    const [hamVisible, setHamVisible] = useState(false)

    const { userLocation, setUserLocation } = useUserLocationStateContext()

    const [selectedMarker, setSelectedMarker] = useState<CustomMarker | null>();
    const [markerCard, setMarkerCard] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<string | undefined>()


    

    

    const handleMapSearchBarPress = () => {
        setModelVisible(true)
    }

    const closeDestinationModel = () => {
        console.log("closing destination")
        setModelVisible(!modelVisible)
    }

    const closeHamburger = () => {
        setHamVisible(!hamVisible);
    }

    const handleMarkerSelect = (marker: CustomMarker) => {
        setSelectedMarker(marker);
        setMarkerCard(true)
    }
    const closeMarkerCard = () => {
        setSelectedMarker(null);
        setMarkerCard(false)
    }



    return {
        models: {
            mapRef,
            modelVisible,
            hamVisible,
            selectedMarker,
            markerCard,
            selectedId
        },
        operations: {
            handleUserLocationChange,
            handleMapSearchBarPress,
            closeDestinationModel,
            closeHamburger,
            setSelectedMarker,
            closeMarkerCard,
            setSelectedId,
            setMarkerCard
        }
    }
}
