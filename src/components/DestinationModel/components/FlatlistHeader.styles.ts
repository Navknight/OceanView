import styled from "@emotion/native";
import { Dimensions } from "react-native";
import { scale } from "react-native-size-matters";

export const Container = styled.View({
    width: Dimensions.get('window').width - scale(50),
    alignSelf: 'center'
})

export const InputsContainer = styled.View({
    flex: 1
})

export const HorizontalContainer = styled.View({
    flexDirection: 'row',
    width: Dimensions.get('window').width - scale(50),
})

export const DecoratorCircle = styled.View({
    alignItems: 'center',
    justifyContent: 'center',
})

export const Circle = styled.View(({ theme }) => {
    return {
        height: scale(7),
        width: scale(7),
        borderRadius: scale(7 / 2),
        backgroundColor: theme.colors.components.destinationModal.decoratorCircle,
    }
})