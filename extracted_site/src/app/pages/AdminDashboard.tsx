import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Home, Users, Mail, TrendingUp, DollarSign, Globe, Plus, Settings } from 'lucide-react';
import { properties, agents } from '../data/mockData';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'properties' | 'agents' | 'inquiries'>('overview');

  // Calculate stats
  const totalProperties = properties.length;
  const totalAgents = agents.length;
  const totalValue = properties.reduce((sum, p) => {
    const value = p.currency === 'EUR' ? p.price : p.price * 0.85; // Rough conversion
    return sum + value;
  }, 0);

  const propertyByType = properties.reduce((acc, p) => {
    acc[p.type] = (acc[p.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const typeData = Object.entries(propertyByType).map(([name, value]) => ({ name, value }));

  const countryData = properties.reduce((acc, p) => {
    const existing = acc.find(item => item.name === p.country);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: p.country, value: 1 });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  const COLORS = ['#C9A860', '#1A1A1A', '#6B6B6B', '#E8E4DC', '#F5F3EF', '#FAFAF8'];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      notation: 'compact'
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] pt-20">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl mb-2">Admin Dashboard</h1>
            <p className="text-[#6B6B6B]">Manage your luxury real estate portfolio</p>
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 bg-[#1A1A1A] text-white hover:bg-[#C9A860] transition-colors">
            <Plus className="w-5 h-5" />
            <span>Add Property</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-8 border-b border-[#E8E4DC]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-[#C9A860] text-[#C9A860]'
                : 'border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('properties')}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === 'properties'
                ? 'border-[#C9A860] text-[#C9A860]'
                : 'border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]'
            }`}
          >
            Properties
          </button>
          <button
            onClick={() => setActiveTab('agents')}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === 'agents'
                ? 'border-[#C9A860] text-[#C9A860]'
                : 'border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]'
            }`}
          >
            Agents
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === 'inquiries'
                ? 'border-[#C9A860] text-[#C9A860]'
                : 'border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]'
            }`}
          >
            Inquiries
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-[#E8E4DC] p-6">
                <div className="flex items-center justify-between mb-4">
                  <Home className="w-8 h-8 text-[#C9A860]" />
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-serif mb-1">{totalProperties}</div>
                <div className="text-sm text-[#6B6B6B]">Total Properties</div>
              </div>

              <div className="bg-white border border-[#E8E4DC] p-6">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="w-8 h-8 text-[#C9A860]" />
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-serif mb-1">{formatCurrency(totalValue)}</div>
                <div className="text-sm text-[#6B6B6B]">Total Portfolio Value</div>
              </div>

              <div className="bg-white border border-[#E8E4DC] p-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8 text-[#C9A860]" />
                </div>
                <div className="text-3xl font-serif mb-1">{totalAgents}</div>
                <div className="text-sm text-[#6B6B6B]">Active Agents</div>
              </div>

              <div className="bg-white border border-[#E8E4DC] p-6">
                <div className="flex items-center justify-between mb-4">
                  <Mail className="w-8 h-8 text-[#C9A860]" />
                </div>
                <div className="text-3xl font-serif mb-1">42</div>
                <div className="text-sm text-[#6B6B6B]">New Inquiries</div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Property Types */}
              <div className="bg-white border border-[#E8E4DC] p-8">
                <h3 className="font-serif text-xl mb-6">Properties by Type</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={typeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {typeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Properties by Country */}
              <div className="bg-white border border-[#E8E4DC] p-8">
                <h3 className="font-serif text-xl mb-6">Properties by Country</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={countryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#C9A860" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-[#E8E4DC] p-8">
              <h3 className="font-serif text-xl mb-6">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-[#E8E4DC]">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#F5F3EF] flex items-center justify-center">
                      <Home className="w-5 h-5 text-[#C9A860]" />
                    </div>
                    <div>
                      <div className="font-medium">New property added</div>
                      <div className="text-sm text-[#6B6B6B]">Contemporary Cliffside Villa - Cap d'Antibes</div>
                    </div>
                  </div>
                  <div className="text-sm text-[#6B6B6B]">2 hours ago</div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#E8E4DC]">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#F5F3EF] flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#C9A860]" />
                    </div>
                    <div>
                      <div className="font-medium">New inquiry received</div>
                      <div className="text-sm text-[#6B6B6B]">Manhattan Sky Penthouse - High priority</div>
                    </div>
                  </div>
                  <div className="text-sm text-[#6B6B6B]">4 hours ago</div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#F5F3EF] flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#C9A860]" />
                    </div>
                    <div>
                      <div className="font-medium">Agent profile updated</div>
                      <div className="text-sm text-[#6B6B6B]">Isabella Marchetti updated certifications</div>
                    </div>
                  </div>
                  <div className="text-sm text-[#6B6B6B]">Yesterday</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Properties Tab */}
        {activeTab === 'properties' && (
          <div className="bg-white border border-[#E8E4DC]">
            <div className="p-6 border-b border-[#E8E4DC]">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl">All Properties</h3>
                <div className="flex items-center space-x-4">
                  <input
                    type="search"
                    placeholder="Search properties..."
                    className="px-4 py-2 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                  />
                  <button className="p-2 border border-[#E8E4DC] hover:border-[#C9A860] transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F5F3EF]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium">Property</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Agent</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((property) => {
                    const agent = agents.find(a => a.id === property.agentId);
                    return (
                      <tr key={property.id} className="border-b border-[#E8E4DC] hover:bg-[#F5F3EF]/30">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <img src={property.images[0]} alt="" className="w-16 h-12 object-cover" />
                            <div className="font-medium">{property.title}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#6B6B6B]">{property.location}</td>
                        <td className="px-6 py-4 text-sm">{property.type}</td>
                        <td className="px-6 py-4 text-sm font-medium">
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: property.currency,
                            minimumFractionDigits: 0
                          }).format(property.price)}
                        </td>
                        <td className="px-6 py-4 text-sm text-[#6B6B6B]">{agent?.name}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs ${
                            property.featured
                              ? 'bg-[#C9A860] text-white'
                              : 'bg-[#E8E4DC] text-[#6B6B6B]'
                          }`}>
                            {property.featured ? 'Featured' : 'Active'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-sm text-[#C9A860] hover:underline">Edit</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Agents Tab */}
        {activeTab === 'agents' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white border border-[#E8E4DC] p-6">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full aspect-[3/4] object-cover grayscale mb-4"
                />
                <h3 className="font-serif text-xl mb-1">{agent.name}</h3>
                <p className="text-sm text-[#6B6B6B] mb-4">{agent.title}</p>
                <div className="space-y-2 text-sm text-[#6B6B6B] mb-4">
                  <div>Properties: {agent.properties}</div>
                  <div>Experience: {agent.experience}</div>
                  <div>Languages: {agent.languages.join(', ')}</div>
                </div>
                <button className="w-full py-2 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Inquiries Tab */}
        {activeTab === 'inquiries' && (
          <div className="bg-white border border-[#E8E4DC]">
            <div className="p-6 border-b border-[#E8E4DC]">
              <h3 className="font-serif text-xl">Recent Inquiries</h3>
            </div>
            <div className="divide-y divide-[#E8E4DC]">
              {[
                { name: 'Michael Chen', property: 'Manhattan Sky Penthouse', date: '2 hours ago', status: 'New' },
                { name: 'Sophie Laurent', property: 'Private Island Estate', date: '5 hours ago', status: 'In Progress' },
                { name: 'James Williams', property: 'Contemporary Cliffside Villa', date: 'Yesterday', status: 'Responded' },
                { name: 'Emma Rodriguez', property: 'Historic Tuscan Estate', date: '2 days ago', status: 'Closed' }
              ].map((inquiry, index) => (
                <div key={index} className="p-6 hover:bg-[#F5F3EF]/30">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium mb-1">{inquiry.name}</div>
                      <div className="text-sm text-[#6B6B6B]">Interested in: {inquiry.property}</div>
                      <div className="text-xs text-[#6B6B6B] mt-2">{inquiry.date}</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 text-xs ${
                        inquiry.status === 'New'
                          ? 'bg-[#C9A860] text-white'
                          : inquiry.status === 'In Progress'
                          ? 'bg-blue-500 text-white'
                          : inquiry.status === 'Responded'
                          ? 'bg-green-500 text-white'
                          : 'bg-[#E8E4DC] text-[#6B6B6B]'
                      }`}>
                        {inquiry.status}
                      </span>
                      <button className="text-sm text-[#C9A860] hover:underline">View</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
