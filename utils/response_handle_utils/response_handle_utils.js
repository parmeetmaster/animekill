const handleSuccess =  (message, path, data) => {
    return {
        "status": true,
        "message": message,
        "path": path,
        "data": data
    }
}

const handleFailure = (message, path) => {
    return {
        "status": false,
        "message": message,
        "path": path,
        "data":{}
    }
}

module.exports={handleSuccess,handleFailure}