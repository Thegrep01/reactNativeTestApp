import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen } from './content/homeScreen';

import { Drawer } from './content/drawer';

const MyDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
    },
    {
        contentComponent: Drawer,
    }
);

export const MyApp = createAppContainer(MyDrawerNavigator);
