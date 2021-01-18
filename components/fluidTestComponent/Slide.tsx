import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Svg from 'react-native-svg';

const {width} = Dimensions.get('window');
const SIZE = width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        justifyContent: "center",
        alignItems: "center"
    }
})

interface SlideProps {
    slides: {
        color: string,
        picture: number,
        aspectRatio: number
    },
    index: number
}


const Slides = ({slides, index}: SlideProps) => {
    return (
        <View style={styles.container}>
            <Svg width={SIZE} height={SIZE} viewBox={'0 0 2 2'}>
                <Path/>
            </Svg>
        </View>
    )
}

 export default Slides;