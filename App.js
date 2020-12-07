import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text } from '@ui-kitten/components';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView>
        <View>
          <Text category='h1'>RemindMe</Text>
        </View>
      </SafeAreaView>
    </ApplicationProvider>
  );
};

export default App;
