import React from 'react'
import { DisabledInput, Input } from './DestinationInput.styles'
import { theme } from '../../theme/theme'

interface DestinationInputProps {
    disabled?: boolean,
    placeholder?: string,
    autoFocus?: boolean,
    onChangeText?: (text: string) => void,
    value?: string
}

export const DestinationInput = ({
    disabled,
    placeholder,
    autoFocus,
    onChangeText,
    value
}: DestinationInputProps) => {

    const sharedProps = { placeholder }

    return disabled ? (
        <DisabledInput
            editable={false}
            {...sharedProps}
            placeholderTextColor={theme.colors.typography.textDisabled}
        />)
        :
        (<Input
            onChangeText={onChangeText}
            autoFocus={autoFocus}
            {...sharedProps}
            placeholderTextColor={theme.colors.typography.common}
            value={value}
        />)

}
