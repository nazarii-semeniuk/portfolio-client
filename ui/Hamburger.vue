<template>
    <button
        @click="menuActive = !menuActive"
        class="hamburger hamburger--slider"
        :class="{ 'is-active': menuActive }"
        type="button"
    >
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>
</template>

<script setup lang="ts">
const menuActive = ref(false);
</script>

<style lang="scss" scoped>
.hamburger {
    padding: 0;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;

    &:hover {
        opacity: 0.7;
    }

    &.is-active:hover {
        opacity: 0.7;
    }

    &-box {
        width: 40px;
        height: 32px;
        display: inline-block;
        position: relative;
    }

    &-inner {
        display: block;
        top: 50%;
        margin-top: -2px;
        width: 40px;
        height: 4px;
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        background: $purple;
        &:before,
        &:after {
            width: 40px;
            height: 4px;
            border-radius: 4px;
            position: absolute;
            transition-property: transform;
            transition-duration: 0.2s;
            transition-timing-function: ease;
            background: $purple;
            display: block;
            content: "";
        }
        &:before {
            top: -10px;
        }
        &:after {
            bottom: -10px;
        }
    }

    &--slider {
        .hamburger-inner {
            top: 2px;
        }
        .hamburger-inner::before {
            top: 14px;
            transition-property: transform, opacity;
            transition-timing-function: ease;
            transition-duration: 0.2s;
        }
        .hamburger-inner::after {
            top: 28px;
        }
        &.is-active {
            .hamburger-inner {
                transform: translate3d(0, 10px, 0) rotate(45deg);
                top: 8px;
            }
            .hamburger-inner::before {
                transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
                opacity: 0;
            }
            .hamburger-inner::after {
                transform: translate3d(0, -20px, 0) rotate(-90deg);
                top: 20px;
            }
        }
    }
}
</style>
