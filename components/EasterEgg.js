import React, { useEffect, useState } from 'react';

export default function EasterEgg() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">You found the Easter Egg!</h3>
        <p>Here's a fun fact about me: I once coded for 48 hours straight to win a hackathon!</p>
        <p className="mt-4 text-sm text-gray-600">
          (This is just an example. Replace with your own fun fact or achievement!)
        </p>
      </div>
    </div>
  );
}