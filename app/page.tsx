export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Browser Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Never lose checkout form data again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          CheckoutGuard silently monitors your checkout forms, auto-saves every
          keystroke to local storage, and instantly restores your data if the
          page crashes, times out, or you accidentally close the tab.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get CheckoutGuard — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">
          Works on Chrome, Edge &amp; Brave. Cancel anytime.
        </p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro</h2>
          <p className="text-[#8b949e] text-sm mb-4">Everything you need</p>
          <div className="text-5xl font-extrabold text-white mb-1">
            $9
            <span className="text-xl font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-xs mb-6">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Auto-save on every checkout page",
              "One-click form restoration",
              "Cross-device sync (cloud backup)",
              "Works with 500+ checkout platforms",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">
              How does CheckoutGuard protect my data?
            </h3>
            <p className="text-[#8b949e] text-sm">
              Our content script detects checkout forms and saves your input to
              encrypted local storage in real time. If anything goes wrong, a
              restore banner appears so you can refill the form in one click.
            </p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">
              Is my payment and personal data safe?
            </h3>
            <p className="text-[#8b949e] text-sm">
              Credit card fields are never saved — CheckoutGuard skips any input
              typed as a password or marked as a payment field. Only shipping
              and contact details are backed up.
            </p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">
              Which browsers and stores are supported?
            </h3>
            <p className="text-[#8b949e] text-sm">
              CheckoutGuard works on Chrome, Edge, and Brave and is compatible
              with Shopify, WooCommerce, Magento, BigCommerce, and hundreds of
              custom checkout pages out of the box.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} CheckoutGuard. All rights reserved.
      </footer>
    </main>
  );
}
