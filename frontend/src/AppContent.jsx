export default function AppContent({ phoneNumber, setPhoneNumber, handleCall, status, activeStep, resetSimulation }) {
  return (
    <>
<header className="fixed top-0 inset-x-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md min-w-0"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary"><span className="material-symbols-outlined text-[18px]">dialpad</span></div><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate">Exotel IVR Demo</span></div><span className="hidden lg:inline-flex items-center px-space-sm py-space-xs rounded bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">Developer Showcase / Learning Experiment</span></div><div className="flex items-center gap-space-lg"><nav className="hidden md:flex items-center gap-space-md" data-active-classes="bg-primary-container text-on-primary-container font-medium rounded"><a className="px-space-sm py-space-xs rounded text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors" data-path="how-it-works" href="#how-it-works">How It Works</a><a className="px-space-sm py-space-xs rounded text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors" data-path="demo" href="#demo">Live Demo</a><a className="px-space-sm py-space-xs rounded text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors" data-path="learnings" href="#learnings">Learnings</a><a className="px-space-sm py-space-xs rounded text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors" data-path="story" href="#story">Story</a><a className="px-space-sm py-space-xs rounded text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors" data-path="stack" href="#stack">Tech Stack</a></nav><div className="flex items-center gap-space-sm"><a className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface hover:text-on-surface font-label-caps text-label-caps uppercase transition-colors" href="https://github.com" rel="noopener noreferrer" target="_blank"><span className="material-symbols-outlined text-[16px]">code</span><span>GitHub Repo</span><span className="material-symbols-outlined text-[14px] text-on-surface-variant">arrow_outward</span></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></div></header><main className="w-full pt-16 bg-surface"><div className="flex flex-col w-full">

<section className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-24">

<div className="absolute inset-0 bg-[radial-gradient(#8083ff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-margin relative z-10">
<div className="flex flex-col items-start max-w-4xl">

<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container-high text-tertiary-fixed-dim font-telemetry-badge text-telemetry-badge uppercase tracking-wider mb-space-lg shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-ping opacity-75"></span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>✦ Built for Learning</span>
</div>

<div className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-space-xs">
          Exotel IVR Calling Demo
        </div>

<h1 className="font-display-hero text-headline-lg-mobile md:text-display-hero text-on-surface font-semibold tracking-tight leading-tight mb-space-md">
          Learning IVR Calling <br className="hidden sm:inline" />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
            with Exotel
          </span>
</h1>

<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-xl leading-relaxed">
          A simple learning project where I explored how IVR calling works using Exotel APIs and built a functional calling flow from browser initiation to voice synthesis and DTMF capture.
        </p>

<div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto mb-space-xl">
<a className="inline-flex items-center justify-center gap-space-sm px-space-lg py-3 rounded bg-primary text-on-primary font-headline-sm text-body-md font-semibold hover:bg-primary-fixed-dim transition-all shadow-lg hover:shadow-primary/20" href="#demo">
<span className="material-symbols-outlined text-[18px]">call</span>
<span>Try IVR Demo</span>
</a>
<a className="inline-flex items-center justify-center gap-space-sm px-space-lg py-3 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-md font-medium transition-colors" href="https://github.com" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">terminal</span>
<span>View Source Code</span>
</a>
</div>

<div className="w-full grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-lg bg-surface-container-lowest/60 rounded-xl p-space-md backdrop-blur-md">
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Built By</span>
<span className="font-body-md text-body-md font-semibold text-on-surface flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary">person</span>
              Aditya
            </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Telephony API</span>
<span className="font-code-block text-code-block text-secondary flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">api</span>
              Exotel v1/v2
            </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Status</span>
<span className="font-telemetry-badge text-telemetry-badge text-tertiary flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
              Active Experiment
            </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Call Latency</span>
<span className="font-code-block text-code-block text-on-surface flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary-container">sync</span>
              Real-time Webhooks
            </span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-lowest py-space-xl lg:py-24" id="how-it-works">
<div className="max-w-[1200px] mx-auto px-margin">

<div className="flex flex-col items-start mb-space-xl">
<div className="inline-flex items-center gap-space-xs font-label-caps text-label-caps text-primary uppercase tracking-widest mb-space-xs">
<span className="material-symbols-outlined text-[14px]">account_tree</span>
<span>Architecture & Flow</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
          How voice telephony travels to the backend
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xl">
          From HTTP initiate to voice synthesis and real-time webhook callback ingestion.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">

<div className="group relative flex flex-col p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300">
<div className="flex items-center justify-between mb-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">phone_android</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant/70 bg-surface-container-highest/80 px-space-xs py-0.5 rounded">01 / DISPATCH</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">1. User Trigger</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
            User initiates an outbound call request or enters their mobile telephone credentials in the developer console.
          </p>
<div className="mt-auto pt-space-sm font-code-block text-[11px] text-secondary flex items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded">
<span>POST /api/call/initiate</span>
</div>
</div>

<div className="group relative flex flex-col p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300">
<div className="flex items-center justify-between mb-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">cell_tower</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant/70 bg-surface-container-highest/80 px-space-xs py-0.5 rounded">02 / PSTN</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">2. Carrier Network</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
            PSTN network routes the cellular audio stream, verifies caller ID handshake, and pins to Exotel virtual number pool.
          </p>
<div className="mt-auto pt-space-sm font-code-block text-[11px] text-tertiary flex items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded">
<span>SIP Trunking Handshake</span>
</div>
</div>

<div className="group relative flex flex-col p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300">
<div className="flex items-center justify-between mb-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest text-tertiary-fixed-dim flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">cloud_sync</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant/70 bg-surface-container-highest/80 px-space-xs py-0.5 rounded">03 / ENGINE</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">3. Exotel IVR Engine</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
            Exotel executes applet logic, synthesizes voice greetings, listens for DTMF dialpad presses, and coordinates callbacks.
          </p>
<div className="mt-auto pt-space-sm font-code-block text-[11px] text-primary flex items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded">
<span>IVR Applet • DTMF Parser</span>
</div>
</div>

<div className="group relative flex flex-col p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300">
<div className="flex items-center justify-between mb-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest text-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">terminal</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant/70 bg-surface-container-highest/80 px-space-xs py-0.5 rounded">04 / BACKEND</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">4. Express Backend</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
            Node.js server validates incoming webhook signatures, logs caller telemetry, and responds with dynamic passthru actions.
          </p>
<div className="mt-auto pt-space-sm font-code-block text-[11px] text-on-surface-variant flex items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded">
<span>Webhook: CallStatus=completed</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-xl lg:py-24" id="demo">
<div className="max-w-[1200px] mx-auto px-margin">

<div className="flex flex-col items-start mb-space-xl">
<div className="inline-flex items-center gap-space-xs font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-space-xs">
<span className="material-symbols-outlined text-[14px]">play_circle</span>
<span>Interactive Call Demo</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
          Trigger and trace an IVR session
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xl">
          Simulate an outbound voice call trigger and track state changes through Exotel&apos;s webhook orchestration lifecycle.
        </p>
</div>

<div className="w-full bg-surface-container-low rounded-2xl p-space-md lg:p-space-xl shadow-2xl">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pb-space-lg">
<div className="flex items-center gap-space-md">
<div className="flex gap-1.5">
<span className="w-3 h-3 rounded-full bg-error-container"></span>
<span className="w-3 h-3 rounded-full bg-surface-bright"></span>
<span className="w-3 h-3 rounded-full bg-tertiary-container"></span>
</div>
<span className="font-code-block text-code-block text-on-surface-variant">exotel://session-orchestrator/v1</span>
</div>
<div className="flex items-center gap-space-sm">
<span className={`inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-high font-telemetry-badge text-telemetry-badge ${status.error ? "text-error" : status.loading ? "text-secondary" : "text-tertiary"}`}>
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span id="call-status-pill">{status.message}</span>
</span>
<span className="px-space-sm py-0.5 rounded bg-primary-container/20 text-primary font-label-caps text-label-caps uppercase">
              Powered by Exotel API
            </span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl pt-space-md">

<div className="lg:col-span-5 flex flex-col justify-between space-y-space-lg">
<div className="space-y-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-caps text-label-caps text-outline uppercase tracking-wider" htmlFor="caller-input">
                  Destination Number
                </label>
<div className="flex items-center rounded-lg bg-surface-container-lowest overflow-hidden focus-within:ring-2 focus-within:ring-primary">
<div className="px-space-md py-space-sm bg-surface-container-high text-on-surface font-code-block text-body-md flex items-center gap-1">
<span>🇮🇳</span>
<span>+91</span>
</div>
<input className="w-full bg-transparent px-space-md py-space-sm text-on-surface font-code-block text-body-md focus:outline-none placeholder:text-outline/50" id="caller-input" maxLength="10" placeholder="Enter 10-digit mobile number" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant">
                  Simulator mode: Test call invokes realistic webhook events locally.
                </span>
</div>

<div className="pt-space-xs flex flex-col gap-space-sm">
<button className="w-full flex items-center justify-center gap-space-sm py-3 px-space-lg rounded bg-primary text-on-primary font-headline-sm text-body-md font-semibold hover:bg-primary-fixed-dim transition-all shadow-md active:scale-[0.99]" id="btn-initiate-call" onClick={handleCall} disabled={status.loading} >
<span className="material-symbols-outlined text-[18px]">call</span>
<span>Start IVR Call 📞</span>
</button>
<button className="w-full flex items-center justify-center gap-space-sm py-2 px-space-lg rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant font-code-block text-body-sm transition-colors" id="btn-reset-call" onClick={resetSimulation} >
<span className="material-symbols-outlined text-[16px]">restart_alt</span>
<span>Reset State</span>
</button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Simulate DTMF Input</span>
<span className="font-code-block text-[11px] text-secondary" id="dtmf-feedback">Awaiting Call...</span>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="py-2 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-code-block font-semibold transition-colors" >1</button>
<button className="py-2 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-code-block font-semibold transition-colors" >2</button>
<button className="py-2 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-code-block font-semibold transition-colors" >3</button>
<button className="py-2 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-code-block font-semibold transition-colors" >4</button>
<button className="py-2 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-code-block font-semibold transition-colors" >5</button>
<button className="py-2 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-code-block font-semibold transition-colors" >6</button>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-between space-y-space-md">

<div className="flex flex-col space-y-3">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">IVR Applet Execution Track</span>

<div id="sim-step-1" className={`flex items-start gap-space-md p-space-sm rounded-lg transition-all ${activeStep >= 1 ? "bg-surface-container-high shadow-md" : "bg-surface-container"}`}>
<div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-code-block text-[11px] step-badge ${activeStep >= 1 ? "bg-primary text-on-primary font-bold" : "bg-surface-container-highest text-outline"}`}>1</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="font-body-md font-semibold text-on-surface">Call Placed</h4>
<span className="font-code-block text-[11px] text-outline step-timer">POST /Calls/connect</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Outbound leg dial request created with AccountSid and virtual caller ID.</p>
</div>
</div>

<div id="sim-step-2" className={`flex items-start gap-space-md p-space-sm rounded-lg transition-all ${activeStep >= 2 ? "bg-surface-container-high shadow-md" : "bg-surface-container"}`}>
<div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-code-block text-[11px] step-badge ${activeStep >= 2 ? "bg-primary text-on-primary font-bold" : "bg-surface-container-highest text-outline"}`}>2</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="font-body-md font-semibold text-on-surface">Welcome Message</h4>
<span className="font-code-block text-[11px] text-outline step-timer">TTS Stream</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">"Welcome to Aditya&apos;s IVR learning demo. Please listen carefully to the options."</p>
</div>
</div>

<div id="sim-step-3" className={`flex items-start gap-space-md p-space-sm rounded-lg transition-all ${activeStep >= 3 ? "bg-surface-container-high shadow-md" : "bg-surface-container"}`}>
<div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-code-block text-[11px] step-badge ${activeStep >= 3 ? "bg-primary text-on-primary font-bold" : "bg-surface-container-highest text-outline"}`}>3</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="font-body-md font-semibold text-on-surface">Press 1 for Sales / Press 2 for Support</h4>
<span className="font-code-block text-[11px] text-outline step-timer">Gather DTMF</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">System waits for numeric touch-tone frequency. Timeout set to 10s.</p>
</div>
</div>

<div id="sim-step-4" className={`flex items-start gap-space-md p-space-sm rounded-lg transition-all ${activeStep >= 4 ? "bg-surface-container-high shadow-md" : "bg-surface-container"}`}>
<div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-code-block text-[11px] step-badge ${activeStep >= 4 ? "bg-primary text-on-primary font-bold" : "bg-surface-container-highest text-outline"}`}>4</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="font-body-md font-semibold text-on-surface">Continue & Response Passthru</h4>
<span className="font-code-block text-[11px] text-outline step-timer">Webhook Hook</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Backend processes DTMF selection and executes conversational voice reply.</p>
</div>
</div>

