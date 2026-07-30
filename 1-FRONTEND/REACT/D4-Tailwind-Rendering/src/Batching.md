# React Batching — Beginner's Guide

## 1. What does a `setState` function actually do?

When you call something like `setCount(...)`, three things happen:

1. It tells React "the state changed."
2. React updates the value for the next render.
3. React re-renders the component — **but only if the value actually changed.** If you set the state to the same value it already had, React skips the re-render.

That third point is easy to miss, so keep it in mind: **calling a setter does not instantly repaint the screen.** It just schedules an update.

---

## 2. The problem: calling `setState` many times in a row

Look at this code:

```jsx
<button onClick={() => {
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
}}>
  Increment
</button>
```

You might expect the count to jump by 3. It doesn't — it only jumps by **1**. And the component only re-renders **once**, not three times.

Here's why: `count` in all three lines is the *same* value — the one this render started with. So all three lines are really saying `setCount(0 + 1)`, three times. React sees three identical updates and only needs to apply the last one.

---

## 3. What is "batching"?

**Batching** is React grouping multiple `setState` calls — made inside the same event handler — into a single update, instead of processing them one by one.

Think of it like this: React puts every `setState` call from one click into a box, waits until the click handler finishes running, and then opens the box once and applies everything together. That's why you get **one re-render**, no matter how many times you called `setState` inside that handler.

This is a performance feature. Re-rendering is expensive, so React avoids doing it three times when it only needs to do it once.

---

## 4. The fix: functional updates (using `prev`)

If you *do* want each call to build on the one before it, don't read the state variable directly. Instead, pass a **function** to the setter:

```jsx
setCount((prev) => {
  console.log(prev) // the latest state, not the stale one
  return prev + 1
})
```

Here, `prev` is a confusing name at first glance — it sounds like "the old value" — but it actually means **"the value right before this specific update runs."** Because React applies queued updates in order, each function gets the result of the one before it, not the value from when the render started.

So this:

```jsx
onClick={() => {
  setCount((prev) => {
    console.log(prev)
    return prev + 1
  })
  setCount((prev) => {
    console.log(prev)
    return prev + 1
  })
  setCount((prev) => {
    console.log(prev)
    return prev + 1
  })
}}
```

...still triggers only **one re-render** (batching still happens), but the count correctly goes up by **3**, because each function picks up where the last one left off.

---

## 5. The shorthand: implicit return

Once you're comfortable with the function version, you can shorten it using an arrow function's implicit return — no curly braces, no `return` keyword:

```jsx
onClick={() => {
  setCount(prev => prev + 1)
  setCount(prev => prev + 1)
  setCount(prev => prev + 1)
}}
```

This does exactly the same thing as the version above. It's just the style you'll see most often in real codebases.

---

## 6. Quick summary

| Pattern | Re-renders | Final result | Why |
|---|---|---|---|
| `setCount(count + 1)` × 3 | 1 | `count + 1` | All three reads use the same stale `count` from this render |
| `setCount(prev => { ...; return prev + 1 })` × 3 | 1 | `count + 3` | Each call receives the latest queued value via `prev` |
| `setCount(prev => prev + 1)` × 3 | 1 | `count + 3` | Same as above, just shorter syntax |

---

## 7. Key takeaways

- **Batching = grouping.** React collects every `setState` call inside one event handler and applies them together as a single re-render.
- **Reading state directly** (`count`) inside a batch always gives you the value from when the render started — not the value after earlier calls in the same batch.
- **Passing a function** (`prev => ...`) always gives you the most up-to-date queued value, so multiple updates in one handler stack correctly.
- Batching is about **performance** — it stops your UI from re-rendering more than necessary.