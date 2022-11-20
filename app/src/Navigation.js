//1. //import bottom tab library
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//2. // import screens
import Characters from './Characters';
import Episodes from './Episodes';
import Quotes from './Quotes';



//3. //create bottom tab
const AppTabs = createMaterialBottomTabNavigator();

//4. //create the tabs
export const Tabs = () =>{
  return(
      <AppTabs.Navigator>
         <AppTabs.Screen name='Characters' component={Characters} />
         <AppTabs.Screen name='Episodes' component={Episodes} />
         <AppTabs.Screen name='Quotes' component={Quotes} />
      </AppTabs.Navigator>
   )
}