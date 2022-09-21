module.exports = `<html>

<head>
    <title><%~ it.title %></title>
    <style>
        /* please add some styles */
    </style>
</head>

<body>
    <h2><%~ it.title %></h2>
    <h3><%~ it.subtitle %></h3>
    <div id="content">
        <%~ it.content %>
    </div>
    <div id="however">
        <%~ it.however %>
    </div>
</body>

</html>`;