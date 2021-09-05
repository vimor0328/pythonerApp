import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles: { [key: string]: StyleProp<TextStyle> } = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '50%',
  },
  body: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: '10%',
    height: '100%',
  },
})

export default () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior='never'
        style={backgroundStyle}
        scrollEnabled={false}
      >
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Text
            style={{
              // @ts-ignore
              ...styles?.title,
              color: isDarkMode ? Colors.lighter : Colors.darker,
            }}
          >
            {'Python'}
          </Text>
          <Text
            style={{
              // @ts-ignore
              ...styles?.body,
              color: isDarkMode ? Colors.lighter : Colors.darker,
            }}
          >
            {`The Zen of Python, by Tim Peters
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!`}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
