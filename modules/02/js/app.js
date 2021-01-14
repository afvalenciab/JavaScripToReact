import store from './store.js';
import { BURN, DISCOUNT } from './actions/index.js';

store.subscribe(() => {
  store.getState().burn &&
    (window.result.textContent = `${store.getState().burn
      } calorías quemadas`);

  store.getState().discount !== 1360563 &&
    (window.result2.textContent = `Te faltan ${store.getState().discount
      } calorías`);
});

const burn = () => {
  store.dispatch({ type: BURN, payload: 1.42 });
};

const discountCalories = () => {
  store.dispatch({ type: DISCOUNT, payload: 1.42 });
};

window['btn-burner'].addEventListener('click', burn);

window['btn-burner2'].addEventListener('click', discountCalories);