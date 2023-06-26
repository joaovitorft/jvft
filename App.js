import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from "react";
import Routes from "./src/routes";
import { Switch, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {

  return <Routes />
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});