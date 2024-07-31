const AboutUs = () => {
  return (
    <main className="p-16 max-md:p-8 flex flex-col gap-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center">iBitronics</h1>

      <p className="text-center text-xl">
        Final project for Web Technology II. A online electronics shop for Apple
        products.
      </p>

      <section>
        <h2 className="text-2xl font-semibold">Team Members</h2>
        <ul className="pl-8 list-disc">
          <li>BIT 482/078 - Ashmin Bhujel</li>
          <li>BIT 492/078 - Nikhil Khanal</li>
          <li>BIT 500/078 - Roman Kutuwo</li>
          <li>BIT 506/078 - Sanwor Prasad Rajbhandari</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Technologies used</h2>
        <ul className="pl-8 list-disc">
          <li>
            <h3 className="text-lg font-semibold">Front-End</h3>
            <ul className="pl-8 list-disc">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Tailwind CSS</li>
            </ul>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Back-End</h3>
            <ul className="pl-8 list-disc">
              <li>Apache Web Server</li>
              <li>ExpressJS</li>
              <li>MySQL 8</li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default AboutUs;
