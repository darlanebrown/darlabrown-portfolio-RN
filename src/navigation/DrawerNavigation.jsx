import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Portfolio from '../screens/Portfolio';
import Resume from '../screens/Resume';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Portoflio" component={Portfolio} />
            <Drawer.Screen name="Resume" component={Resume} />
            <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
