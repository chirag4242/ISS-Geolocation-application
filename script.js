
getData();
async function getData()
{
    const response = await fetch(`https://api.wheretheiss.at/v1/satellites/25544`);
    const JsonData = await response.json();
    const data = JSON.stringify(JsonData);
    console.log(data);
}

