var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    src: 'https://samequizy.pl/wp-content/uploads/2016/08/filing_images_565e801dddd2.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: 'https://is4-ssl.mzstatic.com/image/thumb/Features/v4/cb/7c/6a/cb7c6a25-a729-7ccb-bb21-8d1b8dbcbaf7/V4HttpAssetRepositoryClient-ticket.flcpudpc.jpg-8848949572087304103.jpg/200x0w.jpg'
  },
  {
    id: 3,
    title: 'Star Wars',
    desc: 'Bitwy kosmiczne',
    src: 'https://steamuserimages-a.akamaihd.net/ugc/295357100710536376/C5603591BB20BE43D50F5AEE3D3DE87C58248D91/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C200%3A200&composite-to=*,*%7C200%3A200&background-color=black'
  },
    {
    id: 4,
    title: 'Matrix',
    desc: 'Film o Neo',
    src: 'https://qph.ec.quoracdn.net/main-thumb-t-431506-200-siuoiearxyskpcjwnraybqznaomvylhz.jpeg'
  },
    {
    id: 5,
    title: 'Ojciec Chrzestny',
    desc: 'Film o mafii',
    src: 'http://rs570.pbsrc.com/albums/ss148/MegaSnoochy/godfather.jpg~c200'
  }
];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function() {
    return (React.createElement('li', {key: this.props.movie.id},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc}),
        React.createElement(MovieSource, {src: this.props.movie.src}),
      )
    )
  }
});


var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
});


var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});


var MovieSource = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('img', {src:this.props.src})
    )
  }
});


var MovieElements = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
          this.props.movies.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, movie: movie});
          })
        )
      )
    )
  }
});





var elements = React.createElement(MovieElements, {movies: movies});
ReactDOM.render(elements, document.getElementById('app'));