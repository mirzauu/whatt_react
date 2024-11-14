import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
];

export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !email) return;

    const mailtoLink = `mailto:mirzamailbox0@gmail.com?subject=Booking Request&body=Date: ${format(selectedDate, 'PP')}%0D%0ATime: ${selectedTime}%0D%0AEmail: ${email}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="booking">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white">Book a Consultation</h2>
        <p className="mt-4 text-gray-400">Schedule a meeting to discuss your project</p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
            <div className="rdp-wrapper">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={{ before: new Date() }}
                className="bg-gray-800 p-4 rounded-lg text-white"
                classNames={{
                  day_selected: "bg-purple-600 text-white",
                  day_today: "text-purple-400",
                  day: "text-gray-300 hover:bg-gray-700",
                }}
              />
            </div>

            {selectedDate && (
              <div className="flex-1 w-full">
                <h3 className="text-lg font-medium text-white mb-4">Available Time Slots</h3>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-md text-sm ${
                        selectedTime === time
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {selectedTime && (
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300"
              >
                Book Appointment
              </button>
            </div>
          )}
        </form>

        {submitted && (
          <div className="mt-4 p-4 bg-gray-800 rounded-md">
            <p className="text-green-400">Booking request sent! Check your email for confirmation.</p>
          </div>
        )}
      </div>
    </section>
  );
}