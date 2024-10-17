'use client'
import { useRouter } from 'next/router';
import {useParams} from "next/navigation"
import { useEffect, useState } from 'react';

const UsuarioPage = () => {
  const id = useParams()
  console.log(id)
  return (
    <div>
      <h1>prueba</h1>
    </div>
  );
};

export default UsuarioPage;
