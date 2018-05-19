import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5 class="comp-title">Our Story</h5>
          <h2>Cooking is the art of adjustment</h2>
          <p>
            Bacon ipsum dolor amet ground round pork loin shankle ham hock chicken turducken kevin cow spare ribs ham, jowl chuck tenderloin. Kevin biltong pancetta burgdoggen. Frankfurter ham fatback, pastrami t-bone drumstick doner pork chop jowl. Pork pork belly cupim venison salami, picanha sirloin pancetta turducken pork loin tenderloin shoulder cow kevin. Brisket pork loin landjaeger pork. Boudin ribeye fatback, hamburger rump frankfurter drumstick ham hock picanha. Porchetta venison buffalo short loin prosciutto hamburger tongue capicola meatloaf salami picanha.
          </p>
          <div class="quote">"The best food in the town of Huntington"- <strong>Thomas Eggsy</strong></div>
            <a href="#" class="reserve-btn">Reserve</a>
        </div>
        <div class="col-md-6">
          <div class="video-img">

          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
