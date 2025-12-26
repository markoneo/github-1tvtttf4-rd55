import React from 'react';
import { Check } from 'lucide-react';

interface VehicleOption {
  type: 'standard' | 'executive' | 'van' | 'minibus';
  name: string;
  image: string;
  maxPassengers: number;
}

const vehicles: VehicleOption[] = [
  {
    type: 'standard',
    name: 'Standard',
    image: 'https://markoneo123.sirv.com/RC/2020-Skoda-Octavia-1.webp',
    maxPassengers: 4
  },
  {
    type: 'executive',
    name: 'Executive',
    image: 'https://markoneo123.sirv.com/RC/forthing-s7-crna.webp',
    maxPassengers: 3
  },
  {
    type: 'van',
    name: 'Van',
    image: 'https://markoneo123.sirv.com/RC/561-5610848_mercedes-vito-hd-png-download.png',
    maxPassengers: 8
  },
  {
    type: 'minibus',
    name: 'Double Vans',
    image: 'https://markoneo123.sirv.com/RC/Screenshot%202025-12-25%20at%2019.36.05.png',
    maxPassengers: 16
  }
];

interface VehicleSelectionProps {
  value: string;
  onChange: (type: 'standard' | 'executive' | 'van' | 'minibus') => void;
  passengers: number;
}

export default function VehicleSelection({ value, onChange, passengers }: VehicleSelectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {vehicles.map((vehicle) => {
        const isDisabled = passengers > vehicle.maxPassengers;
        const isSelected = value === vehicle.type;
        
        return (
          <button
            key={vehicle.type}
            onClick={() => !isDisabled && onChange(vehicle.type)}
            disabled={isDisabled}
            className={`
              relative flex items-center gap-4 p-4 rounded-lg border-2 text-left
              transition-all duration-200
              ${isDisabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'hover:border-blue-300'}
              ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
            `}
          >
            <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{vehicle.name}</h4>
              {isDisabled && (
                <p className="text-xs text-red-500 mt-1">
                  Not available for {passengers} passengers
                </p>
              )}
            </div>
            {isSelected && (
              <div className="absolute top-2 right-2">
                <Check className="w-5 h-5 text-blue-500" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}