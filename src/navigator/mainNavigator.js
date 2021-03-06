import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth129459Navigator from '../features/EmailAuth129459/navigator';
import Camera129458Navigator from '../features/Camera129458/navigator';
import CalendarView129457Navigator from '../features/CalendarView129457/navigator';
import Maps129456Navigator from '../features/Maps129456/navigator';
import Tutorial129455Navigator from '../features/Tutorial129455/navigator';
import Messaging129454Navigator from '../features/Messaging129454/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth129459: { screen: EmailAuth129459Navigator },
Camera129458: { screen: Camera129458Navigator },
CalendarView129457: { screen: CalendarView129457Navigator },
Maps129456: { screen: Maps129456Navigator },
Tutorial129455: { screen: Tutorial129455Navigator },
Messaging129454: { screen: Messaging129454Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
