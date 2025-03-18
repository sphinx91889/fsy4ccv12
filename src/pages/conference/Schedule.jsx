export default function Schedule() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Schedule & Activities</h1>

        {/* Wednesday Night */}
        <div className="mb-12">
          <div className="bg-black text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">WEDNESDAY NIGHT LIVE!</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xl font-bold mb-2">Registration and Meet & Greet</p>
                  <p className="text-gray-300">5:30 PM</p>
                </div>
                <div>
                  <p className="text-xl font-bold mb-2">Program Begins</p>
                  <p className="text-gray-300">6:30 PM</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Evening Program</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Welcome</li>
                  <li>• Youth Showcase</li>
                  <li>• Devotion</li>
                  <li>• Youth Speaker</li>
                  <li>• Keynote Speaker</li>
                  <li>• Evening Socials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Thursday */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Thursday</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xl font-bold mb-2">Day Program (9:00 AM - 4:00 PM)</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Devotion</li>
                  <li>• Seminars:</li>
                  <ul className="pl-6 space-y-1">
                    <li>- Boys 2 Men</li>
                    <li>- Girls' Talk</li>
                    <li>- Education Forum</li>
                  </ul>
                  <li>• Bible Competitions on the Book of Genesis</li>
                </ul>
              </div>
              <div>
                <p className="text-xl font-bold mb-2">Evening Convocation</p>
                <p className="text-gray-700">7:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Friday */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Friday</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xl font-bold mb-2">Day Program (9:00 AM - 3:00 PM)</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Devotion</li>
                  <li>• Breakouts</li>
                  <li>• Bible Competitions on the Book of Genesis</li>
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">FSY4CC Adams Banquet</h3>
                <p className="text-gray-700 mb-4">Doors open at 6:00 PM</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Presentation of Graduates</li>
                  <li>• Youth Talent Showcase</li>
                  <li>• Keynote Address: "The Struggle is Real" (Romans 7:18-23)</li>
                  <li>• Awards Presentations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Saturday */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Saturday Fun in the Son</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Hilltop Academy Recreation Center</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fun Day starts at 10:00 AM for team sports activities</li>
                  <li>• Only Registrants can participate – must wear Conference T-shirt</li>
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">
                  2101 Martin Luther King Blvd<br />
                  Winter Haven, FL 33881
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
          <h2 className="text-xl font-bold mb-4 text-yellow-800">Important Notes</h2>
          <ul className="space-y-2 text-yellow-800">
            <li>• Please arrive on time for all events</li>
            <li>• Wear your conference badge at all times</li>
            <li>• Saturday activities require Conference T-shirt</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
