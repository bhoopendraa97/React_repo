
import { Link, Outlet } from "react-router-dom";

const About=()=>{
   return(
    <>
    <h1>About page</h1>
    A paragraph is usually around 250 words and five to six sentences long, but this can vary depending on the purpose of the paragraph and the length of the piece
       <br /><br />
        <table width="100%" border="2">
           <tr>

             <td>
             <Link to="aboutcompany">About Company</Link>
               <br /><br />
               <Link to="aboutproduct">About Product</Link>
               <br /><br />
               <Link to="aboutservice">About Services</Link>
             </td>

            <td>

               
            <Outlet/>
            
            </td>

           </tr>

        </table>


    </>

   )

}
export default About;






