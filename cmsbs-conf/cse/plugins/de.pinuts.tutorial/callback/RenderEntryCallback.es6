/// <reference path="../../../.vscode.js"/>

import faker from "@de.pinuts.demodata/shared/faker.es6";


function renderOffers(offers) {
    return `<ul>${offers.map(renderOffer).join('')}</ul>`;
}

function renderOffer(offer) {
    return (
    `<li style="margin-bottom: 8px">
        <strong>${Strings.encodeXml(offer.productName)}</strong><br/>
        ${Strings.encodeXml(offer.price)}
    </li>`);
}

function fakeOffers() {
    const offers = [];
    const num = faker.random.number({min: 0, max: 5});

    for (let idx = 0; idx < num; idx++) {
        offers.push({
            productName: faker.commerce.productName(),
            price: faker.commerce.price(10, 100, 2, '€')
        });
    }

    return offers;
}


RenderEntryCallback.prototype.renderOfferList = function() {
    const offers = fakeOffers();

    this.templateContext.doSend = offers.length > 0;

    this.value = renderOffers(offers);

    return true;
}
