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
    // TODO - make better footer responsive to page changes and min height screen size
    <footer className="footer">
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  );
}

export default Footer;
