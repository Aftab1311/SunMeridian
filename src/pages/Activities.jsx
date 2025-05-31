import React from 'react';
import yoga from "../assets/yoga.jpeg"
import craft from "../assets/craft.jpeg"
function Activities() {
  const activities = [
    {
      id: 1,
      title: "Yoga",
      description: "Express your creativity through various art forms and craft techniques.",
      schedule: "Every Monday & Wednesday",
      time: "3:00 PM - 5:00 PM",
      ageGroup: "5-12 years",
      image:yoga // Replace with actual image
    },
    {
      id: 2,
      title: "Music & Dance",
      description: "Learn rhythm, movement, and musical expression in a fun environment.",
      schedule: "Every Tuesday & Thursday",
      time: "4:00 PM - 6:00 PM",
      ageGroup: "6-14 years",
      image: craft // Replace with actual image
    },
    // Add more activities as needed
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F1] py-16">
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Activities</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-150 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{activity.title}</h2>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Schedule:</span> {activity.schedule}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Time:</span> {activity.time}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Age Group:</span> {activity.ageGroup}
                  </p>
                </div>
                <button className="mt-6 border-2 border-black rounded-tr-3xl rounded-bl-3xl px-6 py-2 font-semibold hover:bg-black hover:text-white transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activities; 