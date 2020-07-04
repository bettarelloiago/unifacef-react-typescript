import OneSignal from 'react-onesignal';
import { configs } from '../configs';

const options = {
    autoRegister: true,
    autoSubscribe: true,
    notifyButton: { enable: true }
}

OneSignal.initialize(configs.oneSignal, options);

try {
    OneSignal.registerForPushNotifications()
} catch (error) {

}