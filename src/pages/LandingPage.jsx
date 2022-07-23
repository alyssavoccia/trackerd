import TrackerdLogo from '../assets/TrackerdLogo.png';
import heroImg from '../assets/undraw_progress_overview.svg';
import manageProjectsImg from '../assets/undraw_scrum_board.svg';
import progressImg from '../assets/undraw_progress.svg';
import invoiceImg from '../assets/undraw_printing_invoices.svg';

function LandingPage() {
  return (
    <>
      <header>
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
      </header>
      <main>
        {/* HERO */}
        <section className="mb-32">
          <div className="px-6 py-12 md:px-12 bg-athensGray text-gray-700 text-center lg:text-left">
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
        {/* ABOUT */}
        <section className="max-w-6xl mb-32 mx-auto text-gray-700">
          <div className="w-full text-center mx-auto lg:w-4/12 mb-6 md:mb-10 px-3">
            <p className="uppercase text-purpleBlue-500 font-bold mb-4">About</p>
            <h2 className="text-3xl font-bold mb-6">
              What makes us so<u className="text-purpleBlue-600"> unique?</u>
            </h2>
          </div>
          <div class="flex flex-wrap mb-12">
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div class="overflow-hidden bg-no-repeat bg-cover">
                <img src={manageProjectsImg} class="w-9/12 mx-auto" alt="People organizing projects on board" />
              </div>
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 class="text-2xl font-bold mb-4">Manage projects in one place</h3>
              <p class="text-gray-500 mb-6">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut
                vulputate est non quam dignissim elementum. Donec a ullamcorper diam.
              </p>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum
                aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat
                blanditiis cumque dolore placeat rem dignissimos?
              </p>
            </div>
          </div>
          <div class="flex flex-wrap lg:flex-row-reverse mb-12">
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
              <div class="overflow-hidden bg-no-repeat bg-cover">
                <img src={progressImg} class="w-9/12 mx-auto" alt="Printing invoices" />
              </div>
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
              <h3 class="text-2xl font-bold mb-4">Track individual project progress</h3>
              <p class="text-gray-500">
                Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum
                enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc ligula felis,
                sagittis eget nisi vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus vel
                sagittis nec, placerat vel justo. Duis faucibus sapien eget tortor finibus, a eleifend
                lectus dictum. Cras tempor convallis magna id rhoncus. Suspendisse potenti. Nam mattis
                faucibus imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus at ex
                volutpat, varius arcu id, aliquam lectus. Vestibulum mattis felis quis ex pharetra
                luctus. Etiam luctus sagittis massa, sed iaculis est vehicula ut.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div class="overflow-hidden bg-no-repeat bg-cover">
                <img src={invoiceImg} class="w-9/12" alt="Printing invoices" />
              </div>
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 class="text-2xl font-bold mb-4">Track time & generate invoices</h3>
              <p class="text-gray-500">
                Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean tincidunt vulputate
                libero, nec imperdiet sapien pulvinar id. Nullam scelerisque odio vel lacus faucibus,
                tincidunt feugiat augue ornare. Proin ac dui vel lectus eleifend vestibulum et
                lobortis risus. Nullam in commodo sapien. Curabitur ut erat congue sem finibus
                eleifend egestas eu metus. Sed ut dolor id magna rutrum ultrices ut eget libero. Duis
                vel porttitor odio. Ut pulvinar sed turpis ornare tincidunt. Donec luctus, mi euismod
                dignissim malesuada, lacus lorem commodo leo, tristique blandit ante mi id metus.
                Integer et vehicula leo, vitae interdum lectus. Praesent nulla purus, commodo at
                euismod nec, blandit ultrices erat. Aliquam eros ipsum, interdum et mattis vitae,
                faucibus vitae justo. Nulla condimentum hendrerit leo, in feugiat ipsum condimentum
                ac. Maecenas sed blandit dolor.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default LandingPage;