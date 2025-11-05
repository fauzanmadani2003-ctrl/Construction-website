
import React, { useState } from 'react';
import { fetchCostEstimate } from '../services/geminiService';
import { CostEstimate } from '../types';

const CostEstimator: React.FC = () => {
  const [city, setCity] = useState('Mumbai');
  const [propertyType, setPropertyType] = useState('Independent House');
  const [area, setArea] = useState(2000);
  const [finishQuality, setFinishQuality] = useState('Premium');
  const [estimate, setEstimate] = useState<CostEstimate | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setEstimate(null);

    try {
      const result = await fetchCostEstimate(city, propertyType, area, finishQuality);
      setEstimate(result);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };
  
  const renderEstimate = () => {
    if (!estimate) return null;
    
    return (
      <div className="mt-8 bg-white p-6 rounded-lg shadow-inner animate-fade-in">
        <h3 className="text-2xl font-bold text-primary mb-4">AI-Powered Cost Estimate</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="p-4 bg-gray-50 rounded-md"><strong>Civil Works:</strong> {estimate.civilWorks}</div>
          <div className="p-4 bg-gray-50 rounded-md"><strong>Finishing Works:</strong> {estimate.finishingWorks}</div>
          <div className="p-4 bg-gray-50 rounded-md"><strong>Electrical & Plumbing:</strong> {estimate.electricalPlumbing}</div>
          <div className="p-4 bg-gray-50 rounded-md"><strong>Landscaping:</strong> {estimate.landscaping}</div>
          <div className="p-4 bg-gray-50 rounded-md col-span-1 md:col-span-2"><strong>Miscellaneous & Fees:</strong> {estimate.miscFees}</div>
        </div>
        <div className="mt-6 text-center bg-accent text-white p-4 rounded-lg">
          <p className="text-lg font-semibold">Total Estimated Range</p>
          <p className="text-2xl font-bold">{estimate.totalEstimateRange}</p>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">*This is an AI-generated estimate for preliminary planning. Actual costs may vary.</p>
      </div>
    );
  }

  return (
    <section id="estimator" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Project Cost Estimator</h2>
        <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto">Get a quick, AI-powered cost estimate for your project in India.</p>
        
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-10 bg-primary p-8 rounded-lg shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">City</label>
              <input type="text" id="city" value={city} onChange={e => setCity(e.target.value)} className="w-full bg-secondary text-white p-2.5 rounded-md border border-gray-600 focus:ring-accent focus:border-accent" required/>
            </div>
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-300 mb-1">Property Type</label>
              <select id="propertyType" value={propertyType} onChange={e => setPropertyType(e.target.value)} className="w-full bg-secondary text-white p-3 rounded-md border border-gray-600 focus:ring-accent focus:border-accent">
                <option>Independent House</option>
                <option>Villa</option>
                <option>Apartment</option>
              </select>
            </div>
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-gray-300 mb-1">Area (sq. ft.)</label>
              <input type="number" id="area" value={area} onChange={e => setArea(Number(e.target.value))} className="w-full bg-secondary text-white p-2.5 rounded-md border border-gray-600 focus:ring-accent focus:border-accent" required/>
            </div>
            <div>
              <label htmlFor="finishQuality" className="block text-sm font-medium text-gray-300 mb-1">Finish Quality</label>
              <select id="finishQuality" value={finishQuality} onChange={e => setFinishQuality(e.target.value)} className="w-full bg-secondary text-white p-3 rounded-md border border-gray-600 focus:ring-accent focus:border-accent">
                <option>Standard</option>
                <option>Premium</option>
                <option>Luxury</option>
              </select>
            </div>
          </div>
          <button type="submit" disabled={loading} className="mt-8 bg-accent hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed">
            {loading ? (
                <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Estimating...
                </div>
            ) : 'Get AI Estimate'}
          </button>
        </form>
        
        {error && <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-2xl mx-auto text-left" role="alert">{error}</div>}

        {renderEstimate()}
      </div>
    </section>
  );
};

export default CostEstimator;
