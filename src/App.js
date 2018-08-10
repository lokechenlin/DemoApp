import React from 'react';
import { YellowBox } from 'react-native';

import Navigator from './config/navigator';
import applyGlobalExceptionHandler from './screens/common/ErrorHandler';

// Section: Adhoc items
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule']);

// Section: Apply global behavior
applyGlobalExceptionHandler();

export default class App extends React.Component {
    render() {
        return <Navigator />;
    }
}
