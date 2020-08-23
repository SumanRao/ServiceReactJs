import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import ListService from "./listService";
import ListProvider from "./listProvider";
import Grid from "@material-ui/core/Grid";
import * as _ from "lodash";

class Main extends Component {
  state = {
    selectedService: {},
  };

  componentDidMount() {
    this.props.loadService();
    this.props.loadProvider();
  }

  handleServiceSelect = (service) => {
    this.setState({ selectedService: service });
  };

  render() {
    const { selectedService } = this.state;

    let filteredProviders = [];

    filteredProviders =
      selectedService && selectedService.id && selectedService.attributes
        ? _.filter(this.props.providers, function (item) {
            return (
              item.attributes.subspecialties.indexOf(
                selectedService.attributes.name
              ) >= 0
            );
          })
        : this.props.providers;

    return (
      <React.Fragment>
        {/* Spinner */}
        {this.props.services.length === 0 && this.props.providers.length === 0 && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-3 col-xs-3 col-sm-3" style={{ paddingLeft: 40 }}>
            <Grid container spacing={3}>
              <Grid item xs={10} md={10}>
                <ListService
                  items={this.props.services}
                  selectedItem={this.state.selectedService}
                  onItemSelect={this.handleServiceSelect}
                />
              </Grid>
            </Grid>
          </div>

          <div className="col col-xs-9 col-sm-9" style={{ paddingRight: 40 }}>
            <Grid container spacing={10}>
              <Grid item xs={10} md={10}>
                <ListProvider items={filteredProviders} />
              </Grid>
            </Grid>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Main);
