function Footer() {
  const footerYear = new Date().getFullYear();
  const facebookURL = "https://facebook.com";
  const twitterURL = "https://twitter.com/theodosiskats";

  return (
    // <footer classNameName='footer p-5 bg-gray-700 text-primary-content footer-center'>
    //   <div>
    //     <p>Copyright &copy; {footerYear} All rights reserved</p>
    //   </div>
    // </footer>

    <footer className="items-center align-middle p-4 footer bg-neutral text-neutral-content grid grid-rows-2 grid-flow-col gap-1">

      <div className="mx-auto grid-flow-col">
        <i className="fab fa-slack-hash text-2xl"></i>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>

      <div className="mx-auto grid-flow-col gap-6">
        <a href={twitterURL}>
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href={facebookURL}>
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a>
          <i className="fab fa-youtube text-2xl"></i>
        </a>
      </div>
      
    </footer>
  );
}

export default Footer;
