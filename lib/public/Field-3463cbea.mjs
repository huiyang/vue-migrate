import { openBlock, createElementBlock, createTextVNode, toDisplayString, withDirectives, createElementVNode, vModelText } from "vue";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  data() {
    return {
      contentValue: ""
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createTextVNode(" Addon " + toDisplayString($data.contentValue) + " ", 1),
    withDirectives(createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.contentValue = $event)
    }, null, 512), [
      [vModelText, $data.contentValue]
    ])
  ]);
}
const Field = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Field as default
};
