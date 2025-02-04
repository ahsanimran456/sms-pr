'use client';

import { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    profile: '',
    property: '',
    vehicle: '',
    worker: '',
    invoices: '',
    noticeBoard: '',
    gatePassRequest: '',
    vehicleTagRequest: ''
  });

  const [activeSection, setActiveSection] = useState('profile'); // Default section is 'profile'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4 min-h-screen">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <ul className="space-y-4">
          <li
            className="hover:bg-gray-600 p-2 rounded cursor-pointer"
            onClick={() => setActiveSection('profile')}
          >
            Profile
          </li>
          <li
            className="hover:bg-gray-600 p-2 rounded cursor-pointer"
            onClick={() => setActiveSection('property')}
          >
            Property
          </li>
          <li
            className="hover:bg-gray-600 p-2 rounded cursor-pointer"
            onClick={() => setActiveSection('vehicle')}
          >
            Vehicle
          </li>
          <li
            className="hover:bg-gray-600 p-2 rounded cursor-pointer"
            onClick={() => setActiveSection('worker')}
          >
            Worker/Staff
          </li>
          <li
            className="hover:bg-gray-600 p-2 rounded cursor-pointer"
            onClick={() => setActiveSection('invoices')}
          >
            Invoices
          </li>
          <li
            className="hover:bg-gray-600 p-2 rounded cursor-pointer"
            onClick={() => setActiveSection('noticeBoard')}
          >
            Notice Board
          </li>
          <li
            className="hover:bg-gray-600 p-2 rounded cursor-pointer"
            onClick={() => setActiveSection('gatePassRequest')}
          >
            Gate Pass Request
          </li>
          <li
            className="hover:bg-gray-600 p-2 rounded cursor-pointer"
            onClick={() => setActiveSection('vehicleTagRequest')}
          >
            Vehicle Tag Request
          </li>
        </ul>
      </div>

      {/* Right Side Form */}
      <div className="flex-1 p-6 bg-gray-100 min-h-full">
        <h2 className="text-3xl font-bold mb-6">Submit Your Request</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Profile Section */}
          {activeSection === 'profile' && (
            <>
              <div>
                <label className="block text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-gray-600">Father/Husband Name</label>
                <input
                  type="text"
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter father/husband name"
                />
              </div>
              <div>
                <label className="block text-gray-600">CNIC No.</label>
                <input
                  type="text"
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter CNIC No."
                />
              </div>
              <div>
                <label className="block text-gray-600">Date of Birth</label>
                <input
                  type="date"
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-600">Gender</label>
                <select
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600">Cell No.</label>
                <input
                  type="text"
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter cell number"
                />
              </div>
              <div>
                <label className="block text-gray-600">Email ID</label>
                <input
                  type="email"
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter email ID"
                />
              </div>
              <div>
                <label className="block text-gray-600">Family Member Count</label>
                <input
                  type="number"
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter family member count"
                />
              </div>
              <div>
                <label className="block text-gray-600">Emergency Contact Person Name</label>
                <input
                  type="text"
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter emergency contact person name"
                />
              </div>
              <div>
                <label className="block text-gray-600">Emergency Contact No.</label>
                <input
                  type="text"
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter emergency contact number"
                />
              </div>
            </>
          )}

          {/* Property Section */}
          {activeSection === 'property' && (
            <>
              <div>
                <label className="block text-gray-600">Property Type</label>
                <select
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="Apartment">Apartment</option>
                  <option value="Portion">Portion</option>
                  <option value="Bungalow">Bungalow</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600">Floor</label>
                <input
                  type="text"
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter floor"
                />
              </div>
              <div>
                <label className="block text-gray-600">Plot No.</label>
                <input
                  type="text"
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter plot number"
                />
              </div>
              <div>
                <label className="block text-gray-600">Street/Lane No.</label>
                <input
                  type="text"
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter street/lane number"
                />
              </div>
              <div>
                <label className="block text-gray-600">Residence Type</label>
                <select
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="Permanent">Permanent Residence</option>
                  <option value="Occasional">Occasional Visitor</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600">Residence Status</label>
                <select
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="Owner">Owner</option>
                  <option value="Tenant">Tenant</option>
                </select>
              </div>
              {formData.property === 'Tenant' && (
                <>
                  <div>
                    <label className="block text-gray-600">Owner's Name</label>
                    <input
                      type="text"
                      name="property"
                      value={formData.property}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Enter owner's name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600">Owner's CNIC</label>
                    <input
                      type="text"
                      name="property"
                      value={formData.property}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Enter owner's CNIC"
                    />
                  </div>
                </>
              )}
            </>
          )}

          {/* Vehicle Section */}
          {activeSection === 'vehicle' && (
            <>
              <div>
                <label className="block text-gray-600">Vehicle Make</label>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter vehicle make"
                />
              </div>
              <div>
                <label className="block text-gray-600">Vehicle Model</label>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter vehicle model"
                />
              </div>
              <div>
                <label className="block text-gray-600">Registration No.</label>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter vehicle registration number"
                />
              </div>
              <div>
                <label className="block text-gray-600">Driver Name</label>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter driver name"
                />
              </div>
              <div>
                <label className="block text-gray-600">Driver's License</label>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter driver's license"
                />
              </div>
              <div>
                <label className="block text-gray-600">Gate Pass Request</label>
                <textarea
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter gate pass request"
                />
              </div>
            </>
          )}

          {/* Worker Section */}
          {activeSection === 'worker' && (
            <>
              <div>
                <label className="block text-gray-600">Worker Name</label>
                <input
                  type="text"
                  name="worker"
                  value={formData.worker}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter worker name"
                />
              </div>
              <div>
                <label className="block text-gray-600">Worker Role</label>
                <input
                  type="text"
                  name="worker"
                  value={formData.worker}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter worker role"
                />
              </div>
              <div>
                <label className="block text-gray-600">Worker CNIC</label>
                <input
                  type="text"
                  name="worker"
                  value={formData.worker}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter worker CNIC"
                />
              </div>
              <div>
                <label className="block text-gray-600">Worker Contact</label>
                <input
                  type="text"
                  name="worker"
                  value={formData.worker}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter worker contact number"
                />
              </div>
            </>
          )}

          {/* Invoices Section */}
          {activeSection === 'invoices' && (
            <>
              <div>
                <label className="block text-gray-600">Invoice No.</label>
                <input
                  type="text"
                  name="invoices"
                  value={formData.invoices}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter invoice number"
                />
              </div>
              <div>
                <label className="block text-gray-600">Invoice Date</label>
                <input
                  type="date"
                  name="invoices"
                  value={formData.invoices}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-600">Amount</label>
                <input
                  type="text"
                  name="invoices"
                  value={formData.invoices}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter amount"
                />
              </div>
            </>
          )}

          {/* Notice Board Section */}
          {activeSection === 'noticeBoard' && (
            <>
              <div>
                <label className="block text-gray-600">Notice Title</label>
                <input
                  type="text"
                  name="noticeBoard"
                  value={formData.noticeBoard}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter notice title"
                />
              </div>
              <div>
                <label className="block text-gray-600">Notice Details</label>
                <textarea
                  name="noticeBoard"
                  value={formData.noticeBoard}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter notice details"
                />
              </div>
            </>
          )}

          {/* Gate Pass Request Section */}
          {activeSection === 'gatePassRequest' && (
            <>
              <div>
                <label className="block text-gray-600">Gate Pass Request</label>
                <textarea
                  name="gatePassRequest"
                  value={formData.gatePassRequest}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter gate pass request"
                />
              </div>
            </>
          )}

          {/* Vehicle Tag Request Section */}
          {activeSection === 'vehicleTagRequest' && (
            <>
              <div>
                <label className="block text-gray-600">Vehicle Tag Request</label>
                <textarea
                  name="vehicleTagRequest"
                  value={formData.vehicleTagRequest}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter vehicle tag request"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
