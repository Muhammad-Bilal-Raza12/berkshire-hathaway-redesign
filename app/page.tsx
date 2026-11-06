import Image from "next/image";

export default function Home() {
  const cardStyle =
    "min-w-0 rounded-xl border border-slate-200 bg-white p-5";

  const buttonStyle =
    "mt-5 inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg border border-blue-900 px-4 py-2 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900";

  const navStyle =
    "inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-md px-1 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 sm:px-3";
  return (
    <div className="w-full min-w-0 bg-white text-slate-900">
      <header className="border-b border-slate-200 px-4 py-4 sm:px-6 md:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
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
            className="flex w-full flex-nowrap items-center justify-between gap-1 overflow-x-auto lg:w-auto lg:gap-3"
          >
            <a href="#reports" className={navStyle}>
              Reports
            </a>

            <a href="#shareholders" className={navStyle}>
              Shareholders
            </a>

            <a href="#company" className={navStyle}>
              Company
            </a>

            <a href="#news" className={navStyle}>
              News
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b-4 border-amber-300 bg-blue-950 px-4 py-8 sm:px-6 md:px-10 md:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xs overflow-hidden rounded-xl lg:order-2 lg:max-w-none">
              <Image
                src="/berkshire-logo.png"
                alt="Berkshire Hathaway — Reports, Shareholders and Businesses"
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 50vw, (min-width: 352px) 320px, calc(100vw - 32px)"
                priority
                className="h-auto w-full"
              />
            </div>

            <div className="min-w-0 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-200">
                Berkshire Hathaway Inc.
              </p>

              <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
                Reports, letters &amp;
                <br />
                company information.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100 md:text-lg">
                Access financial reports, shareholder communications,
                and information about Berkshire’s businesses.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#reports"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-amber-200 px-5 py-3 font-semibold text-blue-950 transition-colors hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
                >
                  Explore reports
                </a>

                <a
                  href="#shareholders"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-blue-400 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Shareholder resources
                </a>
              </div>
            </div>

            <aside className="rounded-xl border border-blue-700 bg-blue-900 p-5 lg:order-3 lg:col-span-2 md:p-6">
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
                className="mt-4 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-md px-3 py-2 font-semibold text-amber-200 transition-colors hover:bg-blue-800 hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
              >
                Read the message
                <span aria-hidden="true">→</span>
              </button>
            </aside>
          </div>
        </section>

        <aside
          aria-labelledby="notice-heading"
          className="border-b border-amber-200 bg-amber-50 px-4 py-5 sm:px-6 md:px-10"
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
              className="inline-flex min-h-11 cursor-pointer items-center rounded-md px-3 py-2 text-sm font-semibold text-amber-950 underline underline-offset-4 transition-colors hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-900"
            >
              Read notice (PDF)
            </button>
          </div>
        </aside>

        <section
          id="reports"
          aria-labelledby="reports-heading"
          className="scroll-mt-4 px-4 py-10 sm:px-6 md:px-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Financial information
          </p>

          <h2
            id="reports-heading"
            className="mt-2 text-2xl font-bold text-blue-950"
          >
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

        <section
          id="shareholders"
          aria-labelledby="shareholders-heading"
          className="scroll-mt-4 border-y border-slate-200 bg-slate-50 px-4 py-10 sm:px-6 md:px-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Shareholder communications
          </p>

          <h2
            id="shareholders-heading"
            className="mt-2 text-2xl font-bold text-blue-950"
          >
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

        <section
          id="news"
          aria-labelledby="news-heading"
          className="scroll-mt-4 px-4 py-10 sm:px-6 md:px-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Updates &amp; events
          </p>

          <h2
            id="news-heading"
            className="mt-2 text-2xl font-bold text-blue-950"
          >
            News and shareholder meetings
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="min-w-0 rounded-xl border border-blue-200 bg-blue-50 p-6">
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

            <article className="min-w-0 rounded-xl border border-amber-200 bg-amber-50 p-6">
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

        <section
          id="company"
          aria-labelledby="company-heading"
          className="scroll-mt-4 border-y border-slate-200 bg-slate-50 px-4 py-10 sm:px-6 md:px-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            About Berkshire
          </p>

          <h2
            id="company-heading"
            className="mt-2 text-2xl font-bold text-blue-950"
          >
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
          className="px-4 py-8 sm:px-6 md:px-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-xl border border-blue-200 bg-blue-50 p-6">
            <div className="min-w-0 max-w-xl">
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
              className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg bg-blue-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900"
            >
              Explore GEICO
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 px-4 py-8 text-white sm:px-6 md:px-10">
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
            <h2 className="font-semibold">
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
            className="inline-flex min-h-11 cursor-pointer items-center rounded-md px-3 py-2 text-sm text-blue-100 transition-colors hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Legal information
          </button>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-blue-200">
          Unofficial UI redesign with a custom logo concept.
          Section navigation works; other buttons are visual placeholders.
        </p>
      </footer>
    </div>
  );
}