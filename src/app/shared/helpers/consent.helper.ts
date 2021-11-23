import { CookieService } from 'ngx-cookie-service';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

export const COOKIECONSENT_STATUS: string = 'cookieconsent_status';

export const deleteCookies = (cookieService: CookieService): void => {
  cookieService.delete(COOKIECONSENT_STATUS);
};

export const allowCookies = (cookieService: CookieService): void => {
  cookieService.set(COOKIECONSENT_STATUS, 'allow');
};

export const changeCookeConsentStatus = (ngcCookieConsentService: NgcCookieConsentService): void => {
  ngcCookieConsentService.getConfig().onStatusChange('allow', false);
};
