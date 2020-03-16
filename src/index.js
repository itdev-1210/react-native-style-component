import React from 'react';

import Theme from './utils/theme';
import Apollo from './utils/apollo';

import { Provider } from './utils/context';
import NavigationScreens from '../src/container/Navigations';

function Index() {
  const testUser = { name: 'Aurangzaib' };
  return <Provider value={testUser}>
    <Apollo>
    <Theme>
     <NavigationScreens/>
    </Theme>
    </Apollo>
  </Provider>;
}


export default Index;
