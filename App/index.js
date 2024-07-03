// Filename: index.js
// Combined code from all files
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Speech from 'expo-speech';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const words = {
    A: "Ant",
    B: "Ball",
    C: "Cat",
    D: "Dog",
    E: "Elephant",
    F: "Fish",
    G: "Goat",
    H: "Hat",
    I: "Igloo",
    J: "Jelly",
    K: "Kite",
    L: "Lion",
    M: "Monkey",
    N: "Nose",
    O: "Octopus",
    P: "Pig",
    Q: "Queen",
    R: "Rabbit",
    S: "Snake",
    T: "Tiger",
    U: "Umbrella",
    V: "Violin",
    W: "Whale",
    X: "Xylophone",
    Y: "Yoyo",
    Z: "Zebra"
};

export default function App() {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState("");

    const handleNextLetter = () => {
        setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % letters.length);
        setCurrentWord("");
    };

    const handleShowWord = () => {
        const letter = letters[currentLetterIndex];
        setCurrentWord(words[letter]);
    };

    const handlePronounce = () => {
        if (currentWord) {
            Speech.speak(currentWord);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.letterContainer}>
                <Text style={styles.letter}>{letters[currentLetterIndex]}</Text>
                {currentWord ? <Text style={styles.word}>{currentWord}</Text> : null}
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleNextLetter}>
                    <Text style={styles.buttonText}>Next Letter</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.button, styles.wordButton]} onPress={handleShowWord}>
                    <Text style={styles.buttonText}>Show Word</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.button, styles.pronounceButton]} onPress={handlePronounce}>
                    <Text style={styles.buttonText}>Pronounce</Text>
                </TouchableOpacity>
            </View>
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
        alignItems: 'center',
    },
    letter: {
        fontSize: 96,
        fontWeight: 'bold',
        color: '#333',
    },
    word: {
        marginTop: 20,
        fontSize: 36,
        fontWeight: 'bold',
        color: '#555',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    button: {
        padding: 20,
        borderRadius: 10,
        margin: 10,
        width: '100%',
    },
    nextButton: {
        backgroundColor: '#007AFF',
    },
    wordButton: {
        backgroundColor: '#FF9500',
    },
    pronounceButton: {
        backgroundColor: '#34C759',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});