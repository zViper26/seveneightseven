import React, { useState } from 'react';
import { X, Check, PartyPopper } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, total }) => {
  const [tableNumber, setTableNumber] = useState('');
  const [nickname, setNickname] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout logic here
    console.log({ tableNumber, nickname, total });
    setIsSuccess(true);
    
    // Auto close after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setTableNumber('');
      setNickname('');
    }, 3000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[60]">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={isSuccess ? undefined : onClose}
      />
      <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full mx-4 border border-white/20">
        {!isSuccess && (
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-white/70 hover:text-white"
          >
            <X size={24} />
          </button>
        )}

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="flex justify-center mb-6">
              <div className="bg-green-500/20 p-4 rounded-full">
                <PartyPopper size={48} className="text-green-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Order Confirmed!</h2>
            <p className="text-white/70 mb-2">Your drinks will be served at table {tableNumber}</p>
            <p className="text-white/70">Thank you for your order, {nickname}!</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-green-500/20 px-4 py-2 rounded-full flex items-center gap-2">
                <Check size={20} className="text-green-400" />
                <span className="text-green-400">Processing your order...</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Club 787</h2>
              <p className="text-white/70">Complete your order</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="table" className="block text-sm font-medium text-white/70 mb-2">
                  Table Number
                </label>
                <input
                  type="number"
                  id="table"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                  placeholder="Enter your table number"
                  required
                />
              </div>

              <div>
                <label htmlFor="nickname" className="block text-sm font-medium text-white/70 mb-2">
                  Nickname
                </label>
                <input
                  type="text"
                  id="nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                  placeholder="Enter your nickname"
                  required
                />
              </div>

              <div className="flex justify-between items-center text-white mb-6">
                <span className="text-white/70">Total Amount:</span>
                <span className="text-xl font-bold">${total.toFixed(2)}</span>
              </div>

              <button
                type="submit"
                className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-4 rounded-2xl transition-colors"
              >
                Confirm Order
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;