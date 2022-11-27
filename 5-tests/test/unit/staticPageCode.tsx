import { cn } from '@bem-react/classname';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Image } from "../../src/client/components/Image"
var bem = cn('Home');
export const homeCode = <div className={bem()}>
    <Helmet title="Welcome" />
    <div className="row">
        <div className="col bg-secondary text-white py-4 bg-opacity-75">
            <p className="display-3">Welcome to Example store!</p>
            <p className="lead">
                Culpa perspiciatis corporis facilis fugit similique
            </p>
            <p className="lead">
                Cum aut ut eveniet rem cupiditate natus veritatis quia
            </p>
        </div>
    </div>
    <div className="row mb-4">
        <div className="col-12 col-md-4 bg-light py-3">
            <h1>Quickly</h1>
            <p className="lead">
                Odio aut assumenda ipsam amet reprehenderit. Perspiciatis qui molestiae qui tempora quisquam
            </p>
        </div>
        <div className="col-12 col-md-4 bg-light py-3">
            <h1>Qualitatively</h1>
            <p className="lead">
                Ut nisi distinctio est non voluptatem. Odio aut assumenda ipsam amet reprehenderit
            </p>
        </div>
        <div className="col-12 col-md-4 bg-light py-3">
            <h1>Inexpensive</h1>
            <p className="lead">
                Perspiciatis qui molestiae qui tempora quisquam. Ut nisi distinctio est non voluptatem
            </p>
        </div>
    </div>
    <div className="row mb-4">
        <div className="col-12py-3">
            <p>
                Sed voluptatum quis voluptates laudantium incidunt laudantium. Illo non quos eos vel ipsa.
                Explicabo itaque est optio neque rerum provident enim qui sed. Corrupti commodi voluptatem vero soluta hic.
            </p>
            <p>
                Modi corporis consectetur aliquid sit cum tenetur enim. Sed voluptatum quis voluptates laudantium incidunt laudantium.
                Illo non quos eos vel ipsa. Explicabo itaque est optio neque rerum provident enim qui sed.
                Corrupti commodi voluptatem vero soluta hic.
            </p>
        </div>
    </div>
</div>
var bem = cn('Contacts');
export const contactsCode = <div className={bem()}>
    <Helmet title="Contacts" />
    <div className="row">
        <div className="col">
            <h1 data-testid="page-header">Contacts</h1>

            <p>
                Ut non consequatur aperiam ex dolores. Voluptatum harum consequatur est totam. Aut voluptatum aliquid aut optio et ea.
                Quaerat et eligendi minus quasi. Culpa voluptatem voluptatem dolores molestiae aut quos iure.
                Repellat aperiam ut aliquam iure. Veritatis magnam quisquam et dolorum recusandae aut.
            </p>
            <p>
                Molestias inventore illum architecto placeat molestias ipsam facilis ab quo.
                Rem dolore cum qui est reprehenderit assumenda voluptatem nisi ipsa. Unde libero quidem. Excepturi maiores vel quia.
                Neque facilis nobis minus veniam id. Eum cum eveniet accusantium molestias voluptas aut totam laborum aut.
                Ea molestiae ullam et. Quis ea ipsa culpa eligendi ab sit ea error suscipit. Quia ea ut minus distinctio quam eveniet nihil.
                Aut voluptate numquam ipsa dolorem et quas nemo.
            </p>
        </div>
    </div>
</div>

var bem = cn('Delivery');
export const deliveryCode = <div className={bem()}>
    <Helmet title="Delivery" />
    <div className="row">
        <div className="col">
            <h1 data-testid="page-header">Delivery</h1>
            <p>
                Deserunt occaecati tempora. Qui occaecati est aliquam. Enim qui nulla ipsam.
                Incidunt impedit enim consequuntur amet at consequuntur vero.
                Dolor et ad facere asperiores iste est praesentium quaerat iure.
                Quibusdam mollitia autem quos voluptas quia est doloremque corporis et.
                Sed fuga quasi esse perspiciatis fugit maxime. Qui quidem amet.
            </p>
            <Image className="w-25 mb-4" />
            <p>
                Dolores magnam consequatur iste aliquam qui sint non ab.
                Culpa saepe omnis. Recusandae vel aperiam voluptates harum.
                Perspiciatis qui molestiae qui tempora quisquam. Mollitia voluptatum minus laboriosam.
                Dolor maiores possimus repudiandae praesentium hic eos. Veritatis et repellat.
            </p>
            <p>
                Pariatur nisi nobis hic ut facilis sunt rerum id error. Soluta nihil quisquam quia rerum illo.
                Ipsam et suscipit est iure incidunt quasi et eum. Culpa libero dignissimos recusandae.
                In magni sapiente non voluptas molestias. Deserunt quos quo placeat sunt.
                Ea necessitatibus dolores eaque ex aperiam sunt eius. Saepe aperiam aut.
                Quaerat natus consequatur aut est id saepe et aut facilis.
            </p>
        </div>
    </div>
</div>