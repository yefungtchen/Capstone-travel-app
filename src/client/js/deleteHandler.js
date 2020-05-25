// Function deletes all the entries and empties the boxes

document.getElementById("deleteTrip").addEventListener("click", deleteHandler);

function deleteHandler() {
    document.getElementById("destination").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("pixabay").innerHTML = "";
    document.getElementById("infobox").innerHTML = "";
}

export { deleteHandler }