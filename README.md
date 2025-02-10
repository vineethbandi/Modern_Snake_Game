# 🐍 Snake Game

A modern implementation of the classic Snake Game built with JavaScript and CSS, featuring smooth controls, sound effects, and high score tracking.

## 🌟 Features

- **Smooth Controls**: Responsive arrow key controls for seamless snake movement
- **Dynamic Difficulty**: Speed increases as your score grows
- **Sound Effects**: Immersive audio feedback for:
  - Food consumption
  - Game over
  - High score achievement
  - Movement
- **Score System**: 
  - Real-time score tracking
  - Local storage for high score persistence
  - Visual feedback for new high scores
- **Responsive Design**: Playable on both desktop and mobile devices

## 🎯 How to Play

1. **Starting the Game**
   - Open the game in your browser
   - Press any key to begin
   - Use arrow keys (↑, ↓, ←, →) to control the snake

2. **Gameplay Objectives**
   - Guide the snake to eat the food
   - Each food item increases your score and snake length
   - Avoid colliding with:
     - The walls
     - The snake's own body

3. **Game Over**
   - Collision with walls or snake body ends the game
   - Press any key to restart
   - Your high score is automatically saved

## 🛠️ Customization

### Speed Adjustment
```javascript
// In game.js
const initialSpeed = 5; // Default speed
const speedIncrement = 0.5; // Speed increase per food item
```

### Difficulty Levels
```javascript
// Add custom difficulty levels
const difficultyLevels = {
  easy: { speed: 5, speedIncrement: 0.3 },
  medium: { speed: 8, speedIncrement: 0.5 },
  hard: { speed: 12, speedIncrement: 0.7 }
};
```

### Custom Sounds
Replace sound files in the `sounds` directory:
- `eat.mp3`: Food consumption sound
- `gameover.mp3`: Game over sound
- `highscore.mp3`: New high score achievement
- `move.mp3`: Movement sound

## 💻 Technical Requirements

- Modern web browser with JavaScript enabled
- Supported browsers:
  - Chrome (latest)
  - Firefox (latest)
  - Safari (latest)
  - Edge (latest)

## 🎨 Color Scheme

```css
:root {
  --snake-color: #4CAF50;
  --food-color: #FF5722;
  --background-color: #212121;
  --grid-color: #424242;
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original Snake Game concept by Nokia
- Sound effects from [SoundBible](https://soundbible.com)
- Font awesome for icons

Made with ❤️ by Vineeth Bandi
