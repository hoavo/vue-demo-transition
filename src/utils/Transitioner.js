let currentRoute, transitioning, transition;

export const getSharedElements = () => {
  const tx = {};
  for (const el of document.querySelectorAll("[tx]")) {
    tx[el.getAttribute("tx")] = el;
  }
  return tx;
};

export const beforeRoute = (to) => {
  // can't do 2 transitions at once.
  const loc = { ...to };
  loc.index =
    window.appHistory &&
    window.appHistory.current &&
    window.appHistory.current.index;
  if (!currentRoute) return void setTimeout(() => (currentRoute = loc));
  if (loc.index > currentRoute?.index) loc.wasPush = true;
  currentRoute = loc;
  if (transitioning || transition || !currentRoute) return;
  transitioning = getSharedElements();
  console.info("transitioning", transitioning);
  const wasPush = currentRoute && currentRoute.wasPush;
  transition = document.documentTransition?.prepare({
    //duration: wasPush ? 2000 : 500,
    //  rootTransition: wasPush ? "reveal-left" : "reveal-right",
    rootTransition: "reveal-right",
    sharedElements: Object.values(transitioning),
  });
};
export const afterRoute = async () => {
  await transition;
  if (!transitioning || !transition) return;
  const els = getSharedElements();
  const sharedElements = Object.keys(transitioning).map((tx) => els[tx]);
  transition = document.documentTransition?.start({ sharedElements });
  await transition;
  transitioning = transition = null;
};
