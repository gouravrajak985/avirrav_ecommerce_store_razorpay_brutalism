'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function PaymentStatus() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'success' | 'failed' | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [productId, setProductId] = useState<string | null>(null);

  useEffect(() => {
    // Get status from URL params
    const successParam = searchParams.get('success');
    const failedParam = searchParams.get('failed');
    const usernameParam = searchParams.get('username');
    const productIdParam = searchParams.get('productId');
    
    setUsername(usernameParam);
    setProductId(productIdParam);
    
    if (successParam === 'true') {
      setStatus('success');
    } else if (failedParam === 'true') {
      setStatus('failed');
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="w-full max-w-md border-4 border-black p-8 space-y-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {status === 'success' ? (
          <>
            <div className="flex justify-center">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-center uppercase tracking-tight">PAYMENT SUCCESSFUL!</h1>
            <p className="text-center font-mono border-l-4 border-black pl-4">
              Your order has been confirmed and will be processed soon.
            </p>
          </>
        ) : status === 'failed' ? (
          <>
            <div className="flex justify-center">
              <XCircle className="w-20 h-20 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold text-center uppercase tracking-tight">PAYMENT FAILED</h1>
            <p className="text-center font-mono border-l-4 border-black pl-4">
              There was an issue processing your payment. Please try again.
            </p>
          </>
        ) : (
          <div className="p-8 border-4 border-dashed border-black">
            <p className="text-center font-mono text-xl">LOADING PAYMENT STATUS...</p>
          </div>
        )}

        <div className="pt-6">
          <Link 
            href={`/${username}/${productId}`}
            className="block w-full py-3 text-center text-white bg-black border-2 border-black transform hover:-translate-y-1 hover:translate-x-1 transition-transform font-bold uppercase"
          >
            Return to Product
          </Link>
        </div>
      </div>
    </div>
  );
} 