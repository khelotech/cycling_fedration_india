export type Discipline = 'Road' | 'Track' | 'MTB' | 'Para Cycling'

export const disciplines: Discipline[] = ['Road', 'Track', 'MTB', 'Para Cycling']

export type Athlete = {
  id: string
  name: string
  state: string
  discipline: Discipline
  category: string
  gender: 'Male' | 'Female'
  ageGroup: string
  ranking: number
  medals: { gold: number; silver: number; bronze: number }
  achievements: string[]
  image: string
}

export const athletes: Athlete[] = [
  {
    id: 'CFI-2024-0148',
    name: 'Aarav Deshmukh',
    state: 'Maharashtra',
    discipline: 'Road',
    category: 'Elite Men',
    gender: 'Male',
    ageGroup: 'Senior',
    ranking: 1,
    medals: { gold: 6, silver: 3, bronze: 2 },
    achievements: ['National Road Champion 2024', 'Asian Championships Silver 2023'],
    image: '/images/gallery-1.png',
  },
  {
    id: 'CFI-2024-0072',
    name: 'Ishita Rao',
    state: 'Karnataka',
    discipline: 'Track',
    category: 'Elite Women',
    gender: 'Female',
    ageGroup: 'Senior',
    ranking: 1,
    medals: { gold: 8, silver: 2, bronze: 1 },
    achievements: ['Track Sprint National Record', 'Commonwealth Games Finalist'],
    image: '/images/track.png',
  },
  {
    id: 'CFI-2023-0311',
    name: 'Tenzin Norbu',
    state: 'Sikkim',
    discipline: 'MTB',
    category: 'Elite Men',
    gender: 'Male',
    ageGroup: 'Senior',
    ranking: 2,
    medals: { gold: 4, silver: 5, bronze: 3 },
    achievements: ['National MTB XCO Champion 2023', 'Himalayan Challenge Winner'],
    image: '/images/mtb.png',
  },
  {
    id: 'CFI-2024-0205',
    name: 'Priya Nair',
    state: 'Kerala',
    discipline: 'Para Cycling',
    category: 'C4 Women',
    gender: 'Female',
    ageGroup: 'Senior',
    ranking: 1,
    medals: { gold: 5, silver: 4, bronze: 0 },
    achievements: ['Para Road National Champion 2024', 'World Cup Bronze 2023'],
    image: '/images/para.png',
  },
  {
    id: 'CFI-2024-0533',
    name: 'Rohan Gill',
    state: 'Punjab',
    discipline: 'Track',
    category: 'U23 Men',
    gender: 'Male',
    ageGroup: 'Under 23',
    ranking: 3,
    medals: { gold: 3, silver: 1, bronze: 4 },
    achievements: ['Junior Track National Record 2022', 'Team Pursuit Gold 2024'],
    image: '/images/gallery-2.png',
  },
  {
    id: 'CFI-2023-0198',
    name: 'Meera Joshi',
    state: 'Gujarat',
    discipline: 'Road',
    category: 'Elite Women',
    gender: 'Female',
    ageGroup: 'Senior',
    ranking: 2,
    medals: { gold: 4, silver: 6, bronze: 2 },
    achievements: ['National Time Trial Champion 2023', 'Tour of Nilgiris Winner'],
    image: '/images/hero.png',
  },
]

export type EventStatus =
  | 'Upcoming'
  | 'Registration Open'
  | 'Registration Closed'
  | 'Completed'
  | 'Cancelled'

export type CyclingEvent = {
  id: string
  name: string
  type: string
  discipline: Discipline
  startDate: string
  endDate: string
  venue: string
  city: string
  state: string
  status: EventStatus
  description: string
  image: string
}

