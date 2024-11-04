import React from 'react';
import { Clock, XCircle, CheckCircle, AlertCircle } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  table: string;
  nickname: string;
  total: number;
  status: 'in-progress' | 'delivered' | 'canceled';
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

const OrderHistory: React.FC = () => {
  // Mock data with diverse examples
  const orders: Order[] = [
    {
      id: '1',
      date: '2024-03-15 22:45',
      table: '12',
      nickname: 'Alex',
      total: 156.97,
      status: 'in-progress',
      items: [
        { name: 'Tequila Don Julio', quantity: 1, price: 89.99 },
        { name: 'Gin Hendricks', quantity: 1, price: 45.99 },
        { name: 'Cerveza Corona', quantity: 2, price: 10.49 }
      ]
    },
    {
      id: '2',
      date: '2024-03-15 22:30',
      table: '8',
      nickname: 'Sam',
      total: 234.97,
      status: 'delivered',
      items: [
        { name: 'Whiskey Macallan 12', quantity: 1, price: 129.99 },
        { name: 'Vodka Grey Goose', quantity: 1, price: 54.99 },
        { name: 'Champagne Moët', quantity: 1, price: 49.99 }
      ]
    },
    {
      id: '3',
      date: '2024-03-15 22:15',
      table: '15',
      nickname: 'Chris',
      total: 178.96,
      status: 'canceled',
      items: [
        { name: 'Cognac Hennessy', quantity: 1, price: 89.99 },
        { name: 'Licor Baileys', quantity: 1, price: 44.98 },
        { name: 'Ron Zacapa', quantity: 1, price: 43.99 }
      ]
    }
  ];

  const getStatusStyles = (status: Order['status']) => {
    const styles = {
      'in-progress': 'bg-blue-500/20 text-blue-400',
      'delivered': 'bg-green-500/20 text-green-400',
      'canceled': 'bg-red-500/20 text-red-400'
    };
    return styles[status];
  };

  const getStatusIcon = (status: Order['status']) => {
    const icons = {
      'in-progress': AlertCircle,
      'delivered': CheckCircle,
      'canceled': XCircle
    };
    return icons[status];
  };

  const getStatusText = (status: Order['status']) => {
    const text = {
      'in-progress': 'In Progress',
      'delivered': 'Delivered',
      'canceled': 'Canceled'
    };
    return text[status];
  };

  const handleCancelOrder = (orderId: string) => {
    // In a real app, this would make an API call
    console.log(`Canceling order ${orderId}`);
  };

  return (
    <div className="max-w-4xl mx-auto pt-24 px-4 pb-24">
      <h2 className="text-3xl font-bold text-white mb-8">Order History</h2>
      
      <div className="space-y-6">
        {orders.map((order) => {
          const StatusIcon = getStatusIcon(order.status);
          
          return (
            <div 
              key={order.id}
              className="glass-card rounded-2xl overflow-hidden scroll-animate fade-up"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={18} className="text-purple-400" />
                      <span className="text-white/70">{order.date}</span>
                    </div>
                    <p className="text-white">Table #{order.table} • {order.nickname}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`px-3 py-1 rounded-full text-sm flex items-center gap-1.5 ${getStatusStyles(order.status)}`}>
                      <StatusIcon size={16} />
                      <span>{getStatusText(order.status)}</span>
                    </div>
                    {order.status === 'in-progress' && (
                      <button
                        onClick={() => handleCancelOrder(order.id)}
                        className="px-3 py-1 rounded-full text-sm bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                      >
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-white/70">
                      <span>{item.quantity}x {item.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-white/70">Total Amount</span>
                  <span className="text-xl font-semibold text-white">${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderHistory;