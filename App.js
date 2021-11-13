import React from 'react';
import {
  View,
  Text
} from 'react-native'

import * as Sentry from '@sentry/react-native';

// add your DSN here
Sentry.init({
  dsn: '',
});


function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#FFF' }}>Olá!</Text>
    </View>
  )
}

export default App;

