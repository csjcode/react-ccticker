
### NewsApi

curl https://newsapi.org/v2/everything -G -d q=cryptocurrency  -d from=2018-01-21 -d sortBy=popularity -d apiKey=

### General API Data

https://www.cryptocompare.com/api/

* Price - Multi

https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,XRP,BCH,ADA,LTC,XEM,NEO,XLM,DASH,EOS,TRX&tsyms=BTC,USD,EUR

* Ticker

https://api.coinmarketcap.com/v1/ticker/?limit=50

* CryptoCompare Coinlist API

https://www.cryptocompare.com/api/data/coinlist/

* CryptoCompare Coinlist - Docs

https://www.cryptocompare.com/api/#-api-data-coinlist-


* CryptoCompare Prices API

https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR


* CryptoCompare Prices - Docs

https://www.cryptocompare.com/api/#-api-data-price-


Sample API call

```
  state = { loading: true };
 
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos/1")
      .then(res => res.json())
      .then(
        photos => this.setState(prev => ({ loading: false, photos })),
        error => this.setState(prev => ({ loading: false, error }))
      );
}

```

