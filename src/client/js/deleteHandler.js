// Delete Handler. Function is deleting entries

document.getElementById("deleteTrip").addEventListener("click", deleteHandler);

function deleteHandler() {
    document.getElementById("destination").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("pixabay").innerHTML = "";
    document.getElementById("infobox").innerHTML = "";
}

export { deleteHandler }