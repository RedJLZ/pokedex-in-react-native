import {NavigationContainer} from '@react-navigation/native';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n';
import {Tabs} from './src/navegations/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      <I18nextProvider i18n={i18n}>
        <Tabs />
      </I18nextProvider>
    </NavigationContainer>
  );
}
