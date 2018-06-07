import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header class="header">
      <div class="container">
        <div class="logo">
          <a href="#">
            <i class="fa fa-fire fa-lg"></i>
          </a>
        </div>
        <nav>
        <a href="#OurStory">Our Story</a>
        <a href="#Reviews">Reviews</a>
        <a href="#SpecialMenu">Special Menu</a>
        <a href="#ContactUs">Reservations</a>
        <a href="#Footer">Contact Us</a>
        </nav>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
