import styled from "@emotion/native";
import { Dimensions } from "react-native";
import { scale } from "react-native-size-matters";

export const DisabledInput = styled.TextInput(({ theme }) => {
    return {
        minHeight: scale(30),
        width: "100%",
        paddingHorizontal: scale(5),
        backgroundColor: theme.colors.components.destinationInput.disabledBackground,
        //color defined in DestinationInput.tsx
    }
})
export const Input = styled.TextInput(({ theme }) => {
    return {
        minHeight: scale(42),
        width: Dimensions.get('window').width - scale(50),
        paddingHorizontal: scale(15),
        backgroundColor: theme.colors.components.destinationInput.activeBackground,
        //color defined in DestinationInput.tsx
        borderRadius: 40,
    }
})