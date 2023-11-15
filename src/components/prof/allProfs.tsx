function Profs() {
    
    return (
        <>
            <h1>Les professeurs</h1>
            {/* <ul class="afficheAll">
                <% allProfs.forEach( prof => { %>
                    <li>
                        <div class="afficheAllDiv">

                            <% let fonction = ''; %>
                            <% if (prof.IdClasse == 'Dir') { %>
                            <%     fonction = 'Directrice' %>
                            <% } else if (prof.IdClasse == 'SEC1' || prof.IdClasse == 'SEC2') { %>
                            <%     fonction = 'Secrétaire' %>
                            <% } else { %>
                            <%     fonction = 'Professeur' %>
                            <% }; %>


                            <h3><%= fonction %></h3>
                            <p><%= prof.Nom %></p>
                            <p><%= prof.NomClasse %></p>
                            <h2>Et voici une photo</h2>
                            <img src='<%= prof.Img %>' alt="Photo du prof" width="300">

                        </div>
                    </li>
                <% }) %>
            </ul> */}
        </>
    )
}

export default Profs