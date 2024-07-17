import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
        <>
        {/* nav/header */}
        <h2>Hier könnte eine Nav/Header sein</h2>
         <main className='main-container'>
            <Outlet /> 
        </main>
        <h2>Hier könnte ein Footer sein</h2>
        {/* footer */} 
        </>
    );
}

export default SharedLayout;
