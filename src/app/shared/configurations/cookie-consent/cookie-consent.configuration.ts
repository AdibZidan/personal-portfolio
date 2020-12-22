import { environment } from "@environments/environment";
import { NgcCookieConsentConfig } from "ngx-cookieconsent";

export const cookieConfiguration: NgcCookieConsentConfig = {
	cookie: {
		domain: environment.domain
	},
	position: 'bottom-left',
	theme: 'edgeless',
	palette: {
		popup: {
			background: '#161b21',
			text: '#d9dde3',
			link: '#d9dde3'
		},
		button: {
			background: '#284b61',
			text: '#d9dde3',
			border: 'transparent'
		}
	},
	type: 'opt-out',
	content: {
		message: 'This website uses cookies for analytics.',
		dismiss: 'Got it!',
		deny: 'Refuse cookies',
		link: ''
	}
};
