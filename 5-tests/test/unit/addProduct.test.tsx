const { ExampleApi, CartApi } = require("../../src/client/api");
const { initStore, addToCart, clearCart } = require("../../src/client/store");
import React from 'react';
import "react-dom"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Application } from '../../src/client/Application';
import { render } from "@testing-library/react"
import 'localstorage-polyfill'
import "core-js/stable";
import "regenerator-runtime/runtime";
import { Cart } from "../../src/client/pages/Cart"
import userEvent from "@testing-library/user-event"
describe('Проверка работы корзины', () => {
    const basename = '/hw/store';
    const api = new ExampleApi(basename);
    const cart = new CartApi();
    const store = initStore(api, cart);

    const application = (
        <BrowserRouter>
            <Provider store={store}>
                <Application />
            </Provider>
        </BrowserRouter>)
    it('Счетчик у корзины в ссылках', () => {
        store.dispatch(addToCart({ id: "0", name: "test", "price": "000" }))
        store.dispatch(addToCart({ id: "1", name: "test2", "price": "100" }))
        store.dispatch(addToCart({ id: "1", name: "test2", "price": "100" }))
        // expect(store.getState().cart).toEqual(1)
        expect(Object.keys(store.getState().cart).length).toEqual(2)
    });

    it('Увеличение счетчика у товара', () => {
        store.dispatch(addToCart({ id: "2", name: "test2", "price": "100" }))
        store.dispatch(addToCart({ id: "2", name: "test2", "price": "100" }))
        // expect(store.getState().cart).toEqual(1)
        expect(store.getState().cart["2"].count).toEqual(2)
    });

    it('Очистка корзины по кнопке', async () => {
        const application = (
            <BrowserRouter>
                <Provider store={store}>
                    <Cart />
                </Provider>
            </BrowserRouter>)
        store.dispatch(addToCart({ id: "2", name: "test2", "price": "100" }))
        store.dispatch(addToCart({ id: "1", name: "test2", "price": "100" }))
        const { container, getByTestId } = render(application)
        const btn = getByTestId("clear-cart")
        // store.dispatch(clearCart())
        await userEvent.click(btn)
        expect(Object.keys(store.getState().cart).length).toEqual(0)
    });
    it('Наличие ссылки на при пустой корзине', async () => {
        const application = (
            <BrowserRouter>
                <Provider store={store}>
                    <Cart />
                </Provider>
            </BrowserRouter>)
        const { container, getByTestId } = render(application)
        store.dispatch(clearCart())
        const link = getByTestId("catalog-link")
        expect(link.getAttribute("href")).toEqual("/catalog")
    });
});