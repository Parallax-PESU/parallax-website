'use client';

import StorySection from '../StorySection';
import StatCard from '../StatCard';

const stats = [
  { number: '100+', label: 'Active Members' },
  { number: '2+', label: 'Events Per Year' },
  { number: '5+', label: 'Projects Shipped' },
  { number: '2021', label: 'Founded' },
];

export default function Scene3() {
  return (
    <StorySection
      id="community"
      index={2}
      title="Building a Thriving Community"
      description={
        <div className="space-y-6">
          <p>
            Founded in 2021, we&apos;ve built a vibrant community of over 100 passionate developers, designers, and creators 
            who are pushing the boundaries of immersive technology and game development.
          </p>
          <p className="text-[#00d9ff]">
            From weekly meetups to collaborative projects, hackathons to workshops – we create opportunities for every member to grow and shine.
          </p>
        </div>
      }
      imageContent={
        <div className="grid grid-cols-2 gap-6 p-4 w-full min-h-[250px] auto-rows-fr">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      }
      imagePosition="right"
    />
  );
}
