---
layout: page
permalink: /repositories/
title: repositories
nav: true
nav_order: 4
description: GitHub profile, personal repositories, and organization projects I contribute to.
---

## Personal

<div class="row align-items-center mb-4">
  <div class="col-md-4 text-center mb-3 mb-md-0">
    {%
      include figure.liquid
      loading="eager"
      path="assets/img/prof_pic.jpg"
      title="Joseph G. Berry"
      class="img-fluid rounded z-depth-1 mx-auto d-block"
      sizes="(min-width: 768px) 280px, 85vw"
      alt="Joseph G. Berry"
    %}
  </div>
  <div class="col-md-8">
    {% if site.data.repositories.github_users %}
      <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
        {% for user in site.data.repositories.github_users %}
          {% include repository/repo_user.liquid username=user %}
        {% endfor %}
      </div>
    {% endif %}
  </div>
</div>

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}
<h4>{{ user }}</h4>
{% endif %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
{% include repository/repo_trophies.liquid username=user %}
</div>
{% unless forloop.last %}
---
{% endunless %}
{% endfor %}
{% endif %}

{% if site.data.repositories.github_repos_personal.size > 0 %}

### Highlighted personal repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos_personal %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

---

## Organizations I contribute to

{% if site.data.repositories.github_repos_organizations.size > 0 %}

  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    {% for entry in site.data.repositories.github_repos_organizations %}
      {% include repository/repo.liquid repository=entry.repository logo=entry.logo logo_alt=entry.logo_alt %}
    {% endfor %}
  </div>
{% else %}
  <p class="text-muted">No organization repositories listed yet.</p>
{% endif %}
