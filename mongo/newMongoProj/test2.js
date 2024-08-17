var Mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/jobeks";

function invokeQuery(queryFunction) {
    return new Promise((resolve, reject) => {
         MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            queryFunction(db).then((res) => {
                console.log(res);
                
                return res;
    
            }).catch((err) => {
                return err
            });
            // db.close();
        })
    
    
    
    
    
    })
}
function getAllSkills(db) {
    // return `select*from skills`

    return new Promise((resolve, reject) => {

        db.collection("skills").find().toArray(function (err, result) {
            // if (err) throw err;
            if (err) {
                reject(err);

            } else {
                resolve(result);
                // console.log(result);

            }

        })
    })
}

invokeQuery(getAllSkills);
// con(getAllSkills);
// getAllSkills(db);
