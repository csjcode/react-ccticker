import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
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
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpenModal = () => {
    this.setState(prevState => ({ open: true }));
  };

  handleCloseModal = () => {
    this.setState(prevState => ({ open: false }));
  };

  render(props) {
    const { classes, rank, name, price_usd_commas, volume_usd_commas, percent_change_1h, 
      percent_change_24h, percent_change_7d, market_cap_usd_commas, price_btc, date, symbol, id  } = this.props;

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
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
					<h3>{name} {percent_change_1h}%</h3>
              This is the description of  {name} <br />
				  Currently ranked {rank} on our market charts.
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              <p>

						More info will go here when available. <br />

              {price_usd_commas} <br />
							{percent_change_1h} <br />
							{percent_change_24h}<br />
							{percent_change_7d} <br />
							{volume_usd_commas} < br />
              {market_cap_usd_commas} <br />
              {price_btc} <br />
              {date} <br />

				  </p>
            </Typography>
            {/* <SimpleModalWrapped /> */}
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