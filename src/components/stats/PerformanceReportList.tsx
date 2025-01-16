import React from 'react';
import { format } from 'date-fns';
import { FileText, Calendar, RefreshCw } from 'lucide-react';
import { useSupabaseQuery } from '../../hooks/useSupabaseQuery';
import { PerformanceReport } from '../../types/stats';
import ErrorMessage from '../ui/ErrorMessage';
import LoadingSpinner from '../ui/LoadingSpinner';

export default function PerformanceReportList() {
  const { data: reports, error, loading, refetch } = useSupabaseQuery<PerformanceReport>(
    'performance_reports',
    (query) => query.order('created_at', { ascending: false })
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="space-y-4">
        <ErrorMessage message="Failed to load performance reports" />
        <button
          onClick={() => refetch()}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
      </div>
    );
  }

  if (!reports?.length) {
    return (
      <div className="text-center py-8 text-blue-200">
        No performance reports available yet.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reports.map((report) => (
        <div
          key={report.id}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600/20 rounded-lg">
              <FileText className="h-6 w-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">
                {report.title}
              </h3>
              <p className="text-blue-200 text-sm mb-4">
                {report.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-blue-300">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {format(new Date(report.created_at), 'MMM d, yyyy')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}