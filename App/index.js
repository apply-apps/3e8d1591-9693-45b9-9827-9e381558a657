// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function App() {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    const handleNextLetter = () => {
        setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % letters.length);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.letterContainer}>
                <Text style={styles.letter}>{letters[currentLetterIndex]}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleNextLetter}>
                <Text style={styles.buttonText}>Next Letter</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        paddingTop: 20,
    },
    letterContainer: {
        marginBottom: 50,
    },
    letter: {
        fontSize: 96,
        fontWeight: 'bold',
        color: '#333',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});