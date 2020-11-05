 $(document).ready(function() {
    $('#data-table').DataTable( {
        "ajaxSource": "data.json",
        "scrollY":        "225px",
        "scroller": true,
        "scrollCollapse": true,
         "columns": [
            { "data": "id" },
            { "data": "FirstName" },
            { "data": "LastName" },
            { "data": "JoinDate" },
            { "data": "Language" }
        ]
    } );
} );