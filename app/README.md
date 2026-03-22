# SnapHunt Web Demo

SnapHunt turns waiting time into a playful scavenger hunt experience.

This implementation is a React + Vite demo build with 17 routed screens/states that match the provided Figma exports using real image assets.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Asset Source

Assets are expected in `public/assets`.

## Route Map

- `/signup` and `/`
- `/signup/filled`
- `/login`
- `/login/filled`
- `/camera`
- `/camera/searching`
- `/camera/tutorial/1`
- `/camera/tutorial/2`
- `/camera/tutorial/3`
- `/camera/tutorial/4`
- `/camera/quests`
- `/camera/fact`
- `/camera/reward`
- `/camera/finish`
- `/profile`
- `/level`
- `/leaderboard`

## Notes

- Camera/object detection is mocked in this phase.
- Screens are organized as route states for reliable demo navigation.
- Styling and components are centralized in `src/index.css` and `src/App.tsx` for the first implementation pass.
