<script>
/* eslint no-console: 0 */
import globalConfigMixin from 'shared/mixins/globalConfigMixin';

export default {
  mixins: [globalConfigMixin],
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    classObject() {
      return 'w-full';
    },
    activeIndex() {
      return this.items.findIndex(i => i.route === this.$route.name);
    },
  },
  methods: {
    isActive(item) {
      return this.items.indexOf(item) === this.activeIndex;
    },
    isOver(item) {
      return this.items.indexOf(item) < this.activeIndex;
    },
  },
};
</script>

<template>
  <transition-group
    name="wizard-items"
    tag="div"
    class="wizard-box"
    :class="classObject"
  >
    <div
      v-for="item in items"
      :key="item.route"
      class="item"
      :class="{ active: isActive(item), over: isOver(item) }"
    >
      <div class="flex items-center">
        <h3
          class="text-n-slate-12 text-base font-medium pl-6 overflow-hidden whitespace-nowrap mt-0.5 text-ellipsis leading-tight"
        >
          {{ item.title }}
        </h3>
        <span v-if="isOver(item)" class="mx-1 mt-0.5 text-n-teal-9">
          <fluent-icon icon="checkmark" />
        </span>
      </div>
      <span class="step">
        {{ items.indexOf(item) + 1 }}
      </span>
      <p class="pl-6 m-0 mt-1.5 text-sm text-n-slate-11">
        {{ item.body }}
      </p>
    </div>
  </transition-group>
</template>

<style lang="scss" scoped>
.wizard-box {
  .item {
    @apply cursor-pointer after:bg-n-slate-6 before:bg-n-slate-6 py-4 ltr:pr-4 rtl:pl-4 ltr:pl-6 rtl:pr-6 relative before:h-4 before:top-0 last:before:h-0 first:before:h-0 last:after:h-0 before:content-[''] before:absolute before:w-0.5 after:content-[''] after:h-full after:absolute after:top-5 after:w-0.5 rtl:after:left-6 rtl:before:left-6;

    &.active {
      h3 {
        @apply text-n-blue-text dark:text-n-blue-text;
      }

      .step {
        @apply bg-n-brand dark:bg-n-brand;
      }
    }

    &.over {
      &::after {
        @apply bg-n-brand dark:bg-n-brand;
      }

      .step {
        @apply bg-n-brand dark:bg-n-brand;
      }

      & + .item {
        &::before {
          @apply bg-n-brand dark:bg-n-brand;
        }
      }
    }

    .step {
      @apply bg-n-slate-7 rounded-2xl font-medium w-4 left-4 leading-4 z-10 absolute text-center text-white dark:text-white text-xxs top-5;
    }
  }
}
</style>
