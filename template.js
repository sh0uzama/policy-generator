export default `
<header>policy-generator v<%= it.version %></header>
<content>
    <h2><%~ it.title %></h2>
    <h3><%~ it.subtitle %></h3>
    <div id="content">
        <%~ it.content %>
    </div>
    <div id="however">
        <%~ it.however %>
    </div>
</content>
<footer>Made with 💗 by <%= it.role %></footer>
`;