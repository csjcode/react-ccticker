import  React, { Component } from 'react';
import dataTickerApi from '../../data/sample.json';
import './DataTickerApi.css';
import DataBranch from '../DataBranch/DataBranch';

/* ---------------------------------------------------------------------------------------------------
        
  UPDATE (Mar. 3, 2018): Most of this component has been refactored as of Mar. 3 into various 5+ subcomponents.
  See components: DataBranch, DataTableRows, DataView etc.

  This component is now only for getting the API data.

--------------------------------------------------------------------------------------------------- */

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 500,
//     maxWidth: 1200,
//     paddingDefault: 0
//   }
// });

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
  return (
    <div style={{minHeight:800}}>
        <DataBranch {...this.state} />
    </div>
   );
  }
}


export default DataTickerApi;

