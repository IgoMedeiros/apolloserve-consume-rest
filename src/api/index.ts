import { RandomUserAPI } from './RandomUserAPI';
import { QuoteAPI } from './QuoteAPI';

export const dataSources = () => ({
  randomUserAPI: new RandomUserAPI(),
  quoteAPI: new QuoteAPI()
});
