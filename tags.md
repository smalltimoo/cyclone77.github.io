---
layout: page
title: Tags
permalink: /tags/
public: true
---

<div class="page clearfix">
    <div class="left">
        <h1>{{page.title}}</h1>
        <hr>
        {% capture tags %}
          {% for tag in site.tags %}
            {{ tag[0] }}
          {% endfor %}
        {% endcapture %}
        {% assign sortedtags = tags | split:' ' | sort %}

        <ul>
        {% for tag in sortedtags %}
          <h2 id="{{ tag }}">{{ tag }}</h2>
          {% for post in site.tags[tag] %}
            <li>
                <time>
                {{ post.date | date:"%F" }} {{ post.date | date: "%a" }}.
                </time>
                <a class="title" href="{{ post.url }}">{{ post.title }}</a>

                {% include category.html %}
                {% include tag.html %}
            </li>
          {% endfor %}
        {% endfor %}
        </ul>
    </div>

    <div class="">
        <!-- 标签列表 -->
        {% for tag in site.tags %}
        <div class="one-tag-list">
            <span class="fa fa-tag listing-seperator" id="{{ tag[0] }}">
                <span class="tag-text">{{ tag[0] }}</span>
            </span>
            {% for post in tag[1] %}
              <!-- <li class="listing-item">
              <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
              <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
              </li> -->
             <div class="post-preview">
                <a href="{{ post.url | prepend: site.baseurl }}">
                    <h2 class="post-title">
                        {{ post.title }}
                    </h2>
                    {% if post.subtitle %}
                    <h3 class="post-subtitle">
                        {{ post.subtitle }}
                    </h3>
                    {% endif %}
                </a>
                <!-- <p class="post-meta">{{ post.date | date:"%Y-%m-%d" }}</p> -->
            </div>
            <hr>
            {% endfor %}
        </div>
        {% endfor %}
    </div>
</div>