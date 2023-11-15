import { Routes , Route } from "react-router-dom";
import Home from "../../home/home";
import Classes from "../../classe/allClasses";
import OneClasse from "../../classe/oneClasse";
import Profs from "../../prof/allProfs";
import APropos from "../../apropos/aPropos";
import Comment from "../../comment/comment";
import CommentForm from "../../comment/commentForm";
import ConnectForm from "../../connect/connectForm";

function Router() {
    
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="classes" element={<Classes />} />
            <Route path="classe" element={<OneClasse />} />
            <Route path="profs" element={<Profs />} />
            <Route path="apropos" element={<APropos />} />
            <Route path="comment" element={<Comment />} />
            <Route path="comment/form" element={<CommentForm />} />
            <Route path="connect" element={<ConnectForm />} />
        </Routes>
    )
}

export default Router