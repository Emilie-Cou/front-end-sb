import { useState } from "react";

function BookStudentSB () {

    const [ comments, setComments ] = useState()

    return (
        <>
            <h1>BookStudentSB</h1>

            <ul>

            </ul>
        </>
    )
}

export default BookStudentSB




{/* <ul class="schoolBookBlog">
    <% artStu.forEach( stu => { %>
        <li>
            <div class="schoolBookArticle">
                <h2>Id = <%= stu.IdClasse %></h2>
                <h3><%= stu.Titre %></h3>
                <img src='<%= stu.Img %>' alt="Image" width="550">
                <p><%= stu.Desc %></p>

                <h4>Commentaire(s)</h4>
                <% stu.listComm.forEach( com => { %>
                    <div class="afficheComment">
                        <p><%= com.Prenom %></p>
                        <p><%= com.Content %></p>
                    </div>
                <% }) %>           

                <h4>Commenter:</h4>
                <form name="formBlogCom" action="/schoolbook/studentAddCom" method="post">
                    <input type="text" name="idClasse" id="idClasse" value="<%= stu.IdClasse %>" hidden>
                    <input type="text" name="idBlog" id="idBlog" value="<%= stu.IdBlog %>" hidden>
                    <div>
                        <label for="prenom">Prénom: </label>
                        <input type="text" name="prenom" id="prenom" required>
                    </div>
                    <br>
                    <div>
                        <label for="content">Ecris ton commentaire: </label>
                        <textarea name="content" id="content" cols="50" rows="5" required></textarea>
                    </div>
                    <br>
                    <div>
                        <button type="submit">Envoyer</button>
                    </div>
                    <br>
                </form>
            </div>
        </li>
    <% }) %>
</ul> */}