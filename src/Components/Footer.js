import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faAt, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-10 text-left">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">

        <div className="flex flex-col md:flex-row md:space-x-12 lg:space-x-24">
          {/* logo and description */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <Link to="/" className="text-white hover:text-gray-200 text-4xl font-black">
              <FontAwesomeIcon icon={faCube} /> electro.
            </Link>
            <p className="mt-2 w-full md:w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Sed non tortor vitae erat lacinia porttitor. Quisque sit amet aliquet leo. Morbi quis massa id mi pellentesque placerat</p>
            <p className="mt-6"><span className="font-bold text-blue-900">© 2023 electro.</span> All rights reserved.</p>
          </div>

          {/* address and contact */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <ul className="flex flex-col space-y-4">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faHeadset} className="text-4xl mr-2"/>
                Got questions? Call us 24/7!
              </li>
              <li>(800) 8001-8588, (0600) 874 548</li>
              <li>1129 Great St. New York. New York 10306</li>
            </ul>
          </div>

          {/* social links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-2xl mb-4">Contact Us</h3>
            <ul className="flex space-x-6">
              <li className="hover:text-gray-300"><a href="https://github.com/waiLeongChong" className="text-4xl"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li className="hover:text-gray-300"><a href="https://www.linkedin.com/in/wai-leong-chong/" className="text-4xl"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li className="hover:text-gray-300"><a href="mailto:waileongchong@pursuit.org" className="text-4xl"><FontAwesomeIcon icon={faAt} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
