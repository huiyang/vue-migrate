import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createTextVNode, t as toDisplayString, w as withDirectives, v as vModelText, b as createBaseVNode } from "./app-d2554783.mjs";
const _sfc_main = {
  data() {
    return {
      contentValue: ""
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createTextVNode(" Core " + toDisplayString($data.contentValue) + " ", 1),
    withDirectives(createBaseVNode("input", {
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
