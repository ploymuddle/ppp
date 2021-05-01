import Axios from "axios";
import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";


function SearchD() {
  const [dataList, setDataList] = useState([]);

  const getDataList = () => {
    Axios.get("http://localhost:5000/getDataA").then((response) => {
      setDataList(response.data);
    });
  };

  return (
    <div className="SearchD">
      <Card style={{ height: "50rem" }}>
        <Card.Title>
        d) Given a (year_input) and an input of (color_pm25) level of health concern
        from the user, calculate a total of the affected population (in number).
        </Card.Title>
        <Card.Body>
          <Card.Text>
            <Form>
              <Row className="justify-content-md-center">
                <Col sm={3}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="year "
                    aria-label="year "
                  ></input>
                </Col>
                <Col sm={3}>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>color_pm25</option>
                    <option value="1">green</option>
                    <option value="2">drakred</option>
                    <option value="3">red</option>
                    <option value="1">yellow</option>
                    <option value="2">drakorange</option>
                    <option value="3">orange</option>
                  </select>
                </Col>
                <Col sm={2}>
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={getDataList}
                    >
                      Search
                    </button>
                  </div>
                </Col>
                <Col sm={2}>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-warning">
                      Export
                    </button>
                  </div>
                </Col>
              </Row>
            </Form>

            <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-striped  table-hover">
                <thead>
                  <tr>
                    <th scope="col">year</th>
                    <th scope="col">color_pm25</th>
                    <th scope="col">affected_population</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="no-data">
                    <td colspan="11">No data</td>
                  </tr>
                  {dataList.map((val) => {
                    return (
                      <tr>
                        <td>{val.year}</td>
                        <td>{val.color_pm25}</td>
                        <td>{val.affected_population}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SearchD;