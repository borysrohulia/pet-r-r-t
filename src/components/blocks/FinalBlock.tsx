import React from 'react';
import { useString } from '../../provider/StringContext'

export const FinalBlock: React.FC = () => {
  const str: string = useString()
  return (
    <div style={{ border: 'solid 1px rgb(49, 151, 151)', width: '100%', height: '50px' }}>
      <span>This is last block:)</span>
      <br />
      <span>{str}</span>
    </div>
  );
}
