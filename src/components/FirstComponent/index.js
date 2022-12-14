import './index.css'

const FirstComponent = ()=>(
    <>
    <div className='main-container'>
        <div className='image'></div>
        <div className='overlay'></div>
        <div className='navbar'>
            <div className='first-side-nav'>
                <h1 className='logo-1'>DESIGN<br/> <span className='span-logo'>AGENCY</span></h1>
                <ul className='ul'>
                    <li className='li-1'>Specialize In</li>
                    <li className='li-1'>Case Study</li>
                    <li className='li-1'>Process</li>
                    <li className='li-1'>Industries</li>
                </ul>
            </div>
            <div className='second-side-nav'>
                <button className='first-button'>Schedule a call</button>
                <button className='second-button'>We are hiring</button>
            </div>
        </div>
        <div className='article-container'>
            <h1 className='heading'>INNOVATION DIGITAL<br/>TECHNOLOGY</h1>
            <p className='des'>Everything we do is the consumer,imagination and you.</p>
        </div>
    </div>
    </>
    
)

export default FirstComponent