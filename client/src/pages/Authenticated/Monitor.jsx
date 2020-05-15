import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeriesCanvas,
} from "react-vis";
import data from "./flight.json";
import "../../../node_modules/react-vis/dist/style.css";
import "react-datepicker/dist/react-datepicker.css";

class Monitor extends Component {
  state = {
    cht: { cht1: [], cht2: [], cht3: [], cht4: [] },
    egt: { egt1: [], egt2: [], egt3: [], egt4: [] },
    oil: { oilp: [], oilt: [] },
    tail_number: ""
  };

  componentDidMount() {
    const { tail_number } = this.props.match.params;
    this.setState({ tail_number: tail_number });

    let cht = { cht1: [], cht2: [], cht3: [], cht4: [] };
    let egt = { egt1: [], egt2: [], egt3: [], egt4: [] };
    let oil = { oilp: [], oilt: [] };
    data.forEach(function (element, index) {
      cht.cht1.push({ x: index, y: element.C1 });
      cht.cht2.push({ x: index, y: element.C2 });
      cht.cht3.push({ x: index, y: element.C3 });
      cht.cht4.push({ x: index, y: element.C4 });
      egt.egt1.push({ x: index, y: element.E1 });
      egt.egt2.push({ x: index, y: element.E2 });
      egt.egt3.push({ x: index, y: element.E3 });
      egt.egt4.push({ x: index, y: element.E4 });
      oil.oilp.push({ x: index, y: element.OILP });
      oil.oilt.push({ x: index, y: element.OILT });
    });
    console.log(cht);
    console.log(egt);
    console.log(oil);
    this.setState({ cht, egt, oil });
    
  }

  render() {
    return (
      <Container fluid>
        <Row md={12}>
          <Col md={1}>
            <Sidebar />
          </Col>
          <Col>
            <div class="mr-5 ml-5 mt-2">
              <h1>Latest Engine Monitor Data for {this.state.tail_number}</h1>
              <div class="cht-chart">
                <h3>Cylinder Head Temp</h3>
                <XYPlot height={400} width={980}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <LineSeries data={this.state.cht.cht1} />
                  <LineSeries data={this.state.cht.cht2} />
                  <LineSeries data={this.state.cht.cht3} />
                  <LineSeries data={this.state.cht.cht4} />
                  <XAxis title="CHT" />
                  <YAxis title="Time" />
                </XYPlot>
              </div>
              
              <h1>Exhaust Gas Temp</h1>
              <div class="egt-chart">
                <XYPlot height={400} width={980} yDomain={[800, 1500]}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <LineSeries data={this.state.egt.egt1} />
                  <LineSeries data={this.state.egt.egt2} />
                  <LineSeries data={this.state.egt.egt3} />
                  <LineSeries data={this.state.egt.egt4} />
                  <XAxis title="EGT" />
                  <YAxis title="Time" />
                </XYPlot>
              </div>
              <h1>Oil Temp and Pressure</h1>
              <div class="oil-chart">
                <XYPlot height={400} width={980} yDomain={[0, 250]}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <LineSeries data={this.state.oil.oilp} />
                  <LineSeries data={this.state.oil.oilt} />
                  <XAxis title="EGT" />
                  <YAxis title="Time" />
                </XYPlot>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Monitor;
