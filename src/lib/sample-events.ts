export type SampleEvent = {
  id: string;
  title: string;
  category: string;
  date: string; // display string
  time: string;
  location: string;
  attendees: number;
  image: string;
  status: "upcoming" | "open";
};

/**
 * Static sample events for the home page grid (replaced by the API-backed
 * events list once the backend lands). All dates are future dates.
 */
export const sampleEvents: SampleEvent[] = [
  {
    id: "evt-1",
    title: "Winter Clothes Distribution",
    category: "Relief",
    date: "Dec 12, 2026",
    time: "8:00 AM – 12:00 PM",
    location: "Mirpur 10, Dhaka",
    attendees: 48,
    image:
      "https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "open",
  },
  {
    id: "evt-2",
    title: "City River Clean-Up Drive",
    category: "Environment",
    date: "Dec 19, 2026",
    time: "7:00 AM – 11:00 AM",
    location: "Hatirjheel, Dhaka",
    attendees: 92,
    image:
      "https://images.pexels.com/photos/6646941/pexels-photo-6646941.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "open",
  },
  {
    id: "evt-3",
    title: "Community Tree Planting",
    category: "Environment",
    date: "Jan 9, 2027",
    time: "9:00 AM – 1:00 PM",
    location: "Suhrawardy Udyan",
    attendees: 65,
    image:
      "https://images.pexels.com/photos/36713461/pexels-photo-36713461.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "open",
  },
  {
    id: "evt-4",
    title: "Blood Donation Camp",
    category: "Health",
    date: "Jan 16, 2027",
    time: "10:00 AM – 4:00 PM",
    location: "Dhaka Medical College",
    attendees: 120,
    image:
      "https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "upcoming",
  },
  {
    id: "evt-5",
    title: "Free School Supply Workshop",
    category: "Education",
    date: "Jan 23, 2027",
    time: "2:00 PM – 5:00 PM",
    location: "Mohakhali Community Centre",
    attendees: 37,
    image:
      "https://images.pexels.com/photos/6647054/pexels-photo-6647054.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "upcoming",
  },
  {
    id: "evt-6",
    title: "Senior Citizens Care Visit",
    category: "Community",
    date: "Feb 6, 2027",
    time: "9:30 AM – 12:30 PM",
    location: "Shishu Kalyan Foundation",
    attendees: 29,
    image:
      "https://images.pexels.com/photos/6647122/pexels-photo-6647122.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "upcoming",
  },
];
