'use client';

import { useState, useEffect } from "react";
import {StoreModal }from "@/components/modals/store-modal"; // Ubah nama impor agar sesuai dengan konvensi

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <>
      <StoreModal />
    </>
  );
};
