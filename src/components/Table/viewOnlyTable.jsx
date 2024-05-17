import * as React from "react";
import { Table } from "react-bootstrap";

export default function ViewOnlyTable({ tablehead, tablerow }) {
  return (
      <Table hover responsive>
        <thead style={{ backgroundColor: "#F8F9FD", color: "#000" }}>
          <tr>
            {tablehead.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tablerow.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tablehead.map((header, cellIndex) => (
                <td key={cellIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
  );
}
