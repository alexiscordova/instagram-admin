import React from 'react';

// Component Styles
import './style.scss';

class GlobalFooter extends React.Component {
  render() {
    return (
      <footer className="global-footer">
        <div className="wrapper">
          <nav>
            <ul role="navigation">
              <li>
                <a href="/about/us/">About us</a>
              </li>
              <li>
                <a href="https://help.instagram.com/">Support</a>
              </li>
              <li>
                <a href="http://blog.instagram.com/">Blog</a>
              </li>
              <li>
                <a href="/press/">Press</a>
              </li>
              <li>
                <a href="/developer/">API</a>
              </li>
              <li>
                <a href="/about/jobs/">Jobs</a>
              </li>
              <li>
                <a href="/legal/privacy/">Privacy</a>
              </li>
              <li>
                <a href="/legal/terms/">Terms</a>
              </li>
              <li>
                <a href="/about/directory/">Directory</a>
              </li>
              <li>
                <a href="#">Language</a>
              </li>
              {/*<li>
                <span>
                  <select>
                    <option value="af">Afrikaans</option>
                    <option value="cs">Czech</option>
                    <option value="da">Danish</option>
                    <option value="de">German</option>
                    <option value="el">Greek</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fi">Finnish</option>
                    <option value="fr">French</option>
                    <option value="hi">Hindi</option>
                    <option value="id">Indonesian</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                    <option value="ko">Korean</option>
                    <option value="ms">Malay</option>
                    <option value="nb">Norwegian</option>
                    <option value="nl">Dutch</option>
                    <option value="pl">Polish</option>
                    <option value="pt">Portuguese (Portugal)</option>
                    <option value="pt-br">Portuguese</option>
                    <option value="ru">Russian</option>
                    <option value="sv">Swedish</option>
                    <option value="th">Thai</option>
                    <option value="tl">Tagalog/Filipino</option>
                    <option value="tr">Turkish</option>
                    <option value="zh-cn">Chinese (Simplified)</option>
                    <option value="zh-tw">Chinese (Traditional)</option>
                  </select>
                </span>
              </li>*/}
            </ul>
          </nav>
          <span className="copyright">© 2017 Instagram</span>
        </div>
      </footer>
    )
  }
};

export default GlobalFooter;
