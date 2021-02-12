import './Header.css'
function Header() {
    return (
        <div className="header-grid">
            <div><img src="img/engi.png"
                srcset="img/engi@2x.png 2x,
             img/engi@3x.png 3x"
                class="engi"></img>
            </div>
            <div>
                <div className="faculty">คณะวิศวกรรมศาสตร์</div>
                <div className="major">สาขาวิศวกรรมศาสตร์ทั่วไป </div>  
                <div className="university">จุฬาลงกรณ์มหาวิทยาลัย</div>
            </div>
        </div>

    )
}
export default Header;