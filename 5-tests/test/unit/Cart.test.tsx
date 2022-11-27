const { ExampleApi, CartApi } = require("../../src/client/api");
const { initStore, addToCart, clearCart, checkout, productsLoad } = require("../../src/client/store");
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
import { CartBadge } from "../../src/client/components/CartBadge"
import { Image } from "../../src/client/components/Image"
import { cn } from '@bem-react/classname';
import { Form } from "../../src/client/components/Form"
import { Catalog } from '../../src/client/pages/Catalog';
import { useSelector } from "react-redux"
import { ApplicationState } from "../../src/client/store"
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
        store.dispatch(clearCart())
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
    it('Проверка карточки элемента', async () => {
        const p = {
            id: 1,
            name: "test",
            price: 100
        }
        const application = (
            <BrowserRouter>
                <Provider store={store}>
                    <ProductItem product={p} />
                </Provider>
            </BrowserRouter>)
        const { container, getByTestId } = render(application)
        const item = getByTestId(p.id)
        const el = item.lastChild
        const h = el.firstChild
        const par = el.childNodes[1]
        const link = el.childNodes[2]
        const itogstr = par.textContent + h.textContent + link.getAttribute("href")
        expect(itogstr).toEqual("$100test/catalog/1")

    });
    it('Проверка страницы подробной информации продукта', async () => {
        const product = {
            id: 123,
            name: "test",
            price: 200,
            color: "black",
            material: "metal",
            description: "1234",
        }
        const bem = cn('ProductDetails');
        const exampleDetails = <Provider store={store}><div className={bem(null, ['row'])}>
            <div className="col-12 col-sm-5 col-lg-4">
                <Image />
            </div>
            <div className="col-12 col-sm-7 col-lg-6">
                <h1 className={bem("Name")}>{product.name}</h1>
                <p className={bem("Description")}>{product.description}</p>
                <p className={bem("Price", ['fs-3'])}>${product.price}</p>
                <p>
                    <button data-testid="add_button" className={bem("AddToCart", ['btn', 'btn-primary', "btn-lg"])}>Add to Cart</button>
                    <CartBadge id={product.id} />
                </p>
                <dl>
                    <dt>Color</dt>
                    <dd className={bem("Color", ['text-capitalize'])}>{product.color}</dd>
                    <dt>Material</dt>
                    <dd className={bem("Material", ['text-capitalize'])}>{product.material}</dd>
                </dl>
            </div>
        </div></Provider>
        const application = (
            <BrowserRouter>
                <Provider store={store}>
                    <ProductDetails product={product} />
                </Provider>
            </BrowserRouter>)
        const { container, getByTestId } = render(application)
        const detailsRender = render(exampleDetails)
        expect(container.innerHTML).toEqual(detailsRender.container.innerHTML)

    });
    it('Проверка добавление метки покупки к элементу', async () => {
        const p = {
            id: 12345,
            name: "test",
            price: 10000,
            color: "black",
            material: "metal",
            description: "1234",
        }
        const application = (
            <BrowserRouter>
                <Provider store={store}>
                    <ProductDetails product={p} />
                </Provider>
            </BrowserRouter>)
        const { container, getByTestId } = render(application)
        const btn = getByTestId("add_button")
        await userEvent.click(btn)
        const mark = getByTestId("inCart")

    });

    it("Проверка формы", async () => {
        var response = false
        function onSubmit() {
            console.log(12367)
            response = true
        }
        const { container } = render(<Form onSubmit={onSubmit} />)
        const name = container.querySelector("#f-name")
        const phone = container.querySelector("#f-phone")
        const address = container.querySelector("#f-address")
        const btn = container.querySelector("#sbm-btn")

        await userEvent.type(name, "Makar")
        await userEvent.type(phone, "15672342360")
        await userEvent.type(address, "Makar")
        await userEvent.click(btn)
        expect(response).toBeTruthy()
    })
    // it("Проверка сообщения об успешности", async () => {
    //     const application = (
    //         <BrowserRouter>
    //             <Provider store={store}>
    //                 <Cart />
    //             </Provider>
    //         </BrowserRouter>)
    //     const { container, getByTestId } = render(application)
    //     store.dispatch(addToCart({ id: "0", name: "test", "price": "000" }))
    //     const name = container.querySelector("#f-name")
    //     const phone = container.querySelector("#f-phone")
    //     const address = container.querySelector("#f-address")
    //     const btn = container.querySelector("#sbm-btn")
    //     await userEvent.type(name, "Makar")
    //     await userEvent.type(phone, "15672342360")
    //     await userEvent.type(address, "Makar")
    //     await userEvent.click(btn)
    //     console.log(container.innerHTML)
    // });
});