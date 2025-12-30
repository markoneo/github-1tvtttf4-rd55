import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import { waitForGoogleMaps, isGoogleMapsReady } from '../../services/mapsService';

interface RouteMapProps {
  pickupAddress: string;
  dropoffAddress: string;
  className?: string;
}

export default function RouteMap({ pickupAddress, dropoffAddress, className = '' }: RouteMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeMap = async () => {
      if (!pickupAddress || !dropoffAddress || !mapRef.current) {
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        if (!isGoogleMapsReady()) {
          await waitForGoogleMaps();
        }

        const isMobile = window.innerWidth < 768;

        if (!mapInstanceRef.current) {
          mapInstanceRef.current = new google.maps.Map(mapRef.current, {
            zoom: 10,
            center: { lat: 45.5, lng: 13.5 },
            mapTypeControl: !isMobile,
            streetViewControl: false,
            fullscreenControl: !isMobile,
            zoomControl: !isMobile,
            gestureHandling: isMobile ? 'greedy' : 'auto',
          });
        }

        if (!directionsRendererRef.current) {
          directionsRendererRef.current = new google.maps.DirectionsRenderer({
            map: mapInstanceRef.current,
            suppressMarkers: false,
            polylineOptions: {
              strokeColor: '#0891b2',
              strokeWeight: 5,
              strokeOpacity: 0.8,
            },
          });
        }

        const directionsService = new google.maps.DirectionsService();

        const result = await directionsService.route({
          origin: pickupAddress,
          destination: dropoffAddress,
          travelMode: google.maps.TravelMode.DRIVING,
        });

        if (directionsRendererRef.current && mapInstanceRef.current) {
          directionsRendererRef.current.setDirections(result);
          directionsRendererRef.current.setMap(mapInstanceRef.current);
        }

        setIsLoading(false);
      } catch (err) {
        console.error('Error initializing map:', err);
        setError('Unable to load route map');
        setIsLoading(false);
      }
    };

    initializeMap();

    return () => {
      if (directionsRendererRef.current) {
        directionsRendererRef.current.setMap(null);
      }
    };
  }, [pickupAddress, dropoffAddress]);

  if (error) {
    return null;
  }

  return (
    <div className={className}>
      <div className="mb-2">
        <p className="text-sm font-medium text-slate-700">Your route preview</p>
      </div>
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-10">
            <div className="flex items-center gap-2 text-gray-600">
              <Loader2 size={20} className="animate-spin" />
              <span className="text-sm">Loading route map...</span>
            </div>
          </div>
        )}
        <div ref={mapRef} className="w-full h-full min-h-[220px] sm:min-h-[400px]" />
      </div>
    </div>
  );
}