export const events: CyclingEvent[] = [
  {
    id: 'EVT-101',
    name: '72nd Senior National Road Championship',
    type: 'National Championship',
    discipline: 'Road',
    startDate: '2026-01-14',
    endDate: '2026-01-19',
    venue: 'New Chandigarh Circuit',
    city: 'Chandigarh',
    state: 'Punjab',
    status: 'Registration Open',
    description:
      'The premier national road cycling championship featuring elite, U23 and junior categories across individual time trial, road race and criterium events.',
    image: '/images/hero.png',
  },
  {
    id: 'EVT-102',
    name: 'National Track Cycling Championship 2026',
    type: 'National Championship',
    discipline: 'Track',
    startDate: '2026-02-02',
    endDate: '2026-02-07',
    venue: 'IGI Velodrome',
    city: 'New Delhi',
    state: 'Delhi',
    status: 'Upcoming',
    description:
      'Sprint, keirin, team pursuit and omnium events staged at the indoor velodrome with national ranking points on offer.',
    image: '/images/track.png',
  },
  {
    id: 'EVT-103',
    name: 'Himalayan MTB Cross-Country Cup',
    type: 'National Series',
    discipline: 'MTB',
    startDate: '2025-11-22',
    endDate: '2025-11-24',
    venue: 'Gangtok Trail Park',
    city: 'Gangtok',
    state: 'Sikkim',
    status: 'Registration Closed',
    description:
      'A high-altitude cross-country and downhill festival testing the country’s best off-road riders on demanding mountain terrain.',
    image: '/images/mtb.png',
  },
  {
    id: 'EVT-104',
    name: 'Para Cycling National Road Series — Round 3',
    type: 'National Series',
    discipline: 'Para Cycling',
    startDate: '2025-12-06',
    endDate: '2025-12-08',
    venue: 'Kochi Marine Drive Circuit',
    city: 'Kochi',
    state: 'Kerala',
    status: 'Registration Open',
    description:
      'Classified para road racing across C, H and T categories with selection points toward the national para squad.',
    image: '/images/para.png',
  },
  {
    id: 'EVT-105',
    name: 'Junior National Track Meet',
    type: 'National Championship',
    discipline: 'Track',
    startDate: '2025-10-18',
    endDate: '2025-10-21',
    venue: 'Balewadi Sports Complex',
    city: 'Pune',
    state: 'Maharashtra',
    status: 'Completed',
    description:
      'Development-focused track championship for under-17 and under-19 riders identifying the next generation of national talent.',
    image: '/images/gallery-2.png',
  },
  {
    id: 'EVT-106',
    name: 'Tour of the Western Ghats',
    type: 'Stage Race',
    discipline: 'Road',
    startDate: '2026-03-09',
    endDate: '2026-03-15',
    venue: 'Multiple stages',
    city: 'Multiple',
    state: 'Karnataka',
    status: 'Upcoming',
    description:
      'A seven-stage road race climbing through the Western Ghats — India’s toughest multi-day road cycling challenge.',
    image: '/images/gallery-1.png',
  },
]

export type Championship = {
  id: string
  name: string
  discipline: Discipline
  year: number
  location: string
  categories: number
  participants: number
  status: EventStatus
  image: string
}

export const championships: Championship[] = [
  {
    id: 'CH-1',
    name: '72nd Senior National Road Championship',
    discipline: 'Road',
    year: 2026,
    location: 'Chandigarh, Punjab',
    categories: 12,
    participants: 480,
    status: 'Registration Open',
    image: '/images/hero.png',
  },
  {
    id: 'CH-2',
    name: 'National Track Cycling Championship',
    discipline: 'Track',
    year: 2026,
    location: 'New Delhi',
    categories: 18,
    participants: 320,
    status: 'Upcoming',
    image: '/images/track.png',
  },
  {
    id: 'CH-3',
    name: 'National MTB Championship',
    discipline: 'MTB',
    year: 2025,
    location: 'Gangtok, Sikkim',
    categories: 8,
    participants: 210,
    status: 'Completed',
    image: '/images/mtb.png',
  },
  {
    id: 'CH-4',
    name: 'Para Cycling National Championship',
    discipline: 'Para Cycling',
    year: 2025,
    location: 'Kochi, Kerala',
    categories: 10,
    participants: 145,
    status: 'Completed',
    image: '/images/para.png',
  },
]

export type Result = {
  position: number
  athlete: string
  state: string
  event: string
  discipline: Discipline
  category: string
  time: string
  points: number
  date: string
}

