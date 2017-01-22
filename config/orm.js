var connection = require('./connection.js');

var orm = {
    selectAll: function(table){
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, [table],
            function(err, result){
                console.log(result);
        });
    },

    insertOne: function(table, paramOne, paramTwo, valOne, valTwo){
        var queryString = "INSERT INTO ?? (??, ??) VALUES (??, ??)";

        connection.query(queryString, [table, paramOne, paramTwo, valOne, valTwo],
            function(err, result){
                console.log(result);
        });
    },

    updateOne: function(table, burgerName, devoured, id){
        var queryString = "UPDATE ?? SET burger_name = ??, devoured = ?? WHERE id = ??";

        connection.query(queryString, [table, burgerName, devoured, id],
            function(err, result){
                consosle.log(result);
            });
    }

};

module.exports = orm;