import { c as create_ssr_component, a as compute_rest_props, s as setContext, v as validate_component, g as getContext, i as subscribe, h as add_attribute, b as spread, d as escape_object, e as escape_attribute_value, f as escape, j as each } from "../../chunks/ssr.js";
import { F as Frame, i as is_void, B as Button } from "../../chunks/button.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "../../chunks/index.js";
import "aos";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass"]);
  let { multiple = false } = $$props;
  let { flush = false } = $$props;
  let { activeClass = "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800" } = $$props;
  let { inactiveClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800" } = $$props;
  let { defaultClass = "text-gray-500 dark:text-gray-400" } = $$props;
  const ctx = {
    flush,
    activeClass: twMerge(activeClass, $$props.classActive),
    inactiveClass: twMerge(inactiveClass, $$props.classInactive),
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass;
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  frameClass = twMerge(defaultClass, $$props.class);
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: frameClass }, { color: "none" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} `;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contentClass;
  let $$unsubscribe_selected;
  let { open = false } = $$props;
  let { activeClass = void 0 } = $$props;
  let { inactiveClass = void 0 } = $$props;
  let { defaultClass = "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  let { paddingFlush = "py-5" } = $$props;
  let { paddingDefault = "p-5" } = $$props;
  let { textFlushOpen = "text-gray-900 dark:text-white" } = $$props;
  let { textFlushDefault = "text-gray-500 dark:text-gray-400" } = $$props;
  let { borderClass = "border-s border-e group-first:border-t" } = $$props;
  let { borderOpenClass = "border-s border-e" } = $$props;
  let { borderBottomClass = "border-b" } = $$props;
  let { borderSharedClass = "border-gray-200 dark:border-gray-700" } = $$props;
  let { classActive = void 0 } = $$props;
  let { classInactive = void 0 } = $$props;
  let activeCls = twMerge(activeClass, classActive);
  let inactiveCls = twMerge(inactiveClass, classInactive);
  const ctx = getContext("ctx") ?? {};
  const selected = ctx.selected ?? writable();
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  open = false;
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.paddingFlush === void 0 && $$bindings.paddingFlush && paddingFlush !== void 0)
    $$bindings.paddingFlush(paddingFlush);
  if ($$props.paddingDefault === void 0 && $$bindings.paddingDefault && paddingDefault !== void 0)
    $$bindings.paddingDefault(paddingDefault);
  if ($$props.textFlushOpen === void 0 && $$bindings.textFlushOpen && textFlushOpen !== void 0)
    $$bindings.textFlushOpen(textFlushOpen);
  if ($$props.textFlushDefault === void 0 && $$bindings.textFlushDefault && textFlushDefault !== void 0)
    $$bindings.textFlushDefault(textFlushDefault);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.borderOpenClass === void 0 && $$bindings.borderOpenClass && borderOpenClass !== void 0)
    $$bindings.borderOpenClass(borderOpenClass);
  if ($$props.borderBottomClass === void 0 && $$bindings.borderBottomClass && borderBottomClass !== void 0)
    $$bindings.borderBottomClass(borderBottomClass);
  if ($$props.borderSharedClass === void 0 && $$bindings.borderSharedClass && borderSharedClass !== void 0)
    $$bindings.borderSharedClass(borderSharedClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0)
    $$bindings.classActive(classActive);
  if ($$props.classInactive === void 0 && $$bindings.classInactive && classInactive !== void 0)
    $$bindings.classInactive(classInactive);
  buttonClass = twMerge([
    defaultClass,
    ctx.flush || borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    $$props.class
  ]);
  contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? "" : borderOpenClass,
    borderBottomClass,
    borderSharedClass
  ]);
  $$unsubscribe_selected();
  return `<h2 class="group"><button type="button"${add_attribute("class", buttonClass, 0)}${add_attribute("aria-expanded", open, 0)}>${slots.header ? slots.header({}) : ``} ${open ? `${slots.arrowup ? slots.arrowup({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg> `}` : `${slots.arrowdown ? slots.arrowdown({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg> `}`}</button></h2> ${open ? `<div><div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : `<div class="hidden"><div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`} `;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  const paddings = {
    none: "",
    xs: "p-2",
    sm: "p-4",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    none: "",
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-xl",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let innerPadding;
  let cardClass;
  let imgClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  innerPadding = paddings[padding];
  cardClass = twMerge("flex w-full", sizes[size], reverse ? "flex-col-reverse" : "flex-col", horizontal && (reverse ? "md:flex-row-reverse" : "md:flex-row"), href && "hover:bg-gray-100 dark:hover:bg-gray-700", !img && innerPadding, $$props.class);
  imgClass = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-e-lg" : "md:rounded-s-lg"));
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgClass, 0)}${add_attribute("src", img, 0)} alt=""> <div${add_attribute("class", innerPadding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })} `;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["footerType"]);
  let { footerType = void 0 } = $$props;
  let footerClass = twMerge(footerType === "sitemap" && "bg-gray-800", footerType === "socialmedia" && "p-4 bg-white sm:p-6 dark:bg-gray-800", footerType === "logo" && "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800", footerType === "default" && "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800", $$props.class);
  if ($$props.footerType === void 0 && $$bindings.footerType && footerType !== void 0)
    $$bindings.footerType(footerType);
  return `<footer${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(footerClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</footer> `;
});
const FooterCopyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["spanClass", "aClass", "year", "href", "by", "target", "copyrightMessage"]);
  let { spanClass = "block text-sm text-gray-500 sm:text-center dark:text-gray-400" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { year = (/* @__PURE__ */ new Date()).getFullYear() } = $$props;
  let { href = "" } = $$props;
  let { by = "" } = $$props;
  let { target = void 0 } = $$props;
  let { copyrightMessage = "All Rights Reserved." } = $$props;
  let spanCls = twMerge(spanClass, $$props.classSpan);
  let aCls = twMerge(aClass, $$props.classA);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.by === void 0 && $$bindings.by && by !== void 0)
    $$bindings.by(by);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.copyrightMessage === void 0 && $$bindings.copyrightMessage && copyrightMessage !== void 0)
    $$bindings.copyrightMessage(copyrightMessage);
  return `<span${add_attribute("class", spanCls, 0)}>© ${escape(year)} ${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aCls) }
    ],
    {}
  )}>${escape(by)}</a>` : `<span class="ms-1">${escape(by)}</span>`} ${escape(copyrightMessage)}</span> `;
});
const FooterIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "ariaLabel", "aClass", "target"]);
  let { href = "" } = $$props;
  let { ariaLabel = "" } = $$props;
  let { aClass = "text-gray-500 hover:text-gray-900 dark:hover:text-white" } = $$props;
  let { target = void 0 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        class: escape_attribute_value(twMerge(aClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>` : `${slots.default ? slots.default({}) : ``}`} `;
});
const FooterLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["liClass", "aClass", "href", "target"]);
  let { liClass = "me-4 last:me-0 md:me-6" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { href = "" } = $$props;
  let { target = void 0 } = $$props;
  let liCls = twMerge(liClass, $$props.classLi);
  let aCls = twMerge(aClass, $$props.classA);
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0)
    $$bindings.liClass(liClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<li${add_attribute("class", liCls, 0)}><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(aCls) },
      { target: escape_attribute_value(target) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a></li> `;
});
const FooterLinkGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ulClass = "text-gray-600 dark:text-gray-400" } = $$props;
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  return `<ul${add_attribute("class", twMerge(ulClass, $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</ul> `;
});
const TabItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "activeClasses", "inactiveClasses", "defaultClass"]);
  let { open = false } = $$props;
  let { title = "Tab title" } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "inline-block text-sm font-medium text-center disabled:cursor-not-allowed" } = $$props;
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  buttonClass = twMerge(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && "active"
  );
  return `<li${add_attribute("class", twMerge("group", $$props.class), 0)} role="presentation"><button${spread(
    [
      { type: "button" },
      { role: "tab" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.title ? slots.title({}) : `${escape(title)}`}</button> ${open ? `<div class="hidden tab_content_placeholder"><div>${slots.default ? slots.default({}) : ``}</div></div>` : ``}</li> `;
});
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ulClass;
  let { tabStyle = "none" } = $$props;
  let { defaultClass = "flex flex-wrap space-x-2 rtl:space-x-reverse" } = $$props;
  let { contentClass = "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4" } = $$props;
  let { divider = true } = $$props;
  let { activeClasses = "p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500" } = $$props;
  let { inactiveClasses = "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" } = $$props;
  const styledActiveClasses = {
    full: "p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",
    pill: "py-3 px-4 text-white bg-primary-600 rounded-lg",
    underline: "p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500",
    none: ""
  };
  const styledInactiveClasses = {
    full: "p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
    pill: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
    underline: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",
    none: ""
  };
  const ctx = {
    activeClasses: styledActiveClasses[tabStyle] || activeClasses,
    inactiveClasses: styledInactiveClasses[tabStyle] || inactiveClasses,
    selected: writable()
  };
  setContext("ctx", ctx);
  if ($$props.tabStyle === void 0 && $$bindings.tabStyle && tabStyle !== void 0)
    $$bindings.tabStyle(tabStyle);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0)
    $$bindings.contentClass(contentClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  divider = ["full", "pill"].includes(tabStyle) ? false : divider;
  ulClass = twMerge(defaultClass, tabStyle === "underline" && "-mb-px", $$props.class);
  return `<ul${add_attribute("class", ulClass, 0)}>${slots.default ? slots.default({ tabStyle }) : ``}</ul> ${divider ? `${slots.divider ? slots.divider({}) : ` <div class="h-px bg-gray-200 dark:bg-gray-700"></div> `}` : ``} <div${add_attribute("class", contentClass, 0)} role="tabpanel" aria-labelledby="id-tab"></div> `;
});
const Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["border", "italic", "borderClass", "bgClass", "bg", "baseClass", "alignment", "size"]);
  let { border = false } = $$props;
  let { italic = true } = $$props;
  let { borderClass = "border-s-4 border-gray-300 dark:border-gray-500" } = $$props;
  let { bgClass = "bg-gray-50 dark:bg-gray-800" } = $$props;
  let { bg = false } = $$props;
  let { baseClass = "font-semibold text-gray-900 dark:text-white" } = $$props;
  let { alignment = "left" } = $$props;
  let { size = "lg" } = $$props;
  let alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.bgClass === void 0 && $$bindings.bgClass && bgClass !== void 0)
    $$bindings.bgClass(bgClass);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.baseClass === void 0 && $$bindings.baseClass && baseClass !== void 0)
    $$bindings.baseClass(baseClass);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<blockquote${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(baseClass, alignmentClasses[alignment], sizes[size], bg && bgClass, border && borderClass, italic && "italic", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</blockquote> `;
});
const Li = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "liClass"]);
  let { icon = false } = $$props;
  let { liClass = "" } = $$props;
  let classLi = twMerge(liClass, icon && "flex items-center", $$props.class);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0)
    $$bindings.liClass(liClass);
  return `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classLi) }], {})}>${slots.default ? slots.default({}) : ``}</li> `;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "list", "position"]);
  let { tag = "ul" } = $$props;
  let { list = void 0 } = $$props;
  let { position = "inside" } = $$props;
  let lists = {
    disc: "list-disc",
    none: "list-none",
    decimal: "list-decimal"
  };
  let positions = {
    inside: "list-inside",
    outside: "list-outside"
  };
  let classList = twMerge(lists[list ?? (tag === "ul" ? "disc" : "decimal")], positions[position], $$props.class);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(classList) }], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} `;
});
const CheckCircleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "check circle solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"></path></svg>`} `;
});
const CheckOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "role",
    "withEvents",
    "title",
    "desc",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeWidth",
    "ariaLabel"
  ]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "check outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M5 11.917 9.724 16.5 19 7.5"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M5 11.917 9.724 16.5 19 7.5"></path></svg>`} `;
});
const ChevronDownOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "role",
    "withEvents",
    "title",
    "desc",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeWidth",
    "ariaLabel"
  ]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "chevron down outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="m8 10 4 4 4-4"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="m8 10 4 4 4-4"></path></svg>`} `;
});
const ChevronUpOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "role",
    "withEvents",
    "title",
    "desc",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeWidth",
    "ariaLabel"
  ]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "chevron up outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="m16 14-4-4-4 4"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="m16 14-4-4-4 4"></path></svg>`} `;
});
const DiscordSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "discord solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path></svg>`} `;
});
const GithubSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "github solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"></path></svg>`} `;
});
const PlusOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "role",
    "withEvents",
    "title",
    "desc",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeWidth",
    "ariaLabel"
  ]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "plus outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M5 12h14m-7 7V5"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M5 12h14m-7 7V5"></path></svg>`} `;
});
const QuoteSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "quote solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"></path></svg>`} `;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex items-center justify-center md:pb-3" data-svelte-h="svelte-qupmg"><div class="flex flex-col md:flex-row items-center justify-between lg:gap-7 md:gap-4 sm:gap-2 self-center"><div data-aos-delay="0" data-aos-duration="500" data-aos="fade-up" class="staggered font-calsans text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Introducing</div> <h1 data-aos-delay="0" data-aos-duration="500" data-aos="fade-up" class="golden-text staggered font-calsans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">MAGNIMONT</h1></div></div> <p data-aos-delay="500" data-aos-duration="1000" data-aos="fade" class="font-inter mt-4 font-normal text-xs md:text-sm lg:text-base text-neutral-400 max-w-[60%] tracking-wider text-center mx-auto">Magnimont offers tailored digital solutions to elevate brands and drive success. Our experts craft custom websites, intelligent chatbots for platforms like Discord and Telegram, branded visuals and marketing assets, and seamlessly integrated bot systems. Whatever your vision, we leverage cutting-edge tech and creative prowess to develop captivating digital experiences aligned with your unique goals and audience. Unlock your potential with Magnimonts innovative, full-service digital solutions

  <br class="mb-5"> <br> <b data-svelte-h="svelte-t91p2i">So what are you waiting for?</b> <br class="mb-5"> ${validate_component(Button, "Button").$$render($$result, {}, {}, {})}</p>`;
});
const Herolist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <div id="testimonials">${validate_component(List, "List").$$render(
    $$result,
    {
      "data-aos-delay": "1200",
      "data-aos-duration": "500",
      "data-aos": "fade-in",
      tag: "ul",
      list: "none",
      class: "flex font-inter text-gray-400 text-xs tracking-widest flex-wrap flex-shrink justify-around pt-20 items-center mb-6"
    },
    {},
    {
      default: () => {
        return `${validate_component(Li, "Li").$$render($$result, { class: "flex" }, {}, {
          default: () => {
            return `${validate_component(CheckOutline, "CheckOutline").$$render($$result, { class: "w-5 h-5 text-amber-200" }, {}, {})} <span href="/" class="me-4 hover:underline md:me-6" textcolor="text-gray-700 dark:text-white" data-svelte-h="svelte-18k9jwr">Custom Digital Solutions</span>`;
          }
        })} ${validate_component(Li, "Li").$$render($$result, { class: "flex" }, {}, {
          default: () => {
            return `${validate_component(CheckOutline, "CheckOutline").$$render($$result, { class: "w-5 h-5 text-amber-200" }, {}, {})} <span href="/" class="me-4 hover:underline md:me-6" textcolor="text-gray-700 dark:text-white" data-svelte-h="svelte-q12433">Innovative Tech &amp; Creativity</span>`;
          }
        })} ${validate_component(Li, "Li").$$render($$result, { class: "flex" }, {}, {
          default: () => {
            return `${validate_component(CheckOutline, "CheckOutline").$$render($$result, { class: "w-5 h-5 text-amber-200" }, {}, {})} <span href="/" class="me-4 hover:underline md:me-6" textcolor="text-gray-700 dark:text-white" data-svelte-h="svelte-1my42po">Full-Service Mastery</span>`;
          }
        })} `;
      }
    }
  )}</div>`;
});
const Spotlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"><div class="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/90 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> <div class="-top-40 left-0 md:left-60 md:-top-20" data-svelte-h="svelte-g1mahv"><svg class="animate-spotlight pointer-events-none absolute z-[1] h-[69%] w-[38%] lg:w-[84%] opacity-0 blur-effect" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842"><g><ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill="#c6bb9f" fill-opacity="0.38"></ellipse></g><defs><filter id="blur-filter" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="120"></feGaussianBlur></filter></defs></svg></div> <div class="p-4 max-w-[80%] mx-auto relative z-10 w-full pt-24">${validate_component(About, "About").$$render($$result, {}, {}, {})} <div class="">${validate_component(Herolist, "Herolist").$$render($$result, {}, {}, {})}</div></div></div>`;
});
const Marquee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let { direction = "left" } = $$props;
  let { speed = "fast" } = $$props;
  let { pauseOnHover = true } = $$props;
  let { className = "" } = $$props;
  let containerRef;
  let scrollerRef;
  let start = false;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.pauseOnHover === void 0 && $$bindings.pauseOnHover && pauseOnHover !== void 0)
    $$bindings.pauseOnHover(pauseOnHover);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<div class="${"scroller relative z-20 max-w-[100vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] " + escape(className, true)}"${add_attribute("this", containerRef, 0)}><ul class="${"flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap " + escape(start, true) + " " + escape(pauseOnHover && "hover:[animation-play-state:paused]", true)}"${add_attribute("this", scrollerRef, 0)}>${each(items, (item) => {
    return `<li class="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-amber-100/90 px-8 py-6 md:w-[450px]" style="background: linear-gradient(180deg, var(--zinc-800), var(--zinc-900))"><blockquote><div aria-hidden="true" class="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div> ${validate_component(Blockquote, "Blockquote").$$render($$result, { size: "sm" }, {}, {
      default: () => {
        return `${validate_component(QuoteSolid, "QuoteSolid").$$render(
          $$result,
          {
            class: "relative z-20 text-sm leading-[1.6] text-gray-100 font-normal"
          },
          {},
          {}
        )} <p class="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">${escape(item.quote)}</p> `;
      }
    })} <div class="relative z-20 mt-6 flex flex-row items-center"><span class="flex flex-col gap-1"><span class="text-sm leading-[1.6] text-gray-400 font-normal">${escape(item.name)}</span> <span class="text-sm leading-[1.6] text-gray-400 font-normal">${escape(item.title)} </span></span> </div></blockquote> </li>`;
  })}</ul></div>`;
});
const Laptop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const testimonials = [
    {
      quote: "Magnimonts team truly understands the art of translating ideas into beautiful and functional digital realities. The custom website and branding they created for our company is not only visually stunning but has helped drive more qualified leads than ever before. Their creativity and technical expertise are second to none!",
      name: "Zortec",
      title: "Youtuber, 20k+ Subscribers"
    },
    {
      quote: "Someone whos worked with multiple digital agencies, I can confidently say that Magnimont stands out from the pack. Their intelligent chatbot assistant has streamlined our customer service operations immensely, providing a seamless experience for our users around the clock. The team's level of service and commitment to our success has been outstanding.",
      name: "Chels Childers",
      title: "Internet Enthusiast"
    },
    {
      quote: "Revamping our online community was no easy task, but Magnimonts Discord bot development made it a seamless transition. The features they built have facilitated better moderation, increased engagement, and created an incredibly intuitive experience for our members. Their expertise in crafting tailored bot solutions is unmatched.",
      name: "Kish Kuruppath",
      title: "Project Manager "
    },
    {
      quote: "From branding and web design to bot development and marketing assets, Magnimonts full-service offerings have been invaluable for our growing business. Their team is highly collaborative, working closely with us to understand our goals and create an integrated digital ecosystem that accurately reflects our brand vision.",
      name: "x77",
      title: "Founder MemeOn"
    },
    {
      quote: "Working with Magnimont was an absolute pleasure from start to finish. Their ability to seamlessly blend creative and technical expertise resulted in a truly innovative suite of digital products that have taken our brand to new heights. I've been consistently impressed by their passion, talent, and commitment to excellence.",
      name: "Shminkie",
      title: "Founder Universium"
    }
  ];
  return ` <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" class="h-full rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">${validate_component(Marquee, "InfiniteMovingCards").$$render(
    $$result,
    {
      items: testimonials,
      direction: "right",
      speed: "slow"
    },
    {},
    {}
  )}</div> `;
});
const Accordian = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { accordianinfo } = $$props;
  if ($$props.accordianinfo === void 0 && $$bindings.accordianinfo && accordianinfo !== void 0)
    $$bindings.accordianinfo(accordianinfo);
  return `${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      flush: true,
      class: "sm:w-[50vw] p-3 md:p-5 bg-transparent"
    },
    {},
    {
      default: () => {
        return `${each(Object.entries(accordianinfo), ([title, paragraph]) => {
          return `${validate_component(AccordionItem, "AccordionItem").$$render(
            $$result,
            {
              class: " text-zinc-200  bg-transparent",
              borderSharedClass: "border-amber-100/20",
              paddingFlush: "md:py-4 py-3",
              activeClasses: "",
              inactiveClasses: "border-amber-100/20"
            },
            {},
            {
              header: () => {
                return `<span slot="header" class="gap-5 text-sm md:text-xl flex flex-row items-center justify-start">${validate_component(PlusOutline, "PlusOutline").$$render($$result, { size: "sm" }, {}, {})} ${escape(title)} </span>`;
              },
              arrowdown: () => {
                return `<span slot="arrowdown">${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render($$result, { class: "h-6 w-6 -me-0.5" }, {}, {})} </span>`;
              },
              arrowup: () => {
                return `<div slot="arrowup">${validate_component(ChevronUpOutline, "ChevronUpOutline").$$render($$result, { class: "h-6 w-6 -me-0.5" }, {}, {})} </div>`;
              },
              default: () => {
                return `<p class="border-0 text-zinc-200">${escape(paragraph)}</p> `;
              }
            }
          )}`;
        })}`;
      }
    }
  )}`;
});
const Faqtabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const General = {
    "What services do you offer?": "We offer a wide range of digital services, including website development, UI/UX design, AI software development, branding, and more. Our team of experts can help you bring your digital vision to life with tailored solutions that meet your unique needs.",
    "How long does it typically take to develop a custom website?": "The timeline can vary depending on the scope and complexity of the project, but we generally aim to launch custom websites within 4-8 weeks. Simple websites may be completed sooner, while more advanced builds with complex functionality can take longer.",
    "What platforms do you develop bots and AI assistants for?": "We specialize in creating bots and AI solutions for platforms like Discord, Slack, Telegram, website chatbots, and custom software integrations. Our team has extensive experience building robust, user-friendly bots tailored to your unique use case.",
    "Do you provide ongoing support and maintenance?": "Absolutely. We offer comprehensive support and maintenance packages to ensure your websites, apps, bots and digital solutions continue operating smoothly long after launch. Our team provides timely updates, security patching, and technical assistance.",
    "How does the design process work?": "Our design approach is highly collaborative. We start by having in-depth discussions to understand your brand, goals, target audience and preferences. Using those insights, our designers craft initial concepts that we iterate on together until the designs accurately capture your vision.",
    "What is your typical pricing structure?": "Our pricing is tailored to each clients specific needs and project scope. We offer simplified monthly packages as well as customized pricing for enterprise-level solutions. Factors like features, third-party integrations and support needs influence the final cost. Get in touch for a personalized quote."
  };
  return `<div id="faq">${validate_component(Tabs, "Tabs").$$render(
    $$result,
    {
      id: "faq",
      tabStyle: "underline",
      contentClass: "p-4 rounded-lg frosted-glass border border-amber-200 mt-4"
    },
    {},
    {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render(
          $$result,
          {
            open: true,
            title: "General",
            activeClasses: "p-4  border-b-2 border-amber-200 text-amber-200/90 ",
            inactiveClasses: "p-4 border-b-2 border-transparent  hover:border-gray-300  text-gray-500 ",
            contentClass: "p-4 rounded-lg bg-gray-800 mt-4"
          },
          {},
          {
            default: () => {
              return `${validate_component(Accordian, "Accordian").$$render($$result, { accordianinfo: General }, {}, {})}`;
            }
          }
        )} `;
      }
    }
  )}</div>`;
});
const Branding = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="pricing" class="flex my-12 flex-col md:flex-row items-center justify-between gap-8 py-12 px-[10%] md:px-5">${validate_component(Card, "Card").$$render(
    $$result,
    {
      "data-aos-delay": "0",
      "data-aos-duration": "1000",
      "data-aos": "fade-up",
      padding: "xl",
      class: "globalcard text-zinc-200 max-md:max-w-full relative rounded-2xl border border-b-0 flex-shrink-1 bg-transparent border-amber-100/90 px-8 py-6 "
    },
    {},
    {
      default: () => {
        return `<h2 class="mb-8 uppercase font-bold text-3xl font-inter" data-svelte-h="svelte-hmb3s1">Basic</h2> <div class="flex items-baseline" data-svelte-h="svelte-107fxp4"><span class="text-3xl font-semibold">$</span> <span class="text-5xl font-extrabold tracking-tight">499</span></div>  <ul class="my-7 space-y-4"><li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-6md7ib">Custom Website <br> <span class="text-sm text-gray-500">- Up to 10 Pages<br>- Responsive Design<br>- Contact Form Integration</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-2k2jbr">Basic Branding Package <br> <span class="text-sm text-gray-500">- Logo Design<br>- Color Palette<br>- Font Selection</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-6689d">1 Standard Discord Bot</span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-bbg234">3 Months Support &amp; Maintenance</span></li></ul> <button class="inline-flex h-12 items-center justify-center rounded-xl border border-amber-200 bg-[linear-gradient(110deg,#09090b,45%,#1e2631,55%,#09090b)] bg-[length:200%_100%] px-6 font-medium text-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2" data-svelte-h="svelte-1ytrk1w">Buy Now</button>`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      "data-aos-delay": "0",
      "data-aos-duration": "1000",
      "data-aos": "flip-up",
      padding: "xl",
      class: "globalcard text-zinc-200 max-md:max-w-full  relative rounded-2xl border border-b-0 flex-shrink-1 bg-transparent border-amber-100/90 px-8 py-6 "
    },
    {},
    {
      default: () => {
        return `<h2 class="mb-12 mt-6 text-amber-200 font-bold uppercase text-4xl font-inter" data-svelte-h="svelte-133dky6">PRO</h2> <div class="flex items-baseline" data-svelte-h="svelte-1hn874b"><span class="text-3xl font-semibold">$</span> <span class="text-5xl font-extrabold tracking-tight">999</span></div>  <ul class="my-7 space-y-4"><li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-1i32dsm">Custom Website &amp; Web Apps <br> <span class="text-sm text-gray-500">- Unlimited Pages<br>- Interactive Design<br>- E-Commerce Integration</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-j391xy">Professional Branding Package <br> <span class="text-sm text-gray-500">- Logo &amp; Brand Identity<br>- Style Guide<br>- Marketing Assets</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-15gdrlh">1 Advanced Discord Bot <br> <span class="text-sm text-gray-500">- Custom Features<br>- AI Integration</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-1sveg4d">Custom Scripts &amp; Automation <br> <span class="text -sm text-gray-500">- Workflow Optimization<br>- Task Automation</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-1byrb2w">SEO Optimization <br> <span class="text-sm text-gray-500">- On-Page SEO<br>- Google Analytics Integration</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-1hxbxkr">6 Months Support &amp; Maintenance</span></li></ul> <button class="inline-flex h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#fde68a,45%,#fff,55%,#fde68a)] bg-[length:200%_100%] px-6 font-medium text-zinc-800 transition-colors" data-svelte-h="svelte-r56k9w">Buy Now</button>`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      "data-aos-delay": "0",
      "data-aos-duration": "1000",
      "data-aos": "fade-up",
      padding: "xl",
      class: "globalcard text-zinc-200 max-md:max-w-full relative rounded-2xl border border-b-0 flex-shrink-1 bg-transparent border-amber-100/90 px-8 py-6 "
    },
    {},
    {
      default: () => {
        return `<h2 class="mb-8 uppercase font-bold text-3xl font-inter" data-svelte-h="svelte-1jxebgm">ENTERPRISE</h2> <div class="flex items-baseline" data-svelte-h="svelte-132im5v"><span class="text-3xl font-semibold">$</span> <span class="text-5xl font-extrabold tracking-tight">1999+</span></div>  <ul class="my-7 space-y-4"><li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-16vz45">Enterprise Web Solutions <br> <span class="text-sm text-gray-500">- Custom Web Apps<br>- Advanced Integrations<br>- Scalable Architecture</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-ql0w4g">Multifunction Discord Bots <br> <span class="text-sm text-gray-500">- Moderation Tools<br>- Server Management<br>- Custom Integrations</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-cv7kvo">AI Software Development <br> <span class="text-sm text-gray-500">- Intelligent Assistants<br>- Predictive Analytics<br>- Machine Learning</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-lf02gd">Custom Software Builds <br> <span class="text-sm text-gray-500">- Tailored Solutions<br>- Third-Party Integrations<br>- Rapid Prototyping</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-wfwyfs">End-to-End Branding Strategy <br> <span class="text-sm text-gray-500">- Brand Positioning<br>- Visual Identity<br>- Marketing Collateral</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-1568ikt">Advanced SEO &amp; Marketing <br> <span class="text-sm text-gray-500">- On-Page &amp; Off-Page SEO<br>- PPC Campaigns<br>- Social Media Marketing</span></span></li> <li class="flex space-x-2 rtl:space-x -reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-1hu6dv1">Premium Hosting &amp; Security <br> <span class="text-sm text-gray-500">- Enterprise-Grade Infrastructure<br>- DDOS Protection<br>- SSL/TLS Encryption</span></span></li> <li class="flex space-x-2 rtl:space-x-reverse">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "w-4 h-4 text-amber-200" }, {}, {})} <span class="text-base font-normal leading-tight" data-svelte-h="svelte-1y3f1zm">Dedicated Project Management <br> <span class="text-sm text-gray-500">- Experienced PM<br>- Regular Status Updates<br>- Deliverable Tracking</span></span></li></ul> <button class="inline-flex h-12 items-center justify-center rounded-xl border border-amber-200 bg-[linear-gradient(110deg,#09090b,45%,#1e2631,55%,#09090b)] bg-[length:200%_100%] px-6 font-medium text-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2" data-svelte-h="svelte-1lb6by8">Contact Us</button>`;
      }
    }
  )}</div>`;
});
const css = {
  code: '#cards.svelte-1dvd85.svelte-1dvd85{display:flex;flex-wrap:wrap;max-width:1206px;width:calc(100% - 20px);justify-content:center;align-items:center;gap:2rem}#cards.svelte-1dvd85:hover>.card.svelte-1dvd85::after{opacity:1}.card.svelte-1dvd85.svelte-1dvd85{border:1px solid #fef3c7;overflow:hidden;cursor:pointer;display:flex;height:260px;flex-direction:column;position:relative;width:300px}.card.svelte-1dvd85.svelte-1dvd85:hover::before{opacity:1}.card.svelte-1dvd85.svelte-1dvd85::before,.card.svelte-1dvd85.svelte-1dvd85::after{border-radius:inherit;content:"";height:100%;left:0px;opacity:0;position:absolute;top:0px;transition:opacity 500ms;filter:blur(50px);overflow:hidden;width:100%}.card.svelte-1dvd85.svelte-1dvd85::before{background:radial-gradient(\r\n      500px circle at var(--mouse-x) var(--mouse-y),\r\n      rgba(221, 221, 221, 0.151),\r\n      transparent 40%\r\n    );z-index:3}.card.svelte-1dvd85.svelte-1dvd85::after{background:radial-gradient(\r\n      400px circle at var(--mouse-x) var(--mouse-y),\r\n      rgba(214, 214, 214, 0.158),\r\n      transparent 40%\r\n    );z-index:1}.card.svelte-1dvd85>.card-content.svelte-1dvd85{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;inset:1px;padding:10px;position:absolute;z-index:2}h3.svelte-1dvd85.svelte-1dvd85,h4.svelte-1dvd85.svelte-1dvd85{color:rgb(240, 240, 240);font-family:"Rubik", sans-serif;font-weight:400;margin:0px}i.svelte-1dvd85.svelte-1dvd85{color:rgb(240, 240, 240)}.card-image.svelte-1dvd85.svelte-1dvd85{align-items:center;display:flex;height:140px;justify-content:center;overflow:hidden}.card-image.svelte-1dvd85>i.svelte-1dvd85{font-size:6em;opacity:0.25}.card-info-wrapper.svelte-1dvd85.svelte-1dvd85{align-items:center;display:flex;flex-grow:1;justify-content:flex-start;padding:0px 20px}.card-info.svelte-1dvd85.svelte-1dvd85{align-items:flex-start;display:flex;gap:10px}.card-info.svelte-1dvd85>i.svelte-1dvd85{font-size:1em;height:20px;line-height:20px}.card-info-title.svelte-1dvd85>h3.svelte-1dvd85{font-size:1.1em;line-height:20px}.card-info-title.svelte-1dvd85>h4.svelte-1dvd85{color:rgba(255, 255, 255, 0.5);font-size:0.85em;margin-top:8px}@media(max-width: 1000px){#cards.svelte-1dvd85.svelte-1dvd85{max-width:1000px;padding:10px 0px}.card.svelte-1dvd85.svelte-1dvd85{flex-shrink:0;width:300px}}@media(max-width: 500px){.card.svelte-1dvd85.svelte-1dvd85{height:180px}.card-image.svelte-1dvd85.svelte-1dvd85{height:80px}.card-image.svelte-1dvd85>i.svelte-1dvd85{font-size:3em}.card-info-wrapper.svelte-1dvd85.svelte-1dvd85{padding:0px 10px}.card-info.svelte-1dvd85>i.svelte-1dvd85{font-size:0.8em}.card-info-title.svelte-1dvd85>h3.svelte-1dvd85{font-size:0.9em}.card-info-title.svelte-1dvd85>h4.svelte-1dvd85{font-size:0.8em;margin-top:4px}}@media(max-width: 320px){.card.svelte-1dvd85.svelte-1dvd85{width:100%}}',
  map: '{"version":3,"file":"services.svelte","sources":["services.svelte"],"sourcesContent":["<script>\\r\\n  export function hover(node) {\\r\\n    node.onmousemove = (e) => {\\r\\n      for (const card of node.getElementsByClassName(\\"card\\")) {\\r\\n        const rect = card.getBoundingClientRect(),\\r\\n          x = e.clientX - rect.left,\\r\\n          y = e.clientY - rect.top;\\r\\n\\r\\n        card.style.setProperty(\\"--mouse-x\\", `${x}px`);\\r\\n        card.style.setProperty(\\"--mouse-y\\", `${y}px`);\\r\\n      }\\r\\n    };\\r\\n  }\\r\\n\\r\\n  import Branding from \\"./pricingcards/branding.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<div data-aos=\\"fade-up\\" class=\\"flex flex-col gap-5\\">\\r\\n  <!-- <TabHead class=\\" max-md:w-[100vw] gap-5 \\"> -->\\r\\n  <div id=\\"cards\\" use:hover class=\\" max-md:w-[100vw] gap-5\\">\\r\\n    <!-- <Tab id={1} on:click={handleClick(1)} {activeTabValue}> -->\\r\\n    <div id=\\"services\\" class=\\"card shadow-2xl\\">\\r\\n      <div class=\\"card-content\\">\\r\\n        <div class=\\"card-image\\">\\r\\n          <i class=\\"fa-duotone fa-apartment\\" />\\r\\n        </div>\\r\\n        <div class=\\"card-info-wrapper\\">\\r\\n          <div class=\\"card-info\\">\\r\\n            <i class=\\"fa-duotone fa-apartment\\" />\\r\\n            <div class=\\"card-info-title\\">\\r\\n              <h3>Website Development</h3>\\r\\n              <h4>Expertly coded websites tailored to your business needs.</h4>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n    <!-- </Tab> -->\\r\\n    <!-- <Tab id={2} on:click={handleClick(2)} {activeTabValue}> -->\\r\\n    <div data-aos=\\"fade-up\\" class=\\"card shadow-2xl\\">\\r\\n      <div class=\\"card-content\\">\\r\\n        <div class=\\"card-image\\">\\r\\n          <i class=\\"fa-duotone fa-unicorn\\" />\\r\\n        </div>\\r\\n        <div class=\\"card-info-wrapper\\">\\r\\n          <div class=\\"card-info\\">\\r\\n            <i class=\\"fa-duotone fa-unicorn\\" />\\r\\n            <div class=\\"card-info-title\\">\\r\\n              <h3>UI/UX Design\\r\\n              </h3>\\r\\n              <h4>Intuitive interfaces focused on exceptional user experiences.\\r\\n              </h4>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n    <!-- </Tab> -->\\r\\n\\r\\n    <!-- <Tab id={3} on:click={handleClick(3)} {activeTabValue}> -->\\r\\n    <div data-aos=\\"fade-up\\" class=\\"card shadow-2xl\\">\\r\\n      <div class=\\"card-content\\">\\r\\n        <div class=\\"card-image\\">\\r\\n          <i class=\\"fa-duotone fa-blender-phone\\" />\\r\\n        </div>\\r\\n        <div class=\\"card-info-wrapper\\">\\r\\n          <div class=\\"card-info\\">\\r\\n            <i class=\\"fa-duotone fa-blender-phone\\" />\\r\\n            <div class=\\"card-info-title\\">\\r\\n              <h3>AI Software Development\\r\\n              </h3>\\r\\n              <h4>Cutting-edge AI integrations to drive efficiency and insights.\\r\\n              </h4>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n    <!-- </Tab> -->\\r\\n    <!-- <Tab id={4} on:click={handleClick(4)} {activeTabValue}> -->\\r\\n    <div data-aos=\\"fade-up\\" class=\\"card shadow-2xl\\">\\r\\n      <div class=\\"card-content\\">\\r\\n        <div class=\\"card-image\\">\\r\\n          <i class=\\"fa-duotone fa-person-to-portal\\" />\\r\\n        </div>\\r\\n        <div class=\\"card-info-wrapper\\">\\r\\n          <div class=\\"card-info\\">\\r\\n            <i class=\\"fa-duotone fa-person-to-portal\\" />\\r\\n            <div class=\\"card-info-title\\">\\r\\n              <h3>Custom Software\\r\\n              </h3>\\r\\n              <h4>Innovative custom software aligning with your unique requirements.\\r\\n              </h4>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n    <!-- </Tab> -->\\r\\n\\r\\n    <!-- <Tab id={5} on:click={handleClick(5)} {activeTabValue}> -->\\r\\n    <div data-aos=\\"fade-up\\" class=\\"card shadow-2xl\\">\\r\\n      <div class=\\"card-content\\">\\r\\n        <div class=\\"card-image\\">\\r\\n          <i class=\\"fa-duotone fa-person-from-portal\\" />\\r\\n        </div>\\r\\n        <div class=\\"card-info-wrapper\\">\\r\\n          <div class=\\"card-info\\">\\r\\n            <i class=\\"fa-duotone fa-person-from-portal\\" />\\r\\n            <div class=\\"card-info-title\\">\\r\\n              <h3>Branding & Graphics</h3>\\r\\n              <h4>Visually compelling assets that reinforce your brand identity.</h4>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n    <!-- </Tab> -->\\r\\n\\r\\n    <!-- <Tab id={6} on:click={handleClick(6)} {activeTabValue}> -->\\r\\n    <div data-aos=\\"fade-up\\" class=\\"card shadow-2xl\\">\\r\\n      <div class=\\"card-content\\">\\r\\n        <div class=\\"card-image\\">\\r\\n          <i class=\\"fa-duotone fa-otter\\" />\\r\\n        </div>\\r\\n        <div class=\\"card-info-wrapper\\">\\r\\n          <div class=\\"card-info\\">\\r\\n            <i class=\\"fa-duotone fa-otter\\" />\\r\\n            <div class=\\"card-info-title\\">\\r\\n              <h3>Custom Scripts</h3>\\r\\n              <h4>Tailored automation scripts to streamline your workflows.\\r\\n              </h4>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n    <!-- </Tab> -->\\r\\n  </div>\\r\\n  <!-- </TabHead> -->\\r\\n\\r\\n  <!-- <TabContentItems id={1} {activeTabValue}><Webdev /></TabContentItems> -->\\r\\n  <!-- <TabContentItems id={2} {activeTabValue}><Webdesign /></TabContentItems> -->\\r\\n  <!-- <TabContentItems id={3} {activeTabValue}><Uiux /></TabContentItems> -->\\r\\n  <!-- <TabContentItems id={4} {activeTabValue}><Product /></TabContentItems> -->\\r\\n  <!-- <TabContentItems id={5} {activeTabValue}><Graphic /></TabContentItems> -->\\r\\n  <!-- <TabContentItems id={6} {activeTabValue}><Branding /></TabContentItems> -->\\r\\n  <Branding />\\r\\n  <!-- bhgbksdjhfgb -->\\r\\n  <!-- </TabWrapper> -->\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  #cards {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    max-width: 1206px;\\r\\n\\r\\n    width: calc(100% - 20px);\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap: 2rem;\\r\\n  }\\r\\n\\r\\n  #cards:hover > .card::after {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  .card {\\r\\n    border: 1px solid #fef3c7;\\r\\n    overflow: hidden;\\r\\n    cursor: pointer;\\r\\n    display: flex;\\r\\n    height: 260px;\\r\\n    flex-direction: column;\\r\\n    position: relative;\\r\\n    width: 300px;\\r\\n  }\\r\\n\\r\\n  .card:hover::before {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  .card::before,\\r\\n  .card::after {\\r\\n    border-radius: inherit;\\r\\n    content: \\"\\";\\r\\n    height: 100%;\\r\\n    left: 0px;\\r\\n    opacity: 0;\\r\\n    position: absolute;\\r\\n    top: 0px;\\r\\n    transition: opacity 500ms;\\r\\n    filter: blur(50px);\\r\\n    overflow: hidden;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .card::before {\\r\\n    background: radial-gradient(\\r\\n      500px circle at var(--mouse-x) var(--mouse-y),\\r\\n      rgba(221, 221, 221, 0.151),\\r\\n      transparent 40%\\r\\n    );\\r\\n    z-index: 3;\\r\\n  }\\r\\n\\r\\n  .card::after {\\r\\n    background: radial-gradient(\\r\\n      400px circle at var(--mouse-x) var(--mouse-y),\\r\\n      rgba(214, 214, 214, 0.158),\\r\\n      transparent 40%\\r\\n    );\\r\\n    z-index: 1;\\r\\n  }\\r\\n\\r\\n  .card > .card-content {\\r\\n    border-radius: inherit;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    flex-grow: 1;\\r\\n    inset: 1px;\\r\\n    padding: 10px;\\r\\n    position: absolute;\\r\\n    z-index: 2;\\r\\n  }\\r\\n\\r\\n  /* -- ↓ ↓ ↓ extra card content styles ↓ ↓ ↓ -- */\\r\\n\\r\\n  h3,\\r\\n  h4 {\\r\\n    color: rgb(240, 240, 240);\\r\\n    font-family: \\"Rubik\\", sans-serif;\\r\\n    font-weight: 400;\\r\\n    margin: 0px;\\r\\n  }\\r\\n\\r\\n  i {\\r\\n    color: rgb(240, 240, 240);\\r\\n  }\\r\\n\\r\\n  .card-image {\\r\\n    align-items: center;\\r\\n    display: flex;\\r\\n    height: 140px;\\r\\n    justify-content: center;\\r\\n    overflow: hidden;\\r\\n  }\\r\\n\\r\\n  .card-image > i {\\r\\n    font-size: 6em;\\r\\n    opacity: 0.25;\\r\\n  }\\r\\n\\r\\n  .card-info-wrapper {\\r\\n    align-items: center;\\r\\n    display: flex;\\r\\n    flex-grow: 1;\\r\\n    justify-content: flex-start;\\r\\n    padding: 0px 20px;\\r\\n  }\\r\\n\\r\\n  .card-info {\\r\\n    align-items: flex-start;\\r\\n    display: flex;\\r\\n    gap: 10px;\\r\\n  }\\r\\n\\r\\n  .card-info > i {\\r\\n    font-size: 1em;\\r\\n    height: 20px;\\r\\n    line-height: 20px;\\r\\n  }\\r\\n\\r\\n  .card-info-title > h3 {\\r\\n    font-size: 1.1em;\\r\\n    line-height: 20px;\\r\\n  }\\r\\n\\r\\n  .card-info-title > h4 {\\r\\n    color: rgba(255, 255, 255, 0.5);\\r\\n    font-size: 0.85em;\\r\\n    margin-top: 8px;\\r\\n  }\\r\\n\\r\\n  /* -- ↓ ↓ ↓ some responsiveness ↓ ↓ ↓ -- */\\r\\n\\r\\n  @media (max-width: 1000px) {\\r\\n    #cards {\\r\\n      max-width: 1000px;\\r\\n      padding: 10px 0px;\\r\\n    }\\r\\n\\r\\n    .card {\\r\\n      flex-shrink: 0;\\r\\n      width: 300px;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @media (max-width: 500px) {\\r\\n    .card {\\r\\n      height: 180px;\\r\\n    }\\r\\n\\r\\n    .card-image {\\r\\n      height: 80px;\\r\\n    }\\r\\n\\r\\n    .card-image > i {\\r\\n      font-size: 3em;\\r\\n    }\\r\\n\\r\\n    .card-info-wrapper {\\r\\n      padding: 0px 10px;\\r\\n    }\\r\\n\\r\\n    .card-info > i {\\r\\n      font-size: 0.8em;\\r\\n    }\\r\\n\\r\\n    .card-info-title > h3 {\\r\\n      font-size: 0.9em;\\r\\n    }\\r\\n\\r\\n    .card-info-title > h4 {\\r\\n      font-size: 0.8em;\\r\\n      margin-top: 4px;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @media (max-width: 320px) {\\r\\n    .card {\\r\\n      width: 100%;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyJE,kCAAO,CACL,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,MAAM,CAEjB,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACxB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CAEA,oBAAM,MAAM,CAAG,mBAAK,OAAQ,CAC1B,OAAO,CAAE,CACX,CAEA,iCAAM,CACJ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,KAAK,CACb,cAAc,CAAE,MAAM,CACtB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,KACT,CAEA,iCAAK,MAAM,QAAS,CAClB,OAAO,CAAE,CACX,CAEA,iCAAK,QAAQ,CACb,iCAAK,OAAQ,CACX,aAAa,CAAE,OAAO,CACtB,OAAO,CAAE,EAAE,CACX,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,GAAG,CACT,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,UAAU,CAAE,OAAO,CAAC,KAAK,CACzB,MAAM,CAAE,KAAK,IAAI,CAAC,CAClB,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IACT,CAEA,iCAAK,QAAS,CACZ,UAAU,CAAE;AAChB,MAAM,KAAK,CAAC,MAAM,CAAC,EAAE,CAAC,IAAI,SAAS,CAAC,CAAC,IAAI,SAAS,CAAC,CAAC;AACpD,MAAM,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC;AACjC,MAAM,WAAW,CAAC,GAAG;AACrB,KAAK,CACD,OAAO,CAAE,CACX,CAEA,iCAAK,OAAQ,CACX,UAAU,CAAE;AAChB,MAAM,KAAK,CAAC,MAAM,CAAC,EAAE,CAAC,IAAI,SAAS,CAAC,CAAC,IAAI,SAAS,CAAC,CAAC;AACpD,MAAM,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC;AACjC,MAAM,WAAW,CAAC,GAAG;AACrB,KAAK,CACD,OAAO,CAAE,CACX,CAEA,mBAAK,CAAG,2BAAc,CACpB,aAAa,CAAE,OAAO,CACtB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,SAAS,CAAE,CAAC,CACZ,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CACX,CAIA,8BAAE,CACF,8BAAG,CACD,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,WAAW,CAAE,OAAO,CAAC,CAAC,UAAU,CAChC,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,GACV,CAEA,6BAAE,CACA,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC1B,CAEA,uCAAY,CACV,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,KAAK,CACb,eAAe,CAAE,MAAM,CACvB,QAAQ,CAAE,MACZ,CAEA,yBAAW,CAAG,eAAE,CACd,SAAS,CAAE,GAAG,CACd,OAAO,CAAE,IACX,CAEA,8CAAmB,CACjB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,CAAC,CACZ,eAAe,CAAE,UAAU,CAC3B,OAAO,CAAE,GAAG,CAAC,IACf,CAEA,sCAAW,CACT,WAAW,CAAE,UAAU,CACvB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACP,CAEA,wBAAU,CAAG,eAAE,CACb,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,IACf,CAEA,8BAAgB,CAAG,gBAAG,CACpB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IACf,CAEA,8BAAgB,CAAG,gBAAG,CACpB,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC/B,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,GACd,CAIA,MAAO,YAAY,MAAM,CAAE,CACzB,kCAAO,CACL,SAAS,CAAE,MAAM,CACjB,OAAO,CAAE,IAAI,CAAC,GAChB,CAEA,iCAAM,CACJ,WAAW,CAAE,CAAC,CACd,KAAK,CAAE,KACT,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,iCAAM,CACJ,MAAM,CAAE,KACV,CAEA,uCAAY,CACV,MAAM,CAAE,IACV,CAEA,yBAAW,CAAG,eAAE,CACd,SAAS,CAAE,GACb,CAEA,8CAAmB,CACjB,OAAO,CAAE,GAAG,CAAC,IACf,CAEA,wBAAU,CAAG,eAAE,CACb,SAAS,CAAE,KACb,CAEA,8BAAgB,CAAG,gBAAG,CACpB,SAAS,CAAE,KACb,CAEA,8BAAgB,CAAG,gBAAG,CACpB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,GACd,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,iCAAM,CACJ,KAAK,CAAE,IACT,CACF"}'
};
function hover(node) {
  node.onmousemove = (e) => {
    for (const card of node.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
}
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  $$result.css.add(css);
  return `<div data-aos="fade-up" class="flex flex-col gap-5"> <div id="cards" class="max-md:w-[100vw] gap-5 svelte-1dvd85" data-svelte-h="svelte-4pkv73"> <div id="services" class="card shadow-2xl svelte-1dvd85"><div class="card-content svelte-1dvd85"><div class="card-image svelte-1dvd85"><i class="fa-duotone fa-apartment svelte-1dvd85"></i></div> <div class="card-info-wrapper svelte-1dvd85"><div class="card-info svelte-1dvd85"><i class="fa-duotone fa-apartment svelte-1dvd85"></i> <div class="card-info-title svelte-1dvd85"><h3 class="svelte-1dvd85">Website Development</h3> <h4 class="svelte-1dvd85">Expertly coded websites tailored to your business needs.</h4></div></div></div></div></div>   <div data-aos="fade-up" class="card shadow-2xl svelte-1dvd85"><div class="card-content svelte-1dvd85"><div class="card-image svelte-1dvd85"><i class="fa-duotone fa-unicorn svelte-1dvd85"></i></div> <div class="card-info-wrapper svelte-1dvd85"><div class="card-info svelte-1dvd85"><i class="fa-duotone fa-unicorn svelte-1dvd85"></i> <div class="card-info-title svelte-1dvd85"><h3 class="svelte-1dvd85">UI/UX Design</h3> <h4 class="svelte-1dvd85">Intuitive interfaces focused on exceptional user experiences.</h4></div></div></div></div></div>   <div data-aos="fade-up" class="card shadow-2xl svelte-1dvd85"><div class="card-content svelte-1dvd85"><div class="card-image svelte-1dvd85"><i class="fa-duotone fa-blender-phone svelte-1dvd85"></i></div> <div class="card-info-wrapper svelte-1dvd85"><div class="card-info svelte-1dvd85"><i class="fa-duotone fa-blender-phone svelte-1dvd85"></i> <div class="card-info-title svelte-1dvd85"><h3 class="svelte-1dvd85">AI Software Development</h3> <h4 class="svelte-1dvd85">Cutting-edge AI integrations to drive efficiency and insights.</h4></div></div></div></div></div>   <div data-aos="fade-up" class="card shadow-2xl svelte-1dvd85"><div class="card-content svelte-1dvd85"><div class="card-image svelte-1dvd85"><i class="fa-duotone fa-person-to-portal svelte-1dvd85"></i></div> <div class="card-info-wrapper svelte-1dvd85"><div class="card-info svelte-1dvd85"><i class="fa-duotone fa-person-to-portal svelte-1dvd85"></i> <div class="card-info-title svelte-1dvd85"><h3 class="svelte-1dvd85">Custom Software</h3> <h4 class="svelte-1dvd85">Innovative custom software aligning with your unique requirements.</h4></div></div></div></div></div>   <div data-aos="fade-up" class="card shadow-2xl svelte-1dvd85"><div class="card-content svelte-1dvd85"><div class="card-image svelte-1dvd85"><i class="fa-duotone fa-person-from-portal svelte-1dvd85"></i></div> <div class="card-info-wrapper svelte-1dvd85"><div class="card-info svelte-1dvd85"><i class="fa-duotone fa-person-from-portal svelte-1dvd85"></i> <div class="card-info-title svelte-1dvd85"><h3 class="svelte-1dvd85">Branding &amp; Graphics</h3> <h4 class="svelte-1dvd85">Visually compelling assets that reinforce your brand identity.</h4></div></div></div></div></div>   <div data-aos="fade-up" class="card shadow-2xl svelte-1dvd85"><div class="card-content svelte-1dvd85"><div class="card-image svelte-1dvd85"><i class="fa-duotone fa-otter svelte-1dvd85"></i></div> <div class="card-info-wrapper svelte-1dvd85"><div class="card-info svelte-1dvd85"><i class="fa-duotone fa-otter svelte-1dvd85"></i> <div class="card-info-title svelte-1dvd85"><h3 class="svelte-1dvd85">Custom Scripts</h3> <h4 class="svelte-1dvd85">Tailored automation scripts to streamline your workflows.</h4></div></div></div></div></div> </div>        ${validate_component(Branding, "Branding").$$render($$result, {}, {}, {})}   </div>`;
});
const Sectionintro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { desc } = $$props;
  let { name } = $$props;
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div class="flex flex-col justify-center items-center my-4 z-[100]"><h1 data-aos-delay="50" data-aos-duration="1000" data-aos="flip-down" class="highlight font-calsans text-5xl pb-3 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">${escape(name)}<br></h1> <p data-aos-delay="500" data-aos-duration="1000" data-aos="fade-in" class="font-inter font-normal text-xs md:text-sm lg:text-base text-neutral-400 max-w-[60%] tracking-wider text-center mx-auto">${escape(desc)}</p></div>`;
});
const Footer_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Footer, "Footer").$$render($$result, { footerType: "sitemap" }, {}, {
    default: () => {
      return `<div class="grid grid-cols-2 gap-8 pt-12 px-6 md:grid-cols-4 place-content-center bg-black"><div><h2 class="mb-6 text-sm font-semibold text-amber-200 uppercase" data-svelte-h="svelte-1g09z6e">Magnimont</h2> ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, { ulClass: "text-gray-300 text-xs" }, {}, {
        default: () => {
          return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-2", href: "/" }, {}, {
            default: () => {
              return `About`;
            }
          })} ${validate_component(FooterLink, "FooterLink").$$render(
            $$result,
            {
              liClass: "mb-2",
              href: "forum.magnimont.com"
            },
            {},
            {
              default: () => {
                return `Forum`;
              }
            }
          )} ${validate_component(FooterLink, "FooterLink").$$render(
            $$result,
            {
              liClass: "mb-2",
              href: "host.magnimont.com"
            },
            {},
            {
              default: () => {
                return `Hosting`;
              }
            }
          )} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-2", href: "/" }, {}, {
            default: () => {
              return `Career`;
            }
          })}`;
        }
      })}</div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-amber-200" data-svelte-h="svelte-o20nl6">Socials</h2> ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, { ulClass: "text-gray-300 text-xs" }, {}, {
        default: () => {
          return `${validate_component(FooterLink, "FooterLink").$$render(
            $$result,
            {
              liClass: "mb-2",
              href: "https://discord.gg/magnimont-876113814314164256"
            },
            {},
            {
              default: () => {
                return `Discord Server`;
              }
            }
          )} ${validate_component(FooterLink, "FooterLink").$$render(
            $$result,
            {
              liClass: "mb-2",
              href: "https://www.linkedin.com/company/magnimont/"
            },
            {},
            {
              default: () => {
                return `Linkedin`;
              }
            }
          )} ${validate_component(FooterLink, "FooterLink").$$render(
            $$result,
            {
              liClass: "mb-2",
              href: "https://github.com/Magnimont"
            },
            {},
            {
              default: () => {
                return `Github`;
              }
            }
          )} ${validate_component(FooterLink, "FooterLink").$$render(
            $$result,
            {
              liClass: "mb-2",
              href: "https://www.youtube.com/@Magnimont/videos"
            },
            {},
            {
              default: () => {
                return `Youtube`;
              }
            }
          )}`;
        }
      })}</div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-amber-200" data-svelte-h="svelte-5fqan1">Legal</h2> ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, { ulClass: "text-gray-300 text-xs" }, {}, {
        default: () => {
          return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-2", href: "/" }, {}, {
            default: () => {
              return `Privacy Policy`;
            }
          })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-2", href: "/" }, {}, {
            default: () => {
              return `Licensing`;
            }
          })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-2", href: "/" }, {}, {
            default: () => {
              return `Terms &amp; Conditions`;
            }
          })}`;
        }
      })}</div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-amber-200" data-svelte-h="svelte-1pp4444">Connect</h2> ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, { ulClass: "text-gray-300 text-xs" }, {}, {
        default: () => {
          return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
            default: () => {
              return `+91 8076974315`;
            }
          })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
            default: () => {
              return `hi@magnimont.com`;
            }
          })}`;
        }
      })}</div></div> <div class="pb-5 px-8 bg-black md:flex md:items-center md:justify-between">${validate_component(FooterCopyright, "FooterCopyright").$$render(
        $$result,
        {
          spanClass: "text-xs text-amber-200 sm:text-center",
          href: "/",
          by: "Magnimont™"
        },
        {},
        {}
      )} <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center md:mt-0">${validate_component(FooterIcon, "FooterIcon").$$render($$result, { href: "/" }, {}, {})} ${validate_component(FooterIcon, "FooterIcon").$$render(
        $$result,
        {
          href: "https://discord.gg/magnimont-876113814314164256"
        },
        {},
        {
          default: () => {
            return `${validate_component(DiscordSolid, "DiscordSolid").$$render(
              $$result,
              {
                class: "w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(FooterIcon, "FooterIcon").$$render($$result, { href: "/" }, {}, {})} ${validate_component(FooterIcon, "FooterIcon").$$render($$result, { href: "https://github.com/Magnimont" }, {}, {
        default: () => {
          return `${validate_component(GithubSolid, "GithubSolid").$$render(
            $$result,
            {
              class: "w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
            },
            {},
            {}
          )}`;
        }
      })}</div></div>`;
    }
  })}`;
});
const MetaTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let updatedTitle;
  let { title = "" } = $$props;
  let { titleTemplate = "" } = $$props;
  let { robots = "index,follow" } = $$props;
  let { additionalRobotsProps = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { mobileAlternate = void 0 } = $$props;
  let { languageAlternates = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { facebook = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { additionalMetaTags = void 0 } = $$props;
  let { additionalLinkTags = void 0 } = $$props;
  let robotsParams = "";
  if (additionalRobotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, maxVideoPreview, noarchive, noimageindex, notranslate, unavailableAfter } = additionalRobotsProps;
    robotsParams = `${nosnippet ? ",nosnippet" : ""}${maxSnippet ? `,max-snippet:${maxSnippet}` : ""}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ""}${noarchive ? ",noarchive" : ""}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ""}${noimageindex ? ",noimageindex" : ""}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ""}${notranslate ? ",notranslate" : ""}`;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.titleTemplate === void 0 && $$bindings.titleTemplate && titleTemplate !== void 0)
    $$bindings.titleTemplate(titleTemplate);
  if ($$props.robots === void 0 && $$bindings.robots && robots !== void 0)
    $$bindings.robots(robots);
  if ($$props.additionalRobotsProps === void 0 && $$bindings.additionalRobotsProps && additionalRobotsProps !== void 0)
    $$bindings.additionalRobotsProps(additionalRobotsProps);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.mobileAlternate === void 0 && $$bindings.mobileAlternate && mobileAlternate !== void 0)
    $$bindings.mobileAlternate(mobileAlternate);
  if ($$props.languageAlternates === void 0 && $$bindings.languageAlternates && languageAlternates !== void 0)
    $$bindings.languageAlternates(languageAlternates);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.facebook === void 0 && $$bindings.facebook && facebook !== void 0)
    $$bindings.facebook(facebook);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.additionalMetaTags === void 0 && $$bindings.additionalMetaTags && additionalMetaTags !== void 0)
    $$bindings.additionalMetaTags(additionalMetaTags);
  if ($$props.additionalLinkTags === void 0 && $$bindings.additionalLinkTags && additionalLinkTags !== void 0)
    $$bindings.additionalLinkTags(additionalLinkTags);
  updatedTitle = titleTemplate ? title ? titleTemplate.replace(/%s/g, title) : title : title;
  {
    if (!robots && additionalRobotsProps) {
      console.warn("additionalRobotsProps cannot be used when robots is set to false");
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-18pzfb8_START -->${updatedTitle ? `${$$result.title = `<title>${escape(updatedTitle)}</title>`, ""}` : ``}${robots !== false ? `<meta name="robots" content="${escape(robots, true) + escape(robotsParams, true)}">` : ``}${description ? `<meta name="description"${add_attribute("content", description, 0)}>` : ``}${canonical ? `<link rel="canonical"${add_attribute("href", canonical, 0)}>` : ``}${keywords?.length ? `<meta name="keywords"${add_attribute("content", keywords.join(", "), 0)}>` : ``}${mobileAlternate ? `<link rel="alternate"${add_attribute("media", mobileAlternate.media, 0)}${add_attribute("href", mobileAlternate.href, 0)}>` : ``}${languageAlternates && languageAlternates.length > 0 ? `${each(languageAlternates, (languageAlternate) => {
    return `<link rel="alternate"${add_attribute("hreflang", languageAlternate.hrefLang, 0)}${add_attribute("href", languageAlternate.href, 0)}>`;
  })}` : ``}${twitter ? `${twitter.cardType ? `<meta name="twitter:card"${add_attribute("content", twitter.cardType, 0)}>` : ``} ${twitter.site ? `<meta name="twitter:site"${add_attribute("content", twitter.site, 0)}>` : ``} ${twitter.handle ? `<meta name="twitter:creator"${add_attribute("content", twitter.handle, 0)}>` : ``} ${twitter.title ? `<meta name="twitter:title"${add_attribute("content", twitter.title, 0)}>` : ``} ${twitter.description ? `<meta name="twitter:description"${add_attribute("content", twitter.description, 0)}>` : ``} ${twitter.image ? `<meta name="twitter:image"${add_attribute("content", twitter.image, 0)}>` : ``} ${twitter.imageAlt ? `<meta name="twitter:image:alt"${add_attribute("content", twitter.imageAlt, 0)}>` : ``}` : ``}${facebook ? `<meta property="fb:app_id"${add_attribute("content", facebook.appId, 0)}>` : ``}${openGraph ? `${openGraph.url || canonical ? `<meta property="og:url"${add_attribute("content", openGraph.url || canonical, 0)}>` : ``} ${openGraph.type ? `<meta property="og:type"${add_attribute("content", openGraph.type.toLowerCase(), 0)}> ${openGraph.type.toLowerCase() === "profile" && openGraph.profile ? `${openGraph.profile.firstName ? `<meta property="profile:first_name"${add_attribute("content", openGraph.profile.firstName, 0)}>` : ``} ${openGraph.profile.lastName ? `<meta property="profile:last_name"${add_attribute("content", openGraph.profile.lastName, 0)}>` : ``} ${openGraph.profile.username ? `<meta property="profile:username"${add_attribute("content", openGraph.profile.username, 0)}>` : ``} ${openGraph.profile.gender ? `<meta property="profile:gender"${add_attribute("content", openGraph.profile.gender, 0)}>` : ``}` : `${openGraph.type.toLowerCase() === "book" && openGraph.book ? `${openGraph.book.authors && openGraph.book.authors.length ? `${each(openGraph.book.authors, (author) => {
    return `<meta property="book:author"${add_attribute("content", author, 0)}>`;
  })}` : ``} ${openGraph.book.isbn ? `<meta property="book:isbn"${add_attribute("content", openGraph.book.isbn, 0)}>` : ``} ${openGraph.book.releaseDate ? `<meta property="book:release_date"${add_attribute("content", openGraph.book.releaseDate, 0)}>` : ``} ${openGraph.book.tags && openGraph.book.tags.length ? `${each(openGraph.book.tags, (tag) => {
    return `<meta property="book:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "article" && openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="article:published_time"${add_attribute("content", openGraph.article.publishedTime, 0)}>` : ``} ${openGraph.article.modifiedTime ? `<meta property="article:modified_time"${add_attribute("content", openGraph.article.modifiedTime, 0)}>` : ``} ${openGraph.article.expirationTime ? `<meta property="article:expiration_time"${add_attribute("content", openGraph.article.expirationTime, 0)}>` : ``} ${openGraph.article.authors && openGraph.article.authors.length ? `${each(openGraph.article.authors, (author) => {
    return `<meta property="article:author"${add_attribute("content", author, 0)}>`;
  })}` : ``} ${openGraph.article.section ? `<meta property="article:section"${add_attribute("content", openGraph.article.section, 0)}>` : ``} ${openGraph.article.tags && openGraph.article.tags.length ? `${each(openGraph.article.tags, (tag) => {
    return `<meta property="article:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "video.movie" || openGraph.type.toLowerCase() === "video.episode" || openGraph.type.toLowerCase() === "video.tv_show" || openGraph.type.toLowerCase() === "video.other" && openGraph.video ? `${openGraph.video?.actors && openGraph.video.actors.length ? `${each(openGraph.video.actors, (actor) => {
    return `${actor.profile ? `<meta property="video:actor"${add_attribute("content", actor.profile, 0)}>` : ``} ${actor.role ? `<meta property="video:actor:role"${add_attribute("content", actor.role, 0)}>` : ``}`;
  })}` : ``} ${openGraph.video?.directors && openGraph.video.directors.length ? `${each(openGraph.video.directors, (director) => {
    return `<meta property="video:director"${add_attribute("content", director, 0)}>`;
  })}` : ``} ${openGraph.video?.writers && openGraph.video.writers.length ? `${each(openGraph.video.writers, (writer) => {
    return `<meta property="video:writer"${add_attribute("content", writer, 0)}>`;
  })}` : ``} ${openGraph.video?.duration ? `<meta property="video:duration"${add_attribute("content", openGraph.video.duration.toString(), 0)}>` : ``} ${openGraph.video?.releaseDate ? `<meta property="video:release_date"${add_attribute("content", openGraph.video.releaseDate, 0)}>` : ``} ${openGraph.video?.tags && openGraph.video.tags.length ? `${each(openGraph.video.tags, (tag) => {
    return `<meta property="video:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``} ${openGraph.video?.series ? `<meta property="video:series"${add_attribute("content", openGraph.video.series, 0)}>` : ``}` : ``}`}`}`}` : ``} ${openGraph.title || updatedTitle ? `<meta property="og:title"${add_attribute("content", openGraph.title || updatedTitle, 0)}>` : ``} ${openGraph.description || description ? `<meta property="og:description"${add_attribute("content", openGraph.description || description, 0)}>` : ``} ${openGraph.images && openGraph.images.length ? `${each(openGraph.images, (image) => {
    return `<meta property="og:image"${add_attribute("content", image.url, 0)}> ${image.alt ? `<meta property="og:image:alt"${add_attribute("content", image.alt, 0)}>` : ``} ${image.width ? `<meta property="og:image:width"${add_attribute("content", image.width.toString(), 0)}>` : ``} ${image.height ? `<meta property="og:image:height"${add_attribute("content", image.height.toString(), 0)}>` : ``} ${image.secureUrl ? `<meta property="og:image:secure_url"${add_attribute("content", image.secureUrl.toString(), 0)}>` : ``} ${image.type ? `<meta property="og:image:type"${add_attribute("content", image.type.toString(), 0)}>` : ``}`;
  })}` : ``} ${openGraph.videos && openGraph.videos.length ? `${each(openGraph.videos, (video) => {
    return `<meta property="og:video"${add_attribute("content", video.url, 0)}> ${video.width ? `<meta property="og:video:width"${add_attribute("content", video.width.toString(), 0)}>` : ``} ${video.height ? `<meta property="og:video:height"${add_attribute("content", video.height.toString(), 0)}>` : ``} ${video.secureUrl ? `<meta property="og:video:secure_url"${add_attribute("content", video.secureUrl.toString(), 0)}>` : ``} ${video.type ? `<meta property="og:video:type"${add_attribute("content", video.type.toString(), 0)}>` : ``}`;
  })}` : ``} ${openGraph.audio && openGraph.audio.length ? `${each(openGraph.audio, (audio) => {
    return `<meta property="og:audio"${add_attribute("content", audio.url, 0)}> ${audio.secureUrl ? `<meta property="og:audio:secure_url"${add_attribute("content", audio.secureUrl.toString(), 0)}>` : ``} ${audio.type ? `<meta property="og:audio:type"${add_attribute("content", audio.type.toString(), 0)}>` : ``}`;
  })}` : ``} ${openGraph.locale ? `<meta property="og:locale"${add_attribute("content", openGraph.locale, 0)}>` : ``} ${openGraph.siteName ? `<meta property="og:site_name"${add_attribute("content", openGraph.siteName, 0)}>` : ``}` : ``}${additionalMetaTags && Array.isArray(additionalMetaTags) ? `${each(additionalMetaTags, (tag) => {
    return `<meta${spread([escape_object(tag)], {})}>`;
  })}` : ``}${additionalLinkTags?.length ? `${each(additionalLinkTags, (tag) => {
    return `<link${spread([escape_object(tag)], {})}>`;
  })}` : ``}<!-- HEAD_svelte-18pzfb8_END -->`, ""}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Spotlight, "Spotlight").$$render($$result, { id: "home" }, {}, {})}  <div class="box-shadow h-[30rem] w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center"><div class="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/60 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div> <div class="flex flex-col">${validate_component(Sectionintro, "Intro").$$render(
    $$result,
    {
      id: "testimonials",
      name: "Client Testimonials",
      desc: "Esteemed clients share their experiences with Magnimonts tailored digital solutions."
    },
    {},
    {}
  )} ${validate_component(Laptop, "Laptop").$$render($$result, {}, {}, {})}</div></div>  <div class="box-shadow min-h-[60rem] w-full bg-black bg-dot-white/[0.2] rounded-md shadow-2xl relative flex flex-col items-center justify-center"><div class="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> ${validate_component(Sectionintro, "Intro").$$render(
    $$result,
    {
      id: "services",
      name: "Our Expertise ",
      desc: "Innovative solutions",
      class: "highlight"
    },
    {},
    {}
  )} ${validate_component(Services, "Services").$$render($$result, {}, {}, {})}</div> <div class="box-shadow h-[45rem] -full bg-black bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center"><div class="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/60 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div> ${validate_component(Sectionintro, "Intro").$$render(
    $$result,
    {
      name: "Frequently Asked Questions",
      desc: "Addressing your queries, simplifying your journey\r\n    "
    },
    {},
    {}
  )} ${validate_component(Faqtabs, "Faqtabs").$$render($$result, {}, {}, {})}</div> ${validate_component(Footer_1, "Footer").$$render($$result, {}, {}, {})}  ${validate_component(MetaTags, "MetaTags").$$render(
    $$result,
    {
      title: "Magnimont",
      description: "Magnimont description metatag",
      canonical: "https://www.canonical.ie/",
      openGraph: {
        url: "https://www.url.ie/a",
        title: "Magnimont ",
        description: "Magnimont is a leading digital agency specializing in custom web development, AI solutions, and tailored software. We craft innovative websites, intelligent chatbots, Discord bots, and custom applications to drive growth for businesses across industries. Our experts blend cutting-edge technologies with creative ingenuity to deliver digital experiences that captivate users and propel your brand forward.",
        //edit this too okay?
        images: [
          {
            url: "%sveltekit.assets%/favico.svg",
            width: 100,
            height: 100,
            alt: "Og Image Alt"
          }
        ],
        siteName: "Magnimont"
      },
      twitter: {
        handle: "@magnimont",
        //put our twitter username here
        site: "@magnimont",
        cardType: "https://i.imgur.com/aTa8bjq.png",
        title: "Magnimont",
        description: "Magnimont is a leading digital agency specializing in custom web development, AI solutions, and tailored software. We craft innovative websites, intelligent chatbots, Discord bots, and custom applications to drive growth for businesses across industries. Our experts blend cutting-edge technologies with creative ingenuity to deliver digital experiences that captivate users and propel your brand forward.",
        //edit this too this is the description for like discord and twitter etc etc
        image: "%sveltekit.assets%/favico.svg",
        imageAlt: "https://i.imgur.com/aTa8bjq.png"
      }
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
