
var mongoClient = require('mongodb').MongoClient;
var URL         = "mongodb+srv://monga:mongaxyz@cluster0.fkiu2.mongodb.net/school?retryWrites=true&w=majority";
var config      = { useUnifiedTopology: true } ;

mongoClient.connect(URL, config, function(error,mongodata){
    if(error){
        console.log('Connections Failed!');
    }else{
        console.log('Connection Success');
        insertData(mongodata);
        deleteData(mongodata)
        deleteAllData(mongodata);
        findOne(mongodata);
        findAll(mongodata);
        findProjection(mongodata);
        updateData(mongodata)
        createCustomCollection(mongodata);
        deleteCollection(mongodata);
    }
});

function insertData(mongodata){
    var mongodb        = mongodata.db('school');
    var collectionList = mongodb.collection('student_list');
    var data = {
            name : 'Maria Santos',
            roll : '456',
            city : 'Washington',
            state: 'USA'
        }       

    collectionList.insertOne(data, function(error){
        if(error){
            console.log('Failed to insert');
        }else{
            console.log('Data Inserted successfully');
        }
    });
}

function deleteData(mongodata){
    var mongodb        = mongodata.db('school');
    var collectionList = mongodb.collection('student_list');
    var deleteItem     = {roll:"122"};
    collectionList.deleteOne(deleteItem, function(error){
        if(error){
            console.log('Failed to Delete');
        }else{
            console.log('Data Deleted successfully');
        }
    });
}

function deleteAllData(mongodata){
    var mongodb        = mongodata.db('school');
    var collectionList = mongodb.collection('student_list');
    collectionList.deleteMany(function(error){
        if(error){
            console.log('Failed to Delete');
        }else{
            console.log('All Data Deleted successfully');
        }
    });
}

function findOne(mongodata){
    var mongodb        = mongodata.db('school');
    var collectionList = mongodb.collection('student_list');
    var obj            = { };
    collectionList.findOne(obj, function(error, result){
        console.log(result);
    })
}

function findAll(mongodata){
    var mongodb        = mongodata.db('school');
    var collectionList = mongodb.collection('student_list');    
    collectionList.find().toArray(function(error,result){
        console.log(result);
    });
}

function findProjection(mongodata){
    var mongodb        = mongodata.db('school');
    var collectionList = mongodb.collection('student_list');    
    collectionList.find({},{projection:{name:1,state:1}}).toArray(function(error, result){
        console.log(result);
    })
}

function updateData(mongodata){
    var mongodb        = mongodata.db('school');
    var collectionList = mongodb.collection('student_list');   
    var oldValue       = {name:"Maria Santos"};
    var newValue       = { $set: { name : 'Miya Suzuki', city : 'Narasaki', state: 'Japan' } };
    collectionList.updateOne(oldValue,newValue,function(error, result){
        if(error){
            console.log('Failed to update data');
        }else{
            console.log('Data updated successfully!');
        }
    });
}

function createCustomCollection(mongodata){
    var database = mongodata.db('school');
    database.createCollection('student_scores'), function(error,result){
        if(error){
            console.log('Failed to create Collection');
        }else{
            console.log(result);
        }
    };
}

function deleteCollection(mongodata){
    var database = mongodata.db('school');
    database.dropCollection('student_scores', function(error,result){
        console.log(result);
    });
}