import React, { useState } from "react";
import dayjs from "dayjs";

const dummyTasks = {
  '2025-08-04': ['Finalize report'],
  '2025-08-07': ['Team Meeting', 'Code Review'],
  '2025-08-12': ['UI Polish'],
  '2025-08-17': ['Deploy to Server'],
  '2025-08-22': ['Client Demo'],
  '2025-08-28': ['Project Deadline']
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDate = startOfMonth.startOf("week");
  const endDate = endOfMonth.endOf("week");

  const generateCalendar = () => {
    const days = [];
    let date = startDate;
    while (date.isBefore(endDate) || date.isSame(endDate, 'day')) {
      days.push(date);
      date = date.add(1, "day");
    }
    return days;
  };

  const calendarDays = generateCalendar();

  const isToday = (date) => dayjs().isSame(date, 'day');
  const hasTasks = (date) => dummyTasks[date.format('YYYY-MM-DD')];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}
            className="text-white bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
          >
            ◀
          </button>
          <h1 className="text-2xl font-semibold">
            {currentDate.format("MMMM YYYY")}
          </h1>
          <button
            onClick={() => setCurrentDate(currentDate.add(1, "month"))}
            className="text-white bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
          >
            ▶
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center font-medium text-gray-300">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 mt-2">
          {calendarDays.map((date, index) => {
            const isCurrentMonth = date.month() === currentDate.month();
            const tasks = dummyTasks[date.format('YYYY-MM-DD')];
            return (
              <div
                key={index}
                className={`rounded-lg p-2 min-h-[100px] flex flex-col items-start justify-start text-sm border transition hover:scale-[1.01] hover:border-blue-400 ${
                  isCurrentMonth ? "bg-[#1e293b]" : "bg-[#1e293b]/30 text-gray-500"
                } ${
                  isToday(date) ? "border border-blue-500" : "border border-gray-600"
                }`}
              >
                <div className="font-bold text-white mb-1 text-xs">
                  {date.date()}
                </div>
                {tasks && (
                  <ul className="text-xs space-y-1">
                    {tasks.map((task, i) => (
                      <li
                        key={i}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        {task}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
