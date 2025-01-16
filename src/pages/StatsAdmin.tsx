import React, { useState } from 'react';
import Header from '../components/Header';
import { supabase } from '../lib/supabase';
import { Upload, Trash2, FileText } from 'lucide-react';
import { format } from 'date-fns';

export default function StatsAdmin() {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null as File | null,
  });

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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-8">Upload Performance Report</h1>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
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
        </div>
      </div>
    </div>
  );
}