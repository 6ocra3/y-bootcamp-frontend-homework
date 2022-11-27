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
describe('Проверка статичности страниц', () => {
    it('Проверка статичности главной страницы', async () => {
        const aplication = render(<Home />)
        const renderHome = render(homeCode)
        expect(renderHome.container.innerHTML).toEqual(aplication.container.innerHTML)
    });
    it("Проверка статичности страницы контактов", () => {
        const aplication = render(<Contacts />)
        const renderContacts = render(contactsCode)
        expect(renderContacts.container.innerHTML).toEqual(aplication.container.innerHTML)
    });
    it("Проверка статичности странцицы доставки", () => {
        const aplication = render(<Delivery />)
        const deliveryRender = render(deliveryCode)
        expect(deliveryRender.container.innerHTML).toEqual(aplication.container.innerHTML)
    });
    it("Проверка наличия 4 страниц на сайте", async () => {
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
        const catalogLink = getByTestId("catalog-link")
        const deliveryLink = getByTestId("delivery-link")
        const contactsLink = getByTestId("contacts-link")
        await userEvent.click(deliveryLink)
        const deliveryHeader = getByTestId("page-header")
        expect(deliveryHeader.textContent).toEqual("Delivery")
        await userEvent.click(contactsLink)
        const contactsHeader = getByTestId("page-header")
        expect(contactsHeader.textContent).toEqual("Contacts")
    });
    it("В шапке есть 4 ссылки", async () => {
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
        const catalogLink = getByTestId("catalog-link")
        const deliveryLink = getByTestId("delivery-link")
        const contactsLink = getByTestId("contacts-link")
        const cartLink = getByTestId("cart-link")
        expect(catalogLink).toBeDefined()
        expect(deliveryLink).toBeDefined()
        expect(contactsLink).toBeDefined()
        expect(cartLink).toBeDefined()
    });
    it("Заголовок - это ссылка", async () => {
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
        const homeLink = getByTestId("home-link")
        expect(homeLink.getAttribute("href")).toEqual("/")
    });
    it("Адаптивность сайта", async () => {
        const basename = '/hw/store';
        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        const application = (
            <BrowserRouter>
                <Provider store={store}>
                    <Catalog />
                </Provider>
            </BrowserRouter>)
        const { container, getByTestId } = render(application)
        const items = getByTestId("items-div")
        expect(items.className).toContain("row")
    })
});