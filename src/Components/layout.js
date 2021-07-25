import React, {useState} from 'react';
import './layout.css';
import name from '../Assets/name.jpg';
import Output from './output';

const Layout = (props) => {
    
    const handleClick = () => {}
    return (
        <div>
            <div className='frame'>
                <div className='calci'>
                    <br></br>
                    <Output />
                    <img src={name} height="60px" width="210px" style={{display:'block', marginLeft:'auto', marginRight:'auto', padding:'0px'}} />
                    <div className='keys'>
                        <input type='button' value={'C'} className="btn btn-danger" onClick={handleClick}></input>
                        <input type='button' value={'DEL'} className="btn btn-outline-danger" onClick={handleClick}></input>
                        <input type='button' value={'%'} className="button btn-warning" onClick={handleClick}></input>
                        <input type='button' value={'/'} className="button btn-warning" onClick={handleClick}></input>

                        <input type='button' value={'7'} className="button btn-light " onClick={handleClick}></input>
                        <input type='button' value={'8'} className="button btn-light " onClick={handleClick}></input>
                        <input type='button' value={'9'} className="button btn-light " onClick={handleClick}></input>
                        <input type='button' value={'*'} className="button btn-warning" onClick={handleClick}></input>

                        <input type='button' value={'4'} className="button btn-light " onClick={handleClick}></input>
                        <input type='button' value={'5'} className="button btn-light " onClick={handleClick}></input>
                        <input type='button' value={'6'} className="button btn-light " onClick={handleClick}></input>
                        <input type='button' value={'-'} className="button btn-warning" onClick={handleClick}></input>

                        <input type='button' value={'1'} className="button btn-light " onClick={handleClick}></input>
                        <input type='button' value={'2'} className="button btn-light " onClick={handleClick}></input>
                        <input type='button' value={'3'} className="button btn-light " onClick={handleClick}></input>
                        <input type='button' value={'+'} className="button btn-warning" onClick={handleClick}></input>

                        <input type='button' value={'0'} className="button btn-light " onClick={handleClick}></input>
                        <input type='button' value={'='} className="button btn-warning" onClick={handleClick}></input>
                        <input type='button' value={'.'} className="button btn-light " onClick={handleClick}></input>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Layout;
