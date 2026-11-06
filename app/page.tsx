"use client";
export default function Home() {
  const cardStyle =
  "rounded-xl border border-slate-200 bg-white p-5 transition-colors duration-200 hover:border-blue-400 hover:bg-blue-50";

const buttonStyle =
  "mt-5 cursor-pointer rounded-lg border border-blue-900 px-4 py-2 text-sm font-semibold text-blue-900 transition-colors duration-200 hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900";

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <header className="border-b border-slate-200 bg-white px-6 py-5 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-xl font-bold tracking-tight text-blue-950 md:text-2xl">
              Berkshire Hathaway
              <span className="text-amber-600">.</span>
            </p>

            <p className="mt-1 text-xs tracking-widest text-slate-500">
              COMPANY &amp; SHAREHOLDER RESOURCES
            </p>
          </div>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap gap-5 text-sm font-medium text-slate-600"
          >
            <button
              type="button"
              onClick={() => scrollToSection("reports")}
              className="cursor-pointer hover:text-blue-900"
            >
              Reports
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("shareholders")}
              className="cursor-pointer hover:text-blue-900"
            >
              Shareholders
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("company")}
              className="cursor-pointer hover:text-blue-900"
            >
              Company
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("news")}
              className="cursor-pointer hover:text-blue-900"
            >
              News
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b-4 border-amber-300 bg-blue-950 px-6 py-10 md:px-10 md:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-200">
                Berkshire Hathaway Inc.
              </p>

              <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                A clearer view
                <br />
                of Berkshire.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100 md:text-lg">
                Financial information, shareholder communications,
                and company resources, brought together in one place.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="cursor-pointer rounded-lg bg-amber-200 px-5 py-3 font-semibold text-blue-950 transition-colors hover:bg-amber-300"
                >
                  Explore reports
                </button>

                <button
                  type="button"
                  className="cursor-pointer rounded-lg border border-blue-700 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-900"
                >
                  Shareholder resources
                </button>
              </div>
            </div>

            <aside className="rounded-xl border border-blue-700 bg-blue-900 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-200">
                Featured message
              </p>

              <h2 className="mt-3 text-xl font-semibold text-white">
                From Warren E. Buffett
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-blue-100">
                Read Warren Buffett’s message to visitors of the
                Berkshire Hathaway website.
              </p>

              <button
                type="button"
                className="mt-5 cursor-pointer font-semibold text-amber-200 hover:underline"
              >
                Read the message <span aria-hidden="true">→</span>
              </button>
            </aside>
          </div>
        </section>

        <aside
          aria-labelledby="notice-heading"
          className="border-b border-amber-200 bg-amber-50 px-6 py-5 md:px-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="max-w-2xl">
              <h2
                id="notice-heading"
                className="font-semibold text-amber-950"
              >
                Notice about false endorsements
              </h2>

              <p className="mt-1 text-sm leading-relaxed text-amber-900">
                Information about misleading claims linking Warren Buffett
                to investment products or political candidates.
              </p>
            </div>

            <button
              type="button"
              className="cursor-pointer text-sm font-semibold text-amber-950 underline underline-offset-4"
            >
              Read notice (PDF)
            </button>
          </div>
        </aside>

        <section id="reports" className="px-6 py-10 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Financial information
          </p>

          <h2 className="mt-2 text-2xl font-bold text-blue-950">
            Reports &amp; investor resources
          </h2>

          <p className="mt-3 text-slate-600">
            Find financial documents, regulatory filings, and stock details.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <article className={cardStyle}>
              <span className="inline-block rounded bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900">
                Reports
              </span>

              <h3 className="mt-4 text-lg font-semibold text-blue-950">
                Annual and interim results
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Access Berkshire Hathaway’s financial reporting archive.
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Updated August 8, 2026
              </p>

              <button type="button" className={buttonStyle}>
                Browse reports
              </button>
            </article>

            <article className={cardStyle}>
              <span className="inline-block rounded bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                Regulatory
              </span>

              <h3 className="mt-4 text-lg font-semibold text-blue-950">
                SEC filings
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Find documents filed with the U.S. Securities and
                Exchange Commission.
              </p>

              <button type="button" className={buttonStyle}>
                View filings
              </button>
            </article>

            <article className={cardStyle}>
              <span className="inline-block rounded bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
                Shares
              </span>

              <h3 className="mt-4 text-lg font-semibold text-blue-950">
                Common stock details
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Find information relating to Berkshire Hathaway’s
                common stock.
              </p>

              <button type="button" className={buttonStyle}>
                View stock details
              </button>
            </article>

            <article className={cardStyle}>
              <span className="inline-block rounded bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900">
                Energy
              </span>

              <h3 className="mt-4 text-lg font-semibold text-blue-950">
                Berkshire Hathaway Energy
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Explore presentations prepared for energy investors.
              </p>

              <button type="button" className={buttonStyle}>
                Browse presentations
              </button>
            </article>
          </div>
        </section>

        <section id="shareholders" className="border-y border-slate-200 bg-slate-50 px-6 py-10 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Shareholder communications
          </p>

          <h2 className="mt-2 text-2xl font-bold text-blue-950">
            Letters &amp; perspectives
          </h2>

          <p className="mt-3 text-slate-600">
            Explore correspondence from Berkshire and Wesco leadership.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <article className={cardStyle}>
              <h3 className="text-lg font-semibold text-blue-950">
                Letters by Warren Buffett
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Browse his correspondence with Berkshire shareholders.
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Updated February 22, 2025
              </p>

              <button type="button" className={buttonStyle}>
                Read letters
              </button>
            </article>

            <article className={cardStyle}>
              <h3 className="text-lg font-semibold text-blue-950">
                Letters by Greg Abel
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Explore his communications to Berkshire shareholders.
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Updated February 28, 2026
              </p>

              <button type="button" className={buttonStyle}>
                Read letters
              </button>
            </article>

            <article className={cardStyle}>
              <h3 className="text-lg font-semibold text-blue-950">
                Warren &amp; Charlie: special letters
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Reflections on Berkshire’s history and its future.
              </p>

              <button type="button" className={buttonStyle}>
                Explore special letters
              </button>
            </article>

            <article className={cardStyle}>
              <h3 className="text-lg font-semibold text-blue-950">
                Charlie Munger’s Wesco archive
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Read his letters addressed to Wesco shareholders.
              </p>

              <button type="button" className={buttonStyle}>
                Browse the archive
              </button>
            </article>
          </div>
        </section>

        <section id="news" className="px-6 py-10 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Updates &amp; events
          </p>

          <h2 className="mt-2 text-2xl font-bold text-blue-950">
            News and shareholder meetings
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-lg font-semibold text-blue-950">
                Berkshire &amp; Buffett announcements
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Browse company announcements and releases from
                Warren Buffett.
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Updated November 4, 2026
              </p>

              <button type="button" className={buttonStyle}>
                Browse news
              </button>
            </article>

            <article className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-semibold text-blue-950">
                Annual shareholder gathering
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Find details about Berkshire Hathaway’s annual meeting.
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Updated April 20, 2026
              </p>

              <button type="button" className={buttonStyle}>
                View meeting details
              </button>
            </article>
          </div>
        </section>

        <section id="company" className="border-y border-slate-200 bg-slate-50 px-6 py-10 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            About Berkshire
          </p>

          <h2 className="mt-2 text-2xl font-bold text-blue-950">
            Businesses &amp; responsibilities
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <article className={cardStyle}>
              <h3 className="text-lg font-semibold text-blue-950">
                Operating businesses
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Discover companies within the Berkshire Hathaway group.
              </p>

              <button type="button" className={buttonStyle}>
                Explore companies
              </button>
            </article>

            <article className={cardStyle}>
              <h3 className="text-lg font-semibold text-blue-950">
                Governance &amp; policies
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Access resources about how the company is governed.
              </p>

              <button type="button" className={buttonStyle}>
                View governance
              </button>
            </article>

            <article className={cardStyle}>
              <h3 className="text-lg font-semibold text-blue-950">
                Sustainability resources
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Explore sustainability information across Berkshire.
              </p>

              <button type="button" className={buttonStyle}>
                Learn more
              </button>
            </article>
          </div>
        </section>

        <section
          aria-labelledby="geico-heading"
          className="px-6 py-8 md:px-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-xl border border-blue-200 bg-blue-50 p-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Subsidiary spotlight
              </p>

              <h2
                id="geico-heading"
                className="mt-2 text-3xl font-extrabold text-blue-900"
              >
                GEICO
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Request a free car insurance quote and find out whether
                you could save.
              </p>

              <p className="mt-2 text-sm font-medium text-blue-950">
                www.geico.com · 1-888-395-6349
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Phone service available 24 hours a day.
              </p>
            </div>

            <button
              type="button"
              className="cursor-pointer rounded-lg bg-blue-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
            >
              Explore GEICO
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 px-6 py-8 text-white md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xl font-bold">
              Berkshire Hathaway Inc.
            </p>

            <address className="mt-3 text-sm not-italic leading-relaxed text-blue-100">
              3555 Farnam Street
              <br />
              Omaha, NE 68131
            </address>
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Website correspondence
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-blue-100">
              Website comments may be mailed to the company address.
              Limited office staffing means individual replies are
              not available.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-blue-800 pt-5">
          <p className="text-sm text-blue-100">
            © 1977–2026 Berkshire Hathaway Inc.
          </p>

          <button
            type="button"
            className="cursor-pointer text-sm text-blue-100 hover:text-white hover:underline"
          >
            Legal information
          </button>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-blue-200">
          Unofficial UI redesign. Buttons are visual placeholders.
        </p>
      </footer>
    </>
  );
}
