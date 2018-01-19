var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster: 'https://samequizy.pl/wp-content/uploads/2016/08/filing_images_565e801dddd2.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'https://is4-ssl.mzstatic.com/image/thumb/Features/v4/cb/7c/6a/cb7c6a25-a729-7ccb-bb21-8d1b8dbcbaf7/V4HttpAssetRepositoryClient-ticket.flcpudpc.jpg-8848949572087304103.jpg/200x0w.jpg'
  },
  {
    id: 3,
    title: 'Star Wars',
    desc: 'Bitwy kosmiczne',
    poster: 'https://steamuserimages-a.akamaihd.net/ugc/295357100710536376/C5603591BB20BE43D50F5AEE3D3DE87C58248D91/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C200%3A200&composite-to=*,*%7C200%3A200&background-color=black'
  },
    {
    id: 4,
    title: 'Matrix',
    desc: 'Film o Neo',
    poster: 'https://qph.ec.quoracdn.net/main-thumb-t-431506-200-siuoiearxyskpcjwnraybqznaomvylhz.jpeg'
  },
    {
    id: 5,
    title: 'Ojciec Chrzestny',
    desc: 'Film o mafii',
    poster: 'http://rs570.pbsrc.com/albums/ss148/MegaSnoochy/godfather.jpg~c200'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement("img", {src: movie.poster},)
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
  );
ReactDOM.render(element, document.getElementById('app'));