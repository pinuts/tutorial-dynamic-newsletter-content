/// <reference path="../../../.vscode.js"/>


/*

function renderOfferList(offers) {
    return `<ul>${offers.map(renderOffer).join('')}</ul>`;
}

function renderOffer(offer) {
    const companyPlace = [];
    if (offer.company) companyPlace.push(Strings.encodeXml(offer.company));
    if (offer.city) companyPlace.push(Strings.encodeXml(offer.city));

    return (
    `<li style="margin-bottom: 8px">
        <strong>${Strings.encodeXml(offer.title)}</strong><br/>
        ${companyPlace.join(', ')}
    </li>`
    );
}
*/


RenderEntryCallback.prototype.renderOfferList = function() {
    
    return true;
}
