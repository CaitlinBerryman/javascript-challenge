// from data.js
var sightings = data;

// filter button
var filterButton = d3.select("#filter-btn")

// remove filter button
var unfilterButton = d3.select("#unfilter-btn")

// given html form tag a form id too, which this takes from
var form = d3.select("#form");

// select table (tbody) element
var table = d3.select("tbody");

// load in all data unfiltered
data.forEach((report) => {
    var row = table.append("tr");
    Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// event handlers
filterButton.on("click", runEnter);
form.on("submit", runEnter);
unfilterButton.on("click", loadAll);


// filter function
function runEnter() {

    // stop refresh
    d3.event.preventDefault();

    // input element: input tag, id
    var inputElement = d3.select("#datetime");

    // input value property
    var inputValue = inputElement.property("value");

    // checks to see if anything has been entered; if value is empty, nothing happens
    if (inputValue) {

        console.log(inputValue);

        var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

        console.log(filteredData);

        // clear table
        table.html("");

        // load filtered data
        filteredData.forEach((report) => {
            var row = table.append("tr");
            Object.entries(report).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    };
};

function loadAll() {
    data.forEach((report) => {
        var row = table.append("tr");
        Object.entries(report).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};