---
layout: page
title: projects
permalink: /projects/
nav: true
nav_order: 3
description: Featured personal projects—AI agents for investment research and LSTM-based market modeling.
---

{% assign stats_base = site.external_services.github_readme_stats_url %}
{% assign loc = site.lang | split: '-' | first %}

<p class="mb-4">
  Selected work from my GitHub. For more repositories, see
  <a href="{{ '/repositories/' | relative_url }}">repositories</a> or
  <a href="https://github.com/jbsdoki" target="_blank" rel="noopener noreferrer">github.com/jbsdoki</a>.
</p>

<div class="row">
  <div class="col-lg-6 mb-5">
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
  </div>

  <div class="col-lg-6 mb-5">
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
  </div>
</div>
