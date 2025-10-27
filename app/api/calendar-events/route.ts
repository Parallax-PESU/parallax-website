import { NextResponse } from 'next/server';

export async function GET() {
  // Sample calendar events data
  const events = [
    {
      id: 1,
      date: 'Nov 15, 2024',
      title: 'Game Dev Workshop: Unity Basics',
      time: '6:00 PM - 8:00 PM',
      location: 'Lab Block, Room 201',
      category: 'Workshop',
    },
    {
      id: 2,
      date: 'Nov 22, 2024',
      title: 'AR/VR Showcase Demo',
      time: '4:00 PM - 6:00 PM',
      location: 'Main Auditorium',
      category: 'Demo',
    },
    {
      id: 3,
      date: 'Dec 1-3, 2024',
      title: 'Winter Game Jam 2024',
      time: 'Full Day Event',
      location: 'Club Room & Online',
      category: 'Hackathon',
    },
  ];

  return NextResponse.json(events);
}
