import React from 'react';
import { Chrono } from 'react-chrono';

export default function Timeline() {
  const items = [
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      cardSubtitle: 'Men of the British Expeditionary Force (BEF)',
      cardDetailedText: 'Men',
      media: {
        type: 'IMAGE',
      },
    },
  ];

  return (
    <div style={{ width: '500px', height: '2000px' }}>
      <Chrono items={items} />
    </div>
  );
}
