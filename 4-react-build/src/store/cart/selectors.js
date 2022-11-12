export const getBookCounter = (state, id) => state.cart[id]?.count

export const getCart = (state) => state.cart