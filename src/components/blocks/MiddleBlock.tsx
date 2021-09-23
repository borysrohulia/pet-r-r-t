import React from 'react';
import { FinalBlock } from './FinalBlock';

export const MiddleBlock: React.FC = () => {
  return (
    <div style={{ border: 'solid 3px rgb(49, 151, 151)', width: '100%', height: '150px', padding: '3px' }}>
      <span>This middle block:)</span>
      <FinalBlock />
    </div>
  );
}
