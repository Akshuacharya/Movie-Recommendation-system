# Movie Recommendation System

A Netflix-style movie recommendation engine built with React and TypeScript, featuring advanced collaborative filtering algorithms.

## Features

### 🎯 Recommendation Algorithms
- **User-Based Collaborative Filtering**: Finds users with similar preferences using cosine similarity
- **Item-Based Collaborative Filtering**: Recommends movies similar to ones you've liked
- **Hybrid Approach**: Combines both methods for enhanced accuracy

### 🎬 Interactive Demo
- Netflix-inspired dark theme UI
- Multiple user profiles with different preferences
- Real-time algorithm switching
- Detailed movie cards with ratings and descriptions
- User statistics and preference analysis

### 🧮 Technical Implementation
- **Cosine Similarity**: Measures similarity between user preferences or movie ratings
- **Pearson Correlation**: Alternative similarity metric for more nuanced comparisons
- **Matrix Operations**: Efficient user-item rating matrix processing
- **Weighted Scoring**: Intelligent combination of multiple recommendation sources

## How It Works

### User-Based Collaborative Filtering
1. Creates a user-item rating matrix
2. Calculates cosine similarity between users
3. Identifies users with similar taste patterns
4. Recommends highly-rated movies from similar users

### Item-Based Collaborative Filtering
1. Analyzes movie rating patterns across all users
2. Calculates similarity between movies
3. For each movie a user liked, finds similar movies
4. Recommends movies similar to user's favorites

### Hybrid Approach
- Combines user-based (60% weight) and item-based (40% weight) recommendations
- Boosts scores for movies recommended by both algorithms
- Provides more diverse and accurate suggestions

## Dataset

The system includes a curated dataset of:
- 12 popular movies across various genres
- 5 user profiles with distinct preferences
- 25 realistic user ratings
- Genre classifications and movie metadata

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Usage

1. **Select a User Profile**: Choose from 5 different user personas with varying movie preferences
2. **Pick an Algorithm**: Switch between user-based, item-based, or hybrid recommendations
3. **Explore Results**: View personalized movie suggestions with match percentages and explanations
4. **Analyze Statistics**: Review user preferences and rating patterns

## Technical Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with Netflix-inspired theme
- **Icons**: Lucide React
- **Math**: Custom similarity calculation algorithms
- **Build Tool**: Vite

## Algorithm Performance

The system demonstrates how different collaborative filtering approaches work:

- **User-Based**: Great for discovering movies from users with similar overall taste
- **Item-Based**: Excellent for finding movies similar to specific favorites
- **Hybrid**: Balances both approaches for comprehensive recommendations

## Future Enhancements

- Content-based filtering using movie genres and descriptions
- Deep learning models for advanced pattern recognition
- Real-time rating collection and model updates
- A/B testing framework for algorithm comparison
- Integration with external movie databases

## License

MIT License - feel free to use this project for learning and development purposes.