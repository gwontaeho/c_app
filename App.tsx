import {
  NavigationContainer,
  type CompositeScreenProps,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {
  createBottomTabNavigator,
  type BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';

import {
  createMaterialTopTabNavigator,
  type MaterialTopTabScreenProps,
} from '@react-navigation/material-top-tabs';

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

import {SearchCreate} from '@/screens/scr-SearchCreate';
import {SearchModify} from '@/screens/scr-SearchModify';
import {MyApplications} from '@/screens/scr-MyApplications';
import {MyApplication} from '@/screens/scr-MyApplication';
import {SafeAreaView} from 'react-native-safe-area-context';

import {IcoHome, IcoSearch, IcoChat, IcoUser} from '@/assets/icons';
import {Layout, Text} from '@/components';

type StackParamList = {
  Main: undefined;
  Offer: undefined;
  OfferCreate: undefined;
  OfferModify: undefined;
  Search: undefined;
  Talk: undefined;
  MyOffers: undefined;
  MyOffer: undefined;
  Applicants: undefined;
  Applicant: undefined;
  MyApplications: undefined;
  MyApplication: undefined;
};

type TabParamList = {
  Home: undefined;
  Services: undefined;
  Talks: undefined;
  My: undefined;
};

type ServicesTabProps = {
  Offers: undefined;
  Searches: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const ServicesTab = createMaterialTopTabNavigator<ServicesTabProps>();

const Services = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ServicesTab.Navigator
        screenOptions={{
          tabBarStyle: {width: '48%', backgroundColor: 'transparent'},
        }}>
        <ServicesTab.Screen
          name="Offers"
          component={Offers}
          options={{tabBarLabel: 'offe'}}
        />
        <ServicesTab.Screen
          name="Searches"
          component={Searches}
          options={{tabBarLabel: 'sear'}}
        />
      </ServicesTab.Navigator>
    </SafeAreaView>
  );
};

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#16878C',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <IcoHome color={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({color}) => (
            <IcoSearch color={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Talks"
        component={Talks}
        options={{
          tabBarIcon: ({color}) => (
            <IcoChat color={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="My"
        component={My}
        options={{
          tabBarIcon: ({color}) => (
            <IcoUser color={color} width={24} height={24} />
          ),
        }}
      />
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
