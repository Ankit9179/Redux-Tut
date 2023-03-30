import { ADD_TO_CART } from "../constants";
const initialStage = {
  cardData: [],
};
export default function cartItems(state=initialStage, Action) {
  switch (Action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cardData: Action.data,
      };
      break;
    default:
      return state;
  }
}
