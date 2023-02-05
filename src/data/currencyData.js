export const currencies = [
    {symbol: "AUD", name: "Australian Dollar", value: 1.444771},
    {symbol: "BRL", name: "Brazilian Real", value: 5.152627},
    {symbol: "GBP", name: "British Pound", value: 0.829779},
    {symbol: "CAD", name: "Canadian Dollar", value: 1.340581},
    {symbol: "CNY", name: "Chinese Yuan Renminbi", value: 6.767660},
    {symbol: "COP", name: "Colombian Peso", value: 4695.648104},
    {symbol: "CZK", name: "Czech Koruna", value: 22.018562},
    {symbol: "DKK", name: "Danish Krone", value: 6.898229},
    {symbol: "AED", name: "Emirati Dirham", value: 3.672500},
    {symbol: "EUR", name: "Euro", value: 0.924624},
    {symbol: "HKD", name: "Hong Kong Dollar", value: 7.847447},
    {symbol: "ISK", name: "Icelandic Krona", value: 141.047645},
    {symbol: "INR", name: "Indian Rupee", value: 82.271418},
    {symbol: "IDR", name: "Indonesian Rupiah", value: 14903.371250},
    {symbol: "IRR", name: "Iranian Rial", value: 42025.495766},
    {symbol: "ILS", name: "Israeli Shekel", value: 3.427286},
    {symbol: "JPY", name: "Japanese Yen", value: 131.184763},
    {symbol: "KWD", name: "Kuwaiti Dinar", value: 0.305799},
    {symbol: "LYD", name: "Libyan Dinar", value: 4.724261},
    {symbol: "MYR", name: "Malaysian Ringgit", value: 4.258637},
    {symbol: "MXN", name: "Mexican Peso", value: 18.958724},
    {symbol: "NPR", name: "Nepalese Rupee", value: 131.695972},
    {symbol: "NZD", name: "New Zealand Dollar", value: 1.580696},
    {symbol: "NOK", name: "Norwegian Krone", value: 10.158629},
    {symbol: "PKR", name: "Pakistani Rupee", value: 275.318733},
    {symbol: "PHP", name: "Philippine Peso", value: 53.675997},
    {symbol: "PLN", name: "Polish Zloty", value: 4.368991},
    {symbol: "QAR", name: "Qatari Riyal", value: 3.640000},
    {symbol: "RON", name: "Romanian New Leu", value: 4.518856},
    {symbol: "RUB", name: "Russian Ruble", value: 70.650598},
    {symbol: "SAR", name: "Saudi Arabian Riyal", value: 3.750000},
    {symbol: "SGD", name: "Singapore Dollar", value: 1.323509},
    {symbol: "ZAR", name: "South African Rand", value: 17.435623},
    {symbol: "KRW", name: "South Korean Won", value: 1248.066033},
    {symbol: "SEK", name: "Swedish Krona", value: 10.547067},
    {symbol: "CHF", name: "Swiss Franc", value: 0.926412},
    {symbol: "TWD", name: "Taiwan New Dollar", value: 29.902912},
    {symbol: "THB", name: "Thai Baht", value: 33.379147},
    {symbol: "TRY", name: "Turkish Lira", value: 18.817114},
    {symbol: "USD", name: "United States Dollar", value: 1.000000},
    {symbol: "VES", name: "Venezuelan Bolivar", value: 2263029.695557}
];

export const calcExchangeRate = (baseCurrency, targetCurrency) => {
    const baseCurrencyRate = currencies.find(c => c.symbol === baseCurrency).value;
    const targetCurrencyRate = currencies.find(c => c.symbol === targetCurrency).value;
    return (targetCurrencyRate / baseCurrencyRate);
}
