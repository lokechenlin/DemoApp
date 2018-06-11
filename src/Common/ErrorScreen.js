import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

import Button from './../Common/Button';
import { img } from './../../res/img/images';
import I18n from './../../res/localization/strings';
import Theme from './../../res/Theme';

type PropsType = {
    onRetry: Object,
    errorType: string,
    errorPage: string,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.backgroundColor,
        marginTop: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 16,
        marginTop: 16,
        color: Theme.greyText,
        textAlign: 'center',
    },
    button: {
        margin: 32,
    },
    contentView: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 32,
    },
});

class ErrorPage extends Component {
    props: PropsType

    renderGeneralError = (): any => (
        <View style={styles.contentView}>
            <Image
                source={img('fail_graphic')}
            />
            <Text style={styles.title}>Error Found</Text>
            <Text style={styles.subTitle}>Error Details</Text>
        </View>
    );

    render(): any {
        return (
            <View style={styles.container}>
                {this.renderGeneralError()}
                <Button
                    style={styles.button}
                    title="Retry"
                    onPress={this.props.onRetry}
                    backgroundColor={Theme.buttonPrimaryBackgroundColor}
                />
            </View>
        );
    }
}

export default ErrorPage;
