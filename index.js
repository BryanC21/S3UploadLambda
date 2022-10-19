function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

exports.handler = async (event) => {
    
    const newID = makeid(3) +"-"+ event.queryStringParameters.name;
    const response = {
        statusCode: 200,
        body: newID,
    };
    return response;
};
