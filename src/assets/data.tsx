import { Donation } from '../../type'

type propsType = {
  donations: Donation[]
}

const data: propsType = {
  donations: [
    {
      id: '1',
      name: 'Old people daycare',
      description:
        'This crowdfunding campaign aims to support sustainable farming practices in rural communities around the world. Donations will go towards providing training, equipment, and resources to farmers who want to transition to more sustainable farming methods, helping to reduce the environmental impact of agriculture and improve the livelihoods of rural communities.',
      amount_raised: 5000,
      date: '12-01-2023',
      address: '0xC8D754CA203944A3A9820016B2C65C0D6CDB0E4A',
      imgUrls:
        'https://images.unsplash.com/photo-1674574124567-79b2ee3d22fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '2',
      name: 'Promoting Renewable Energy:',
      description:
        'Climate change is one of the biggest challenges facing the world today, and renewable energy is a critical part of the solution. This crowdfunding campaign aims to promote the use of renewable energy, including solar, wind, and hydro power. Donations will be used to support the development and implementation of renewable energy projects, helping to reduce greenhouse gas emissions and mitigate the impacts of climate change.',
      amount_raised: 400,
      date: '12-01-2022',
      address: '0x2DAC36E20D6B80B6CE082E06451FDED39F3691D0',
      imgUrls:
        'https://images.unsplash.com/photo-1521369483739-e33ef611d7e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    },
    {
      id: '3',
      name: 'Preserving Endangered Species',
      description:
        'Many species of animals are at risk of extinction due to habitat loss, climate change, and other factors. This crowdfunding campaign aims to support efforts to preserve endangered species and their habitats. Donations will be used to support conservation efforts, protect habitats, and develop sustainable solutions for coexisting with endangered species',
      amount_raised: 250,
      date: '12-01-2021',
      address: '0x3D72F179BFDFBE957F995A2DA50BD57CEF86815E',
      imgUrls:
        'https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '4',
      name: 'Supporting Mental Health Research',
      description:
        'Mental health is a growing concern around the world, but funding for mental health research is often limited. This crowdfunding campaign aims to support research into mental health conditions, including depression, anxiety, and schizophrenia. Donations will go towards funding research projects, hiring researchers, and developing new treatments and therapies for mental health conditions.',
      amount_raised: 300,
      date: '12-01-2022',
      address: '0x8BB2559A21204F9B1305825C57AB3E4D498C7FAA',
      imgUrls:
        'https://plus.unsplash.com/premium_photo-1661777642269-4fb440ddd0dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '5',
      name: 'Mandellas kids',
      description:
        'Education is critical for breaking the cycle of poverty, but many children around the world lack access to quality education. This crowdfunding campaign aims to provide education and support to underprivileged children in developing countries. Donations will be used to build schools, provide educational materials, and support teachers in delivering high-quality education to children in need.',
      amount_raised: 100,
      date: '12-01-2022',
      address: '0xC8D754CA203944A3A9820016B2C65C0D6CDB0E4A',
      imgUrls:
        'https://images.unsplash.com/photo-1674574124567-79b2ee3d22fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '6',
      name: 'Feed africa',
      description:
        ' Millions of people around the world lack access to clean water, which can lead to illness and even death. This crowdfunding campaign aims to build clean water wells in communities that lack access to safe drinking water. Donations will be used to purchase and install wells, providing a sustainable source of clean water for years to come',
      amount_raised: 500,
      date: '12-01-2022',
      address: '0x765F8E63CF490144811F215E1E79FF1F5F890820',
      imgUrls:
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ],
}

export default data
