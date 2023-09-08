import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Create a Campaign',
    description: 'Click the "Create Campaign" button. Provide details about your cause, fundraising goal, and a compelling story that inspires potential donors. Customize your campaign with images and videos to create a compelling narrative. Set up your campaign\'s duration and choose a category that best fits your cause.' ,
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Make a Donation',
    description:
      'Browse through a diverse range of campaigns and find the one that resonates with you. Select the campaign you wish to support. Choose your preferred donation method, which can include cryptocurrency or traditional payment options. Enter the amount you want to contribute and complete the donation process securely.',
    icon: LockClosedIcon,
  },
  {
    name: 'Transparent Fund Tracking',
    description:
      'Every transaction is recorded on the blockchain, providing an immutable ledger of donations. Donors can access real-time updates on how their contributions are being utilized. Smart contracts ensure that funds are released to campaign creators only when predefined milestones are met, adding an extra layer of security.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Track Your Contributions',
    description:
      'Access a personalized dashboard that provides insights into your donation history. Receive updates from campaign creators, including progress reports and messages of gratitude. Join the vibrant Decentralized FundMe community to share experiences, stories, and insights with fellow donors and campaigners.',
    icon: FingerPrintIcon,
  },
]

export default function About() {
  return (
    <div className="bg-stone-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-stone-600">Decentralized Fast funding</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gold-900 sm:text-7xl">
            Everything you need about Fundit app
          </p>
          <p className="mt-6 text-lg leading-8 text-gold-600">
          Discover how easy it is to create campaigns, make donations, and track your contributions. Our step-by-step guide ensures that anyone can use Decentralized FundMe to support the causes they care about.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gold-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-stone-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gold-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
