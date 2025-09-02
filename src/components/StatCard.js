"use client";

export function StatCard({ title, value }) {
  // Format large numbers for better readability
  const formatValue = (val) => {
    if (typeof val === 'number') {
      if (val >= 1000000) {
        return (val / 1000000).toFixed(1) + 'M';
      } else if (val >= 1000) {
        return (val / 1000).toFixed(1) + 'K';
      }
    }
    return val;
  };

  return (
    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/8 hover:border-white/15 transition-all duration-300 cursor-default">
      <div className="space-y-3">
        <h3 className="text-xs font-medium text-white/60 uppercase tracking-wider leading-tight">
          {title}
        </h3>
        <div className="flex items-baseline gap-1">
          <p className="text-2xl font-semibold text-white/95 tracking-tight group-hover:text-white transition-colors duration-300">
            {formatValue(value)}
          </p>
          {typeof value === 'number' && value >= 1000 && (
            <span className="text-xs text-white/40 font-normal">
              {value >= 1000000 ? 'million' : 'thousand'}
            </span>
          )}
        </div>
        
        {/* Subtle accent line */}
        <div className="h-0.5 w-8 bg-gradient-to-r from-blue-400 to-transparent rounded-full opacity-60 group-hover:opacity-100 group-hover:w-12 transition-all duration-500"></div>
      </div>
    </div>
  );
}