export const ListUsersTemplate: string = `
    <%for(var user in this.users) {%>
        <div class="column">
            <div class="ui fluid card">
                <div class="image">
                    <img src="<% this.users[user]['avatar_url'] %>"
                        alt="<% this.users[user]['login'] %>" />
                </div>
                <div class="content">
                    <div class="header">
                        <a href="<% this.users[user]['html_url'] %>" target="_blank" title="<% this.users[user]['login'] %>">
                            <% this.users[user]['login'] %>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    <%}%>
`