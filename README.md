# React + TypeScript

Technical test

## Task

Implement the logic of a music player.

### Introduction

You are given an empty context function and three components called `ControlBar`, `PlayList` and `PlayedSongTitle`. Your task is to implement the logic of the components that would make up a music player.

The `ControlBar` component renders a bar at the bottom of the page consisting of:

- the next song button;
- the previous song button;
- the loop mode button (Not replaying / Replaying all / Replaying one).

The `Songs` component is responsible for displaying song titles and authors, and for choosing and highlighting the currently played song.

The `PlayedSongTitle` displays the title and the author of the currently played song;

Assume that the synchronization of data between the components will only be handled through a Context. Below you can find a mental model of how the components will relate to each other:

```javascript
<PlayerProvider>
    <main data-testid="mainPart">
        <PlayList/>
        <PlayedSongTitle/>
        <ControlBar/>
    </main>
</PlayerProvider>
```

Requirements

1. In the `PlayList` component, the current song should be chosen by clicking on the `Song` component. The current song should have the `active` property set to true in. If handled properly, the active song title should de displayed on green.

2. In the `PlayedSongTitle` component the currently played song should be displayed in the following format: `${author} - ${songTitle}`. If no song is selected an empty string `""`.

3. In the `ControlBar` component, the currentMode button should display the current label for each loop mode (Not replaying / Replaying all / Replaying one). Initially, the current mode should be set to Not replaying.

4. Clicking the currentMode button should change the mode in the following order: Not replaying -> Replaying all -> Replaying one -> Not replaying -> ...

5. Each loop mode specifies the logic behind how the songs should be played:

    - Not replaying mode: if the previous button is pressed when there is no previous song, the current song should stay the same; if the next button is pressed when there is no next song, no song should be played.

    - Replaying all mode: if the previous button is pressed when there is no previous song, the last song should be played; if the next button is pressed when there is no next song, the first song should be played.

    - Replaying one mode: if the previous or next button is pressed, the current song should stay the same.

6. Clicking the previous button should change the current song to the previous song. If there is no previous song, it should change the song appropriately to the enabled mode.

7. Clicking the next button should change the current song to the next song. If there is no next song, it should change the song appropriately to the enabled mode.

8. In `usePlayerContext` create a mechanism for throwing errors when the consumer (usePlayerContext) is used within components not wrapped with the provider. Such errors should state "usePlayerContext must be used within a PlayerProvider" instead of returning the context data.

Assumptions:

- Components, styles, etc. will be prepared upfront; your only task is to focus on the logic to handle the player. Try not to alter the existing components, or some tests might fail.
- Assume that all necessary data exchanged between components will be transported via Context. Don't try to pass any data to ControlBar or Songs via props or by pasting code from one component to another to avoid having to use Context.

SongList structure

The songList array imported from the constants.js file has the following structure:

```jsx
[
  {
    title: 'My heart will go on',
    author: 'Celine Dion',
    id: 'a5ff8896'
  },
  {
    title: 'Court of the Crimson King',
    author: 'King Crimson',
    id: 'a5ff6cb8'
  },
];
```

Example scenario:

- Click on the first song
- The first song title is green
- Press the next button
- The second song title is green
- Keep pressing next until you reach the last song
- Click next when the last song is active
- No song is active
- Click on the first song
- Press the current mode button
- The current mode button label says Replaying all
- Keep pressing next until you reach the last song
- Click next when the last song is active
- The first song is active
- Press previous
- The last song is active
- Click on the first song
- Press the current mode button
- The current mode button label says Replaying one
- Press next
- The first song is still active
- Press current mode button
- The current mode button layer says Not replaying
- Press next
- The second song is now active
