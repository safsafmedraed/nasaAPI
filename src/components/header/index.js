


const Header = () => {
  return (
    <div >

      <nav className="navbar" style={{backgroundColor:'black'}}>
        <div className="container-fluid" >
          <img src='/assets/nasa-logo.svg' alt='nasa' />
          <span
          style={{
            color: "#fff",
            fontWeight: 600,
            margin: 0,
            fontSize: "0.95em",
            fontFamily: "Helvetica Neue ,Helvetica,Arial, sans-serif",
          }}
        >
          National Aeronautics and Space Administration
        </span>
        </div>
      </nav>
    </div>
  )
}

export default Header