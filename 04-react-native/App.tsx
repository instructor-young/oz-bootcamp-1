import React from 'react';
import {Image, SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod/images/popular-puppy-questions-1639736471.jpg?crop=0.673xw:1.00xh;0.282xw,0&resize=1200:*',
        }}
      />
    </SafeAreaView>
  );
}

export default App;
