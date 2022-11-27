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
import { ProductItem } from '../../src/client/components/ProductItem';
import { ProductDetails } from '../../src/client/components/ProductDetails';
import { Helmet } from 'react-helmet';
import { cn } from '@bem-react/classname';
import { Home } from '../../src/client/pages/Home';
import { Contacts } from "../../src/client/pages/Contacts";
import { Delivery } from "../../src/client/pages/Delivery";
import { Image } from "../../src/client/components/Image"
import { homeCode, contactsCode, deliveryCode } from "./staticPageCode"
import { Catalog } from '../../src/client/pages/Catalog';

const { TextDecoder, TextEncoder } = require("util");
describe('Проверка работы navbar', () => {
    it("collapse у меню-бургера", async () => {
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
        const { container, getByTestId } = render(application)
        const burger = getByTestId("burger-btn")
        const linksDiv = getByTestId("links-div")
        const deliveryLink = getByTestId("delivery-link")
        expect(linksDiv.className).toContain(" collapse")
        await userEvent.click(burger)
        expect(linksDiv.className).not.toContain(" collapse")
        await userEvent.click(deliveryLink)
        expect(linksDiv.className).toContain(" collapse")
    })
    it("Появление кнопки-бургер, исчезание текста", () => {
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
        const { container, getByTestId } = render(application)
        const burger = getByTestId("burger-btn")
        const linksDiv = getByTestId("links-div")
        expect(burger.className).toContain("navbar-toggler")
        expect(linksDiv.className).toContain("navbar-collapse")
    })
});