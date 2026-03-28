"use client";

import EventCard from "@/components/EventCard";
import { fetchEvents } from "@/lib/api";
import React, { useEffect, useState, useCallback } from "react";


export default function EventsPage() {
  const [filters, setFilters] = useState<any>({
    event_type: "",
    mode_of_event: "",
    city: "",
    state: "",
    title: "",
    registration_type: "",
    who_can_register: "public_users_bob_members",
    start_date: "",
    end_date: "",
    my_events: "",
    my_events_status: "",
    schedule: "",
    q: "",
    brand_id: "",
    id: "",
    page: 1,
    per_page: 100,
    sort: "newest",
  });

  const [appliedFilters, setAppliedFilters] = useState<any>(filters);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFilters((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApply = () => {
    setAppliedFilters(filters);
  };

  const fetchEventsData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const cleanFilters = Object.fromEntries(
        Object.entries(appliedFilters).filter(([_, v]) => v !== "")
      );
      
      const data = await fetchEvents(cleanFilters);
      if (data?.data?.data) {
        setEvents(data.data.data);
      } else if (data?.data) {
        setEvents(Array.isArray(data.data) ? data.data : [data.data]);
      } else {
        setEvents([]);
      }
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch events.");
    } finally {
      setLoading(false);
    }
  }, [appliedFilters]);

  useEffect(() => {
    fetchEventsData();
  }, [fetchEventsData]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-10">
      <div className="bg-white shadow-sm px-6 py-4 mb-4">
        <h1 className="text-2xl font-bold tracking-tight">Events</h1>
      </div>

      <div className="px-4 md:px-6">
        <div className="filters-header bg-white rounded-lg shadow-sm mb-6 p-4">
          <input name="q" placeholder="Search Queries" value={filters.q} onChange={handleChange} className="filter-input" />
          <input name="title" placeholder="Event Title" value={filters.title} onChange={handleChange} className="filter-input" />
          
          <select name="event_type" value={filters.event_type} onChange={handleChange} className="filter-input">
            <option value="">Type</option>
            <option value="connect">Connect</option>
            <option value="elevate">Elevate</option>
          </select>

          <select name="mode_of_event" value={filters.mode_of_event} onChange={handleChange} className="filter-input">
            <option value="">Mode</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>

          <input name="city" placeholder="City" value={filters.city} onChange={handleChange} className="filter-input" />
          <input name="state" placeholder="State" value={filters.state} onChange={handleChange} className="filter-input" />

          <select name="registration_type" value={filters.registration_type} onChange={handleChange} className="filter-input">
            <option value="">Price</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
          
          <select name="who_can_register" value={filters.who_can_register} onChange={handleChange} className="filter-input">
            <option value="public_users_bob_members">Access</option>
            <option value="only_bob_member">Members</option>
          </select>

          <input type="date" name="start_date" value={filters.start_date} onChange={handleChange} title="Start Date" className="filter-input" />
          <input type="date" name="end_date" value={filters.end_date} onChange={handleChange} title="End Date" className="filter-input" />

          <select name="schedule" value={filters.schedule} onChange={handleChange} className="filter-input">
            <option value="">Schedule</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="this_week">This Week</option>
            <option value="this_month">This Month</option>
            <option value="custom">Custom</option>
          </select>
          
          <select name="my_events" value={filters.my_events} onChange={handleChange} className="filter-input">
            <option value="">Ownership</option>
            <option value="true">My Events</option>
          </select>
          
          <select name="my_events_status" value={filters.my_events_status} onChange={handleChange} className="filter-input">
            <option value="">Status</option>
            <option value="draft">Draft</option>
            <option value="approved">Approved</option>
            <option value="submitted">Submitted</option>
            <option value="rejected">Rejected</option>
          </select>

          <input name="brand_id" placeholder="Brand ID" value={filters.brand_id} onChange={handleChange} className="filter-input" />
          <input name="id" placeholder="Event ID" value={filters.id} onChange={handleChange} className="filter-input" />

          <button onClick={handleApply} className="bg-blue-600 text-white px-5 py-2 rounded text-sm font-medium hover:bg-blue-700 ml-auto leading-none">Apply Filter</button>
        </div>

        <main className="p-5">
          {loading ? (
            <div className="text-center p-10 text-gray-500">
              <p>Loading events...</p>
            </div>
          ) : error ? (
            <div className="text-center p-10 text-red-500">{error}</div>
          ) : events.length === 0 ? (
            <div className="text-center p-10 text-gray-500">
              <h3>No Events Found</h3>
              <p className="text-sm mt-2">Try adjusting your search filters.</p>
            </div>
          ) : (
            <div className="events-grid">
              {events.map((event: any, index: number) => (
                <EventCard key={event.id || index} event={event} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
