<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <nuxt-link class="logo" to="/">
                    Назарій <span>Семенюк</span>
                </nuxt-link>
                <div class="menu">
                    <ul class="menu__list">
                        <li>
                            <nuxt-link to="/">Головна</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/about">Про мене</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/portfolio">Портфоліо</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contacts">Контакти</nuxt-link>
                        </li>
                    </ul>
                    <Hamburger />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

import Hamburger from '@/ui/Hamburger.vue';

</script>