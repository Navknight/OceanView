import { useState } from "react"

export const useDestinationModel = () => {
    const [destinationInputText, setDestinationInputText] = useState('')

    const handleDestinaitonInputTextChange = (value: string) => {
        setDestinationInputText(value);
        console.log(value)
    }

    return {
        models: {destinationInputText},
        operations: {handleDestinationInputTextChange: handleDestinaitonInputTextChange},
    }
}