import React, { Component, Fragment } from "react";
import Columns from "./Columns";
class Table extends Component {
  // state = {  }
  render() {
    return (
      <table>
        <tr>
          <td>
            <Columns />
          </td>
          <td>
            <Columns />
          </td>
        </tr>
      </table>
    );
  }
  //   render() {
  //     return (
  //       <Fragment>
  //         <td>
  //           <Columns />
  //         </td>
  //         <td>
  //           <Columns />
  //         </td>
  //       </Fragment>
  //     );
  //   }
}

export default Table;
