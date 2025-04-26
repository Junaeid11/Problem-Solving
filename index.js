(function () {
    const SWAP_DONE_KEY = 'menuSwapDone';
  
    if (sessionStorage.getItem(SWAP_DONE_KEY) === 'true') {
      console.log("Swap has already been done for this session.");
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
  
        sessionStorage.setItem(SWAP_DONE_KEY, 'true');
        console.log('Successfully swapped Reference and Community menu items.');
      } else {
        console.warn('Swap failed: Could not access parent elements.');
      }
    } else {
      console.warn('Swap failed: Either items not found or they are not siblings.');
    }
  })();