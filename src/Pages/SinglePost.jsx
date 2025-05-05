import React from 'react';
import { useParams, useSearchParams } from 'react-router';

export default function SinglePost() {
  console.log(useSearchParams());
  const { id } = useParams();

  return <div>SinglePost id : {id}</div>;
}
