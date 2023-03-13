const home = (req, res) => {
    res.send('THIS IS HOME');
}

const home_post = (req, res) => {
    // console.log(req.body);
    // res.send('Success');
    res.json(req.body);
}

const calculator_get = (req,res) => {
    let result;
    // if(req.query.a){
    //     let a = req.query.a
    // }else {
    //     res.json({
    //         "msg": "First number is not provided"
    //     });
    // }
    // if(req.query.b){
    //     let b = req.query.b
    // }else {
    //     res.json({
    //         "msg": "Second number is not provided"
    //     });
    // }
    switch(req.params.operation){
        case 'sobiranje':
            result = Number(req.query.a) + Number(req.query.b)
            break;
        case 'odzemanje':
            result = Number(req.query.a) - Number(req.query.b)
            break;
        case 'mnozenje':
            result = Number(req.query.a) * Number(req.query.b)
            break;
        case 'delenje':
            result = Number(req.query.a) / Number(req.query.b)
            break;
    }

    res.json({
        'msg': "Calculation done successfully",
        "result": result
    })
}

const calculator_post = (req, res) => {
    console.log(req.query);
    switch(req.params.operation){
        case 'sobiranje':
            result = Number(req.body.a) + Number(req.body.b)
            break;
        case 'odzemanje':
            result = Number(req.body.a) - Number(req.body.b)
            break;
        case 'mnozenje':
            result = Number(req.body.a) * Number(req.body.b)
            break;
        case 'delenje':
            result = Number(req.body.a) / Number(req.body.b)
            break;
    }
}

module.exports = {
    home,
    home_post,
    calculator_get,
    calculator_post
};