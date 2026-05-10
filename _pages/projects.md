---
layout: page
title: projects
permalink: /projects/
nav: true
nav_order: 3
description: Featured personal projects—AI agents for investment research and LSTM-based market modeling.
_styles: |
  .projects-scroll-region {
    max-height: min(88vh, 1400px);
    overflow-y: auto;
    scroll-behavior: smooth;
    padding-right: 0.5rem;
    margin-bottom: 1.5rem;
    scrollbar-gutter: stable;
  }
  .projects-scroll-region:focus-visible {
    outline: 2px solid var(--global-theme-color, #0d6efd);
    outline-offset: 2px;
  }
  .project-card {
    scroll-margin-top: 4.75rem;
    padding-bottom: 0.25rem;
  }
  .project-card + .project-card {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding-top: 1.75rem;
    margin-top: 0.25rem;
  }
  html[data-theme="dark"] .project-card + .project-card {
    border-top-color: rgba(255, 255, 255, 0.12);
  }
---

{% assign stats_base = site.external_services.github_readme_stats_url %}
{% assign loc = site.lang | split: '-' | first %}

<p class="mb-3">
  Selected work from my GitHub. For more repositories, see
  <a href="{{ '/repositories/' | relative_url }}">repositories</a> or
  <a href="https://github.com/jbsdoki" target="_blank" rel="noopener noreferrer">github.com/jbsdoki</a>.
</p>

<p class="small text-muted mb-3">
  Jump to:
  <a href="#project-adk">ADK agent</a>
  ·
  <a href="#project-lstm">LSTM model</a>
</p>

<div
  class="projects-scroll-region rounded border px-3 px-md-4 py-3"
  tabindex="0"
  role="region"
  aria-label="Project list"
>
  <article id="project-adk" class="project-card mb-0">
    <h2 class="h3 mt-0">AI agent for stock market investment research</h2>
    <p class="text-muted mb-2">Jun 2025 – Jul 2025 · Personal project</p>
    <p>
      Built with the
      <strong>Google Agent Development Kit (ADK)</strong>
      and Gemini: an agent that searches the web and uses the Yahoo Finance ecosystem (via
      <code>yfinance</code>) to gather data for stock research—historical performance, forward-looking context, and
      current valuations.
    </p>
    <p>
      Architecture: a <strong>manager</strong> agent coordinates flow, with <strong>three sub-agents</strong> focused
      on past performance, future performance outlook, and current valuations and market data.
    </p>
    <p class="mb-3"><strong>Skills:</strong> Google Agent Development Kit (ADK), Gemini, Python, web scraping, Yahoo Finance / yfinance</p>
    <a href="https://github.com/jbsdoki/Google_agentic_AI_experiment" target="_blank" rel="noopener noreferrer" class="d-block">
      <img
        class="only-light w-100 rounded z-depth-1"
        alt="GitHub repository card: Google_agentic_AI_experiment"
        src="{{ stats_base }}/api/pin/?username=jbsdoki&repo=Google_agentic_AI_experiment&theme={{ site.repo_theme_light }}&locale={{ loc }}&show_owner=false&description_lines_count=3"
      >
      <img
        class="only-dark w-100 rounded z-depth-1"
        alt="GitHub repository card: Google_agentic_AI_experiment"
        src="{{ stats_base }}/api/pin/?username=jbsdoki&repo=Google_agentic_AI_experiment&theme={{ site.repo_theme_dark }}&locale={{ loc }}&show_owner=false&description_lines_count=3"
      >
    </a>
    <p class="mt-2 mb-0">
      <a href="https://github.com/jbsdoki/Google_agentic_AI_experiment" target="_blank" rel="noopener noreferrer">jbsdoki/Google_agentic_AI_experiment</a>
    </p>
  </article>

  <article id="project-lstm" class="project-card mb-0">
    <h2 class="h3 mt-0">LSTM machine learning model for stock prediction</h2>
    <p class="text-muted mb-2">Jan 2025 – Feb 2025 · Personal project</p>
    <p>
      A <strong>TensorFlow Keras LSTM</strong> model trained on historical market data: given a window of
      <strong>N</strong> trading days, the model predicts direction or behavior for day <strong>N + 1</strong>.
    </p>
    <p>
      The repo covers experimentation, data preparation with <strong>Pandas</strong>, and training/evaluation
      workflows for time-series forecasting.
    </p>
    <p class="mb-3"><strong>Skills:</strong> TensorFlow, Keras, LSTM, Pandas, Python</p>
    <a href="https://github.com/jbsdoki/ML_Market_Prediction" target="_blank" rel="noopener noreferrer" class="d-block">
      <img
        class="only-light w-100 rounded z-depth-1"
        alt="GitHub repository card: ML_Market_Prediction"
        src="{{ stats_base }}/api/pin/?username=jbsdoki&repo=ML_Market_Prediction&theme={{ site.repo_theme_light }}&locale={{ loc }}&show_owner=false&description_lines_count=3"
      >
      <img
        class="only-dark w-100 rounded z-depth-1"
        alt="GitHub repository card: ML_Market_Prediction"
        src="{{ stats_base }}/api/pin/?username=jbsdoki&repo=ML_Market_Prediction&theme={{ site.repo_theme_dark }}&locale={{ loc }}&show_owner=false&description_lines_count=3"
      >
    </a>
    <p class="mt-2 mb-0">
      <a href="https://github.com/jbsdoki/ML_Market_Prediction" target="_blank" rel="noopener noreferrer">jbsdoki/ML_Market_Prediction</a>
    </p>
  </article>

  {% comment %}
    Add future projects by copying an <article class="project-card" id="project-..."> block above the first
    project (newest-first) or below the last (oldest-last). Give each a unique id and add a matching "Jump to" link
    in the paragraph after the intro.
  {% endcomment %}
</div>
