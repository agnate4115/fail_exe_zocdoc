import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-all duration-200";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border-2 border-gray-300 hover:border-gray-400"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ className = '', ...props }) => (
  <input
    className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const HospitalDashboard = () => {
  const [showForm, setShowForm] = useState(true);
  const [hospitalData, setHospitalData] = useState(null);

  const [formData, setFormData] = useState({
    totalBeds: '',
    availableBeds: '',
    opdCenters: [{ name: '', patientCount: '', maxCapacity: '' }],
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'totalBeds' || name === 'availableBeds') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      const newOpdCenters = [...formData.opdCenters];
      newOpdCenters[index] = { ...newOpdCenters[index], [name]: value };
      setFormData(prev => ({ ...prev, opdCenters: newOpdCenters }));
    }
  };

  const addOpdCenter = () => {
    setFormData(prev => ({
      ...prev,
      opdCenters: [...prev.opdCenters, { name: '', patientCount: '', maxCapacity: '' }],
    }));
  };

  const removeOpdCenter = (index) => {
    setFormData(prev => ({
      ...prev,
      opdCenters: prev.opdCenters.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHospitalData = {
      totalBeds: parseInt(formData.totalBeds),
      availableBeds: parseInt(formData.availableBeds),
      opdCenters: formData.opdCenters.map(center => ({
        name: center.name,
        patientCount: parseInt(center.patientCount),
        maxCapacity: parseInt(center.maxCapacity),
      })),
    };
    setHospitalData(newHospitalData);
    setShowForm(false);
  };

  const DataEntryForm = () => (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Total Beds:</label>
          <Input
            type="number"
            name="totalBeds"
            value={formData.totalBeds}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Available Beds:</label>
          <Input
            type="number"
            name="availableBeds"
            value={formData.availableBeds}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">OPD Centers</h3>
        {formData.opdCenters.map((center, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-3">
            <Input
              placeholder="OPD Name"
              name="name"
              value={center.name}
              onChange={(e) => handleInputChange(e, index)}
              required
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                type="number"
                placeholder="Current Patients"
                name="patientCount"
                value={center.patientCount}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
              <Input
                type="number"
                placeholder="Max Capacity"
                name="maxCapacity"
                value={center.maxCapacity}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </div>
            <Button 
              type="button" 
              onClick={() => removeOpdCenter(index)} 
              variant="destructive"
              className="w-full sm:w-auto"
            >
              Remove
            </Button>
          </div>
        ))}
        <Button 
          type="button" 
          onClick={addOpdCenter} 
          variant="outline"
          className="w-full sm:w-auto"
        >
          Add OPD Center
        </Button>
      </div>
      <Button type="submit" className="w-full sm:w-auto">Submit Data</Button>
    </form>
  );

  const Dashboard = () => (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-4">Bed Availability</h3>
            <div className="flex items-baseline space-x-2">
              <p className="text-4xl font-bold text-blue-600">{hospitalData.availableBeds}</p>
              <p className="text-sm text-gray-500">of {hospitalData.totalBeds} beds</p>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-500"
                style={{ width: `${(hospitalData.availableBeds / hospitalData.totalBeds) * 100}%` }}
              />
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-4">OPD Centers Capacity</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hospitalData.opdCenters}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="patientCount" fill="#60a5fa" name="Current Patients" />
                  <Bar dataKey="maxCapacity" fill="#34d399" name="Max Capacity" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>
      </div>
      
      <Card>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-4">OPD Centers Details</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">OPD Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Current Patients</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Max Capacity</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Availability</th>
                </tr>
              </thead>
              <tbody>
                {hospitalData.opdCenters.map((center, index) => (
                  <tr 
                    key={index} 
                    className="border-t border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-sm">{center.name}</td>
                    <td className="px-4 py-3 text-sm">{center.patientCount}</td>
                    <td className="px-4 py-3 text-sm">{center.maxCapacity}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        (center.maxCapacity - center.patientCount) > (center.maxCapacity * 0.2)
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {center.maxCapacity - center.patientCount} available
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      <div className="flex justify-center">
        <Button onClick={() => setShowForm(true)}>Edit Data</Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {hospitalData === null || showForm ? <DataEntryForm /> : <Dashboard />}
      </div>
    </div>
  );
};

export default HospitalDashboard;