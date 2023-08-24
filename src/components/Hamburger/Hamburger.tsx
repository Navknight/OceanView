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
