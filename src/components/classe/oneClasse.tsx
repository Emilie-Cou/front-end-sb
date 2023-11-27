function OneClasse() {
    
    return (
        <>
            <h1>La classe</h1>
            {/* <% classe.forEach( cls => { %>
                <h1>Classe <%= cls.IdClasse %></h1>
                
                <h2><%= cls.NomClasse %></h2>
                <h3>Professeur : <%= cls.Nom %></h3>
                <h4>Description</h4>
                <p><%= cls.Description %></p>
                <img src='<%= cls.Img %>' alt="Ecole" width="300">

            <% }) %></img> */}
        </>
    )
}

export default OneClasse


// function Classes() {
    
//     return (
//         <>
//             <h1>Les classes</h1>
//             <ul class="afficheAll">
//                 <% allClasses.forEach( cls => { %>
//                     <li>
//                         <a href="/classe/<%= cls.IdClasse %>">
//                             <div class="afficheAllDiv">
//                                 <h3><%= cls.NomClasse %></h3>
//                                 <p>Professeur: <%= cls.Nom %></p>
//                                 <p><%= cls.CourteDescription %></p>
//                                 <h2>En voici une photo</h2>
//                                 <img src='<%= cls.Img %>' alt="Ecole du bas" width="300">
//                             </div>
//                         </a>
//                     </li>
//                 <% }) %>
//             </ul>
//         </>
//     )
// }

// export default Classes