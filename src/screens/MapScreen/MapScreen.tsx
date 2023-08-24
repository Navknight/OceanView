import React, { useEffect, useState } from 'react'
import { Container, StyledMapView } from './MapScreen.styles'
import { CustomMarker, useMapScreen } from './useMapScreen'
import { RoundButton } from '../../components/RoundButton'
import { MapSearchBar } from '../../components/MapSearchBar'
import { DestinationModel } from '../../components/DestinationModel'
import { Hamburger } from '../../components/Hamburger'
import { Callout, Marker } from 'react-native-maps'
import { MarkerCard } from '../../components/MarkerCard'


export const MapScreen = () => {
    

    const { models, operations } = useMapScreen()

    return (
        <Container>
            <StyledMapView
                ref={models.mapRef}
                showsUserLocation
                showsMyLocationButton={true}
            >
                {fetchedData &&
                    fetchedData.map((marker) => {

                        // console.log(models.selectedId)
                        if (
                            marker &&
                            marker.location &&
                            marker.location.latitude !== undefined &&
                            marker.location.longitude !== undefined &&
                            marker.event_name &&
                            marker.event_desc &&
                            (models.selectedId === undefined ||
                            models.selectedId === marker.event_type)
                        ) {
                            // console.log(marker.event_name)
                            return (
                                <Marker
                                    key={marker.id}
                                    coordinate={{
                                        longitude: marker.location.longitude,
                                        latitude: marker.location.latitude,
                                    }}
                                    title={marker.event_name}
                                    description={marker.event_desc}
                                    // Assuming 'image' is a URL object
                                    image={marker.image}
                                    onPress={() => {
                                        operations.setMarkerCard(true)
                                        operations.setSelectedMarker(marker)
                                    }}
                                >
                                    <Callout>
                                        {models.selectedMarker && <MarkerCard
                                            closeMarkerCard={operations.closeMarkerCard}
                                            disabled={models.markerCard}
                                            marker={models.selectedMarker}
                                        />}
                                    </Callout>
                                </Marker>
                            );
                        }
                        return null;
                    })}
                
            </StyledMapView>
            <RoundButton icon="ios-menu-outline" onPress={operations.closeHamburger} />
            
            <DestinationModel visible={models.modelVisible} closeModel={operations.closeDestinationModel} />
            <Hamburger disabled={models.hamVisible} closeHam={operations.closeHamburger} />
        </Container>
    )
}
