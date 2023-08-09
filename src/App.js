import React, { useState, Fragment } from "react";
import excelStore from "./store"
import Papa from 'papaparse'
// import { nanoid } from "nanoid";
import "./App.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import * as XLSX from 'xlsx';


const App = () => {
  const [data, setData] = useState([]);
  const [addFormData, setAddFormData] = useState({
    View: "",
    Section_Name: "",
    Section_Display: "",
    Section_Status: "",
    Section_Default_Open: "",
    Primitive_FallOff_Hours: "",
    Subsection_Name: "",
    Subsection_Display: "",
    Display_Association: "",
    Dynamic_Group: "",
    Primitive_EventSet_Name: "",
    Primitive_EventSet_Display: "",
    Item_Status: "",
    Assay_Display: "",
  });

  const [editFormData, setEditFormData] = useState({
    View: "",
    Section_Name: "",
    Section_Display: "",
    Section_Status: "",
    Section_Default_Open: "",
    Primitive_FallOff_Hours: "",
    Subsection_Name: "",
    Subsection_Display: "",
    Display_Association: "",
    Dynamic_Group: "",
    Primitive_EventSet_Name: "",
    Primitive_EventSet_Display: "",
    Item_Status: "",
    Assay_Display: "",
  });


  const [columnArray, setColumn] = useState([]);
  const [values,setValues] = useState([]);
  const [editItemId, setEditItemId] = useState(null);

  const downloadExcel = (data) => {
    let exportData = data.map(items=>{
      return {
       "Action": items["Action"]='ADD',
       "Parent Unique Value" : items["Section_Name"],
       "Parent Display" : items["Section_Display"],
       "Move or Copy to/Existing Event Set Name" : '',
       "Event Set Name" : items["Primitive_EventSet_Name"],
       "Event Set Display" : items["Primitive_EventSet_Display"],
       "Event Set Description" : items["Primitive_EventSet_Name"],
       "Event Set Definition" : items["Primitive_EventSet_Name"],
       "Event Set Show No Data Ind" : '',
       "Event Set Display Assoc Ind" : '',
       "Primitive Ind" : '',
       "Event Set Sequence" : '',
       "Event Code Value" : items["Assay_Display"],
       "Event Code Display" : items["Assay_Display"],
       "Event Code Description" : items["Assay_Display"],
       "Event Code Definition" : items["Assay_Display"],
       "Event Code Class" :'',
       "Event Code Add Access Ind" : '',
       "Event Code Chg Access Ind" : '',
       "Mapped Proc Type" : '',
       "Mapped Proc Display" : '',
       "Mapped Proc Code Value" : '',
       "Charting Indicator" : '',
       "Errors" : '',
      }
    })
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };

  const handleFile = (event) =>{
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function(result){
        const columnArray = [];
        const valuesArray = [];
        result.data.map((d) => {
          columnArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        setData(result.data);
        setColumn(columnArray[0]);
        setValues(valuesArray);
      }
    })
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange =  (event) => {

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);    
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newData = {
      // id: nanoid(),
      View: addFormData.View,
      Section_Name: addFormData.Section_Name,
      Section_Display: addFormData.Section_Display,
      Section_Status: addFormData.Section_Status,
      Section_Default_Open: addFormData.Section_Default_Open,
      Primitive_FallOff_Hours: addFormData.Primitive_FallOff_Hours,
      Subsection_Name: addFormData.Subsection_Name,
      Subsection_Display: addFormData.Subsection_Display,
      Display_Association: addFormData.Display_Association,
      Dynamic_Group: addFormData.Dynamic_Group,
      Primitive_EventSet_Name: addFormData.Primitive_EventSet_Name,
      Primitive_EventSet_Display: addFormData.Primitive_EventSet_Display,
      Item_Status: addFormData.Item_Status,
      Assay_Display: addFormData.Assay_Display,
    };

    const newDatas= [...data, newData];
    setData(newDatas);
  };

  const handleEditFormSubmit = (event,item,index) => {
    event.preventDefault();

    const editedData = {
          id : editItemId,
          View: editFormData.View,
          Section_Name: editFormData.Section_Name,
          Section_Display: editFormData.Section_Display,
          Section_Status: editFormData.Section_Status,
          Section_Default_Open: editFormData.Section_Default_Open,
          Primitive_FallOff_Hours: editFormData.Primitive_FallOff_Hours,
          Subsection_Name: editFormData.Subsection_Name,
          Subsection_Display: editFormData.Subsection_Display,
          Display_Association: editFormData.Display_Association,
          Dynamic_Group: editFormData.Dynamic_Group,
          Primitive_EventSet_Name: editFormData.Primitive_EventSet_Name,
          Primitive_EventSet_Display: editFormData.Primitive_EventSet_Display,
          Item_Status: editFormData.Item_Status,
          Assay_Display: editFormData.Assay_Display,
        };
    
        const newDatas = [...data];

        // const index1 = data.findIndex((item) => index =);

        const index1 = data.findIndex((item)=> index === editItemId);

        newDatas[editItemId] = editedData;

        setData(newDatas);
        setEditItemId(null);
      
        };

  const handleEditClick = (event, item, index) => {
    event.preventDefault();
    setEditItemId(index);

    const formValues = {
      View: item.View,
      Section_Name: item.Section_Name,
      Section_Display: item.Section_Display,
      Section_Status: item.Section_Status,
      Section_Default_Open: item.Section_Default_Open,
      Primitive_FallOff_Hours: item.Primitive_FallOff_Hours,
      Subsection_Name: item.Subsection_Name,
      Subsection_Display: item.Subsection_Display,
      Display_Association: item.Display_Association,
      Dynamic_Group: item.Dynamic_Group,
      Primitive_EventSet_Name: item.Primitive_EventSet_Name,
      Primitive_EventSet_Display: item.Primitive_EventSet_Display,
      Item_Status: item.Item_Status,
      Assay_Display: item.Assay_Display,
    };
     setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditItemId(null);
  };

  const handleDeleteClick = (editItemId) => {
    const newDatas = [...data];

    // const index = contacts.findIndex((contact) => contact.id === contactId);

    newDatas.splice(editItemId, 1);

    setData(newDatas);
  };



  return <div className="app-container">
     <h2>IView Formatter</h2> 
  <h3> Please upload a file</h3>    
      <input
      type="file"
      name="file"
      accpet=".xlsx"
      onChange={handleFile}
      style={{display:"block", margin:"10px auto"}}>
      </input>
      <br/>
    <form onSubmit = {handleEditFormSubmit}> 
    <table>
      <thead>
      <tr>
             {columnArray.map((col, i)=> (
               <th key={i}>{col}
               </th>
              // <div>{column.canFilter ? column.render('Filter') : null}</div>
             ))}
          </tr>
      </thead>
      <tbody>
          { data.map((item, index)=> (
          <Fragment>
            {editItemId === index ? (
               <EditableRow
               editFormData={editFormData}
               handleEditFormChange={handleEditFormChange}
               handleCancelClick={handleCancelClick} />
            ) : (
              <ReadOnlyRow 
           item={item}
           index={index}
           key={index}
           editItemId = {editItemId}
           handleEditClick={handleEditClick}
           handleDeleteClick={handleDeleteClick}/>
            )}
               </Fragment>
))}
         </tbody>
    </table>
    </form> 
        <div>
        <button class="button" onClick={() => downloadExcel(data)}>Export json data to excel</button>
      </div>
    <h2>Add a New Row</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="View"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Section_Name"
          required="required"
          placeholder="Enter Section Name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Section_Display"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Section_Status"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Section_Default_Open"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Primitive_FallOff_Hours"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Subsection_Name"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Subsection_Display"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Display_Association"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Dynamic_Group"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Primitive_EventSet_Name"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Primitive_EventSet_Display"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Item_Status"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Assay_Display"
          required="required"
          placeholder="Enter view name"
          onChange={handleAddFormChange}
        />
        <button class="button" type="submit">Add</button>
      </form>
  </div>;
};

export default App;
