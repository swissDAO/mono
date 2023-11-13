import BackgroundGrid from '@/components/background-grid/background-grid';

const stats = [
  { label: 'Steadily growing', value: '15 Builders' },
  { label: 'Currently build by the swissDAO Community', value: '2 Startups' },
  { label: 'A consistent community', value: 'Every week' },
];
const values = [
  {
    name: 'Solana Business Card Compressed NFTs',
    description:
      'Learn how to build your own compressed NFTs from an in-browser generated image using Helius and their easy to use mintCompressedNft API.',
    url: '/tutorials/solana-business-card-cnfts',
  },
  {
    name: 'Solana Pay + Compressed NFTs',
    description:
      'Learn how to build your own compressed NFT collection and put them to use in a Storefront like scenario using Solana Pay.',
    url: '/tutorials/solana-pay-cnfts',
  },
];

export default function Tutorials() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <BackgroundGrid />
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Weekend Tutorials to get you started with Web3
                  </h1>
                  {/* <p className="relative mt-6 text-xl text-gray-600 leading-8 sm:max-w-md lg:max-w-none">
                    swissDAO is a community that brings together builders, entrepreneurs and creatives to learn, connect and build together in the exciting world of Web3. Based in Switzerland, the world’s financial center and enjoying a favorable jurisdiction for Web3 entrepreneurship, we are committed to fostering experimentation, risk-taking, and continuous learning while encouraging contributions to a sustainable and antifragile future for all.
                    </p> */}
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/images/about_1.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/images/about_4.jpeg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/images/about_3.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/images/about_2.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/images/about_5.jpeg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tutorial section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Tutorials
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our tutorials are designed to help you get started with Web3, all
              of the builds are open-sourced on our GitHub. If you want to
              contribute to our tutorials all you have to do is open a pull
              request. Once completed, make sure you tag us on Twitter so we can
              share your work with the community.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pb-32 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map(value => (
              <div key={value.name}>
                <a
                  href={value.url}
                  target="_blank"
                  className="text-gray-900 hover:text-gray-700"
                >
                  <dt className="font-semibold text-gray-900">{value.name}</dt>
                  <dd className="mt-1 text-gray-600">{value.description}</dd>
                </a>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  );
}
