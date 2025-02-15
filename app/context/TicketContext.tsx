"use client"
import React, { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

interface TicketData {
  selectedTicket: string | null;
  ticketCount: number;
  attendeeData: {
    name: string;
    email: string;
    specialRequest: string;
    avatar?: string;
  };
}

interface TicketContextType extends TicketData {
  setSelectedTicket: (ticket: string | null) => void;
  setTicketCount: (count: number) => void;
  setAttendeeData: (data: Partial<TicketData['attendeeData']>) => void;
  resetTicketData: () => void;
}

const initialState: TicketData = {
  selectedTicket: null,
  ticketCount: 1,
  attendeeData: {
    name: '',
    email: '',
    specialRequest: '',
    // avatar is optional
  },
};

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export function TicketProvider({ children }: { children: ReactNode }) {
  const [ticketData, setTicketData] = useState<TicketData>(initialState);

  const setSelectedTicket = (ticket: string | null) => {
    setTicketData(prev => ({ ...prev, selectedTicket: ticket }));
  };

  const setTicketCount = (count: number) => {
    setTicketData(prev => ({ ...prev, ticketCount: count }));
  };

  const setAttendeeData = (data: Partial<TicketData['attendeeData']>) => {
    setTicketData(prev => ({
      ...prev,
      attendeeData: { ...prev.attendeeData, ...data },
    }));
  };

  const resetTicketData = () => {
    setTicketData(initialState);
  };

  return (
    <TicketContext.Provider
      value={{
        ...ticketData,
        setSelectedTicket,
        setTicketCount,
        setAttendeeData,
        resetTicketData,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export function useTickets() {
  const context = useContext(TicketContext);
  if (context === undefined) {
    throw new Error('useTickets must be used within a TicketProvider');
  }
  return context;
}