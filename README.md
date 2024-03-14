# useDelayAction Hook

This custom React hook is designed to allow developers to limit the frequency at which an action can be triggered by the user. It's ideal for actions that do not need to be completely blocked after execution but where you want to control the interval between executions. Common use cases include download buttons, copy to clipboard actions, etc.

## Features

- **Frequency Control**: Limits how often an action can be executed.
- **Ease of Use**: Implement the hook with just a few lines of code.
- **Versatility**: Useful across a wide range of web applications.

## Installation

Currently, the hook can be copied directly from this repository's.

## Usage

```jsx
import React from 'react';
import useDelayAction from '/hooks/useDelayAction';

const ExampleComponent = () => {
  const [isActive, triggerAction] = useDelayAction(1200);

  const handleClick = () => {
    triggerAction(() => console.log('Action executed!'));
  };

  return (
    <button onClick={handleClick} disabled={!isActive}>
      {isActive ? 'Click Me' : 'Please Wait...'}
    </button>
  );
};

export default ExampleComponent;
