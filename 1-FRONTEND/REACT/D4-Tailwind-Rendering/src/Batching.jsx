import { useState } from 'react'

const DemoCard = ({ title, badge, description, code, accent, buttonText, resultText, onRun }) => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    onRun(setCount, count)
  }

  return (
    <article className="flex flex-col gap-5 rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_-28px_rgba(15,23,42,0.9)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] ${accent.badge}`}>
          {badge}
        </span>
        <span className="text-xs text-slate-500">Live demo</span>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      </div>

      <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/80 p-4 font-mono text-[13px] leading-7 text-slate-300">
        {code}
      </pre>

      <div className={`rounded-2xl border px-5 py-6 text-center ${accent.panel}`}>
        <p className="text-sm text-slate-400">Count</p>
        <p className={`mt-2 text-5xl font-semibold tabular-nums ${accent.text}`}>{count}</p>
      </div>

      <button
        onClick={handleClick}
        className={`rounded-2xl px-4 py-3 font-semibold text-slate-950 transition duration-200 hover:-translate-y-[-1px ] hover:brightness-110 ${accent.button}`}
      >
        {buttonText}
      </button>

      <p className="text-sm text-slate-500">{resultText}</p>
    </article>
  )
}

const DirectClosureCard = () => {
  return (
    <DemoCard
      title="Direct value read"
      badge="Type 1"
      description="Every call reads the same old value from the current render, so the batch collapses to a single update."
      code={`setCount(count + 1)
setCount(count + 1)`}
      accent={{
        badge: 'bg-rose-500/10 text-rose-300',
        panel: 'border-rose-500/20 bg-rose-500/10',
        text: 'text-rose-300',
        button: 'bg-rose-400'
      }}
      buttonText="Run stale-closure demo"
      resultText="Expected result: the count becomes +1."
      onRun={(setCount, count) => {
        setCount(count + 1)
        setCount(count + 1)
      }}
    />
  )
}

const FunctionalUpdateCard = () => {
  return (
    <DemoCard
      title="Functional update"
      badge="Type 2"
      description="Each updater receives the latest value, so both calls are applied in order."
      code={`setCount(prev => {
  console.log(prev)
  return prev + 1
})
setCount(prev => {
  console.log(prev)
  return prev + 1
})`}
      accent={{
        badge: 'bg-cyan-500/10 text-cyan-300',
        panel: 'border-cyan-500/20 bg-cyan-500/10',
        text: 'text-cyan-300',
        button: 'bg-cyan-400'
      }}
      buttonText="Run functional update demo"
      resultText="Check the console to see each prev value."
      onRun={(setCount) => {
        setCount((prev) => {
          console.log(prev)
          return prev + 1
        })
        setCount((prev) => {
          console.log(prev)
          return prev + 1
        })
      }}
    />
  )
}

const ImplicitReturnCard = () => {
  return (
    <DemoCard
      title="Implicit return"
      badge="Type 3"
      description="The same functional update, written in the shorter arrow style you will use most often."
      code={`setCount(prev => prev + 1)
setCount(prev => prev + 1)`}
      accent={{
        badge: 'bg-violet-500/10 text-violet-300',
        panel: 'border-violet-500/20 bg-violet-500/10',
        text: 'text-violet-300',
        button: 'bg-violet-400'
      }}
      buttonText="Run implicit-return demo"
      resultText="Expected result: the count becomes +2."
      onRun={(setCount) => {
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
      }}
    />
  )
}

const Batching = () => {
  return (
    <section className="w-full rounded-[36px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_25px_120px_-35px_rgba(34,211,238,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <header className="max-w-3xl">
          <p className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
            React batching in action
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Three ways to update state in one click.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            Each card fires the same update pattern, but the result changes based on how the state is read.
          </p>
        </header>

        <div className="grid gap-6 xl:grid-cols-3">
          <DirectClosureCard />
          <FunctionalUpdateCard />
          <ImplicitReturnCard />
        </div>
      </div>
    </section>
  )
}

export default Batching


/*
Comments in easy words :

WHAT DOES 'setFunction' do ?

1. Re-Renders the parent function component
2. Update it's own state
3. Does not re-render when updating the same state value


Batching ---------->

Code :
<button onClick={() => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }}
>Increament</button>
Note : This code doesn't re-render 3 times, nither update the count + 3,
What it actually does is :

When calling a same setFunction in one function call multiple times,
so React turns on a term called "Batching";

Bathing -> Batch all the same setFunction calls

Batch means : 
  Wrap all the setFunction calls in one container
and execute that container once.


BUT : If we what this code to work, meaning only 1 re-render,
but count must be updated 3 times,

Either u can do this : setCount(count + 3)

But if u want it update with 3 separate calls :

• setFunction also have "Previous" which we call "prev"

"Previous" means current start, even though it's name is "Previous",
but it stores the current state

setFunction((prev) => {
  console.log(prev) // previous state (current)
  retrurn prev + 1
})

And u can do implecit return :
onClink=(() => {
  setFunction(prev => prev + 1)
  setFunction(prev => prev + 1)
  setFunction(prev => prev + 1)
})
This will only re-render 1 time (Batching)
And update the count 3 times with the help of "prev"
*/