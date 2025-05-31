import React from 'react';

function Notices() {
  const notices = [
    {
      id: 1,
      title: "Important Announcement",
      date: "March 15, 2024",
      content: "Please be informed about the upcoming changes in our schedule.",
      category: "General"
    },
    {
      id: 2,
      title: "Holiday Notice",
      date: "March 10, 2024",
      content: "The center will be closed on March 25th for the holiday.",
      category: "Holiday"
    },
    {
      id: 3,
      title: "Summer Vacation",
      date: "March 10, 2024",
      content: "School will reopen on 25 June 2025.",
      category: "Holiday"
    },
    // Add more notices as needed
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F1] py-16">
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Notices</h1>
        
        <div className="grid gap-6">
          {notices.map((notice) => (
            <div 
              key={notice.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">{notice.title}</h2>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  {notice.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{notice.content}</p>
              <p className="text-sm text-gray-500">Posted on: {notice.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notices; 