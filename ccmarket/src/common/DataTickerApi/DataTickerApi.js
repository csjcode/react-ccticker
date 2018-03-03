import  React, { Component } from 'react';
import dataTickerApi from '../../data/sample.json';
import './DataTickerApi.css';
import DataTableHead from '../../containers/DataTableHead/DataTableHead';
import LoadingView from '../LoadingView/LoadingView';
import ErrorView from '../ErrorView/ErrorView';
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

const DataView = (props) => (
  <div>
    <Paper className="DataTickerApi--main-wrapper-paper">
      <Table className="DataTickerApi--main-table">
        <DataTableHead />
        <TableBody>
          <DataTableRows {...props} />
        </TableBody>
      </Table>
    </Paper>
  </div>
);


const DataTableRows = (props) => {

  return props.data.map((data)=>{
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
          <TableCell className="DataTickerApi--col text-bigger collapsible">{data.rank}</TableCell>         
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
          <TableCell className="DataTickerApi--col collapsible">
          {data.percent_change_7d > 0 ? (
            <span style={{color:'green'}}>{data.percent_change_7d}%</span>
          ) : (
            <span style={{color:'red'}}>{data.percent_change_7d}%</span>
          )}
          </TableCell>
          <TableCell className="DataTickerApi--col collapsible">{volume_usd_commas}</TableCell> 
          <TableCell className="DataTickerApi--col collapsible">{market_cap_usd_commas}</TableCell> 
          <TableCell className="DataTickerApi--col collapsible">{price_btc}</TableCell>
          <TableCell className="DataTickerApi--col collapsible">{date}</TableCell>
        </TableRow>
    )
  })
}



const DataBranch = ({ loading, data }) => {
  if (loading) {
    return <LoadingView />;
  } else if (data) {
    return <DataView data={data} />;    
  } else {
    return <ErrorView />;
  }
};


class DataTickerApi extends Component {

  state = { loading: true };

    componentDidMount() {
    // full url
      fetch("https://api.coinmarketcap.com/v1/ticker/?limit=50")
      .then(res => res.json())
      .then(
        data => this.setState(prev => ({ loading: false, data })),
        error => this.setState(prev => ({ loading: false, error }))
      );
     }
  
        // fetch("https://jsonplaceholder.typicode.com/photos/1")
      //   .then(res => res.json())
      //   .then(
      //     photos => this.setState(prev => ({ loading: false, photos })),
      //     error => this.setState(prev => ({ loading: false, error }))
      //   );        

  render() {
    return <DataBranch {...this.state} />;
  }
}


export default DataTickerApi;

