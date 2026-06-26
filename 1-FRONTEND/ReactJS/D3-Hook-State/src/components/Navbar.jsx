const Navbar = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #ff4d6d, #ff8e3c)',
      color: 'white',
      borderRadius: '24px',
      padding: '22px 28px',
      marginBottom: '30px',
      boxShadow: '0 18px 45px rgba(255, 77, 109, 0.35)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid rgba(255,255,255,0.2)',
      backdropFilter: 'blur(10px)'
    }}>
      <div>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Hey, I am Navbar</h1>
        <p style={{ margin: '6px 0 0', opacity: 0.95 }}>A bold header for a brilliant page</p>
      </div>
      <div style={{
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255,255,255,0.2)',
        fontSize: '1.2rem'
      }}>
        ✨
      </div>
    </div>
  )
}

export default Navbar