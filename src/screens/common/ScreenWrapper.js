import React from 'react';
import Events from 'react-native-simple-events';
import PropTypes from 'prop-types';

import ErrorScreen from './ErrorScreen';

type PropsType = {
    errorPage: PropTypes.string.isRequired,
    children?: React.Component,
    onRetry?: () => void,
}

type optionsType = {
    errorPage: PropTypes.string.isRequired,
}

export function showGeneralError(options: optionsType) {
    Events.trigger('showGeneralError', options);
}

export function resetError(options: optionsType) {
    Events.trigger('resetError', options);
}

export default class ScreenWrapper extends React.Component {
    props: PropsType

    static get defaultProps(): Object {
        return {
            children: null,
            onRetry: () => {},
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            generalError: false,
        };

        this.showGeneralError = this.showGeneralError.bind(this);
        this.resetError = this.resetError.bind(this);
        this.setErrorState = this.setErrorState.bind(this);
    }

    componentWillMount() {
        Events.on('showGeneralError', this.props.errorPage, this.showGeneralError);
        Events.on('resetError', this.props.errorPage, this.resetError);
    }

    componentWillUnmount() {
        Events.remove('showGeneralError', this.props.errorPage);
        Events.remove('resetError', this.props.errorPage);
    }

    setErrorState(generalError) {
        this.setState({
            generalError,
        });
    }

    showGeneralError(options: optionsType) {
        if (options.errorPage !== this.props.errorPage) {
            return;
        }
        this.setErrorState(true);
    }

    resetError(options: optionsType) {
        if (options.errorPage !== this.props.errorPage) {
            return;
        }
        this.setErrorState(false);
    }

    render() {
        if (this.state.generalError) {
            return (
                <ErrorScreen
                    errorType={{ isGeneralError: true }}
                    errorPage={this.props.errorPage}
                    onRetry={this.props.onRetry}
                />
            );
        }

        return this.props.children;
    }
}
