const STYLE = {
    height: 'calc(100vh - 40px)',
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSizeHeading: '64px',
    marginTopMinus: '-20px',
    gradient: {
        background: 'var(--color-gradient)',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent'
    }
}

const Home = () => {
    return (
        <div className="home"
            style={{
                height: STYLE.height,
                overflowY: STYLE.overflowY,
                display: STYLE.display,
                justifyContent: STYLE.justifyContent,
                alignItems: STYLE.alignItems,
                marginTop: STYLE.marginTopMinus,
                userSelect: 'none'
            }}>
            <div>
                <h2 style={{
                    fontSize: STYLE.fontSizeHeading,
                    background: STYLE.gradient.background,
                    WebkitBackgroundClip: STYLE.gradient.webkitBackgroundClip,
                    WebkitTextFillColor: STYLE.gradient.webkitTextFillColor,
                }}>© Manh Ngo</h2>
            </div>
        </div>
    )
}

export default Home;