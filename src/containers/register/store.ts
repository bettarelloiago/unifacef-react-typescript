import { observable, action } from 'mobx';
import { assign } from '../../utils/object.util';

export default class RegisterStore {
    @observable zipCode?: number;
    @observable guthub?: string;

    @action handleForm = (event: any, select?: any) => {
        const { name, value } = select || event.target;
        assign(this, name, value);
    }
}

const register = new RegisterStore();
export { register };