<div id="sim-step-5" className={`flex items-start gap-space-md p-space-sm rounded-lg transition-all ${activeStep >= 5 ? "bg-surface-container-high shadow-md" : "bg-surface-container"}`}>
<div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-code-block text-[11px] step-badge ${activeStep >= 5 ? "bg-primary text-on-primary font-bold" : "bg-surface-container-highest text-outline"}`}>5</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="font-body-md font-semibold text-on-surface">End Call & CDR Logging</h4>
<span className="font-code-block text-[11px] text-outline step-timer">Hangup Event</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Call completes. Duration, status, and recording URLs saved into database.</p>
</div>
</div>
</div>

<div className="rounded-lg bg-surface-container-lowest overflow-hidden">
<div className="flex items-center justify-between px-space-md py-2 bg-surface-container-high/60">
<span className="font-code-block text-[12px] text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary">data_object</span>
<span>Exotel Request & Webhook Inspector</span>
</span>
<div className="flex gap-2">
<button className="font-code-block text-[11px] px-2 py-0.5 rounded bg-primary text-on-primary" id="tab-curl" >cURL</button>
<button className="font-code-block text-[11px] px-2 py-0.5 rounded text-outline hover:text-on-surface" id="tab-json" >Payload</button>
</div>
</div>
<div className="p-space-md overflow-x-auto text-on-surface font-code-block text-code-block leading-relaxed bg-surface-container-lowest" id="inspector-content">
<span className="text-tertiary">curl</span> -X POST \
  https://api.exotel.com/v1/Accounts/<span className="text-secondary">EXO_ACC_SID</span>/Calls/connect \
  -u <span className="text-secondary">$EXOTEL_API_KEY</span>:<span className="text-secondary">$EXOTEL_TOKEN</span> \
  -d <span className="text-primary">"From=09876543210"</span> \
  -d <span className="text-primary">"To=08047100000"</span> \
  -d <span className="text-primary">"CallerId=08047100000"</span> \
  -d <span className="text-primary">"Url=http://my-backend.app/ivr-callback"</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-lowest py-space-xl lg:py-24" id="learnings">
<div className="max-w-[1200px] mx-auto px-margin">

<div className="flex flex-col items-start mb-space-xl">
<div className="inline-flex items-center gap-space-xs font-label-caps text-label-caps text-tertiary uppercase tracking-widest mb-space-xs">
<span className="material-symbols-outlined text-[14px]">psychology</span>
<span>Key Takeaways & Skills</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
          Core concepts mastered while building this
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xl">
          Everything from low-level SIP event synchronization to production Express middleware design.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">

<div className="flex flex-col p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all">
<div className="w-9 h-9 rounded bg-surface-container-highest text-primary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">1. Exotel APIs</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Mastered outbound call endpoints, phone number mapping, API rate limiting, and managing Exotel applet flows via REST.
          </p>
</div>

<div className="flex flex-col p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all">
<div className="w-9 h-9 rounded bg-surface-container-highest text-secondary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[20px]">dialpad</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">2. IVR & Call Flow</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Designed multi-branch greeting trees, DTMF touch-tone frequency parsing, and fallback routes when user input times out.
          </p>
</div>

<div className="flex flex-col p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all">
<div className="w-9 h-9 rounded bg-surface-container-highest text-tertiary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[20px]">sync_alt</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">3. Webhooks</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Configured HTTP POST callbacks to handle real-time state changes like <code className="text-tertiary font-code-block text-[11px]">ringing</code>, <code className="text-tertiary font-code-block text-[11px]">in-progress</code>, and <code className="text-tertiary font-code-block text-[11px]">completed</code>.
          </p>
</div>

<div className="flex flex-col p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all">
<div className="w-9 h-9 rounded bg-surface-container-highest text-primary-fixed-dim flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[20px]">javascript</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">4. Node.js Integration</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Built an Express.js middleware server to orchestrate telephony requests, sanitize inputs, and safeguard environment credentials.
          </p>
</div>

<div className="flex flex-col p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all">
<div className="w-9 h-9 rounded bg-surface-container-highest text-secondary-fixed flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[20px]">http</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">5. API Request & Response</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Learned HTTP status codes, structured JSON vs form-urlencoded payloads, and idempotency safeguards in telecom pipelines.
          </p>
</div>

<div className="flex flex-col p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all">
<div className="w-9 h-9 rounded bg-surface-container-highest text-tertiary-fixed-dim flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[20px]">lock</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">6. Telephony Authentication</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Implemented Basic HTTP Authentication using API Key, API Token, and Account SID stored safely in environment variables.
          </p>
</div>

<div className="flex flex-col p-space-lg rounded-xl bg-surface-container hover:bg-surface-container-high transition-all md:col-span-2 lg:col-span-3">
<div className="flex items-center gap-space-sm mb-space-sm">
<div className="w-9 h-9 rounded bg-surface-container-highest text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">event_repeat</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">7. Call Lifecycle & Event Handling</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed max-w-3xl">
            Understood the full lifecycle of telephony: dialed → ringing → answered → DTMF interaction → hangup. Handled edge cases such as busy signals, call rejections, network timeouts, and asynchronous audio recording callbacks.
          </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-xl lg:py-24" id="story">
<div className="max-w-[1200px] mx-auto px-margin">
<div className="max-w-3xl mx-auto">
<div className="inline-flex items-center gap-space-xs font-label-caps text-label-caps text-primary uppercase tracking-widest mb-space-xs">
<span className="material-symbols-outlined text-[14px]">history_edu</span>
<span>Why I Built This</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight mb-space-lg">
          Bridging web development & telecom hardware
        </h2>

<div className="relative p-space-lg md:p-space-xl rounded-2xl bg-surface-container-low shadow-xl">
<div className="flex items-center gap-space-sm text-outline mb-space-md">
<span className="material-symbols-outlined text-[24px] text-primary">format_quote</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider">Developer Log • Personal Note</span>
</div>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-space-md">
            I built this project while learning Exotel and backend API integrations. Instead of only reading documentation, I wanted to understand how a real IVR calling workflow works by building a small working project from scratch.
          </p>

<div className="p-space-md rounded-lg bg-surface-container-high my-space-md">
<p className="font-headline-sm text-headline-sm text-primary-fixed-dim font-medium italic">
              "The best way to understand telephony was getting an actual phone to ring and handling the webhook event in real time."
            </p>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
            Wiring up voice webhooks taught me how telecom systems bridge between asynchronous PSTN signaling and modern web servers. Debugging DTMF digit timeouts and checking call logs on Exotel&apos;s dashboard gave me a solid appreciation for conversational systems design.
          </p>
<div className="flex items-center justify-between pt-space-md bg-surface-container/40 p-space-sm rounded-lg">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-on-primary">
                A
              </div>
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-surface">Aditya</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Backend & Full Stack Learner</span>
</div>
</div>
<div className="font-telemetry-badge text-telemetry-badge text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>VERIFIED EXPERIMENT</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-lowest py-space-xl lg:py-24" id="stack">
<div className="max-w-[1200px] mx-auto px-margin">

<div className="flex flex-col items-center text-center mb-space-xl">
<div className="inline-flex items-center gap-space-xs font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-space-xs">
<span className="material-symbols-outlined text-[14px]">layers</span>
<span>Tech Stack</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
          Tools & Protocols Used
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-lg">
          The lightweight, modern backend stack used to orchestrate voice logic.
        </p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-md">

<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all text-center">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[24px]">dialer_sip</span>
</div>
<span className="font-headline-sm text-body-md font-semibold text-on-surface">Exotel</span>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">Telephony & Voice</span>
</div>

<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all text-center">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest text-tertiary flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[24px]">terminal</span>
</div>
<span className="font-headline-sm text-body-md font-semibold text-on-surface">Node.js</span>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">Runtime Engine</span>
</div>

<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all text-center">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest text-secondary flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[24px]">dns</span>
</div>
<span className="font-headline-sm text-body-md font-semibold text-on-surface">Express.js</span>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">REST API Server</span>
</div>

<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all text-center">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest text-primary-fixed-dim flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[24px]">code</span>
</div>
<span className="font-headline-sm text-body-md font-semibold text-on-surface">JavaScript</span>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">ES6+ Async/Await</span>
</div>

<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all text-center">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest text-tertiary-fixed-dim flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[24px]">api</span>
</div>
<span className="font-headline-sm text-body-md font-semibold text-on-surface">REST API</span>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">Stateless Client</span>
</div>

<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all text-center">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest text-secondary-fixed-dim flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[24px]">notifications_active</span>
</div>
<span className="font-headline-sm text-body-md font-semibold text-on-surface">Webhooks</span>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">Event-driven Callbacks</span>
</div>
</div>
</div>
</section>
</div>
</main>
    </>
  );
}