const pallette = {
    white: '#fff',
    black: '#000',
    grey: 'rgba(34,34,34,0.8)',
    lightGrey: 'rgba(100,100,100,0.35)',
    lighterGrey: 'rgba(100,100,100,0.1)',
    blue: '#4a80f5',
    midBlue: '#0083ff',
};

export const colors = {
    typography: {
        body: pallette.grey,
        textDisabled: pallette.lightGrey,
        common: pallette.black,
        searchbar: pallette.white,
    },
    common: {
        background: pallette.white,
        shadowDefault: pallette.black,
    },
    components: {
        mapSearchBar: {
            squareColor: pallette.black,
        },
        destinationInput: {
            disabledBackground: pallette.lightGrey,
            activeBackground: pallette.grey,
        },
        destinationModal: {
            decoratorCircle: pallette.grey,
            decoratorSquare: pallette.black,
        },
        divider: {
            backgroundColor: pallette.lightGrey,
        },
        placeItem: {
            iconBackground: pallette.blue,
            iconTint: pallette.white,
        },
        chooseRideItem: {
            selectedBorderColor: pallette.black,
            borderColor: pallette.white,
        },
        rideBottomSheet: {
            footerRightIconBackground: pallette.lighterGrey,
            footerLeftIconBackground: pallette.black,
            footerLeftIconColor: pallette.white,
        },
        actionButton: {
            backgroundColor: pallette.black,
            fontColor: pallette.white,
        },
    },
    screens: {
        mapScreen: {
            directionsStroke: pallette.blue,
        },
    },
    hamburger: {
        selectedBox:{
            borderColor: '#000000',
            backgrooundColor: '#d2ffd9',
        },
        usualBox: {
            borderColor: '#d1d4d2',
            backgroundColor: '#ffffff'
        }
    }
};

export type Colors = typeof colors;