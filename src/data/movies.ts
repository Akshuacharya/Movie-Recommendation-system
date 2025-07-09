import { Movie, Rating, User } from '../types';

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genres: ["Drama"],
    year: 1994,
    rating: 9.3,
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    id: 2,
    title: "The Godfather",
    genres: ["Crime", "Drama"],
    year: 1972,
    rating: 9.2,
    poster: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    id: 3,
    title: "The Dark Knight",
    genres: ["Action", "Crime", "Drama"],
    year: 2008,
    rating: 9.0,
    poster: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
  },
  {
    id: 4,
    title: "Pulp Fiction",
    genres: ["Crime", "Drama"],
    year: 1994,
    rating: 8.9,
    poster: "https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption."
  },
  {
    id: 5,
    title: "Forrest Gump",
    genres: ["Drama", "Romance"],
    year: 1994,
    rating: 8.8,
    poster: "https://images.pexels.com/photos/7991226/pexels-photo-7991226.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop",
    description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man."
  },
  {
    id: 6,
    title: "Inception",
    genres: ["Action", "Sci-Fi", "Thriller"],
    year: 2010,
    rating: 8.8,
    poster: "https://images.pexels.com/photos/7991227/pexels-photo-7991227.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea."
  },
  {
    id: 7,
    title: "The Matrix",
    genres: ["Action", "Sci-Fi"],
    year: 1999,
    rating: 8.7,
    poster: "https://images.pexels.com/photos/7991228/pexels-photo-7991228.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop",
    description: "A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix."
  },
  {
    id: 8,
    title: "Goodfellas",
    genres: ["Biography", "Crime", "Drama"],
    year: 1990,
    rating: 8.7,
    poster: "https://images.pexels.com/photos/7991229/pexels-photo-7991229.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop",
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners."
  },
  {
    id: 9,
    title: "Interstellar",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    year: 2014,
    rating: 8.6,
    poster: "https://images.pexels.com/photos/7991230/pexels-photo-7991230.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genres: ["Adventure", "Drama", "Fantasy"],
    year: 2001,
    rating: 8.8,
    poster: "https://images.pexels.com/photos/7991231/pexels-photo-7991231.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth."
  },
  {
    id: 11,
    title: "Titanic",
    genres: ["Drama", "Romance"],
    year: 1997,
    rating: 7.8,
    poster: "https://images.pexels.com/photos/7991232/pexels-photo-7991232.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop",
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
  },
  {
    id: 12,
    title: "Avatar",
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2009,
    rating: 7.8,
    poster: "https://images.pexels.com/photos/7991233/pexels-photo-7991233.jpeg?auto=compress&cs=tinysrgb&w=300&h=450&fit=crop",
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
  }
];

export const users: User[] = [
  { id: 1, name: "Alice", preferences: ["Drama", "Romance"] },
  { id: 2, name: "Bob", preferences: ["Action", "Sci-Fi"] },
  { id: 3, name: "Charlie", preferences: ["Crime", "Drama"] },
  { id: 4, name: "Diana", preferences: ["Fantasy", "Adventure"] },
  { id: 5, name: "Eve", preferences: ["Thriller", "Sci-Fi"] }
];

export const ratings: Rating[] = [
  // Alice's ratings (likes drama and romance)
  { userId: 1, movieId: 1, rating: 5 }, // Shawshank
  { userId: 1, movieId: 5, rating: 5 }, // Forrest Gump
  { userId: 1, movieId: 11, rating: 4 }, // Titanic
  { userId: 1, movieId: 2, rating: 4 }, // Godfather
  { userId: 1, movieId: 3, rating: 3 }, // Dark Knight
  
  // Bob's ratings (likes action and sci-fi)
  { userId: 2, movieId: 3, rating: 5 }, // Dark Knight
  { userId: 2, movieId: 6, rating: 5 }, // Inception
  { userId: 2, movieId: 7, rating: 5 }, // Matrix
  { userId: 2, movieId: 12, rating: 4 }, // Avatar
  { userId: 2, movieId: 9, rating: 4 }, // Interstellar
  
  // Charlie's ratings (likes crime and drama)
  { userId: 3, movieId: 2, rating: 5 }, // Godfather
  { userId: 3, movieId: 4, rating: 5 }, // Pulp Fiction
  { userId: 3, movieId: 8, rating: 5 }, // Goodfellas
  { userId: 3, movieId: 1, rating: 4 }, // Shawshank
  { userId: 3, movieId: 3, rating: 4 }, // Dark Knight
  
  // Diana's ratings (likes fantasy and adventure)
  { userId: 4, movieId: 10, rating: 5 }, // LOTR
  { userId: 4, movieId: 12, rating: 4 }, // Avatar
  { userId: 4, movieId: 9, rating: 4 }, // Interstellar
  { userId: 4, movieId: 6, rating: 3 }, // Inception
  
  // Eve's ratings (likes thriller and sci-fi)
  { userId: 5, movieId: 6, rating: 5 }, // Inception
  { userId: 5, movieId: 7, rating: 5 }, // Matrix
  { userId: 5, movieId: 3, rating: 4 }, // Dark Knight
  { userId: 5, movieId: 9, rating: 4 }, // Interstellar
  { userId: 5, movieId: 4, rating: 3 }, // Pulp Fiction
];