function navbar(){
    return `
    <div id="footer">
            <div>
                <a href="#">
                    <h3 id="sub">Chandan Kumar Sharma</h3>
                </a>
            </div>
            <ul id="right">
                <li>
                    <a href="#home"><span class="material-icons-outlined icon"> Home </span></a>
                </li>
                <li>
                    <a href="#myimage"><span class="material-icons-outlined icon">About</span></a>
                </li>
                <li>
                    <a href="#drop" id="menu"><span class="material-icons-outlined icon account">Skill</span>
                <li>
                    <a href="#projectsloc"><span class="material-icons-outlined icon" id = "project">Projects</span></a>
                </li>
                <li>
                    <a href="#"><span class="material-icons-outlined icon">Experience</span></a>
                </li>
                <li>
                    <a href="#contact"><span class="material-icons-outlined icon">Contact</span></a>
                </li>
            </ul>
        </div>
        <div class="content"></div>
    `;
}

export {navbar}