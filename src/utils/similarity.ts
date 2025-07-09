import { Rating } from '../types';

export function cosineSimilarity(vectorA: number[], vectorB: number[]): number {
  if (vectorA.length !== vectorB.length) {
    throw new Error('Vectors must have the same length');
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vectorA.length; i++) {
    dotProduct += vectorA[i] * vectorB[i];
    normA += vectorA[i] * vectorA[i];
    normB += vectorB[i] * vectorB[i];
  }

  if (normA === 0 || normB === 0) {
    return 0;
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

export function pearsonCorrelation(vectorA: number[], vectorB: number[]): number {
  if (vectorA.length !== vectorB.length || vectorA.length === 0) {
    return 0;
  }

  const n = vectorA.length;
  const sumA = vectorA.reduce((sum, val) => sum + val, 0);
  const sumB = vectorB.reduce((sum, val) => sum + val, 0);
  const meanA = sumA / n;
  const meanB = sumB / n;

  let numerator = 0;
  let sumSquareA = 0;
  let sumSquareB = 0;

  for (let i = 0; i < n; i++) {
    const diffA = vectorA[i] - meanA;
    const diffB = vectorB[i] - meanB;
    numerator += diffA * diffB;
    sumSquareA += diffA * diffA;
    sumSquareB += diffB * diffB;
  }

  const denominator = Math.sqrt(sumSquareA * sumSquareB);
  return denominator === 0 ? 0 : numerator / denominator;
}

export function createUserItemMatrix(ratings: Rating[], userIds: number[], movieIds: number[]): number[][] {
  const matrix: number[][] = [];
  
  for (let i = 0; i < userIds.length; i++) {
    matrix[i] = [];
    for (let j = 0; j < movieIds.length; j++) {
      const rating = ratings.find(r => r.userId === userIds[i] && r.movieId === movieIds[j]);
      matrix[i][j] = rating ? rating.rating : 0;
    }
  }
  
  return matrix;
}