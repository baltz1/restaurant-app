import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <footer id="Footer">
      <div class="container">
        <nav class="menu">
          <a href="#OurStory">Our Story</a>
          <a href="#Reviews">Reviews</a>
          <a href="#SpecialMenu">Special Menu</a>
          <a href="#ContactUs">Reservations</a>
          <a href="#Footer">Contact Us</a>
        </nav>
        <ul class="social-media">
          <li>
            <a href="http://www.facebook.com" target="new">
              <i class="fa fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com" target="new">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="http://www.google.com" target="new">
              <i class="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a href="http://www.youtube.com" target="new">
              <i class="fa fa-youtube"></i>
            </a>
          </li>
        </ul>

        <div class="copyright">
          © 2018 Copyright
        </div>
      </div>
    </footer>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
