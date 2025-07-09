# 🎬 Movie Recommendation System — Netflix-Style Engine

**Live Demo:**(https://superlative-manatee-7a950a.netlify.app)
A Netflix-inspired movie recommendation system built with **React 18**, **TypeScript**, and advanced **collaborative filtering** techniques.


## 🧠 Problem Statement

With the ever-growing volume of movies and streaming content, platforms like Netflix face the challenge of personalizing recommendations to improve engagement and retention. A generic approach doesn't suffice—viewers want content tailored to their tastes.



## 🎯 Objective

To build a robust, real-time **movie recommendation system** using **collaborative filtering** that mimics Netflix’s style and functionality. The system should recommend movies to users based on their preferences and viewing patterns.



## 🚀 Features

### 🔍 Recommendation Algorithms

* **User-Based Collaborative Filtering**
  Recommends movies by finding other users with similar rating patterns using **cosine similarity**.

* **Item-Based Collaborative Filtering**
  Suggests movies similar to ones the user already likes by comparing movie rating vectors.

* **Hybrid Approach**
  Combines both methods (user-based 60% + item-based 40%) for more accurate and diverse recommendations.

### 🎬 Interactive Demo UI

* **Netflix-Inspired Theme:** Dark mode UI styled with Tailwind CSS
* **Multiple User Profiles:** Simulates 5 distinct personas with unique movie tastes
* **Real-Time Algorithm Switching:** Switch between user-based, item-based, and hybrid approaches instantly
* **Detailed Movie Cards:** Show movie title, genre, rating, and description
* **User Statistics Dashboard:** Displays individual preferences, top genres, and similarity metrics

## 🧮 How It Works

### 👥 User-Based Collaborative Filtering

1. Create a user-item rating matrix
2. Use **cosine similarity** to find users with similar preferences
3. Recommend highly rated movies from similar users that the target user hasn’t watched

### 🎞️ Item-Based Collaborative Filtering

1. Analyze rating trends for all movies
2. Compute similarity between movies
3. For each liked movie, recommend others with high similarity scores

### ⚖️ Hybrid Recommendation System

1. Combine both algorithms using a weighted scoring system
2. Boost recommendations that appear in both sets
3. Produce more balanced and personalized suggestions

## 🧾 Dataset Details

A curated dataset was created to simulate realistic viewing behavior:

* **12 Popular Movies** — Spread across genres like action, drama, sci-fi, romance, and comedy
* **5 User Profiles** — Each with distinct preferences and personalities
* **25 Realistic Ratings** — Users rate movies on a scale (e.g., 1 to 5)
* **Genre Metadata** — For future use in content-based filtering

## 📊 Algorithm Insights

| Approach   | Strengths                                       | Best Use Case                             |
| ---------- | ----------------------------------------------- | ----------------------------------------- |
| User-Based | Great for finding content similar viewers liked | Exploring new genres with similar viewers |
| Item-Based | Good for similar-content suggestions            | Finding movies like your favorites        |
| Hybrid     | Balanced & diversified recommendations          | Overall improved user satisfaction        |


## ⚙️ Technical Stack

* **Frontend:** React 18 + TypeScript
* **Styling:** Tailwind CSS (Netflix-style theme)
* **Icons:** Lucide React
* **Math & Similarity:** Custom algorithms (Cosine Similarity, Pearson Correlation)
* **Build Tool:** Vite for fast dev/build performance
* **Deployment:** Netlify (CI/CD enabled)


## 📦 Installation & Usage

```bash
# Clone the repository
git clone https://github.com/your-username/movie-recommendation-system.git

# Navigate into the project
cd movie-recommendation-system

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### 🔧 How to Use

1. **Select a User Profile:** Choose one of the predefined user personas
2. **Pick an Algorithm:** Switch between user-based, item-based, or hybrid
3. **Explore Recommendations:** View movies suggested based on your taste
4. **Analyze Stats:** See how recommendations were calculated and compare similarities


## 🔮 Future Enhancements

* Integrate **content-based filtering** using movie descriptions and metadata
* Add **deep learning models** (e.g., Neural Collaborative Filtering) for richer predictions
* Build **real-time rating & feedback** collection
* Implement **A/B testing** for comparing algorithm performance
* Integrate with external APIs like **TMDB** or **IMDb**


## 🧾 License

This project is licensed under the **MIT License** — feel free to use, modify, and share it for educational or development purposes.

---

## 🤝 Acknowledgements

Thanks to all contributors and inspiration from Netflix’s personalized recommendation strategies.

---

## 🔗 Live Demo

Experience the full working demo here:
👉 (https://superlative-manatee-7a950a.netlify.app)**





