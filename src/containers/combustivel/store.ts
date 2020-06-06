import { action, observable } from 'mobx';
import Swal from 'sweetalert2';

export default class CombustivelStore {
  @observable etanol = 0;
  @observable gasolina = 0;

  @action submit = () => {
    const { etanol, gasolina } = this;

    if (!isNaN(Number(etanol)) && !isNaN(Number(gasolina))) {
      const value = Number(etanol) / Number(gasolina);

      if (value > 0.70) {
        Swal.fire("Vale a pena gasolina", "", "success");
      } else if (value < 0.70) {
        Swal.fire("Vale a pena etanol", "", "success");
      } else {
        Swal.fire("São equiavalentes", "", "success");
      }
    } else {
      Swal.fire("Preencha valores válidos", "", "warning");
    }
  }

  @action handleForm = (event:any, select?: any) => {
    const { name, value } = select || event.target;
    this[name] = value;
  }

}
const combustivel = new CombustivelStore();
export { combustivel };