import React from 'react';
import QuizLayout from '../../layouts/QuizLayout';
import db from '../../data.json';
import ResultCard from '../../components/ResultCard';

export default function Result() {
  return (
    <QuizLayout title={db.title}>
      <ResultCard />
    </QuizLayout>
  );
}
