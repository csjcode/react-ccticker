import React from "react";
import { TableCell, TableHead, TableRow } from "material-ui/Table";
import "./MarketDataTableHead.css";

const MarketDataTableHead = () => {
  return (
    <TableHead>
      <TableRow>

        <TableCell
          className="DataTickerApi--col-head collapsible"
          style={{ width: 30 }}
        >
          Rank
        </TableCell>
        <TableCell className="DataTickerApi--col-head" style={{ width: 80 }}>
          Name
        </TableCell>
        <TableCell className="DataTickerApi--col-head" style={{ width: 40 }}>
          Sym
        </TableCell>
        <TableCell className="DataTickerApi--col-head" style={{ textAlign: 'center', width: 50 }}>
          Fav
        </TableCell> 
        <TableCell className="DataTickerApi--col-head" style={{ width: 80 }}>
          USD ($M)/Vol.
        </TableCell>
        <TableCell className="DataTickerApi--col-head" style={{ width: 60 }}>
          1 Hr &Delta;
        </TableCell>
        <TableCell className="DataTickerApi--col-head" style={{ width: 60 }}>
          24 Hr &Delta;
        </TableCell>
        <TableCell
          className="DataTickerApi--col-head collapsible"
          style={{ width: 60 }}
        >
          7 Day &Delta;
        </TableCell>
        <TableCell
          className="DataTickerApi--col-head collapsible"
          style={{ width: 70 }}
        >
          Volume (1k)
        </TableCell>
        <TableCell
          className="DataTickerApi--col-head collapsible"
          style={{ width: 70 }}
        >
          Market Cap
        </TableCell>
        <TableCell
          className="DataTickerApi--col-head collapsible"
          style={{ width: 70 }}
        >
          BTC
        </TableCell>

        <TableCell
          className="DataTickerApi--col-head collapsible"
          style={{ width: 70 }}
        >
          Updated
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default MarketDataTableHead;
