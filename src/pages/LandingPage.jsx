import TrackerdLogo from '../assets/TrackerdLogo.png';
import heroImg from '../assets/undraw_progress_overview.svg';

function LandingPage() {
  return (
    <>
      <section className="mb-40">
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <button className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentY" aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                </svg>
              </button>
              <a className="navbar-brand" href="#!">
                <img src={TrackerdLogo} alt='Trackerd Logo' className='w-32' />
              </a>
            </div>
            <div className="flex items-center lg:ml-auto">
              <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
              <li className="nav-item">
                  <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Pricing</a>
                </li>
              </ul>
              <button type="button" className="inline-block px-6 py-2.5 mr-2 bg-transparent text-purpleBlue-500 font-medium text-xs leading-tight uppercase rounded hover:text-purpleBlue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
              <button type="button" className="inline-block px-6 py-2.5 bg-purpleBlue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purpleBlue-700 hover:shadow-lg focus:bg-purpleBlue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purpleBlue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up for free</button>
            </div>
          </div>
        </nav>
        <div className="px-6 py-12 md:px-12 bg-athensGray text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Freelance tracking <br /><span className="text-purpleBlue-500">made easy</span></h1>
                <a className="inline-block px-7 py-3 mr-2 bg-purpleBlue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purpleBlue-700 hover:shadow-lg focus:bg-purpleBlue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purpleBlue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                <a className="inline-block px-7 py-3 bg-transparent text-purpleBlue-500 font-medium text-sm leading-snug uppercase rounded hover:text-purpleBlue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
              </div>
              <div className="mb-12 lg:mb-0">
                <img src={heroImg} className="w-full" alt="Drawing of progress overview" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage;