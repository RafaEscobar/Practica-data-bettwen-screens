import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from '../pages/HomePage';
import { ReviewPage } from '../pages/ReviewPage';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} options={{
        title: 'Casa'
      }} />
      <Stack.Screen name="Notifications" component={ReviewPage} options= {{
        title: 'Ver'
      }} />
    </Stack.Navigator>
  );
}