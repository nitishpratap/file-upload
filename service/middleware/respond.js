const respond = (res, output) => {
    console.log("respond ::::::::::", output);
    res.setHeader('Content-Type', 'application/json');
    res.set('x-timestamp', Date.now());
    console.log(output);
    const assignErrorCodeStatus = (output.code > 100 ? output.code : 400)
    res.status(output.code ? assignErrorCodeStatus : 200);
    res.send(output);
    return true;
}
module.exports = respond;