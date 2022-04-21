---
layout: page
permalink: /categories/
title: Categories
---

<p class="h5 mb-5">
  This is where posts will be sorted into categories for ease of access.
</p>

<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <!-- Category listing-->
    <h1 class="category-head mt-1" id="#{{ category_name | slugize }}">{{ category_name }}</h1>
    <a name="{{ category_name | slugize }}"></a>
    <!-- Post template -->
    {% for post in site.categories[category_name] %}
    <div class="archive-item">
      <span class="post-date archive-date fs-4">
        {{ post.date | date: "%B %d, %Y" }}
      </span>
      <a href="{{ post.url | relative_url }}" class="archive-title fs-4">
        {{ post.title }}
      </a>
    </div>
    {% endfor %}
  </div>
{% endfor %}
</div>