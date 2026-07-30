
import { NavLink } from "react-router";

export function Header(){
  return(

 <header className="bg-black text-white px-8 py-4 flex items-center justify-between pt-10 pb-10">
    <NavLink to ="/"className = " tracking-wider uppercase text-3xl text-white font-bold flex items-center  justify-between ">
    Literacy
    </NavLink>

    {/* Navigition */}

    <nav className="gap-10  flex  pr-20 ">
        <NavLink to ="/" className =" pt-3 :">Home</NavLink>
        <NavLink to ="/" className="pt-3">About</NavLink>
        <NavLink to ="/" className ="pt-3">Blog</NavLink>
        <NavLink to ="/" className=" pt-3   ">Contact</NavLink>
    

    {/*button*/}
    <NavLink to="/" className="pl-10">
        <button className =" text-black font-semibold py-3  px-6 bg-amber-600 hover:bg-amber-300 transition-color">Contact me</button>
    </NavLink>
    </nav>

 </header>
  


  );
}