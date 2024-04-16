'use client';

import React from "react";
import { useTestnix } from "testnix/client";

const ClientComponent = ({ variantId, hash, experimentId }: { variantId: string, hash: string, experimentId: string }) => {
  const { trackClicks, trackConversions } = useTestnix();

  return (
    <button onClick={() => trackClicks({ hash, experimentId, variantId })}>Hola</button>
  )
};

export default ClientComponent;