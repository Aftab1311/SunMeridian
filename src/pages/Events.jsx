import React from 'react';

function Events() {
  const events = [
    {
      id: 1,
      title: "Summer Workshop",
      date: "June 1-5, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Main Hall",
      description: "Join us for an exciting summer workshop filled with creative activities and learning opportunities.",
      category: "Workshop"
    },
    {
      id: 2,
      title: "Annual Exhibition",
      date: "July 15, 2024",
      time: "11:00 AM - 4:00 PM",
      location: "Exhibition Center",
      description: "Showcasing the amazing work of our talented students and instructors.",
      category: "Exhibition"
    },
     {
      id: 3,
      title: "Summer camp",
      date: "May 15, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Exhibition Center",
      description: "Showcasing the amazing work of our talented students and instructors.",
      category: "Exhibition"
    },
    {
      id: 4,
      title: "Sports (indoor and outdoor competition)",
      date: "June 5, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Exhibition Center",
      description: "Showcasing the amazing work of our talented students and instructors.",
      category: "Exhibition"
    },
    
    // Add more events as needed
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F1] py-16">
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Upcoming Events</h1>
        
        <div className="grid gap-6">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">{event.title}</h2>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  {event.category}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Date:</span> {event.date}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Time:</span> {event.time}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Location:</span> {event.location}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events; 