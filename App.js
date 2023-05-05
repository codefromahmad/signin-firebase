/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '263611982196-11i2ibhfh99bvu9951f78unhri2ml2dm.apps.googleusercontent.com',
  offlineAccess: false,
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
      } else {
        console.log('User is not signed in.');
      }
    });

    return unsubscribe;
  }, []);

  const handleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      const googleCredential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await firebase.auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button title="Sign in with Google" onPress={handleSignIn} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
