import  React, { Component } from 'react';
import dataTickerApi from '../../data/sample.json';
import './DataTickerApi.css';
// import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import numberWithCommas from '../../utils/numberWithCommas';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
    maxWidth: 1200,
    paddingDefault: 0
  }
});

const LoadingView = () => <div>Loading...</div>;

const ErrorView = () => <div>I'm sorry! Please try again.</div>;

const DataView = ({ id, title, url, thumbnailUrl }) => (
  <div>
    <Paper style={{marginTop: 20, padding:40}}>
      <Table className="DataTickerApi--main-table">
        <DataTableHead />
        <TableBody>
          <DataTableRows />
        </TableBody>
      </Table>
    </Paper>
  </div>
);


const DataTableHead = () => {
  return(
    <TableHead>
      <TableRow>
        <TableCell className="DataTickerApi--col-head" style={{width:50}}>Rank</TableCell> 
        <TableCell className="DataTickerApi--col-head" style={{width:100}}>Name</TableCell>
        <TableCell className="DataTickerApi--col-head" style={{width:60}}>Symbol</TableCell> 
        <TableCell className="DataTickerApi--col-head" style={{width:100}}>USD</TableCell> 
        <TableCell className="DataTickerApi--col-head" style={{width:60}}>1 Hr &Delta;</TableCell> 
        <TableCell className="DataTickerApi--col-head" style={{width:60}}>24 Hr &Delta;</TableCell> 
        <TableCell className="DataTickerApi--col-head" style={{width:60}}>7 Day &Delta;</TableCell>
        <TableCell className="DataTickerApi--col-head" style={{width:100}}>Volume (1k)</TableCell> 
        <TableCell className="DataTickerApi--col-head" style={{width:100}}>Market Cap</TableCell> 
        <TableCell className="DataTickerApi--col-head" style={{width:100}}>BTC</TableCell> 

        <TableCell className="DataTickerApi--col-head" style={{width:80}}>Updated</TableCell> 
      </TableRow>
    </TableHead>
  );
}

const DataTableRows = (props) => {

  return dataTickerApi.map((data)=>{
    data['24h_volume_usd'] = Math.trunc(data['24h_volume_usd']);
    var date = new Date(data.last_updated*1000);
    date = date.toTimeString();
    date = date.replace(/\(.*\)/,'');

    var price_usd = '$' + parseFloat(data.price_usd).toFixed(2);

    var volume_usd = data['24h_volume_usd']/1000;

    var market_cap_usd_commas = numberWithCommas(data.market_cap_usd);
    var market_cap_usd_commas = '$' + market_cap_usd_commas;
    var price_usd_commas = numberWithCommas(price_usd);
    var volume_usd_commas = numberWithCommas(volume_usd);

    var price_btc = parseFloat(data.price_btc).toFixed(5);
  
    
    
    return (
        <TableRow key={data.id} className="DataTickerApi--row">
          <TableCell className="DataTickerApi--col text-bigger">{data.rank}</TableCell>         
          <TableCell className="DataTickerApi--col text-bigger">{data.name}</TableCell> 
          <TableCell className="DataTickerApi--col text-bigger">{data.symbol}</TableCell>
          <TableCell className="DataTickerApi--col">{price_usd_commas}</TableCell> 

          <TableCell className="DataTickerApi--col ">
          {data.percent_change_1h > 0 ? (
            <span style={{color:'green'}}>{data.percent_change_1h}%</span>
          ) : (
            <span style={{color:'red'}}>{data.percent_change_1h}%</span>
          )}
          </TableCell>
          <TableCell className="DataTickerApi--col ">
          {data.percent_change_24h > 0 ? (
            <span style={{color:'green'}}>{data.percent_change_24h}%</span>
          ) : (
            <span style={{color:'red'}}>{data.percent_change_24h}%</span>
          )}
          </TableCell>
          <TableCell className="DataTickerApi--col ">
          {data.percent_change_7d > 0 ? (
            <span style={{color:'green'}}>{data.percent_change_7d}%</span>
          ) : (
            <span style={{color:'red'}}>{data.percent_change_7d}%</span>
          )}
          </TableCell>
          <TableCell className="DataTickerApi--col">{volume_usd_commas}</TableCell> 
          <TableCell className="DataTickerApi--col">{market_cap_usd_commas}</TableCell> 

          {/* <TableCell className="DataTickerApi--col ">
          {data.market_cap_usd > 1000000000 ? (
            <span style={{fontWeight:700}}>{market_cap_usd_commas}</span>
          ) : (
            <span>{market_cap_usd_commas}</span>
          )}
          </TableCell>  */}



          <TableCell className="DataTickerApi--col">{price_btc}</TableCell>
          <TableCell className="DataTickerApi--col">{date}</TableCell>
        </TableRow>
    )
  })
  // this.setState(prev => ({ loading: false, data })),
  // console.log("state",this.state.data)
  // return data;
}



const DataBranch = ({ loading, data }) => {
  if (loading) {
    return <LoadingView />;
  } else if (data) {
    return <DataView {...data} />;
  } else {
    return <ErrorView />;
  }
};


class DataTickerApi extends Component {

  state = { loading: true };

  renderLoading() {
    return <div>Loading...</div>;
  }
  
  renderError() {
    return <div>Could not load ticker data! Please try again.</div>;
  }

  // renderDataTable() {
  //   return(

  //   )
  // }

   componentDidMount() {
  
    this.setState(prev => ({ loading: false, data: dataTickerApi }))
  
        // fetch("https://jsonplaceholder.typicode.com/photos/1")
      //   .then(res => res.json())
      //   .then(
      //     photos => this.setState(prev => ({ loading: false, photos })),
      //     error => this.setState(prev => ({ loading: false, error }))
      //   );        
   }

   render() {
    return <DataBranch {...this.state} />;
  }
}


export default DataTickerApi;

