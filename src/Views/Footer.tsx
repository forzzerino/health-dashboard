function Footer() {
  return (
    <div className="glass isolate overflow-hidden bg-gray-900/20 border-t mt-10 ">
      <style>{`
        .glass:where(.dark, .dark *) {
          backdrop-filter: blur(2px) !important;
        }
      `}</style>
      <div className="flex justify-evenly tracking-tight py-6 text-gray-400">
        <span>&copy; 2025 Cellenta.</span>
        <div className="flex items-center align-middle justify-center">
          {" "}
          <a href="https://github.com/forzzerino" target="_blank">
            made by this guy: 🙋🏻‍♂️
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-cyan-600/20 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-cyan-600/20 blur-3xl"></div>
      </div>
    </div>
  );
}

export default Footer;
