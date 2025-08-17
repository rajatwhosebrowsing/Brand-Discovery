// Mock brand data to simulate API responses
const MOCK_BRANDS = [
  {
    id: 1,
    name: 'Apple',
    tagline: 'Think different. Innovation at its finest.',
    description: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services. Known for revolutionary products like iPhone, iPad, and Mac.',
    industry: 'Technology',
    founded: '1976',
    headquarters: 'Cupertino, California',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png',
  },
  {
    id: 2,
    name: 'Nike',
    tagline: 'Just Do It. Unleash your potential.',
    description: 'Nike, Inc. is an American multinational corporation that designs, develops, manufactures, and markets footwear, apparel, equipment, accessories, and services worldwide.',
    industry: 'Sportswear',
    founded: '1964',
    headquarters: 'Beaverton, Oregon',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png',
  },
  {
    id: 3,
    name: 'Tesla',
    tagline: 'Accelerating sustainable transport.',
    description: 'Tesla, Inc. is an American electric vehicle and clean energy company. Tesla designs and manufactures electric cars, battery energy storage systems, and solar panels.',
    industry: 'Automotive',
    founded: '2003',
    headquarters: 'Austin, Texas',
    logo: 'https://logos-world.net/wp-content/uploads/2020/05/Tesla-Logo.png',
  },
  {
    id: 4,
    name: 'Netflix',
    tagline: 'Entertainment unlimited. Stream anywhere.',
    description: 'Netflix is an American streaming entertainment service with over 230 million paid memberships in more than 190 countries enjoying TV series, documentaries and feature films.',
    industry: 'Entertainment',
    founded: '1997',
    headquarters: 'Los Gatos, California',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png',
  },
  {
    id: 5,
    name: 'Spotify',
    tagline: 'Music for everyone. Play what you love.',
    description: 'Spotify is a Swedish audio streaming and media services provider. It is one of the largest music streaming service providers with over 400 million monthly active users.',
    industry: 'Music Streaming',
    founded: '2006',
    headquarters: 'Stockholm, Sweden',
    logo: 'https://logos-world.net/wp-content/uploads/2020/06/Spotify-Logo.png',
  },
  {
    id: 6,
    name: 'Airbnb',
    tagline: 'Belong anywhere. Travel like a local.',
    description: 'Airbnb is an American company that operates an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities.',
    industry: 'Travel & Hospitality',
    founded: '2008',
    headquarters: 'San Francisco, California',
    logo: 'https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo.png',
  },
  {
    id: 7,
    name: 'Google',
    tagline: 'Organize the world\'s information.',
    description: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, and software.',
    industry: 'Technology',
    founded: '1998',
    headquarters: 'Mountain View, California',
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png',
  },
  {
    id: 8,
    name: 'Amazon',
    tagline: 'Earth\'s most customer-centric company.',
    description: 'Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    industry: 'E-commerce',
    founded: '1994',
    headquarters: 'Seattle, Washington',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png',
  },
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch brands list (simulate API call)
export const fetchBrands = async () => {
  try {
    // Simulate network delay
    await delay(1000);
    
    // In a real app, you would make an API call here
    // const response = await fetch('https://your-api.com/brands');
    // const data = await response.json();
    
    // For demo purposes, return mock data
    return MOCK_BRANDS;
  } catch (error) {
    console.error('Error fetching brands:', error);
    throw error;
  }
};

// Fetch brand details by ID (simulate API call)
export const fetchBrandById = async (id) => {
  try {
    // Simulate network delay
    await delay(500);
    
    // In a real app, you would make an API call here
    // const response = await fetch(`https://your-api.com/brands/${id}`);
    // const data = await response.json();
    
    // For demo purposes, find brand in mock data
    const brand = MOCK_BRANDS.find(b => b.id === id);
    if (!brand) {
      throw new Error('Brand not found');
    }
    
    return brand;
  } catch (error) {
    console.error('Error fetching brand details:', error);
    throw error;
  }
};

// Alternative API configurations (commented out for reference)

/*
// JSONPlaceholder + Custom Data Approach
export const fetchBrands = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    
    // Transform user data into brand data
    return users.slice(0, 8).map((user, index) => ({
      id: user.id,
      name: `Brand ${user.name}`,
      tagline: `${user.company.catchPhrase}`,
      description: `${user.company.bs}. A leading company in innovative solutions.`,
      industry: 'Technology',
      founded: `${2000 + index}`,
      headquarters: user.address.city,
      logo: `https://picsum.photos/120/120?random=${user.id}`,
    }));
  } catch (error) {
    console.error('Error fetching brands:', error);
    throw error;
  }
};
*/

/*
// MockAPI.io Approach
const API_BASE_URL = 'https://your-mockapi-id.mockapi.io/api/v1';

export const fetchBrands = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/brands`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching brands:', error);
    throw error;
  }
};
*/