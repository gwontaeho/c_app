import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '@/screens/scr-Home';

import {Offers} from '@/screens/scr-Offers';
import {Offer} from '@/screens/scr-Offer';

import {Searches} from '@/screens/scr-Searches';
import {Search} from '@/screens/scr-Search';

import {Talks} from '@/screens/scr-Talks';
import {Talk} from '@/screens/scr-Talk';

import {My} from '@/screens/scr-My';

import {MyStore} from '@/screens/scr-MyStore';
import {OfferCreate} from '@/screens/scr-OfferCreate';
import {OfferModify} from '@/screens/scr-OfferModify';
import {MyOffers} from '@/screens/scr-MyOffers';
import {MyOffer} from '@/screens/scr-MyOffer';
import {Applicants} from '@/screens/scr-Applicants';
import {Applicant} from '@/screens/scr-Applicant';

import {MyResume} from '@/screens/scr-MyResume';
import {MyApplications} from '@/screens/scr-MyApplications';
import {MyApplication} from '@/screens/scr-MyApplication';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="offers" component={Offers} />
      <Tab.Screen name="searches" component={Searches} />
      <Tab.Screen name="talks" component={Talks} />
      <Tab.Screen name="my" component={My} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Offer"
          component={Offer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OfferCreate"
          component={OfferCreate}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OfferModify"
          component={OfferModify}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Talk"
          component={Talk}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MyOffers"
          component={MyOffers}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyOffer"
          component={MyOffer}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Applicants"
          component={Applicants}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Applicant"
          component={Applicant}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MyApplications"
          component={MyApplications}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyApplication"
          component={MyApplication}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
