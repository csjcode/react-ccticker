import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import "./DataModal.css";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Modal from 'material-ui/Modal';
import { TableCell, TableRow } from 'material-ui/Table';
import Close from 'material-ui-icons/Close';
import DataView from '../DataView/DataView'
import DataBranchNews from '../../containers/DataBranchNews/DataBranchNews';
import DataSymbol from '../../containers/DataSymbol/DataSymbol';
import {Divider} from 'material-ui'
import {DriveEta, DeviceHub, Devices} from 'material-ui-icons'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 45;
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
    // padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    currentSym:' '
  };

  handleOpenModal = (symbol) => {
    this.setState(prevState => ({ open: true, currentSym:this.props.symbol+' ' }));
  };

  handleCloseModal = () => {
    this.setState(prevState => ({ open: false }));
  };

  render(props) {
    
    const { classes, rank, name, price_usd_commas, volume_usd_commas, percent_change_1h, 
      percent_change_24h, percent_change_7d, market_cap_usd_commas, price_btc, date, symbol, id  } = this.props;
      
      // var graphPlaceholder1 = 'http://via.placeholder.com/250x150/00BC09/fff?text=' + this.state.currentSym + 'Chart';
      // var graphPlaceholder2 = 'http://via.placeholder.com/250x150/38E240/fff?text=' + this.state.currentSym + 'Chart';
      // var graphPlaceholder3 = 'http://via.placeholder.com/250x150/15E71F/fff?text=' + this.state.currentSym + 'Chart';
      
    return (
        <Fragment>
          <TableRow key={id} className="DataTickerApi--row" onClick={this.handleOpenModal}>
            <TableCell className="DataTickerApi--col text-bigger collapsible">{rank}</TableCell>         
            <TableCell className="DataTickerApi--col text-bigger">
              {name}
            </TableCell> 
            <TableCell className="DataTickerApi--col text-bigger">{symbol}</TableCell>
            <TableCell className="DataTickerApi--col">{price_usd_commas}</TableCell> 

            <TableCell className="DataTickerApi--col ">
            {percent_change_1h > 0 ? (
              <span style={{color:'green'}}>{percent_change_1h}%</span>
            ) : (
              <span style={{color:'red'}}>{percent_change_1h}%</span>
            )}
            </TableCell>
            <TableCell className="DataTickerApi--col ">
            {percent_change_24h > 0 ? (
              <span style={{color:'green'}}>{percent_change_24h}%</span>
            ) : (
              <span style={{color:'red'}}>{percent_change_24h}%</span>
            )}
            </TableCell>
            <TableCell className="DataTickerApi--col collapsible">
            {percent_change_7d > 0 ? (
              <span style={{color:'green'}}>{percent_change_7d}%</span>
            ) : (
              <span style={{color:'red'}}>{percent_change_7d}%</span>
            )}
            </TableCell>
            <TableCell className="DataTickerApi--col collapsible">{volume_usd_commas}</TableCell> 
            <TableCell className="DataTickerApi--col collapsible">{market_cap_usd_commas}</TableCell> 
            <TableCell className="DataTickerApi--col collapsible">{price_btc}</TableCell>
            <TableCell className="DataTickerApi--col collapsible">{date}</TableCell>
          </TableRow>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleCloseModal}
          > 
            <div style={getModalStyle()} className="DataModal--modal">
              {/* <div style={getModalStyle()} className={classes.paper}> */}
              <div className="DataModal--container">
                <div className="DataModal--header">
                  <div className="DataModal--header-left">
                    <span className="header-symbol-box">{symbol}</span>
                    <h4 className="DataModal--header-headline">{name} </h4>
                  </div>
                  <div className="DataModal--header-right">
                    <span className="header-data">{percent_change_1h}%</span>
                    <span className="header-label">(1hr &Delta;)</span>
                    <span className="header-data">{percent_change_24h}%</span>
                    <span className="header-label">(24hr &Delta;)</span> 
                    <span className="header-label"><Close className="iconspace-Close" onClick={()=>this.handleCloseModal(symbol)}/></span> 
                  </div>
                </div>
                <div className="DataModal--body">

                  <div className="DataModal--body-table-wrapper">
                    <div class="DataModal--body-table">
        
                      <div class="DataModal--body-table-row-header ">
                        <div class="DataModal--body-table-cell-label">
                        USD
                        </div>
                        <div class="DataModal--body-table-cell-label">
                        7 Day Δ		
                        </div>
                        <div class="DataModal--body-table-cell-label">
                        Volume (1k)
                        </div>
                        <div class="DataModal--body-table-cell-label">
                        BTC
                        </div>
                        <div class="DataModal--body-table-cell-label">
                        Market Cap
                        </div>
                      </div>
                      
                      <div class="DataModal--body-table-row">
                        <div class="DataModal--body-table-cell" data-title="">
                          {price_usd_commas} 
                        </div>
                        <div class="DataModal--body-table-cell" data-title="">
                        {percent_change_7d}%
                        </div>
                        <div class="DataModal--body-table-cell" data-title="">
                        ${volume_usd_commas} 
                        </div>
                        <div class="DataModal--body-table-cell" data-title="">
                        {price_btc} 
                        </div>
                        <div class="DataModal--body-table-cell" data-title="">
                        {market_cap_usd_commas} 
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    <div className="column">
                      <div className="DataModal--chart-label">7 Day</div>
                      <DataSymbol sym={symbol} chartDateRange="7d" />
                    </div>
                    <div className="column">
                      <div className="DataModal--chart-label">30 Day</div>
                      <DataSymbol sym={symbol} chartDateRange="30d" />
                    </div>
                    <div className="column">
                      <div className="DataModal--chart-label">90 Day</div>
                      <DataSymbol sym={symbol} chartDateRange="90d" />
                    </div>
                  </div>

                  {/* <div className="row">
                    <div className="column">
                      <img src={graphPlaceholder1}/>
                    </div>
                    <div className="column">
                      <img src={graphPlaceholder2}/>
                    </div>
                    <div className="column">
                      <img src={graphPlaceholder3}/>
                    </div>
                  </div> */}

                  <div className="DataModal--body-text">
                      <h3>{name} ({symbol}) News &amp; Info</h3>
                      <h4>Currently ranked #{rank} on our market charts.</h4>
                      <Typography variant="subheading" id="simple-modal-description">
                          Watch for updates - {date}<br />
                      </Typography>
                  </div>

                  <DataBranchNews query={name} limit={6} /> 

                  

                </div>
              </div>

            </div>
          </Modal>
        </Fragment>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;