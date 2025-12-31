import { TrendingUp, TrendingDown, ChartLine, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

export function DashboardPreview() {
  const cpuData = [
    { time: "00:00", value: 45 },
    { time: "04:00", value: 52 },
    { time: "08:00", value: 68 },
    { time: "12:00", value: 71 },
    { time: "16:00", value: 62 },
    { time: "20:00", value: 58 },
    { time: "24:00", value: 50 },
  ];

  const memoryData = [
    { time: "00:00", value: 38 },
    { time: "04:00", value: 42 },
    { time: "08:00", value: 55 },
    { time: "12:00", value: 61 },
    { time: "16:00", value: 58 },
    { time: "20:00", value: 52 },
    { time: "24:00", value: 45 },
  ];

  const packetLossData = [
    { time: "00:00", value: 0.8 },
    { time: "04:00", value: 1.2 },
    { time: "08:00", value: 0.6 },
    { time: "12:00", value: 1.5 },
    { time: "16:00", value: 0.9 },
    { time: "20:00", value: 1.1 },
    { time: "24:00", value: 0.7 },
  ];

  return (
    <section className="relative px-6 pb-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl border border-purple-500/20 bg-gradient-to-b from-card/50 to-card/30 p-6 md:p-8 shadow-2xl shadow-purple-500/10 backdrop-blur-sm"
        >
          {/* Purple glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-2xl blur-xl -z-10" />

          {/* Metric Tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <MetricTile 
              label="Requests/sec" 
              value="24.5k" 
              change="+12.3%" 
              isPositive={true}
            />
            <MetricTile 
              label="Avg Latency to AWS" 
              value="47ms" 
              change="-8.2%" 
              isPositive={true}
            />
            <MetricTile 
              label="Uptime" 
              value="99.97%" 
              change="+0.02%" 
              isPositive={true}
            />
            <MetricTile 
              label="Active Alerts" 
              value="3" 
              change="+2" 
              isPositive={false}
            />
          </div>

          {/* Charts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <MiniChart title="CPU Usage" data={cpuData} color="#8b5cf6" unit="%" />
            <MiniChart title="Memory Usage" data={memoryData} color="#a78bfa" unit="%" />
          </div>

          {/* Full Width Chart */}
          <div className="mt-6">
            <MiniChart 
              title="Branch Offices SD-WAN Packet Loss" 
              data={packetLossData} 
              color="#c084fc" 
              unit="%" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface MetricTileProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

function MetricTile({ label, value, change, isPositive }: MetricTileProps) {
  return (
    <div className="rounded-lg border border-border/50 bg-secondary/30 p-4">
      <div className="text-xs text-muted-foreground mb-1">{label}</div>
      <div className="text-2xl md:text-3xl text-purple-400 mb-1">{value}</div>
      <div className={`text-xs flex items-center gap-1 ${isPositive ? 'text-green-500' : 'text-orange-500'}`}>
        {isPositive ? <TrendingUp className="h-3 w-3" /> : <AlertTriangle className="h-3 w-3" />}
        {change}
      </div>
    </div>
  );
}

interface MiniChartProps {
  title: string;
  data: { time: string; value: number }[];
  color: string;
  unit: string;
}

function MiniChart({ title, data, color, unit }: MiniChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue;

  return (
    <div className="rounded-lg border border-border/50 bg-secondary/30 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ChartLine className="h-4 w-4 text-purple-400" />
          <span className="text-sm">{title}</span>
        </div>
        <span className="text-xs text-muted-foreground">Last 24h</span>
      </div>
      
      {/* Simple SVG Line Chart */}
      <div className="relative h-24 w-full">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5" />
          <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5" />
          
          {/* Line chart */}
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="2"
            points={data.map((d, i) => {
              const x = (i / (data.length - 1)) * 100;
              const y = 100 - ((d.value - minValue) / range) * 100;
              return `${x},${y}`;
            }).join(' ')}
          />
          
          {/* Area fill */}
          <polygon
            fill={`url(#gradient-${title.replace(/\s/g, '')})`}
            points={
              data.map((d, i) => {
                const x = (i / (data.length - 1)) * 100;
                const y = 100 - ((d.value - minValue) / range) * 100;
                return `${x},${y}`;
              }).join(' ') + ` 100,100 0,100`
            }
          />
          
          <defs>
            <linearGradient id={`gradient-${title.replace(/\s/g, '')}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Time labels */}
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>{data[0].time}</span>
        <span>{data[Math.floor(data.length / 2)].time}</span>
        <span>{data[data.length - 1].time}</span>
      </div>
    </div>
  );
}