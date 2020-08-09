// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the button
var button = d3.selectAll(".filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Define table body
var tableBody = d3.select("tbody")

// Define functions 
function buildTable(dataList)
{// Build the table view and add rows with data
    tableBody.html("");
    dataList.forEach(object => {
        var row = tableBody.append("tr");
        Object.values(object).forEach((column) => {
        var item = row.append("td");
          item.text(column);
            }
        );
    });

}

function runEnter()
{ // Write a filter
    var date = d3.select("#datetime").property("value");
    var dataFiltered = tableData; 
    d3.event.preventDefault();
    dataFiltered = dataFiltered.filter(row => row.datetime === date)
    
    // check if input within range
    if (dataFiltered.length == 0 ){
      alert("No entries for this date!\n Please enter date from 1/1/2010 to 1/13/2010");
      document.getElementById("datetime").value="1/1/2010";
      buildTable(tableData);
    }
    // if within range then build the table data
    else {
      buildTable(dataFiltered);
    }
}

// View all data on the default page
buildTable(tableData);