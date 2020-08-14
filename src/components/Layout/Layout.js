import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

import './Layout.css'


const Layout = (props) => (
    <Auxiliary>
        <div style={{width:'100%',backgroundColor:'white' , textAlign:'center', 
        fontSize:'52px', border:'4px solid green', color:'green'
        , textTransform:"uppercase"}}>Pakistan Zindabad</div>
        <main className="content">
            {props.children}
        </main>
    </Auxiliary>


);
export default Layout;