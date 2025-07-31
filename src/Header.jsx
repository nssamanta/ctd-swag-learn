import ctdLogo from './assets/mono-blue-logo.svg';

function Header() {
    return(
        <div className="coming-soon">
            <h1>CTD Swag</h1>
            <div style={{ height: 100, width: 100 }}>
                <img src={ctdLogo} alt="Code The Dream Logo" />
            </div>
        </div>
    );
}

export default Header;