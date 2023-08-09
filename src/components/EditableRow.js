import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange , handleCancelClick}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Enter a name..."
          name="View"
          value={editFormData.View}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an address..."
          name="Section_Name"
          value={editFormData.Section_Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter a phone number..."
          name="Section_Display"
          value={editFormData.Section_Display}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="Section_Status"
          value={editFormData.Section_Status}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="Section_Default_Open"
          value={editFormData.Section_Default_Open}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="Primitive_FallOff_Hours"
          value={editFormData.Primitive_FallOff_Hours}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="Subsection_Name"
          value={editFormData.Subsection_Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="Subsection_Display"
          value={editFormData.Subsection_Display}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="Display_Association"
          value={editFormData.Display_Association}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="Dynamic_Group"
          value={editFormData.Dynamic_Group}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="Primitive_EventSet_Name"
          value={editFormData.Primitive_EventSet_Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="Primitive_EventSet_Display"
          value={editFormData.Primitive_EventSet_Display}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="Item_Status"
          value={editFormData.Item_Status}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="Assay_Display"
          value={editFormData.Assay_Display}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;