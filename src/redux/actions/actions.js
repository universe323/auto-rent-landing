import {
  GET_CATALOG,
  ADD_TO_CART,
  DELETE_FROM_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SORT_BY,
  FILTER_BY,
  UPDATE_PRICE,
  UPDATE_ORDER_SIZE,
  IS_LOADING
} from "../types";

const getCatalog = (catalog) => {
  return {
    type: GET_CATALOG,
    payload: catalog,
  };
};

const addToCart = (pizza) => {
  return {
    type: ADD_TO_CART,
     payload: pizza,
  };
};

const deleteFromCart = (pizza) => {
  return {
    type: DELETE_FROM_CART,
    payload: pizza
  }
}

const removeFromCart = (pizza) => {
  return {
    type: REMOVE_FROM_CART,
    payload: pizza
  }
}

const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

const sortBy = (value) => {
  return {
    type: SORT_BY,
    payload: value
  }
}

const filterBy = (value) => {
  return {
    type: FILTER_BY,
    payload: value
  }
}

const updatePrice = () => {
  return {
    type: UPDATE_PRICE,
  }
}

const updateOrderSize = () => {
  return {
    type: UPDATE_ORDER_SIZE
  }
}

const isLoading = (value) => {
  return {
    type: IS_LOADING,
    payload: value
  }
}

export {
  getCatalog,
  addToCart,
  deleteFromCart,
  removeFromCart,
  clearCart,
  sortBy,
  filterBy,
  updatePrice,
  updateOrderSize,
  isLoading
};
