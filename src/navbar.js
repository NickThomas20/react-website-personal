export default function navbar(){
    return <nav className='navbar'>
    <div className='navbar-container'>
        <a href="/" className="site-title">Nick's Personal Website</a>
        <ul>
            <li>
                <a href='/Aboutme'>About Me</a>
                </li>
            <li>
                <a href='/Experince'>Experince</a>
                </li>
            <li>
                <a href='/Resume'>Resume</a>
                </li>
            <li>
                <a href='/Contact'>Contact</a>
            </li>
        </ul>
    </div>
</nav>
}