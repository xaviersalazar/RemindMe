import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import styled from "styled-components";
import { default as theme } from "./theme.json";
import { TabNavigator } from "./src/components/navigation/TabNavigator";
import rootReducer from "./src/redux/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

const StyledLayout = styled(Layout)`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const App = () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <StyledLayout>
        <TabNavigator />
      </StyledLayout>
    </ApplicationProvider>
  </Provider>
);

export default App;
