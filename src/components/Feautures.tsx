import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Transparent Fund Tracking.',
    description:
      'With our blockchain-powered system, every donation is tracked in real-time. Users can view exactly how their contributions are utilized and trace the journey of funds from donor to recipient. This level of transparency builds trust and ensures donors\' peace of mind.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Decentralized Smart Contracts.',
    description: 'Our platform employs smart contracts on the blockchain to automate and secure the crowdfunding process. These self-executing contracts ensure that funds are released to campaigns only when predefined criteria are met. It eliminates the need for intermediaries, making donations secure and tamper-proof.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Navigating our platform is a breeze. Our user-friendly interface makes it simple for users to create campaigns, make donations, and track their contributions. Whether you\'re tech-savvy or new to blockchain, our platform welcomes all users with an intuitive experience.',
    icon: ServerIcon,
  },
]

export default function Feature() {
  return (
    <div className="overflow-hidden bg-stone-300 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-stone-600">Features</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gold-900 sm:text-4xl"> Decentralized Smart Contracts</p>
              <p className="mt-6 text-lg leading-8 text-gold-600">
              {/* The inspiration behind Decentralized FundMe can be traced back to a pivotal moment in my life. A few years ago, I came across a news story that shook me to my core. It was about a small community devastated by a natural disaster. Homes were destroyed, livelihoods lost, and families were struggling to recover. */}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gold-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gold-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-stone-700" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1574607383172-1421479aec9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3348&q=80"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gold-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
          {/* <p>As I read about their plight, I felt a deep desire to help, but I quickly realized the limitations of traditional fundraising methods. The existing systems were marred by inefficiencies, lack of transparency, and substantial fees that often left well-intentioned donations falling short of their intended impact.
              </p> */}
        </div>
      </div>
    </div>
  )
}
