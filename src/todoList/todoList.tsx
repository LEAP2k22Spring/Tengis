import React, {useReducer, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Appearance,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  Button,
  Switch,
  SafeAreaView,
  Pressable,
} from 'react-native';

const initialState = {
  list: [],
  value: '',
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD':
      return {...state, list: [...state.list, action.payload]};
    case 'ONCHANGE':
      return {...state, value: action.payload};
  }
};

function Todo(): JSX.Element {
  const colorValue = Appearance.getColorScheme();
  const [isEnabled, setIsEnabled] = useState(colorValue === 'light');
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: isEnabled ? '#81b0ff' : 'pink',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 24,
        }}>
        <Text
          style={[
            styles.header,
            {
              color: isEnabled ? 'black' : 'black',
            },
          ]}>
          TodoList
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[
          styles.container,
          {
            backgroundColor: isEnabled ? 'pink' : '#81b0ff',
          },
        ]}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            {state.list.map((value: string, index: number) => {
              return (
                <Text
                  style={{
                    color: isEnabled ? '#81b0ff' : 'black',
                  }}>
                  {index + 1}) {value}
                </Text>
              );
            })}
            <TextInput
              placeholder="add item"
              style={[
                styles.textInput,
                {
                  color: isEnabled ? 'green' : 'black',
                  borderColor: isEnabled ? 'black' : 'green',
                },
              ]}
              value={state.value}
              onChangeText={text => dispatch({type: 'ONCHANGE', payload: text})}
            />
            <View style={styles.btnContainer}>
              <Pressable
                style={{
                  backgroundColor: isEnabled ? 'green' : 'pink',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  if (state.value === '') {
                    return;
                  }
                  dispatch({type: 'ADD', payload: state.value});
                }}>
                <Text
                  style={{
                    color: !isEnabled ? 'red' : 'yellow',
                    fontWeight: 'bold',
                  }}>
                  ADD
                </Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default Todo;