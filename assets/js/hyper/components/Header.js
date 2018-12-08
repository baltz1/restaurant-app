import {h, app} from 'hyperapp'

export default function Header({state, actions}) {

// refactor this function
  var navButton= function() {
    var navAnchor = document.querySelectorAll('.topNav .link-container a');
    var nav = document.getElementsByClassName('topNav');

    if(nav.className === 'topNav'){
      nav.className += 'responsive';
      for (var i = 0; i < navAnchor.length; i++){
        navAnchor[i].classList.toggle("mobile-view");
      }

    }else{
      nav.className = 'topNav';
      for (var i = 0; i < navAnchor.length; i++) {
        navAnchor[i].classList.toggle("mobile-view");
      }

    }
  }

  return (
    <header class="header">
      <div class="container">
        <div class="logo">
          <a href="#">
            <i class="fa fa-fire fa-lg"></i>
          </a>
        </div>
        <nav class="topNav">
          <div class="link-container">
          <a href='javascript:;' onclick={navButton}  class="icon" >
            <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
          </a>
          <a class="none" href="#OurStory">Our Story</a>
          <a class="none" href="#Reviews">Reviews</a>
          <a class="none" href="#SpecialMenu">Special Menu</a>
          <a class="none" href="#ContactUs">Reservations</a>
          <a class="none" href="#Footer">Contact Us</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
