var companyInfo = {
  title: 'PRIME GRADE RESTAURANT',
  phone: '(213)346-6789',
  location: 'Los Angeles, California',
}

var specialMenuData = [
  {
    title: 'Super BBQ Grill No Smoke',
    description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',
    price: 25
  },
  {
    title: 'Elk Burger',
    description: 'Ground Elk, cheese, secret sauce,lettuce, tomatoe, onions, french fries',
    price: 15
  },
  {
    title: 'Chicken Fingers',
    description: '5 pieces pf chicken fingers, french fries, and a side of fruit or add extra french fries',
    price: 12
  },

]

var reviewsData = [
  {
    review: 'Bacon ipsum dolor amet burgdoggen porchetta brisket andouille shank pastrami. Kielbasa buffalo tongue, ground round short loin bacon boudin kevin venison spare ribs porchetta ribeye beef ribs sirloin strip steak. Meatloaf hamburger swine tongue, beef ribs andouille venison jerky. Meatball pancetta tri-tip pork belly meatloaf tail.',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of Ultimate Chief',
    highlight: 'Best restaurant in the L.A. area',
    company: 'The Food Network'
  },
  {
    review: 'Bacon ipsum dolor amet burgdoggen porchetta brisket andouille shank pastrami. Kielbasa buffalo tongue, ground round short loin bacon boudin kevin venison spare ribs porchetta ribeye beef ribs sirloin strip steak. Meatloaf hamburger swine tongue, beef ribs andouille venison jerky. Meatball pancetta tri-tip pork belly meatloaf tail.',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of Ultimate Chief',
    highlight: 'Best restaurant in the L.A. area',
    company: 'HBO'
  },
  {
    review: 'Bacon ipsum dolor amet burgdoggen porchetta brisket andouille shank pastrami. Kielbasa buffalo tongue, ground round short loin bacon boudin kevin venison spare ribs porchetta ribeye beef ribs sirloin strip steak. Meatloaf hamburger swine tongue, beef ribs andouille venison jerky. Meatball pancetta tri-tip pork belly meatloaf tail.',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of Ultimate Chief',
    highlight: 'Best restaurant in the L.A. area',
    company: 'CWB'
  },
  {
    review: 'Bacon ipsum dolor amet burgdoggen porchetta brisket andouille shank pastrami. Kielbasa buffalo tongue, ground round short loin bacon boudin kevin venison spare ribs porchetta ribeye beef ribs sirloin strip steak. Meatloaf hamburger swine tongue, beef ribs andouille venison jerky. Meatball pancetta tri-tip pork belly meatloaf tail.',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of Ultimate Chief',
    highlight: 'Best restaurant in the L.A. area',
    company: 'NBC'
  },
  {
    review: 'Bacon ipsum dolor amet burgdoggen porchetta brisket andouille shank pastrami. Kielbasa buffalo tongue, ground round short loin bacon boudin kevin venison spare ribs porchetta ribeye beef ribs sirloin strip steak. Meatloaf hamburger swine tongue, beef ribs andouille venison jerky. Meatball pancetta tri-tip pork belly meatloaf tail.',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of Ultimate Chief',
    highlight: 'Best restaurant in the L.A. area',
    company: 'The New York Times'
  }
]

var randomQuoteData = [
  {
    author:'Balt',
    quote: 'Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained'
  },
  {
    author:'Johny',
    quote: 'Best BBQ in the area'
  },
  {
    author:'Craig',
    quote: 'Completely different from any other place'
  },
]



export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0,
  }
}
