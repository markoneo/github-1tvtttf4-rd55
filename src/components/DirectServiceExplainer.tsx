import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function DirectServiceExplainer() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow duration-300"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            We Don't Use Third-Party Reservations (Here's Why)
          </h2>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0 ml-4" />
          ) : (
            <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0 ml-4" />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              In the private transfer industry, many services operate as intermediaries, connecting
              clients with a network of third-party transportation providers. While this model offers
              broad coverage, it can introduce uncertainty regarding the quality of the vehicle and
              the professionalism of the driver. At Taxislovenia, we distinguish ourselves through a
              vertically integrated service model.
            </p>
            <p>
              We maintain full control over every aspect of your journey by exclusively utilizing our
              in-house fleet of meticulously maintained vehicles and employing a dedicated team of
              professional, vetted drivers. When you book with us, you are not just making a reservation;
              you are entrusting your travel to a cohesive team that is directly accountable for your
              safety, comfort, and punctuality.
            </p>
            <p>
              This direct-to-client approach eliminates the inconsistencies of the marketplace model,
              ensuring a reliable and consistently high-quality experience that you can depend on, every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
