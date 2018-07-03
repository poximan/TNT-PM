$(function() {

    var accesos = [
        { Name: "", Id: 0 },
        { Name: "r", Id: 1 },
        { Name: "w", Id: 2 },
        { Name: "rw", Id: 3 }
    ];

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
        deleteConfirm: "¿borrar usuario?",
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
            { name: "username", type: "text", width: 50 },
            { name: "password", type: "text", width: 50, filtering: false },
            { name: "superuser", type: "checkbox", title: "superusr", sorting: false },
            { name: "topic", type: "text", width: 150 },
            { name: "access", type: "select", items: accesos, valueField: "Id", textField: "Name" },
            { type: "control" }
        ]
    });
});
