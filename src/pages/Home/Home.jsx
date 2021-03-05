import React from 'react';
import DescriptionCard from '../../components/DescriptionCard';
import db from '../../data.json';
import QuizLayout from '../../layouts/QuizLayout';

export default function Home() {
  return (
    <QuizLayout title={db.title}>
      <DescriptionCard />
    </QuizLayout>
  );
}