export const results: Result[] = [
  { position: 1, athlete: 'Aarav Deshmukh', state: 'Maharashtra', event: 'National Road Championship', discipline: 'Road', category: 'Elite Men', time: '4:12:38', points: 100, date: '2025-01-18' },
  { position: 2, athlete: 'Karan Sethi', state: 'Haryana', event: 'National Road Championship', discipline: 'Road', category: 'Elite Men', time: '4:12:51', points: 80, date: '2025-01-18' },
  { position: 3, athlete: 'Vivaan Menon', state: 'Kerala', event: 'National Road Championship', discipline: 'Road', category: 'Elite Men', time: '4:13:07', points: 65, date: '2025-01-18' },
  { position: 1, athlete: 'Ishita Rao', state: 'Karnataka', event: 'National Track Championship', discipline: 'Track', category: 'Sprint Women', time: '10.842', points: 100, date: '2025-02-05' },
  { position: 2, athlete: 'Sneha Patil', state: 'Maharashtra', event: 'National Track Championship', discipline: 'Track', category: 'Sprint Women', time: '10.998', points: 80, date: '2025-02-05' },
  { position: 1, athlete: 'Tenzin Norbu', state: 'Sikkim', event: 'National MTB Championship', discipline: 'MTB', category: 'XCO Elite Men', time: '1:28:14', points: 100, date: '2025-03-22' },
  { position: 1, athlete: 'Priya Nair', state: 'Kerala', event: 'Para National Series R2', discipline: 'Para Cycling', category: 'C4 Women', time: '1:02:19', points: 100, date: '2025-04-12' },
  { position: 2, athlete: 'Rohan Gill', state: 'Punjab', event: 'National Track Championship', discipline: 'Track', category: 'Team Pursuit U23', time: '4:04.11', points: 80, date: '2025-02-06' },
]

export type Ranking = {
  rank: number
  previousRank: number
  athlete: string
  state: string
  discipline: Discipline
  points: number
  events: number
}

export const rankings: Ranking[] = [
  { rank: 1, previousRank: 2, athlete: 'Aarav Deshmukh', state: 'Maharashtra', discipline: 'Road', points: 1280, events: 9 },
  { rank: 2, previousRank: 1, athlete: 'Meera Joshi', state: 'Gujarat', discipline: 'Road', points: 1195, events: 8 },
  { rank: 3, previousRank: 4, athlete: 'Karan Sethi', state: 'Haryana', discipline: 'Road', points: 1040, events: 10 },
  { rank: 1, previousRank: 1, athlete: 'Ishita Rao', state: 'Karnataka', discipline: 'Track', points: 1420, events: 11 },
  { rank: 2, previousRank: 3, athlete: 'Rohan Gill', state: 'Punjab', discipline: 'Track', points: 1110, events: 12 },
  { rank: 1, previousRank: 2, athlete: 'Tenzin Norbu', state: 'Sikkim', discipline: 'MTB', points: 980, events: 7 },
  { rank: 1, previousRank: 1, athlete: 'Priya Nair', state: 'Kerala', discipline: 'Para Cycling', points: 1350, events: 8 },
]

export type Circular = {
  id: string
  title: string
  category: string
  discipline?: Discipline
  date: string
  description: string
}

export const circulars: Circular[] = [
  { id: 'CIR-2025-114', title: 'Selection Criteria — Asian Road Championships 2026', category: 'Selection', discipline: 'Road', date: '2025-09-01', description: 'Detailed selection policy and qualification standards for the national road squad.' },
  { id: 'CIR-2025-112', title: 'Anti-Doping Compliance Notice for All Registered Athletes', category: 'Compliance', date: '2025-08-24', description: 'Mandatory NADA education and whereabouts reporting requirements for 2025-26.' },
  { id: 'CIR-2025-109', title: 'Entry Guidelines — National Track Championship 2026', category: 'Championship', discipline: 'Track', date: '2025-08-12', description: 'Category eligibility, entry deadlines and technical regulations.' },
  { id: 'CIR-2025-104', title: 'Revised National License Fee Structure', category: 'License', date: '2025-07-30', description: 'Updated annual license fees for athletes, coaches and technical officials.' },
  { id: 'CIR-2025-101', title: 'Tender — Timing & Photo-Finish Equipment', category: 'Tender', date: '2025-07-15', description: 'Invitation to tender for electronic timing systems across national venues.' },
  { id: 'CIR-2025-098', title: 'Para Cycling Classification Camp Notice', category: 'Notice', discipline: 'Para Cycling', date: '2025-07-02', description: 'Schedule and registration details for the national classification camp.' },
]

export type NewsItem = {
  id: string
  title: string
  category: string
  author: string
  date: string
  excerpt: string
  image: string
}

