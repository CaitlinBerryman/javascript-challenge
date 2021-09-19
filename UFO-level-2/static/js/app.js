// from data.js
var sightings = data;

// filter button
var filterButton = d3.select("#filter-btn")

// unfilter button
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

    // set filteredData here unmodified, will get changed with each category
    var filteredData = sightings;

    // go through each category
    // input element: input tag, id
    var inputDateElement = d3.select("#datetime");

    // input value property
    var inputDateValue = inputDateElement.property("value");

    // checks to see if anything has been entered; if value is empty, nothing happens
    if (inputDateValue) {

        console.log(inputDateValue);

        filteredData = filteredData.filter(sighting => sighting.datetime === inputDateValue);
    
    };

    // repeat for other categories, condensed version
    var inputCityValue = d3.select("#city").property("value");
    if (inputCityValue) {
        console.log(inputCityValue);
        filteredData = filteredData.filter(sighting => sighting.city === inputCityValue);
    };

    var inputStateValue = d3.select("#state").property("value");
    if (inputStateValue) {
        console.log(inputStateValue);
        filteredData = filteredData.filter(sighting => sighting.state === inputStateValue);
    };

    var inputCountryValue = d3.select("#country").property("value");
    if (inputCountryValue) {
        console.log(inputCountryValue);
        filteredData = filteredData.filter(sighting => sighting.country === inputCountryValue);
    };

    var inputShapeValue = d3.select("#shape").property("value");
    if (inputShapeValue) {
        console.log(inputShapeValue);
        filteredData = filteredData.filter(sighting => sighting.shape === inputShapeValue);
    };

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

// returns whole table
function loadAll() {
    data.forEach((report) => {
        var row = table.append("tr");
        Object.entries(report).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};