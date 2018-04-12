import React, { Component } from 'react';
import { connect } from "react-redux";
import './FavoritesPage.css';
// import '../../store/store.js';
// import { listFavorites } from "../../actions/favorites-actions";

class FavoritesPage extends Component {
  state = {
    favorites: true
  };

  handleListFavorites = () => {
    var favoriteList = this.props.favorites;
    console.log(`Favorites: ${favoriteList}`);
    return favoriteList.map((v,i)=>{
      return (
        <div key={v}>
          {v}
        </div>
      )
    }
    )
  }

  render() {
    return (
      <div className="FavoritesPage--container">
        <h2>Favorites</h2>
        <div className="FavoritesPage--container-inner">

          { this.state.favorites === false ?

            (

              <div className="FavoritesPage--container-favorites-nolist">
                <h4>You have not chosen<br />any Favorites</h4>
              </div>
          
            ) : (

              <div className="FavoritesPage--container-favorites">
                <h4>Here are your<br />Favorites</h4>
                {this.handleListFavorites()}
              </div>  
            )
          }

        </div>
      </div>
    )
  }
 }
 
 const mapStateToProps = (state, props) => {
  return {
    favorites: state.favorites
  };
};

// const mapDispatchToProps = {
//   onListFavorites: listFavorites
// };

// export default FavoritesPage;
 export default connect(mapStateToProps)(FavoritesPage);
