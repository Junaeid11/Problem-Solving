(function () {
    const swapDone = 'menuSwapDone';
  
    if (sessionStorage.getItem(swapDone) === 'true') {
      console.log("Swap has already been done");
      return;
    }
    const referenceLink = document.querySelector('a[href="/reference/react"]');
    const communityLink = document.querySelector('a[href="/community"]');
  
    if (referenceLink && communityLink && referenceLink.parentNode && communityLink.parentNode && referenceLink.parentNode.parentNode === communityLink.parentNode.parentNode) {
      const referenceItem = referenceLink.parentNode;
      const communityItem = communityLink.parentNode;
      const parent = referenceItem.parentNode;
  
      if (referenceItem && communityItem && parent) {
        if (Array.from(parent.children).indexOf(referenceItem) < Array.from(parent.children).indexOf(communityItem)) {
          parent.insertBefore(communityItem, referenceItem);
        } else {
          parent.insertBefore(referenceItem, communityItem);
        }
        sessionStorage.setItem(swapDone, 'true');
        console.log('Successfully swapped');
      } else {
        console.warn('Swap failed');
      }
    } 
  })();