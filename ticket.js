let submit = document.getElementById("submit");
submit.addEventListener('click', (e) => {
    e.preventDefault;
    let appID = document.getElementById("appID");
    appID = appID.value;
    let finalData = [{ "appID": appID }];
    let startdate = document.getElementById("startdate");
    startdate = startdate.value;
    let TicketID = document.getElementById("TicketID").value;
    let resYN = $('input[name=resYN]:checked', '#form').val();
    if (resYN == 1) {
        resYN = "Yes";
    } else if (resYN == 0) {
        resYN = "No";
    }
    let enddate = document.getElementById("enddate").value;
    finalData = [{
        "appID": appID,
        "Startdate": startdate, 
        "TicketID": TicketID,
        "TicketResolved": resYN,
        "enddate": enddate}];
    localStorage.setItem("Final JSON", JSON.stringify(finalData));
    console.log(finalData)
})


