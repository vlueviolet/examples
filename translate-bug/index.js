window.onload = function () {
  var openLayerBtn = document.querySelector('.btn-open');
  var thumbnailLayer = document.querySelector('.layer-thumbnail');
  var thumbnailLayerClose = thumbnailLayer.querySelector('.layer-btn-close');
  var showLayerClass = 'is-show';
  
  var thumbnailList = new eg.Flicking(".layer-thumbnail-list", {
    circular: true,
    gap: 10,
    zIndex: 10,
  });

  var handleOpenThumbnailLayer = function (e) {
    thumbnailLayer.classList.add(showLayerClass);
  };

  var handleCloseThumbnailLayer = function (e) {
    thumbnailLayer.classList.remove(showLayerClass);
  };

  openLayerBtn.addEventListener('click', handleOpenThumbnailLayer);
  thumbnailLayerClose.addEventListener('click', handleCloseThumbnailLayer);
};
