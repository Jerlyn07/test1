import React from "react";

const ReadOnlyRow = ({ item, index, handleEditClick, handleDeleteClick}) => {
  return (
    <tr key={index}>
      <td> {item["View"]}</td>
            <td> {item["Section Name"]}  </td>
            <td> {item["Section_Display"]}</td>
            <td> {item["Section_Status"]} </td>
            <td> {item["Section_Default_Open"]} </td>
            <td> {item["Primitive_FallOff_Hours"]} </td>
            <td> {item["Subsection_Name"]} </td>
            <td> {item["Subsection_Display"]} </td>
            <td> {item["Display_Association"]} </td>
            <td> {item["Dynamic_Group"]} </td>
            <td> {item["Primitive_EventSet_Name"]} </td>
            <td> {item["Primitive_EventSet_Display"]} </td>
            <td> {item["Item_Status"]}</td>
            <td> {item["Assay_Display"]} </td>  
      <td>
        <button type ="button" onClick={(event) => handleEditClick(event, item, index)}>Edit</button>
        <button type="button" onClick={() => handleDeleteClick(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;