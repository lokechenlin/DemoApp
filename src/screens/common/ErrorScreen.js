import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Button from './../../components/Button';

type PropsType = {
    onRetry: Object,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentView: {
        marginTop: 48,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 16,
        margin: 16,
        textAlign: 'center',
    },
    button: {
        margin: 48,
    },
});

class ErrorScreen extends React.Component {
    props: PropsType

    render(): any {
        return (
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <Text style={styles.title}>Error Found</Text>
                    <Text style={styles.subTitle}>Error Details</Text>
                </View>
                <Button
                    style={styles.button}
                    text="Retry"
                    onPress={this.props.onRetry}
                />
            </View>
        );
    }
}

export default ErrorScreen;
