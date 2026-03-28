"use client";

import { useRouter } from "next/navigation";

export default function EventCard({ event }: { event: any }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/event/${event.id}`)}
      className="group bg-white dark:bg-slate-900 rounded-2xl p-5 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col h-full"
    >
      <div className="h-48 w-full relative mb-4 bg-white rounded-xl overflow-hidden">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h2 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-2 mb-2">
          {event.title}
        </h2>

        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-3 flex-grow">
          {event.description}
        </p>

        <p className="text-sm text-gray-600 mb-1">
          {event.event_date} {event.start_time && `• ${event.start_time}`}
        </p>

        <p className="text-sm text-gray-600 mb-2">
          {event.city} {event.state && `, ${event.state}`}
        </p>

        <div className="mt-auto flex justify-between items-center">
          <span className="text-xs px-2 py-1 rounded">
            {event.mode_of_event}
          </span>

          <span className="font-bold text-blue-600">
            {event.registration_type === "free"
              ? "Free"
              : event.registration_fee
              ? `₹${event.registration_fee}`
              : "Paid"}
          </span>
        </div>
      </div>
    </div>
  );
}