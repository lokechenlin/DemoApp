import { Alert } from 'react-native';
import { setJSExceptionHandler } from 'react-native-exception-handler';

const errorHandler = (error, isFatal) => {
    /**
     * This is your custom global error handler, do stuff like
     * error dialog / analytics to track crashes / hit monitoring api
     */
    if (isFatal) {
        Alert.alert(
            'Unexpected error occurred',
            `
            Error: ${(isFatal) ? 'Fatal:' : ''} ${error.name} ${error.message}

            Please restart the app.
            `,
            [{
                text: 'Close',
                onPress: () => {

                },
            }],
        );
    } else {
        // Do any log if needed.
    }
};

const applyGlobalExceptionHandler = () => {
    setJSExceptionHandler(errorHandler, true);
};

export default applyGlobalExceptionHandler;
