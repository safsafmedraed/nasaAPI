const Footer = () => {
  return (
    
    <footer className="sticky-sm-bottom footer" style={{backgroundColor:'black',marginTop:'5%'}}>
      <div className="container-fluid">
        <img src="/assets/nasa-logo-footer.svg" alt="nasa"/>
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
    </footer>
  );
};

export default Footer;
