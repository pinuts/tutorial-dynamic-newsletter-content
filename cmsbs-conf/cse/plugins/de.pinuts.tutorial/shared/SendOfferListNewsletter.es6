/// <reference path="../../../.vscode.js"/>

const MAILING_TEMPLATE_NAME = 'offerlist-nl';
const CHANNEL_NAME = 'offerlist';
const NEWSLETTER_TAG = 'offerlist';

function createEventFile() {
    return `<event archive="true">
        <destination>
            <channel>${Strings.encodeXml(CHANNEL_NAME)}</channel>
        </destination>
        <data>
            <message>${Strings.encodeXml(MAILING_TEMPLATE_NAME)}</message>
            <email archiveOutgoingEmails="false" obeyPreferHtml="false" sendBothParts="false" trackingMode="Off"></email>
        </data>
        <tag>${Strings.encodeXml(NEWSLETTER_TAG)}</tag>
    </event>`;
}

export function run() {
    UM.println('Preparing newsletter...');

    const eventFile = createEventFile();
    UM.newsletterArchive.send(eventFile);
}
