import React from 'react';
import PuppyCard from '../../components/PuppyCard/PuppyCard';
import { useLocation } from 'react-router-dom';

function PuppyDetailPage(props) {
  const {state : {puppy} } = useLocation()
  // const puppy = useLocation().state.puppy

  return (
    <>
      <h1>Puppy Details</h1>
      <PuppyCard puppy={puppy} key={puppy._id} />
    </>
  );
}

export default PuppyDetailPage;