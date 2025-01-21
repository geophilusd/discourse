export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "no-duplicate-at-import-rules": true,
    "font-family-no-duplicate-names": true,
    "keyframe-block-no-duplicate-selectors": true,
    "declaration-block-no-duplicate-custom-properties": null,
    "declaration-block-no-duplicate-properties": true,
    "block-no-empty": null,
    "comment-no-empty": true,
    "no-invalid-double-slash-comments": true,
    "no-empty-source": true,
    "at-rule-empty-line-before": null,
    "rule-empty-line-before": ["always", {except: ["after-single-line-comment", "first-nested"]}],
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "declaration-empty-line-before": "never",
    "alpha-value-notation": null,
    "color-function-notation": null,
    "shorthand-property-no-redundant-values": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "keyframes-name-pattern": null,
    "selector-type-no-unknown": null,
    "scss/dollar-variable-pattern": null,
    "number-max-precision": null,
    "selector-pseudo-element-no-unknown": null,
    "declaration-block-no-shorthand-property-overrides": null,
    "scss/at-extend-no-missing-placeholder": null,
    "scss/load-no-partial-leading-underscore": null,
    "scss/operator-no-newline-after": null,
    "scss/double-slash-comment-whitespace-inside": null,
    "scss/no-global-function-names": null,
    "selector-id-pattern": null,
    "no-invalid-position-at-import-rule": null,
    "font-family-no-missing-generic-family-keyword": null,
    "scss/at-function-pattern": null,
    "scss/comment-no-empty": null,
    "function-linear-gradient-no-nonstandard-direction": null,
    "scss/at-mixin-pattern": null,
    "media-feature-range-notation": "prefix",
  },
};
