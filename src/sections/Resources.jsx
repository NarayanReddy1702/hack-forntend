import React from 'react';

const Resources = () => {
  const emergencyContacts = [
    { name: 'Emergency Services', number: '911' },
    { name: 'National Emergency Hotline', number: '1-800-123-4567' },
    { name: 'Disaster Management Office', number: '1-888-999-0000' },
    { name: 'Red Cross', number: '1-800-RED-CROSS' },
  ];

  const preparednessGuides = [
    {
      title: 'Emergency Kit Checklist',
      description: 'Essential items to keep in your emergency kit',
      icon: '🎒',
    },
    {
      title: 'Evacuation Plan',
      description: 'How to create and follow an evacuation plan',
      icon: '🚪',
    },
    {
      title: 'Natural Disaster Guide',
      description: 'What to do during different types of natural disasters',
      icon: '🌪️',
    },
    {
      title: 'First Aid Guide',
      description: 'Basic first aid procedures and tips',
      icon: '🏥',
    },
  ];

  const usefulLinks = [
    {
      title: 'Weather Service',
      url: 'https://weather.gov',
      description: 'Official weather updates and forecasts',
    },
    {
      title: 'FEMA',
      url: 'https://www.fema.gov',
      description: 'Federal Emergency Management Agency resources',
    },
    {
      title: 'Red Cross Disaster Prep',
      url: 'https://www.redcross.org/prepare',
      description: 'Disaster preparedness information',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Emergency Resources
          </h1>
          <p className="text-xl text-gray-600">
            Access important information and contacts for emergency situations
          </p>
        </div>

        {/* Emergency Contacts Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {contact.name}
                </h3>
                <p className="text-red-600 font-bold">{contact.number}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preparedness Guides Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Preparedness Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparednessGuides.map((guide, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-600">{guide.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Useful Links Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Useful Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usefulLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-medium text-blue-600 mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-600">{link.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Alert Status Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Current Alert Status
          </h2>
          <div className="flex items-center justify-center p-4 bg-green-100 rounded-lg">
            <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
            <p className="text-green-700 font-medium">
              No Active Alerts - System Operating Normally
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
