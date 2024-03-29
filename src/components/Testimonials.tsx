export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.stone.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-stone-600/10 ring-1 ring-stone-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3430&q=80" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gold-900 sm:text-2xl sm:leading-9">
            <p>
            "Decentralized FundMe has changed the way I engage with causes that matter to me. The transparency of the platform is unparalleled, which builds trust and inspires me to give more. As a campaign creator, I found the platform intuitive and user-friendly. It allowed me to share my story and connect with a global community of supporters. The security provided by smart contracts gave me peace of mind. it's a movement that empowers individuals to create change, and I'm proud to be a part of it."
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gold-900">Elijah Snoz</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gold-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gold-600">CEO of Xwurld</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
