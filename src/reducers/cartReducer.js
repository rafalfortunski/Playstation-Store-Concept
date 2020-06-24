import { games } from "../data/GamesData";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  // ADD_QUANTITY,
  // SUB_QUANTITY,
  // EMPTY_CART,
} from "../actions/actionTypes";

const initialState = {
  games: games,
  addedItems: [],
  total: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedItem = state.games.find(
        (item) => parseInt(action.id) === item.id
      );

      const isAdded = state.addedItems.find(
        (item) => parseInt(action.id) === item.id
      );

      if (isAdded) {
        return state;
      } else {
        return Object.assign({}, state, {
          addedItems: [...state.addedItems, addedItem],
          total: state.total + addedItem.price,
        });
      }

    case REMOVE_FROM_CART:
      const itemToRemove = state.addedItems.find(
        (item) => action.id === item.id
      );
      const newItems = state.addedItems.filter(
        (item) => parseInt(action.id) !== item.id
      );
      return {
        ...state,
        addedItems: newItems,
        total: state.total - itemToRemove.price,
      };

    default:
      return state;
  }
};

export default CartReducer;
