import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Container, Square, StyledPressable } from './MapSearchBar.styles'
import { CustomText } from '../common/CustomText'

interface MapSearchBarProps {
    onPress: () => void
}

export const MapSearchBar = ({ onPress }: MapSearchBarProps) => {
    const insets = useSafeAreaInsets()
    return (
        <Container insets={insets}>
            <StyledPressable onPress={onPress}>
                <Square></Square>
                <CustomText variant='body'>Search The Oceans!</CustomText>
            </StyledPressable>
        </Container>
    )
}
