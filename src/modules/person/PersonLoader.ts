export async function getPerson(_: any, __: any, { dataSources }: any) {
    const personAndQuote = [];
    const person = await dataSources.randomUserAPI.getPerson();
    const quote = await dataSources.quoteAPI.getQuote();
    personAndQuote.push({
        gender: person[0].gender,
        email: person[0].email,
        phone: person[0].phone,
        quote : quote.quote
    });
    return personAndQuote;
}