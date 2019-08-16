import React from 'react';
import Navbar from 'react-bootstrap/Navbar'


const Title = () => {
    return (
        <>
            <Navbar className='row' expand="lg" bg="danger" variant="dark" >
                <div className='col-md-12 text-center'>
                    <Navbar.Brand className='' style={{fontFamily: 'Shadows Into Light Two', fontSize: '8vw'}}>Di$count Price</Navbar.Brand>
                </div>
            </Navbar>
        </>
    )
}

export default Title;