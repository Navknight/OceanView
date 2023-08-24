import React from 'react'
import { useEffect, useState} from "react";
import {Modal, Text, TouchableWithoutFeedback, View} from 'react-native'
import { RoundButton } from '../RoundButton'
import { ItemContainer, StyledFlatlist } from './DestinationModel.styles'
import { FlatlistHeader } from './components/FlatlistHeader'
import { useDestinationModel } from './useDestinationModel'
import {partialMatcher} from "../../storage/firestore/LocationReader";

interface DestinationModelProps {
    visible: boolean;
    closeModel: () => void
}

export const DestinationModel = ({ visible, closeModel }: DestinationModelProps) => {
    const { models, operations } = useDestinationModel();

    const [items, setItems] = useState<{key: string, name: string}[]>([]);




    
    const handleOnPress = () => {
        console.log("onPress");
        closeModel();
    }

    return (
        <Modal onRequestClose={handleOnPress} visible={visible} animationType='fade'>
            <StyledFlatlist
                data={items}
                renderItem={renderFlatlistItem}
                // contentContainerStyle={{
                //     paddingHorizontal: 20,
                //     marginTop: 10
                // }}
                ListHeaderComponent={
                    <FlatlistHeader
                        destinationText={models.destinationInputText}
                        onDestinationTextChange={operations.handleDestinationInputTextChange}
                    />}
            />
            <RoundButton icon="arrow-back-outline" onPress={handleOnPress} />
        </Modal >
    )
}
