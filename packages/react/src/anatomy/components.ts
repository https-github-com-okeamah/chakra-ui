import { anatomy } from "./create-anatomy"

export const accordionAnatomy = anatomy("accordion").parts(
  "root",
  "item",
  "trigger",
  "content",
  "body",
  "indicator",
)

export const alertAnatomy = anatomy("alert").parts(
  "title",
  "description",
  "root",
  "icon",
  "spinner",
)

export const toastAnatomy = anatomy("toast").parts(
  "root",
  "title",
  "description",
  "icon",
  "closeTrigger",
)

export const breadcrumbAnatomy = anatomy("breadcrumb").parts(
  "link",
  "currentLink",
  "item",
  "list",
  "root",
  "ellipsis",
  "separator",
)

export const blockquoteAnatomy = anatomy("blockquote").parts(
  "root",
  "icon",
  "content",
  "caption",
)

export const checkboxAnatomy = anatomy("checkbox").parts(
  "control",
  "indicator",
  "root",
  "label",
)

export const editableAnatomy = anatomy("editable").parts(
  "root",
  "preview",
  "input",
  "textarea",
)

export const listAnatomy = anatomy("list").parts("root", "item", "icon")

export const menuAnatomy = anatomy("menu").parts(
  "trigger",
  "content",
  "item",
  "groupTitle",
  "indicator",
  "command",
  "separator",
)

export const numberInputAnatomy = anatomy("numberinput").parts(
  "root",
  "field",
  "control",
  "incrementTrigger",
  "decrementTrigger",
)

export const radioAnatomy = anatomy("radio").parts(
  "root",
  "item",
  "control",
  "indicator",
  "label",
)

export const selectAnatomy = anatomy("select").parts(
  "root",
  "field",
  "indicator",
)

export const sliderAnatomy = anatomy("slider").parts(
  "root",
  "control",
  "track",
  "thumb",
  "label",
  "filledTrack",
  "mark",
  "valueText",
)

export const statAnatomy = anatomy("stat").parts(
  "group",
  "root",
  "label",
  "helpText",
  "number",
  "indicator",
)

export const switchAnatomy = anatomy("switch").parts(
  "root",
  "track",
  "thumb",
  "label",
)

export const tableAnatomy = anatomy("table").parts(
  "root",
  "header",
  "body",
  "row",
  "columnHeader",
  "cell",
  "footer",
  "caption",
)

export const tabsAnatomy = anatomy("tabs").parts(
  "root",
  "trigger",
  "list",
  "content",
  "contentGroup",
  "indicator",
)

export const tagAnatomy = anatomy("tag").parts("root", "label", "closeTrigger")

export const cardAnatomy = anatomy("card").parts(
  "root",
  "header",
  "body",
  "footer",
)

export const stepsAnatomy = anatomy("stepper").parts(
  "root",
  "item",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number",
)
