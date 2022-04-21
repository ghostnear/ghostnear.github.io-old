---
layout: page
title: Links
permalink: /links/
---

<div class="container-fluid border border-rounded pt-3 px-3">
    <div class="row border-bottom pb-2">
        <i class = "h3">Social:</i>
    </div>
    <div class="row py-3">
    {% if site.links.discord %}
        <div class="col-6 col-lg-3 py-2">
            <a href="#discordLink" id="discordLink" class="d-flex text-decoration-none" onclick="copyToClipboard('{{ site.links.discord }}');">
                <div class="d-flex mx-auto my-auto">
                    {% include svg/discord.svg %}
                    <h2 class="display-6 my-auto ms-3">
                        Discord
                    </h2>
                </div>
            </a>
        </div>
    {% endif %}
    {% if site.links.twitter %}
        <div class="col-6 col-lg-3 py-2">
            <a href="https://www.twitter.com/{{ site.links.twitter }}/" class="d-flex text-decoration-none" target="_blank" rel="noreferrer noopener">
                <div class="d-flex mx-auto my-auto">
                    {% include svg/twitter.svg %}
                    <h2 class="display-6 my-auto ms-3">
                        Twitter
                    </h2>
                </div>
            </a>
        </div>
    {% endif %}
    {% if site.links.kitsu %}
        <div class="col-6 col-lg-3 py-2">
            <a href="https://kitsu.io/users/{{ site.links.kitsu }}/" class="d-flex text-decoration-none" target="_blank" rel="noreferrer noopener">
                <div class="d-flex mx-auto my-auto">
                    {% include svg/kitsu.svg %}
                    <h2 class="display-6 my-auto ms-3">
                        Kitsu
                    </h2>
                </div>
            </a>
        </div>
    {% endif %}
    {% if site.links.anilist %}
        <div class="col-6 col-lg-3 py-2">
            <a href="https://anilist.co/user/{{ site.links.anilist }}/" class="d-flex text-decoration-none" target="_blank" rel="noreferrer noopener">
                <div class="d-flex mx-auto my-auto">
                    {% include svg/anilist.svg %}
                    <h2 class="display-6 my-auto ms-3">
                        Anilist
                    </h2>
                </div>
            </a>
        </div>
    {% endif %}
    </div>
</div>

<div class="container-fluid border border-rounded pt-3 px-3">
    <div class="row border-bottom pb-2">
        <i class = "h3">Gaming:</i>
    </div>
    <div class="row py-3">
    {% if site.links.steam %}
        <div class="col-6 col-lg-3 py-2">
            <a href="https://steamcommunity.com/id/{{ site.links.steam }}/" class="d-flex text-decoration-none" target="_blank" rel="noreferrer noopener">
                <div class="d-flex mx-auto my-auto">
                    {% include svg/steam.svg %}
                    <h2 class="display-6 my-auto ms-3">
                        Steam
                    </h2>
                </div>
            </a>
        </div>
    {% endif %}
    {% if site.links.osu %}
        <div class="col-6 col-lg-3 py-2">
            <a href="https://osu.ppy.sh/users/{{ site.links.osu }}/" class="d-flex text-decoration-none" target="_blank" rel="noreferrer noopener">
                <div class="d-flex mx-auto my-auto">
                    {% include svg/osu.svg %}
                    <h2 class="display-6 my-auto ms-3">
                        Osu!
                    </h2>
                </div>
            </a>
        </div>
    {% endif %}
    </div>
</div>