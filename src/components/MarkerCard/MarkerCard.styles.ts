import styled from "@emotion/native";
import { Dimensions } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";

interface StyledMarkerCardProps {
    insets: EdgeInsets;
}

export const StyledMarkerCard = styled.View<StyledMarkerCardProps>(({theme, insets}) => {
    return {
        position: 'absolute',
        top: insets.top + scale(100),
        width: Dimensions.get('window').width - scale(20),
        height: Dimensions.get('window').height/2,
        backgroundColor: theme.colors.common.background,
    }
})