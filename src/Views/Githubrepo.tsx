import githubrepo from "../assets/githubrepo.png";

function Githubrepo() {
  return (
    <div className="container mx-auto sm:px-8 py-16 lg:px-16">
      <div className="relative isolate overflow-hidden bg-gray-900/50 ring-2 ring-gray-800/60 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute  -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#75c6d6" />
              <stop offset={1} stopColor="#35a3e9" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto  max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Visit our github repo
          </h2>
          <p className="mt-6 text-lg/8 text-pretty text-gray-300">
            Explore the full source code, track development progress on GitHub.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="https://github.com/Aliduman02/Cellenta"
              target="_blank"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Visit github
            </a>
            <a
              href="#architecture"
              className="text-sm/6 font-semibold text-white hover:text-gray-100"
            >
              Explore more
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-48 left-96 z-10 blur-3xl "
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1155/678 w-400 bg-linear-to-tr from-[#80c6ff] to-[#80c6ff] opacity-100 "
          />
        </div>
        <div className="relative mt-16 h-80 lg:mt-8 ">
          <img
            alt="App screenshot"
            src={githubrepo}
            width={1824}
            height={1080}
            className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10 opacity-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Githubrepo;
