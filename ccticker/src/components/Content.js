import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class Content extends Component {
  constructor(props, context) {
    super(props, context)
    
  }
  
  render() {
      return (
        <View style={styles.box}>
          <Text style={styles.headline}>CryptoTicker Content </Text>
          <Text style={{fontSize:16}}>{this.props.title}  - {this.props.myDate}</Text>
          <FlatList
            style={{marginTop:20, width:'100%'}}
            data={[
              {
                "id": "bitcoin",
                "name": "Bitcoin",
                "symbol": "BTC",
                "rank": "1",
                "price_usd": "3542.92",
                "price_btc": "1.0",
                "24h_volume_usd": "1675520000.0",
                "market_cap_usd": "58709815893.0",
                "available_supply": "16571025.0",
                "total_supply": "16571025.0",
                "percent_change_1h": "-0.33",
                "percent_change_24h": "-5.57",
                "percent_change_7d": "-13.56",
                "last_updated": "1505624963"
            },
            {
                "id": "ethereum",
                "name": "Ethereum",
                "symbol": "ETH",
                "rank": "2",
                "price_usd": "242.404",
                "price_btc": "0.0669445",
                "24h_volume_usd": "632707000.0",
                "market_cap_usd": "22947408928.0",
                "available_supply": "94665966.0",
                "total_supply": "94665966.0",
                "percent_change_1h": "-0.28",
                "percent_change_24h": "-5.9",
                "percent_change_7d": "-14.33",
                "last_updated": "1505625017"
            },
            {
                "id": "bitcoin-cash",
                "name": "Bitcoin Cash",
                "symbol": "BCH",
                "rank": "3",
                "price_usd": "413.25",
                "price_btc": "0.114127",
                "24h_volume_usd": "316677000.0",
                "market_cap_usd": "6854365959.0",
                "available_supply": "16586488.0",
                "total_supply": "16586488.0",
                "percent_change_1h": "-1.15",
                "percent_change_24h": "-3.4",
                "percent_change_7d": "-20.27",
                "last_updated": "1505625056"
            },
            {
                "id": "ripple",
                "name": "Ripple",
                "symbol": "XRP",
                "rank": "4",
                "price_usd": "0.17558",
                "price_btc": "0.00004849",
                "24h_volume_usd": "72283900.0",
                "market_cap_usd": "6732411758.0",
                "available_supply": "38343841883.0",
                "total_supply": "99994523265.0",
                "percent_change_1h": "-0.07",
                "percent_change_24h": "-4.79",
                "percent_change_7d": "-14.18",
                "last_updated": "1505624945"
            },
            {
                "id": "litecoin",
                "name": "Litecoin",
                "symbol": "LTC",
                "rank": "5",
                "price_usd": "46.753",
                "price_btc": "0.0129118",
                "24h_volume_usd": "474979000.0",
                "market_cap_usd": "2476351301.0",
                "available_supply": "52966682.0",
                "total_supply": "52966682.0",
                "percent_change_1h": "-0.8",
                "percent_change_24h": "-8.46",
                "percent_change_7d": "-24.47",
                "last_updated": "1505624947"
            },
            {
                "id": "dash",
                "name": "Dash",
                "symbol": "DASH",
                "rank": "6",
                "price_usd": "289.316",
                "price_btc": "0.0799003",
                "24h_volume_usd": "40820600.0",
                "market_cap_usd": "2187857666.0",
                "available_supply": "7562173.0",
                "total_supply": "7562173.0",
                "percent_change_1h": "-0.86",
                "percent_change_24h": "-2.32",
                "percent_change_7d": "-6.87",
                "last_updated": "1505624957"
            },
            {
                "id": "nem",
                "name": "NEM",
                "symbol": "XEM",
                "rank": "7",
                "price_usd": "0.198889",
                "price_btc": "0.00005493",
                "24h_volume_usd": "4125840.0",
                "market_cap_usd": "1790001000.0",
                "available_supply": "8999999999.0",
                "total_supply": "8999999999.0",
                "percent_change_1h": "-0.87",
                "percent_change_24h": "-9.52",
                "percent_change_7d": "-22.17",
                "last_updated": "1505624974"
            },
            {
                "id": "monero",
                "name": "Monero",
                "symbol": "XMR",
                "rank": "8",
                "price_usd": "93.0506",
                "price_btc": "0.0256978",
                "24h_volume_usd": "52445000.0",
                "market_cap_usd": "1404429745.0",
                "available_supply": "15093183.0",
                "total_supply": "15093183.0",
                "percent_change_1h": "-0.71",
                "percent_change_24h": "-8.61",
                "percent_change_7d": "-15.62",
                "last_updated": "1505624960"
            },
            {
                "id": "iota",
                "name": "IOTA",
                "symbol": "MIOTA",
                "rank": "9",
                "price_usd": "0.477375",
                "price_btc": "0.00013184",
                "24h_volume_usd": "11987300.0",
                "market_cap_usd": "1326878269.0",
                "available_supply": "2779530283.0",
                "total_supply": "2779530283.0",
                "percent_change_1h": "-0.56",
                "percent_change_24h": "-3.78",
                "percent_change_7d": "-8.6",
                "last_updated": "1505625049"
            },
            {
                "id": "neo",
                "name": "NEO",
                "symbol": "NEO",
                "rank": "10",
                "price_usd": "19.4539",
                "price_btc": "0.00537259",
                "24h_volume_usd": "41514600.0",
                "market_cap_usd": "972695000.0",
                "available_supply": "50000000.0",
                "total_supply": "100000000.0",
                "percent_change_1h": "-0.45",
                "percent_change_24h": "-9.2",
                "percent_change_7d": "-6.47",
                "last_updated": "1505625008"
            },
            {
                "id": "omisego",
                "name": "OmiseGO",
                "symbol": "OMG",
                "rank": "11",
                "price_usd": "9.49287",
                "price_btc": "0.00262164",
                "24h_volume_usd": "56767500.0",
                "market_cap_usd": "933263263.0",
                "available_supply": "98312024.0",
                "total_supply": "140245398.0",
                "percent_change_1h": "-0.03",
                "percent_change_24h": "-7.29",
                "percent_change_7d": "-17.8",
                "last_updated": "1505625070"
            },
            {
                "id": "ethereum-classic",
                "name": "Ethereum Classic",
                "symbol": "ETC",
                "rank": "12",
                "price_usd": "9.68918",
                "price_btc": "0.00267586",
                "24h_volume_usd": "109338000.0",
                "market_cap_usd": "926173543.0",
                "available_supply": "95588434.0",
                "total_supply": "95588434.0",
                "percent_change_1h": "-0.16",
                "percent_change_24h": "-10.89",
                "percent_change_7d": "-30.21",
                "last_updated": "1505625006"
            },
            {
                "id": "bitconnect",
                "name": "BitConnect",
                "symbol": "BCC",
                "rank": "13",
                "price_usd": "106.806",
                "price_btc": "0.0294966",
                "24h_volume_usd": "5461930.0",
                "market_cap_usd": "717579644.0",
                "available_supply": "6718533.0",
                "total_supply": "7749465.0",
                "percent_change_1h": "-0.33",
                "percent_change_24h": "-5.96",
                "percent_change_7d": "-14.36",
                "last_updated": "1505625035"
            },
            {
                "id": "lisk",
                "name": "Lisk",
                "symbol": "LSK",
                "rank": "14",
                "price_usd": "5.39347",
                "price_btc": "0.00148951",
                "24h_volume_usd": "9747590.0",
                "market_cap_usd": "605919760.0",
                "available_supply": "112343215.0",
                "total_supply": "112343215.0",
                "percent_change_1h": "-0.03",
                "percent_change_24h": "-4.27",
                "percent_change_7d": "-18.05",
                "last_updated": "1505624994"
            },
            {
                "id": "qtum",
                "name": "Qtum",
                "symbol": "QTUM",
                "rank": "15",
                "price_usd": "7.88306",
                "price_btc": "0.00217706",
                "24h_volume_usd": "82663900.0",
                "market_cap_usd": "465100540.0",
                "available_supply": "59000000.0",
                "total_supply": "100000000.0",
                "percent_change_1h": "-0.36",
                "percent_change_24h": "-10.09",
                "percent_change_7d": "-36.86",
                "last_updated": "1505625042"
            },
            {
                "id": "tether",
                "name": "Tether",
                "symbol": "USDT",
                "rank": "16",
                "price_usd": "1.00337",
                "price_btc": "0.0002771",
                "24h_volume_usd": "214099000.0",
                "market_cap_usd": "443972404.0",
                "available_supply": "442481242.0",
                "total_supply": "444951082.0",
                "percent_change_1h": "-0.11",
                "percent_change_24h": "-0.16",
                "percent_change_7d": "-0.45",
                "last_updated": "1505624976"
            },
            {
                "id": "stratis",
                "name": "Stratis",
                "symbol": "STRAT",
                "rank": "17",
                "price_usd": "4.29205",
                "price_btc": "0.00118533",
                "24h_volume_usd": "4073710.0",
                "market_cap_usd": "422965078.0",
                "available_supply": "98546167.0",
                "total_supply": "98546167.0",
                "percent_change_1h": "-1.21",
                "percent_change_24h": "-6.58",
                "percent_change_7d": "-23.87",
                "last_updated": "1505625005"
            },
            {
                "id": "zcash",
                "name": "Zcash",
                "symbol": "ZEC",
                "rank": "18",
                "price_usd": "168.591",
                "price_btc": "0.0465597",
                "24h_volume_usd": "20097400.0",
                "market_cap_usd": "370956046.0",
                "available_supply": "2200331.0",
                "total_supply": "2200331.0",
                "percent_change_1h": "-0.13",
                "percent_change_24h": "-7.06",
                "percent_change_7d": "-17.25",
                "last_updated": "1505625013"
            },
            {
                "id": "waves",
                "name": "Waves",
                "symbol": "WAVES",
                "rank": "19",
                "price_usd": "3.63434",
                "price_btc": "0.0010037",
                "24h_volume_usd": "4048870.0",
                "market_cap_usd": "363434000.0",
                "available_supply": "100000000.0",
                "total_supply": "100000000.0",
                "percent_change_1h": "-0.81",
                "percent_change_24h": "-4.43",
                "percent_change_7d": "-14.57",
                "last_updated": "1505625000"
            },
            {
                "id": "ark",
                "name": "Ark",
                "symbol": "ARK",
                "rank": "20",
                "price_usd": "3.51241",
                "price_btc": "0.00097002",
                "24h_volume_usd": "5074090.0",
                "market_cap_usd": "342841943.0",
                "available_supply": "97608748.0",
                "total_supply": "128858748.0",
                "percent_change_1h": "1.13",
                "percent_change_24h": "-10.71",
                "percent_change_7d": "24.86",
                "last_updated": "1505625029"
            },
            {
                "id": "steem",
                "name": "Steem",
                "symbol": "STEEM",
                "rank": "21",
                "price_usd": "1.10696",
                "price_btc": "0.00030571",
                "24h_volume_usd": "724581.0",
                "market_cap_usd": "267812666.0",
                "available_supply": "241935270.0",
                "total_supply": "258909364.0",
                "percent_change_1h": "0.73",
                "percent_change_24h": "-4.03",
                "percent_change_7d": "-16.51",
                "last_updated": "1505625002"
            },
            {
                "id": "maidsafecoin",
                "name": "MaidSafeCoin",
                "symbol": "MAID",
                "rank": "22",
                "price_usd": "0.533924",
                "price_btc": "0.00014745",
                "24h_volume_usd": "1298390.0",
                "market_cap_usd": "241628594.0",
                "available_supply": "452552412.0",
                "total_supply": "452552412.0",
                "percent_change_1h": "0.18",
                "percent_change_24h": "-2.49",
                "percent_change_7d": "-9.89",
                "last_updated": "1505624961"
            },
            {
                "id": "basic-attention-token",
                "name": "Basic Attention Token",
                "symbol": "BAT",
                "rank": "23",
                "price_usd": "0.228983",
                "price_btc": "0.00006324",
                "24h_volume_usd": "6573420.0",
                "market_cap_usd": "228983000.0",
                "available_supply": "1000000000.0",
                "total_supply": "1500000000.0",
                "percent_change_1h": "1.94",
                "percent_change_24h": "19.94",
                "percent_change_7d": "10.17",
                "last_updated": "1505625059"
            },
            {
                "id": "bytecoin-bcn",
                "name": "Bytecoin",
                "symbol": "BCN",
                "rank": "24",
                "price_usd": "0.00123",
                "price_btc": "0.00000034",
                "24h_volume_usd": "2337480.0",
                "market_cap_usd": "225401848.0",
                "available_supply": "183253534612",
                "total_supply": "183253534612",
                "percent_change_1h": "0.04",
                "percent_change_24h": "-9.86",
                "percent_change_7d": "-25.45",
                "last_updated": "1505624970"
            },
            {
                "id": "tenx",
                "name": "TenX",
                "symbol": "PAY",
                "rank": "25",
                "price_usd": "2.07086",
                "price_btc": "0.00057191",
                "24h_volume_usd": "2998820.0",
                "market_cap_usd": "216738920.0",
                "available_supply": "104661310.0",
                "total_supply": "205218256.0",
                "percent_change_1h": "0.18",
                "percent_change_24h": "-5.41",
                "percent_change_7d": "-18.5",
                "last_updated": "1505625064"
            },
            {
                "id": "eos",
                "name": "EOS",
                "symbol": "EOS",
                "rank": "26",
                "price_usd": "0.595072",
                "price_btc": "0.00016434",
                "24h_volume_usd": "5923750.0",
                "market_cap_usd": "208588166.0",
                "available_supply": "350525929.0",
                "total_supply": "1000000000.0",
                "percent_change_1h": "-1.64",
                "percent_change_24h": "-11.59",
                "percent_change_7d": "-21.57",
                "last_updated": "1505625051"
            },
            {
                "id": "golem-network-tokens",
                "name": "Golem",
                "symbol": "GNT",
                "rank": "27",
                "price_usd": "0.240235",
                "price_btc": "0.00006635",
                "24h_volume_usd": "1528140.0",
                "market_cap_usd": "200123443.0",
                "available_supply": "833032000.0",
                "total_supply": "1000000000.0",
                "percent_change_1h": "-0.91",
                "percent_change_24h": "-6.73",
                "percent_change_7d": "-24.31",
                "last_updated": "1505625017"
            },
            {
                "id": "augur",
                "name": "Augur",
                "symbol": "REP",
                "rank": "28",
                "price_usd": "17.4643",
                "price_btc": "0.00482311",
                "24h_volume_usd": "1292850.0",
                "market_cap_usd": "192107300.0",
                "available_supply": "11000000.0",
                "total_supply": "11000000.0",
                "percent_change_1h": "0.58",
                "percent_change_24h": "-6.28",
                "percent_change_7d": "-18.51",
                "last_updated": "1505624986"
            },
            {
                "id": "stellar",
                "name": "Stellar Lumens",
                "symbol": "XLM",
                "rank": "29",
                "price_usd": "0.0111436",
                "price_btc": "0.00000308",
                "24h_volume_usd": "3303930.0",
                "market_cap_usd": "184840051.0",
                "available_supply": "16587103915.0",
                "total_supply": "103255011487",
                "percent_change_1h": "0.08",
                "percent_change_24h": "-8.09",
                "percent_change_7d": "-32.21",
                "last_updated": "1505624962"
            },
            {
                "id": "veritaseum",
                "name": "Veritaseum",
                "symbol": "VERI",
                "rank": "30",
                "price_usd": "91.4532",
                "price_btc": "0.0252566",
                "24h_volume_usd": "379838.0",
                "market_cap_usd": "183924680.0",
                "available_supply": "2011134.0",
                "total_supply": "100000000.0",
                "percent_change_1h": "3.93",
                "percent_change_24h": "-2.85",
                "percent_change_7d": "-0.8",
                "last_updated": "1505625051"
            }
            ]}
            renderItem={({item}) => 
              <View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-start', marginTop:5}} key={item.id}>
                {/* <Text style={styles.colRank}>
                {item.rank}. 
                </Text> */}
                <Text style={styles.colSym}>
                {item.symbol}
                </Text>
                <Text style={styles.colName}>
                {item.name}
                </Text>                
                <Text style={styles.colPcthr}>
                {item.percent_change_1h}%
                </Text>
                <Text style={styles.colPrice}>
                ${item.price_usd}
                </Text>                
                <Text 
                  style={styles.colInfo}>
                INFO
                </Text> 
              </View>
              }
            
            keyExtractor={(item, index) => index}
            
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: '#dbdbdb',
      borderBottomWidth:2,
      flex: 6,
      alignItems:'center',
      width: '100%'
    },
    headline: {
      fontSize: 26,
    },
    colRank: {
      fontSize:12, 
      textAlign:'left', 
      width:25
    },
    colSym: {
      color: '#00e61d',
      backgroundColor:'#1d1d1d',
      borderColor:'#c0c0c0',
      borderWidth:1, 
      fontSize:16, 
      marginLeft: 3,
      marginRight: 5,
      textAlign:'left', 
      width:55,

      marginLeft:2, 
      textAlign:'center', 
    },
    colName: {
      fontSize:16, 
      textAlign:'left', 
      width:120
    },
    colPcthr: {
      fontSize:16, 
      width:65  
    },
    colPrice: {
      color: '#3f3f3f',
      fontSize:16, 
      width:80
    },
    colInfo: {
      fontSize:16, 
      width:60, 
      color:'#888',
      borderColor:'#c0c0c0',
      borderWidth:1, 
      marginLeft:2, 
      padding:2, 
      textAlign:'center'
    }
  });

export default Content;