import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { TabNavigator } from './components/navigation/TabNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { default as theme } from "./theme.json";
import styled from 'styled-components';

const store = createStore(rootReducer, applyMiddleware(thunk));

const StyledLayout = styled(Layout)`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <StyledLayout>
          <TabNavigator />
        </StyledLayout>
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
