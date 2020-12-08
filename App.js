import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { TabNavigator } from './components/navigation/TabNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from "./theme.json";

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <TabNavigator />
      </ApplicationProvider>
    </>
  );
};

export default App;
