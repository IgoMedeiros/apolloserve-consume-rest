import { RESTDataSource } from 'apollo-datasource-rest';

export class QuoteAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.kanye.rest/';
    }

    async getQuote() {
        return await this.get('');
    }
}