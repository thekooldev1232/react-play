// Action creators
const addProduct = (product, quantity, price) => {
  return {
    type: "ADD_PRODUCT",
    payload: { product, quantity, price },
  };
};

const removeProduct = (product, quantity) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: { product, quantity },
  };
};

// Reducers
const productReducer = (products = [], action) => {
  if (action.type == "ADD_PRODUCT") {
    const { product, quantity, price } = action.payload;
    return [...products, { product, quantity, price }];
  } else if (action.type == "REMOVE_PRODUCT") {
    return products.filter(product => {
      return product.product !== action.payload.product;
    });
  }
  return products;
};

//Store -> getState()
const { createStore, combineReducers } = Redux;
const store = createStore(combineReducers({ productReducer }));

store.dispatch(addProduct('nirma',10, 100))
store.dispatch(addProduct('candy',15, 1000))
store.dispatch(addProduct('pet shampoo',2, 300))
console.log(store.getState());
store.dispatch(removeProduct('nirma', 10));
console.log(store.getState());
