export default function ReactChallenge4() {

    return (
        <div className="challenge-container">
            <h1>Challenge 4</h1>
            <h3>useSWR()</h3>
            <br />
            <h5><a href="https://swr.vercel.app/">SWR</a> is a popular library of data fetching.</h5>
            <h5>Let's try to implement the basic usage by ourselves.</h5>
            <div style={{ textIndent: '3%' }}><code>{"import React from 'react'"}<br /></code></div>
            <div style={{ textIndent: '3%' }}><code>{"function App() {"}<br /></code></div>
            <div style={{ textIndent: '6%' }}><code>{`const { data, error } = useSWR('/api', fetcher)`}</code> <br /><code ></code></div>

            <div style={{ textIndent: '6%' }}><code>{"if (error) return <div>failed</div>"} <br /></code></div>
            <div style={{ textIndent: '6%' }}><code>{"if (!data) return <div>loading</div>"} <br /></code></div>
            <div style={{ textIndent: '6%' }}><code>{"return <div>succeeded</div>"} <br /></code></div>
            <div style={{ textIndent: '3%' }}><code>{"}"}</code></div>


            <ol>
                <li>this is not to replicate the true implementation of <code>useSWR()</code></li>
                <li>The first argument key is for deduplication, we can safely ignore it for now</li>
            </ol>
        </div>
    )
}