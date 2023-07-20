import Movies from './components/Movies';

function App() {

  const movies = [
    {
      name: "Mean Girls",
      year: "2004",
      rating: "PG-13",
      image: "https://baylorlariat.com/wp-content/uploads/2019/02/mean-girls-.jpg"

    },
    {
      name: "She's the Man",
      year: "2006",
      rating: "PG-13",
      image: "https://resizing.flixster.com/J-kW6inZOXwb2xK2wy6KlsRM1_c=/206x305/v2/https://flxt.tmsimg.com/assets/p159836_p_v8_am.jpg"

    },
    {
      name: "The Princess Bride",
      year: "1987",
      rating: "PG",
      image: "https://i5.walmartimages.com/asr/98a0200c-8eed-4181-9f64-377c850a3510.747cdb2152568505822c23c3ddc93f0c.jpeg"

    },
    {
      name: "Legally Blonde",
      year: "2001",
      rating: "PG-13",
      image: "https://www.something.com/image.png"

    },
    {
      name: "Crazy Rich Asians",
      year: "2018",
      rating: "PG-13",
      image: "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_FMjpg_UX1000_.jpg"

    },
  ]


  return (
    <div className="App">

      <Movies movies={movies} />
    
    </div>
  );
}

export default App;
