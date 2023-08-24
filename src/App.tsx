import React, { useEffect, useState } from 'react';
import { MapScreen } from './screens/MapScreen';
import { LocationPermissionsService } from './storage/LocationPermissionsService';
import { ThemeProvider } from './theme/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserLocaitionStateContextProvider } from './context/UserLocationStateContext';
import { retrieveData } from './storage/firestore/LocationReader';

export const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <UserLocaitionStateContextProvider>
          <MapScreen />
          <LocationPermissionsService />
        </UserLocaitionStateContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

