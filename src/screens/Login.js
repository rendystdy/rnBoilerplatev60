import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
// import {ADD_COUNTER} from '../redux/actions/actionTypes';

const Login = props => {
  console.log('login', props);
  return (
    <View style={styles.container}>
      <Text>Please Login</Text>
      <Icon name="md-log-in" size={30} />
      <Button
        title="Go To Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Login);
