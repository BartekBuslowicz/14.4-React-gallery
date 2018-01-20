var movies = 
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    src: 'https://i.pinimg.com/564x/8f/f6/0f/8ff60f020b18bd5468193fbffebcb33c.jpg'
  };  


var Movie = React.createClass({
    propTypes: {
    movies: React.PropTypes.object.isRequired,
  },
      render: function(){
          return (
          React.createElement('div', {},
          React.createElement('h2', {}, this.props.movies.id),
          React.createElement('h2', {}, this.props.movies.title),
          React.createElement('p', {}, this.props.movies.desc),
          React.createElement('img', { src: this.props.movies.src })
                )
        );
      }
  });

var element = React.createElement(Movie, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));