import { Routes , Route } from "react-router-dom";
import Home from "../../home/home";
import Classes from "../../classe/allClasses";
import Profs from "../../prof/allProfs";
import APropos from "../../apropos/aPropos";
import Comment from "../../comment/comment";
import CommentForm from "../../comment/commentForm";
import HomeSB from "../../schoolbook/home.sb";
import BookProfSB from "../../schoolbook/prof.sb/book.prof.sb";
import ClasseProfSB from "../../schoolbook/prof.sb/classe.prof.sb";
import HomeProfSB from "../../schoolbook/prof.sb/home.prof.sb";
import MessageProfSB from "../../schoolbook/prof.sb/message.prof/message.prof.sb";
import BookStudentSB from "../../schoolbook/student.sb/book.student.sb";
import HomeStudentSB from "../../schoolbook/student.sb/home.student.sb";
import MessageStudentSB from "../../schoolbook/student.sb/message.student/message.student.sb";

function Router() {
    
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="classes" element={<Classes />} />
            <Route path="profs" element={<Profs />} />
            <Route path="apropos" element={<APropos />} />
            <Route path="comment" element={<Comment />} />
            <Route path="comment/form" element={<CommentForm />} />
            <Route path="homesb" element={<HomeSB />} >
                <Route path="homestudent" element={<HomeStudentSB />} />
                <Route path="messagestudent" element={<MessageStudentSB />} />
                <Route path="bookstudent" element={<BookStudentSB />} />
                <Route path="homeprof" element={<HomeProfSB />} />
                <Route path="classeprof" element={<ClasseProfSB />} />
                <Route path="messageprof" element={<MessageProfSB />} />
                <Route path="bookprof" element={<BookProfSB />} />
            </Route>
        </Routes>
    )
}

export default Router
