import React from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import ReactMarkdown from 'react-markdown';
import _md from './divider.md';

class DividerScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            source: null
        }
    }

    componentDidMount() {
        fetch(_md).then((response) => response.text()).then((text) => {
            this.setState({ source: text })
        })
    }

    render() {
        const { source } = this.state;
        return (
            <View>
                <ReactMarkdown source={source} />
            </View>
        )
    }
}

export default DividerScreen;