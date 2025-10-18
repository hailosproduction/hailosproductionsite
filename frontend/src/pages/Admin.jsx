import React, { useState } from 'react';
import { Settings, Music, Image, ShoppingBag, MessageSquare, FileText, Users, TrendingUp } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const adminTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'artwork', label: 'Artwork', icon: Image },
    { id: 'merchandise', label: 'Merchandise', icon: ShoppingBag },
    { id: 'news', label: 'News', icon: FileText },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'charities', label: 'Charities', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const stats = [
    { label: 'Total Tracks', value: '12', change: '+2 this month', color: 'text-pink-400' },
    { label: 'Merchandise Items', value: '8', change: '+1 this week', color: 'text-purple-400' },
    { label: 'Messages', value: '47', change: '+12 unread', color: 'text-cyan-400' },
    { label: 'News Articles', value: '15', change: '+3 this month', color: 'text-green-400' }
  ];

  const recentActivity = [
    { action: 'New message from Sarah', time: '2 hours ago', type: 'message' },
    { action: 'Merchandise order #1234', time: '4 hours ago', type: 'order' },
    { action: 'Music track "Neon Dreams" updated', time: '1 day ago', type: 'music' },
    { action: 'News article published', time: '2 days ago', type: 'news' },
    { action: 'New collaboration inquiry', time: '3 days ago', type: 'message' }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-8 bg-gray-950/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">
            Admin <span className="text-pink-500">Panel</span>
          </h1>
          <p className="text-gray-400 mt-2">Manage your music, content, and community</p>
        </div>
      </section>

      {/* Admin Interface */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
              <div className="space-y-2">
                {adminTabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-pink-500 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <IconComponent size={20} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
                      </div>
                      <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
                  <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                        <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-white">{activity.action}</p>
                          <p className="text-gray-400 text-sm">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'music' && (
              <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Music Management</h2>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    Add New Track
                  </button>
                </div>
                <div className="text-center py-12">
                  <Music className="mx-auto mb-4 text-gray-500" size={48} />
                  <p className="text-gray-400">Music management interface will be here</p>
                  <p className="text-gray-500 text-sm mt-2">Upload, edit, and organize your tracks</p>
                </div>
              </div>
            )}

            {activeTab === 'artwork' && (
              <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Artwork Gallery</h2>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    Upload Artwork
                  </button>
                </div>
                <div className="text-center py-12">
                  <Image className="mx-auto mb-4 text-gray-500" size={48} />
                  <p className="text-gray-400">Artwork management interface will be here</p>
                  <p className="text-gray-500 text-sm mt-2">Upload and organize your visual art</p>
                </div>
              </div>
            )}

            {activeTab === 'merchandise' && (
              <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Merchandise Store</h2>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    Add Product
                  </button>
                </div>
                <div className="text-center py-12">
                  <ShoppingBag className="mx-auto mb-4 text-gray-500" size={48} />
                  <p className="text-gray-400">Merchandise management interface will be here</p>
                  <p className="text-gray-500 text-sm mt-2">Manage products, inventory, and orders</p>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Contact Messages</h2>
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                    12 Unread
                  </span>
                </div>
                <div className="text-center py-12">
                  <MessageSquare className="mx-auto mb-4 text-gray-500" size={48} />
                  <p className="text-gray-400">Message management interface will be here</p>
                  <p className="text-gray-500 text-sm mt-2">Read and respond to fan messages</p>
                </div>
              </div>
            )}

            {activeTab === 'news' && (
              <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">News Articles</h2>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    Write Article
                  </button>
                </div>
                <div className="text-center py-12">
                  <FileText className="mx-auto mb-4 text-gray-500" size={48} />
                  <p className="text-gray-400">News management interface will be here</p>
                  <p className="text-gray-500 text-sm mt-2">Create and publish news articles</p>
                </div>
              </div>
            )}

            {activeTab === 'charities' && (
              <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Supported Charities</h2>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    Add Charity
                  </button>
                </div>
                <div className="text-center py-12">
                  <Users className="mx-auto mb-4 text-gray-500" size={48} />
                  <p className="text-gray-400">Charity management interface will be here</p>
                  <p className="text-gray-500 text-sm mt-2">Manage supported organizations</p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">Site Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Site Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Hāịlō"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tagline
                    </label>
                    <input
                      type="text"
                      defaultValue="Dark Melodies, Bright Advocacy"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      defaultValue="hello@hailo-music.com"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    />
                  </div>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
