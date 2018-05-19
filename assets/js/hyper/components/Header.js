import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header class="header">
      <div class="container">
        <div class="logo">
          Logos
        </div>
        <nav>
        <a href="#">Our Story</a>
        <a href="#">Reviews</a>
        <a href="#">Special Menu</a>
        <a href="#">Reservations</a>
        <a href="#">Contact Us</a>
        </nav>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
