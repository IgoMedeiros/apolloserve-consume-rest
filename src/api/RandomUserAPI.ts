import { RESTDataSource } from 'apollo-datasource-rest';

export class RandomUserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.randomuser.me/';
    }

    async getPerson() {
        const { results } = await this.get('');
        return results;
    }
}