import React, {useState} from 'react';
import './layout.css';
import name from '../Assets/name.jpg';
import Output from './output';

const Layout = (props) => {
    let [input,
        setInput] = useState('0')
    let [result,
        setResult] = useState('')
    const handleClick = (event) => {
        const value = event.target.value;
        if (value === '=') {
            if (input !== '') {
                let res = ''
                try {
                    res = eval(input)
                } catch (err) {
                    setResult('Math error')
                }
                if (res === undefined) {
                    setResult("Math error")
                } else {
                    setResult(input + '=')
                    setInput(res)
                }
            }
        } else if (value === 'C') {
            setInput('0')
            setResult('')
        } else if (value === 'DEL') {
            let str = input
            try {
                str = str.substr(0, str.length - 1)
                setInput(str)
            }catch(err){}

        } else if (input === '0') {
            setInput(value)
        } else {
            setInput((input += value))
        }
    }
    return (
        <div>
            <div className='frame'>
                <div className='calci'>
                    <br></br>
                    <Output user={input} answer={result}/>
                    <img
                        src={name}
                        height="60px"
                        width="210px"
                        style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        padding: '0px'
                    }}/>
                    <div className='keys'>
                        <input
                            type='button'
                            value={'C'}
                            className="btn btn-danger"
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'DEL'}
                            className="btn btn-outline-danger"
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'%'}
                            className="button btn-warning"
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'/'}
                            className="button btn-warning"
                            onClick={handleClick}></input>

                        <input
                            type='button'
                            value={'7'}
                            className="button btn-light "
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'8'}
                            className="button btn-light "
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'9'}
                            className="button btn-light "
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'*'}
                            className="button btn-warning"
                            onClick={handleClick}></input>

                        <input
                            type='button'
                            value={'4'}
                            className="button btn-light "
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'5'}
                            className="button btn-light "
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'6'}
                            className="button btn-light "
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'-'}
                            className="button btn-warning"
                            onClick={handleClick}></input>

                        <input
                            type='button'
                            value={'1'}
                            className="button btn-light "
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'2'}
                            className="button btn-light "
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'3'}
                            className="button btn-light "
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'+'}
                            className="button btn-warning"
                            onClick={handleClick}></input>

                        <input
                            type='button'
                            value={'0'}
                            className="button btn-light "
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'='}
                            className="button btn-info"
                            onClick={handleClick}></input>
                        <input
                            type='button'
                            value={'.'}
                            className="button btn-light "
                            onClick={handleClick}></input>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Layout;
