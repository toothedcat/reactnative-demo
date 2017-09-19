import { StackNavigator } from 'react-navigation';

import Home from './app/Home';
import StyleDemo from './app/StyleDemo';
import { SizeFixedDemo, SizeFlexDemo } from './app/SizeDemo';
import InputDemo from './app/InputDemo';

const App = StackNavigator({
    Home: { screen: Home },
    StyleDemo: { screen: StyleDemo },
    SizeFixedDemo: { screen: SizeFixedDemo },
    SizeFlexDemo: { screen: SizeFlexDemo },
    InputDemo:{screen:InputDemo}
});

export default App;