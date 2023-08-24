import React from 'react';
import { View, Modal, StyleSheet, Text, ScrollView } from 'react-native';
import { RoundButton } from '../RoundButton';
import { CustomMarker } from '../../screens/MapScreen/useMapScreen';
import Video from 'react-native-video';
import { theme } from 'theme/theme';

interface MarkerCardProps {
    marker: CustomMarker;
    disabled: boolean;
    closeMarkerCard: () => void;
}

export const MarkerCard = ({ marker, disabled, closeMarkerCard }: MarkerCardProps) => {
    let videoURL: any = require('../../storage/BlenderVids/Oilspill.mp4');

    switch (marker.event_type) {
        case 'OilSpill':
            videoURL = require('../../storage/BlenderVids/Oilspill.mp4');
            break;
        case 'Plastic':
            videoURL = require('../../storage/BlenderVids/Plastic.mp4');
            break;
        default:
            videoURL = require('../../storage/BlenderVids/Oilspill.mp4');
            break;
    }

    return (
        <Modal style={styles.modal} onRequestClose={closeMarkerCard} visible={disabled} animationType='fade'>
            <Video
                source={videoURL}
                style={styles.video}
                repeat
                resizeMode="cover"
                ignoreSilentSwitch="obey"
            />
            <View style={styles.overlay}>
                <View style={styles.card}>
                    <Text style={styles.title}>{marker.event_name}</Text>
                    <Text style={styles.eventType}>{marker.event_type}</Text>
                    <ScrollView style={styles.descriptionContainer}>
                        <Text style={styles.description}>{marker.event_desc}</Text>
                    </ScrollView>
                </View>
            </View>
            <RoundButton icon="arrow-back-outline" onPress={closeMarkerCard} />
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
    },
    video: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    card: {
        width: 300,
        maxHeight: 400,
        // height: 300, 
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
    },
    eventType: {
        fontSize: 14,
        marginBottom: 5,
        color: 'gray',
        textAlign: 'center',
    },
    descriptionContainer: {
        // maxHeight: 100, 
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
    },
});

export default MarkerCard;