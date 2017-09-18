import { StackNavigator } from 'react-navigation';

import Home from './app/Home';
import StyleDemo from './app/StyleDemo';
import { SizeFixedDemo, SizeFlexDemo } from './app/SizeDemo';

const App = StackNavigator({
    Home: { screen: Home },
    StyleDemo: { screen: StyleDemo },
    SizeFixedDemo: { screen: SizeFixedDemo },
    SizeFlexDemo: { screen: SizeFlexDemo }
});

export default App;