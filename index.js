const pageMaps = {
    "GET/":"frontPage.html",
    "GET/college":"college.html",
    "GET/contact":"contact.html",
    "GET/freshers":"freshers.html",
    "GET/privacy":"privacy.html",
    "GET/welfare":"welfare.html",
    "GET/groups":"groups.html"
}

const extraMaps = {
    "GET/style.css":{
        "data":"assets/css/style.css",
        "contentType":"text/css"
    }
}

const fs = require("fs");

module.exports.handler = async (event) => {
    let pageCode = `${event.httpMethod}${event.path}`

    let returnBody = {
        body: "",
        headers: {
            "Content-Type": "text/html"
        }
    }
    if(Object.keys(pageMaps).includes(pageCode)){
        returnBody.body = fs.readFileSync(`assets/html/${pageMaps[pageCode]}`);
    } else if(Object.keys(extraMaps).includes(pageCode)){
        returnBody.body = fs.readFileSync(extraMaps[pageCode].data);
        returnBody.headers["Content-Type"] = extraMaps[pageCode].contentType;
    } else {
        returnBody.body = fs.readFileSync(`assets/html/404.html`);
    }

    if(pageCode == "GET/groups"){
        // inject stuff for groups
    }

    returnBody.body = returnBody.body.toString();

    return returnBody;
}