import React, { useState } from 'react';
import { Dimensions, FlatList, Image, ImageURISource, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RoundButton } from '../RoundButton';
import { theme } from '../../theme/theme';
import { scale } from 'react-native-size-matters';
import { useMapScreen } from '../../screens/MapScreen/useMapScreen';

interface HamburgerProps {
    disabled: boolean;
    closeHam: () => void;
}

type ItemData = {
    id: string,
    title: string,
    image: ImageURISource,
    description: string
}

const DATA: ItemData[] = [
    {
        id: 'OilSpill',
        title: 'Oil Spills',
        image: { uri: 'https://media.istockphoto.com/vectors/oil-spill-vector-id165733013?k=6&m=165733013&s=612x612&w=0&h=XoSo_QJip0t-HFMAtOk6cH-nWFnE-GO-dKRkAZOrxeI=' },
        description: 'Show all the locations where recent oil spills have happened.'
    },
    {
        id: 'Plastic',
        title: 'Plastic Islands',
        image: { uri: 'https://i.pinimg.com/474x/67/03/e3/6703e354b405011972dcb07eb83aaa69.jpg' },
        description: 'All the locations which have islands of Plastics'
    },
    {
        id: 'Restoration',
        title: 'Restoration Works',
        image: { uri: 'https://th.bing.com/th/id/OIP.bICb-ZovNmwm1oMYVqI2pQHaHa?pid=ImgDet&rs=1' },
        description: 'Locations where live restoration is being done'
    },
    {
        id: 'CoralDead',
        title: 'Corals',
        image: { uri: 'https://th.bing.com/th/id/OIP.Md4079onqwvs4hgRdAdleQHaIK?pid=ImgDet&rs=1' },
        description: 'Locations of coral graveyards.'
    },
    {
        id: 'ShipWreck',
        title: 'Shipwreck Sites',
        image: { uri: 'https://th.bing.com/th/id/R.ece0d0cc3971a079980c63b5be9c5152?rik=OCtl6aLJoQiZZg&riu=http%3a%2f%2fclipground.com%2fimages%2fship-wreck-clipart-6.jpg&ehk=3JyFgCerJcjmy3hYKXkx5lKvbIH3LWrtweYFCK7cMt0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1' },
        description: 'Locations of Shipwrecks',
    },
    {
        id: 'LandReclaim',
        title: 'Ocean claims the land',
        image: { uri: 'https://th.bing.com/th/id/OIP.yBCo1XFOcG_tJO4WcJXaBwHaFS?pid=ImgDet&rs=1' },
        description: 'Atlantis in real life, just not that friendly'
    }
];

type ItemProps = {
    item: ItemData,
    onPress: () => void,
    isSelected: boolean,
}

const Item = ({ item, onPress, isSelected }: ItemProps) => (
    <TouchableOpacity
        style={[
            styles.button,
            isSelected
                ? { backgroundColor: '#C6E5CC', borderColor: '#3A554A' }
                : { backgroundColor: theme.colors.hamburger.usualBox.backgroundColor, borderColor: theme.colors.hamburger.usualBox.borderColor },
        ]}
        onPress={onPress}
    >
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    </TouchableOpacity>
)

export const Hamburger = ({ disabled, closeHam }: HamburgerProps) => {

    const {models, operations} = useMapScreen()

    const renderItem = ({ item }: { item: ItemData }) => {
        const isSelected = item.id === models.selectedId;

        return (
            <Item
                item={item}
                onPress={() => {
                    console.log(models.selectedId)
                    operations.setSelectedId(isSelected ? undefined : item.id)
                }}
                isSelected={isSelected}
            />
        )
    }

    return (
        <Modal onRequestClose={closeHam} visible={disabled} animationType='fade'>
            <View style={styles.modalContainer}>
                <Text style={styles.titleText}>Categories</Text>
                <View style={styles.flatlistContainer}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        extraData={models.selectedId}
                    />
                </View>
                <RoundButton icon="arrow-back-outline" onPress={closeHam} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: scale(10),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: scale(2),
        borderRadius: scale(50), // For pill shape
        marginRight: scale(5),
        marginLeft: scale(5),
        marginBottom: scale(10),
        overflow: 'hidden'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color:theme.colors.typography.common,
        marginBottom: scale(5)
    },
    image: {
        height: scale(85),
        width: scale(60),
        marginRight: scale(10),
        borderRadius: scale(100)
    },
    description: {
        color: theme.colors.typography.body
    },
    textContainer: {
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        paddingTop: scale(30), 
    },
    titleText: {
        fontSize: scale(40),
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: scale(50), 
        color: theme.colors.typography.common
    },
    flatlistContainer: {
        flex: 1,
    },
})