export const news: NewsItem[] = [
  {
    id: 'N-1',
    title: 'India Names 12-Rider Squad for Asian Road Championships',
    category: 'Team News',
    author: 'CFI Media',
    date: '2025-09-03',
    excerpt:
      'The federation has confirmed a strong twelve-rider contingent following an intensive national selection trial in Chandigarh.',
    image: '/images/hero.png',
  },
  {
    id: 'N-2',
    title: 'Velodrome Upgrade Complete Ahead of National Track Meet',
    category: 'Infrastructure',
    author: 'CFI Media',
    date: '2025-08-28',
    excerpt:
      'A resurfaced track and new timing systems position the IGI Velodrome as a world-class racing venue.',
    image: '/images/track.png',
  },
  {
    id: 'N-3',
    title: 'Para Cyclist Priya Nair Wins World Cup Bronze',
    category: 'Results',
    author: 'CFI Media',
    date: '2025-08-19',
    excerpt:
      'Kerala’s Priya Nair delivered a career-best ride to secure a historic World Cup podium for India.',
    image: '/images/para.png',
  },
]

export type StateAssociation = {
  state: string
  president: string
  secretary: string
  city: string
  status: 'Affiliated' | 'Provisional'
}

export const stateAssociations: StateAssociation[] = [
  { state: 'Maharashtra', president: 'S. Kulkarni', secretary: 'A. Pawar', city: 'Mumbai', status: 'Affiliated' },
  { state: 'Karnataka', president: 'R. Gowda', secretary: 'N. Shetty', city: 'Bengaluru', status: 'Affiliated' },
  { state: 'Punjab', president: 'H. Singh', secretary: 'G. Dhillon', city: 'Chandigarh', status: 'Affiliated' },
  { state: 'Kerala', president: 'T. Varghese', secretary: 'M. Pillai', city: 'Thiruvananthapuram', status: 'Affiliated' },
  { state: 'Delhi', president: 'V. Khanna', secretary: 'P. Chawla', city: 'New Delhi', status: 'Affiliated' },
  { state: 'Gujarat', president: 'D. Patel', secretary: 'R. Shah', city: 'Ahmedabad', status: 'Affiliated' },
  { state: 'Sikkim', president: 'P. Bhutia', secretary: 'K. Lepcha', city: 'Gangtok', status: 'Affiliated' },
  { state: 'Haryana', president: 'J. Yadav', secretary: 'S. Malik', city: 'Panchkula', status: 'Affiliated' },
  { state: 'Tamil Nadu', president: 'M. Rajan', secretary: 'S. Iyer', city: 'Chennai', status: 'Affiliated' },
  { state: 'West Bengal', president: 'A. Ghosh', secretary: 'B. Das', city: 'Kolkata', status: 'Provisional' },
  { state: 'Rajasthan', president: 'L. Rathore', secretary: 'V. Meena', city: 'Jaipur', status: 'Affiliated' },
  { state: 'Uttar Pradesh', president: 'R. Verma', secretary: 'A. Tripathi', city: 'Lucknow', status: 'Affiliated' },
]

export const officials = [
  { name: 'Rajesh Malhotra', role: 'President', bio: 'Leading CFI’s strategic vision and international representation.' },
  { name: 'Anita Sharma', role: 'Secretary General', bio: 'Overseeing federation administration, governance and daily operations.' },
  { name: 'Vikram Reddy', role: 'Treasurer', bio: 'Managing financial planning, budgets and federation accounts.' },
  { name: 'Deepak Nair', role: 'Vice President', bio: 'Supporting national development programmes and state coordination.' },
]

export const stats = [
  { value: '1200+', label: 'Registered Athletes' },
  { value: '32', label: 'State Associations' },
  { value: '85+', label: 'Events Per Year' },
  { value: '4', label: 'Disciplines' },
]

export const partners = [
  'Ministry of Youth Affairs & Sports',
  'Sports Authority of India',
  'Union Cycliste Internationale',
  'Asian Cycling Confederation',
  'Indian Olympic Association',
  'National Anti-Doping Agency',
]

export const gallery = [
  { src: '/images/hero.png', title: 'National Road Championship', location: 'Chandigarh' },
  { src: '/images/track.png', title: 'Track Sprint Finals', location: 'New Delhi' },
  { src: '/images/mtb.png', title: 'Himalayan MTB Cup', location: 'Gangtok' },
  { src: '/images/para.png', title: 'Para Road Series', location: 'Kochi' },
  { src: '/images/gallery-1.png', title: 'Finish Line Glory', location: 'Pune' },
  { src: '/images/gallery-2.png', title: 'National Team Camp', location: 'Bengaluru' },
]
