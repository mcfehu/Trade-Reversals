import React, { useState } from 'react';
import Header from '../components/Header';
import BlogPostEditor from '../components/blog/admin/BlogPostEditor';
import BlogPostList from '../components/blog/admin/BlogPostList';
import TestimonialForm from '../components/testimonials/admin/TestimonialForm';
import TestimonialList from '../components/testimonials/admin/TestimonialList';
import FTMOPromotion from '../components/FTMOPromotion';
import { FileText, Users, BookOpen, LayoutDashboard, Upload } from 'lucide-react';
import { supabase } from '../lib/supabase';

type Tab = 'overview' | 'blog' | 'stats' | 'testimonials';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [showBlogEditor, setShowBlogEditor] = useState(false);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null as File | null,
  });

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'blog', label: 'Blog Posts', icon: BookOpen },
    { id: 'stats', label: 'Performance', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: Users }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.file) return;

    setUploading(true);
    try {
      const fileExt = formData.file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).slice(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('performance-reports')
        .upload(filePath, formData.file);

      if (uploadError) throw uploadError;

      const { error: dbError } = await supabase
        .from('performance_reports')
        .insert([{
          title: formData.title,
          description: formData.description,
          file_path: filePath,
        }]);

      if (dbError) throw dbError;

      setFormData({
        title: '',
        description: '',
        file: null,
      });
      
      alert('Report uploaded successfully!');
    } catch (error) {
      console.error('Error uploading report:', error);
      alert('Error uploading report');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-blue-200">Manage your content and monitor performance</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-blue-200 hover:bg-white/20'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6">
            {activeTab === 'overview' && (
              <>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          setActiveTab('blog');
                          setShowBlogEditor(true);
                        }}
                        className="w-full text-left px-4 py-2 rounded-lg bg-white/5 text-blue-200 hover:bg-white/10"
                      >
                        Create Blog Post
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab('stats');
                        }}
                        className="w-full text-left px-4 py-2 rounded-lg bg-white/5 text-blue-200 hover:bg-white/10"
                      >
                        Upload Performance Report
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab('testimonials');
                          setShowTestimonialForm(true);
                        }}
                        className="w-full text-left px-4 py-2 rounded-lg bg-white/5 text-blue-200 hover:bg-white/10"
                      >
                        Add Testimonial
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      <div className="text-blue-200">
                        <p className="text-sm">Latest blog post:</p>
                        <p className="font-medium">Understanding Market Reversals</p>
                      </div>
                      <div className="text-blue-200">
                        <p className="text-sm">Latest performance report:</p>
                        <p className="font-medium">February 2024 Report</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Statistics</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-blue-300">Total Blog Posts</div>
                        <div className="text-2xl font-bold text-white">24</div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-300">Total Testimonials</div>
                        <div className="text-2xl font-bold text-white">18</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Add FTMO Promotion */}
                <div className="mt-8">
                  <FTMOPromotion />
                </div>
              </>
            )}

            {activeTab === 'blog' && (
              <div className="space-y-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => setShowBlogEditor(!showBlogEditor)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {showBlogEditor ? 'View All Posts' : 'Create New Post'}
                  </button>
                </div>
                {showBlogEditor ? <BlogPostEditor /> : <BlogPostList />}
              </div>
            )}

            {activeTab === 'stats' && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Upload Performance Report</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Report Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      PDF Report
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors">
                        <FileText className="h-5 w-5" />
                        Choose File
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="hidden"
                          required
                        />
                      </label>
                      {formData.file && (
                        <span className="text-blue-300 text-sm">
                          {formData.file.name}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={uploading}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Upload className="h-5 w-5" />
                    {uploading ? 'Uploading...' : 'Upload Report'}
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => setShowTestimonialForm(!showTestimonialForm)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {showTestimonialForm ? 'View All Testimonials' : 'Add New Testimonial'}
                  </button>
                </div>
                {showTestimonialForm ? <TestimonialForm /> : <TestimonialList />}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}