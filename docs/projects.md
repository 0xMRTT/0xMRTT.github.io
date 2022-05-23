---
sidebar_position: 1
---

# Projects

## [CNP (Create New Project)](/docs/cnp/why)

CNP is a practice project. I've created this to exercice my skills. It's a full featured cli tools which create a new project from a template. 


## TEST 

:::info

It's for testing markdown features

:::

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```