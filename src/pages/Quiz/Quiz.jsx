import React from 'react';
import QuestionCard from '../../components/QuestionCard';
import db from '../../data.json';
import QuizLayout from '../../layouts/QuizLayout';

export default function Quiz() {
  return (
    <QuizLayout title={db.title}>
      <QuestionCard />
    </QuizLayout>
  );
}
