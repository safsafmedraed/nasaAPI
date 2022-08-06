const Footer = () => {
  return (
    
    <footer className="sticky-sm-bottom footer" style={{backgroundColor:'black',marginTop:'5%'}}>
      <div className="container-fluid">
        <img src="/assets/nasa-logo-footer.svg" alt="nasa"/>
        <span
          style={{
            color: "#fff",
            fontWeight: 600,
         paddingTop:'50px',
            fontSize: "0.95em",
            fontFamily: "Helvetica Neue ,Helvetica,Arial, sans-serif",
            float:'right'
            
          }}
        >
     <div style={{color:'red'}}> Made with &#x2764; by safsaf raed</div>  
        </span>
      </div>
    </footer>
  );
};

export default Footer;
