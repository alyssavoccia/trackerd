import { useState } from 'react';
import trackerdLogo from '../assets/TrackerdLogo.png';
import heroImg from '../assets/undraw_progress_overview.svg';
import manageProjectsImg from '../assets/undraw_scrum_board.svg';
import progressImg from '../assets/undraw_progress.svg';
import invoiceImg from '../assets/undraw_printing_invoices.svg';

function LandingPage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header>
        <nav className="fixed w-full bg-white shadow-md py-6 lg:py-1">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center" aria-label="Home" role="img">
              <img className="cursor-pointer w-32" src={trackerdLogo} alt="logo" />
            </div>
            <div>
              <button onClick={() => setShow(!show)} className="sm:block md:hidden lg:hidden text-slate-500 hover:text-slate-700 focus:text-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                <img className="h-8 w-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg" alt="show" />
              </button>
              <div id="menu" className={`md:block lg:block ${show ? '' : 'hidden'}`}>
                <button onClick={() => setShow(!show)} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-6">
                  <img className="h-8 w-8" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg" alt="hide" />
                </button>
                <ul className="flex text-3xl md:text-base items-center py-6 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20">
                  <li className="text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <a href="#!">About</a>
                  </li>
                  <li className="text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <a href="#!">Features</a>
                  </li>
                  <li className="text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <a href="#!">Pricing</a>
                  </li>
                  <li className="text-purpleBlue-500 hover:text-purpleBlue-700 focus:text-purpleBlue-700 transition duration-150 ease-in-out cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <a href='#!'>Login</a>
                  </li>
                  <li className="text-white text-lg cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <a href='#!' className="bg-purpleBlue-500 hover:bg-purpleBlue-600 px-4 py-2 rounded transition duration-150 ease-in-out">Sign up for free</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className='pt-5 md:pt-20'>
        {/* HERO */}
        <section className="mb-16 md:mb-28">
          <div className="px-6 py-8 md:py-12 md:px-12 bg-athensGray text-gray-700 text-center lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="mt-12 lg:mt-0">
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Freelance tracking <br /><span className="text-purpleBlue-500">made easy</span></h1>
                  <a className="inline-block px-7 py-3 mr-2 bg-purpleBlue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purpleBlue-700 hover:shadow-lg focus:bg-purpleBlue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purpleBlue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                  <a className="inline-block px-7 py-3 bg-transparent text-purpleBlue-500 font-medium text-sm leading-snug uppercase rounded hover:text-purpleBlue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
                </div>
                <div className="mb-12 lg:mb-0">
                  <img src={heroImg} className="w-8/12 mx-auto md:w-full" alt="Drawing of progress overview" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section className="px-4 md:px-0 max-w-6xl mb-32 mx-auto text-gray-700">
          <div className="w-full text-center mx-auto lg:w-4/12 mb-6 md:mb-10 px-3">
            <p className="uppercase text-purpleBlue-500 font-bold mb-4">About</p>
            <h2 className="text-3xl font-bold mb-6">
              What makes us so<u className="text-purpleBlue-600"> unique?</u>
            </h2>
          </div>
          <div className="flex flex-wrap mb-12">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div className="overflow-hidden bg-no-repeat bg-cover">
                <img src={manageProjectsImg} className="w-9/12 mx-auto" alt="People organizing projects on board" />
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 className="text-2xl font-bold mb-4">Manage projects in one place</h3>
              <p className="text-gray-500 mb-6">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut
                vulputate est non quam dignissim elementum. Donec a ullamcorper diam.
              </p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum
                aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat
                blanditiis cumque dolore placeat rem dignissimos?
              </p>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-row-reverse mb-12">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
              <div className="overflow-hidden bg-no-repeat bg-cover">
                <img src={progressImg} className="w-9/12 mx-auto" alt="Printing invoices" />
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
              <h3 className="text-2xl font-bold mb-4">Track individual project progress</h3>
              <p className="text-gray-500">
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
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div className="overflow-hidden bg-no-repeat bg-cover">
                <img src={invoiceImg} className="w-9/12 mx-auto" alt="Printing invoices" />
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 className="text-2xl font-bold mb-4">Track time & generate invoices</h3>
              <p className="text-gray-500">
                Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean tincidunt vulputate
                libero, nec imperdiet sapien pulvinar id. Nullam scelerisque odio vel lacus faucibus,
                tincidunt feugiat augue ornare. Proin ac dui vel lectus eleifend vestibulum et
                lobortis risus. Nullam in commodo sapien. Curabitur ut erat congue sem finibus
                eleifend egestas eu metus. Sed ut dolor id magna rutrum ultrices ut eget libero. Duis
                vel porttitor odio. Ut pulvinar sed turpis ornare tincidunt. Donec luctus, mi euismod
                dignissim malesuada, lacus lorem commodo leo, tristique blandit ante mi id metus.
                Integer et vehicula leo, vitae interdum lectus. Praesent nulla purus, commodo at
                euismod nec, blandit ultrices erat.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default LandingPage;