import { } from 'react'
import './App.css'

function App() {
  return (
    <>
    <header className='text-gray-700 border-b border-gray-200'>
    <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
      <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
        <span className='text-xl ml-3'>OkuCode</span>
      </a>
      <nav className='md:ml-auto text-base'>
        <a href="#" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
        <a href="#About" className='mr-5 hover:text-blue-400 duration-300'>About</a>
        <a href="#Skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
        <a href="#Blog" className=' hover:text-blue-400 duration-300'>Blog</a>
      </nav>
    </div>
    </header>

    <section className='text-gray-700' id="home">
      <div className='flex container mx-auto py-20 flex-col md:flex-row items-center'>
        <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
          <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>こんにちは！
            <br />
            私は奥山と申します
            <br />
            Web Developer
          </h1>
          <p className='mb-8 leading-relaxed'>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Autem quas voluptate non repellendus
            voluptas fugit temporibus quod alias consequuntur porro?</p>
          <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact </button>
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="./img/icon2.jpg" alt="" />
        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>私について</h1>
          <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, esse
            laborum quam eaque earum aliquam recusandae rerum amet iste. Ut?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Tenetur error sint quaerat accusantium esse laudantium ad numquam in,
             magni, laboriosam optio itaque voluptatum,
             qui ipsam incidunt reprehenderit beatae neque aliquam tempore iusto?
              Voluptas provident sed itaque quos. Id quisquam autem, corrupti dolorem saepe, ea vel,
               delectus voluptates eaque vero ullam esse qui minima eos consequuntur dolore! Maxime
               quis nesciunt inventore non modi dolorem placeat, praesentium animi porro suscipit doloremque fuga itaque tempora nemo officiis ea aperiam, nihil, eum commodi atque ipsam voluptatum. Quaerat, obcaecati veniam. Eligendi mollitia facere amet distinctio deleniti hic corrupti fugit.
            Placeat assumenda quibusdam aut expedita nulla.</p>
        </div>

        {/* カードのdivタグ */}
        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit, amet consectetur        adipisicing elit.
                 Vitae quam assumenda consequatur mollitia debitis perferendis,
                   sapiente pariatur perspiciatis atque minus?</p>
                   <a href="#" className='flex mt-3 text-green-500'>もっと見る
                   <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"/>
                    </svg>
                    </a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit, amet consectetur        adipisicing elit.
                 Vitae quam assumenda consequatur mollitia debitis perferendis,
                   sapiente pariatur perspiciatis atque minus?</p>
                   <a href="#" className='flex mt-3 text-green-500'>もっと見る
                   <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"/>
                    </svg>
                    </a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit, amet consectetur        adipisicing elit.
                 Vitae quam assumenda consequatur mollitia debitis perferendis,
                   sapiente pariatur perspiciatis atque minus?</p>
                   <a href="#" className='flex mt-3 text-green-500'>もっと見る
                   <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"/>
                    </svg>
                    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t border-gray-200 '>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        {/* left side */}
        <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
          <img src="./img/pc.jpg" alt="" className='rounded '/>
        </div>
        {/* right side */}
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2 '>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
          <div className='w-full'>
            <h2>HTML</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "85%"}}>
                85%
              </div>
            </div>
            <h2>CSS</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "75%"}}>
                75%
              </div>
            </div>
            <h2>Javascript</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "50%"}}>
                50%
              </div>
            </div>
            <h2>PHP</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "10%"}}>
                10%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default App
