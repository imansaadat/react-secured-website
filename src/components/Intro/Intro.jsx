import React from 'react'
import './Intro.css'
const Intro = () => {
    return (
        <section className='intro'>
            <div className='container'>
                    <div className='intro_content bg_glass'>
                        <div className='title'>
                            <h2>Data</h2>
                            <h2 className='blue'>Secured</h2>
                            <h2>Protection</h2>
                        </div>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus explicabo at blanditiis. Eaque assumenda omnis, voluptas, veritatis dolor voluptatibus ea nam at aliquam.</p>
                        <button href="/" className='btn'>learn more</button>
                    </div>
            </div>
        </section>
    )
}

export default Intro