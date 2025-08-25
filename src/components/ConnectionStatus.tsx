import React from 'react';
import { Wifi, WifiOff, AlertCircle, CheckCircle } from 'lucide-react';
import { useRealtimeConnection } from '../hooks/useRealtimeConnection';

const ConnectionStatus: React.FC = () => {
  const { status, connectionHealth, reconnect, isHealthy, canRetry } = useRealtimeConnection();

  if (isHealthy) {
    return (
      <div className="flex items-center space-x-2 text-green-600 text-sm">
        <CheckCircle className="w-4 h-4" />
        <span>Connected</span>
      </div>
    );
  }

  if (status.isConnecting) {
    return (
      <div className="flex items-center space-x-2 text-blue-600 text-sm">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
        <span>Connecting...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 text-red-600 text-sm">
      <WifiOff className="w-4 h-4" />
      <span>Connection Error</span>
      {canRetry && (
        <button
          onClick={reconnect}
          className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ConnectionStatus;