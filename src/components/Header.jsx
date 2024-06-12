export default function Header() {
  return (
    <>
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* Logo */}
              <a
                className="flex flex-shrink-0 items-center mr-4"
                href="/index.html"
              >
                <span className="hidden md:block text-dark text-2xl font-bold ml-2">
                  iBitronics
                </span>
              </a>

              {/* Navigation */}
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <a
                    href="/index.html"
                    className="text-dark hover:text-primary px-3 py-2"
                  >
                    Home
                  </a>
                  <a
                    href="/jobs.html"
                    className="text-dark hover:text-primary px-3 py-2"
                  >
                    Products
                  </a>
                  <a
                    href="/add-job.html"
                    className="text-dark hover:text-primary px-3 py-2"
                  >
                    Add Products
                  </a>
                  <a
                    href="/add-job.html"
                    className="text-dark hover:text-primary px-3 py-2"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}