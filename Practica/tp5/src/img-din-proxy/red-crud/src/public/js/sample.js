$(function() {

    $("#jsGrid").jsGrid({
        height: "70%",
        width: "100%",
        filtering: true,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        deleteConfirm: "¿borrar proyecto?",
        controller: {
            loadData: function(filter) {
              return $.ajax({
                type: "GET",
                url: "./clients",
                data: filter
              });
            },
            insertItem: function(item) {
              return $.ajax({
                type: "POST",
                url: "./clients",
                data: item
              });
            },
            updateItem: function(item) {
              return $.ajax({
                type: "PUT",
                url: "./clients",
                data: item
              });
            },
            deleteItem: function(item) {
                return $.ajax({
                    type: "DELETE",
                    url: "./clients",
                    data: item
                });
            }
        },
        fields: [
            { name: "id-proyecto", type: "text", width: 50 },
            { type: "control" }
        ]
    });
});
