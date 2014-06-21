var buildAlbumThumbnail = function() {
  var template =
      '<div class="collection-album-container col-md-2">'
    + '  <div class="collection-album-image-container">'
    + '    <img src="/images/album-placeholder.png"/>'
    + '  </div>'
    + '  <div class="caption album-collection-info">'
    + '    <p>'
    + '      <a class="album-name" href="/album.html"> Album Name </a>'
    + '      <br/>'
    + '      <a href="/album.html"> Artist name </a>'
    + '      <br/>'
    + '      X songs'
    + '      <br/>'
    + '      X:XX Total Length'
    + '    </p>'
    + '  </div>'
    + '</div>';

 return $(template);
};

var buildAlbumOverlay = function(albumURL) {
  var template =
      '<div class="collection-album-image-overlay">'
    + '  <div class="collection-overlay-content">'
    + '    <a class="collection-overlay-button" href="' + albumURL + '">'
    + '      <i class="fa fa-play"></i>'
    + '    </a>'
    + '    &nbsp;'
    + '    <a class="collection-overlay-button">'
    + '      <i class="fa fa-plus"></i>'
    + '    </a>'
    + '  </div>'
    + '</div>'
    ;
  return $(template);
};

var updateCollectionView = function() {
  var $collection = $(".collection-container .row");
  $collection.empty();

  var albumNumber = Math.floor((Math.random()*75)+25);
  for (var i = 0; i < albumNumber; i++) {
    var $newThumbnail = buildAlbumThumbnail();
    $collection.append($newThumbnail);
  }
  console.log(albumNumber+' albums are generated');

  var onHover = function(event) {
    $(this).append(buildAlbumOverlay("/album.html"));
  };

  var offHover = function(event) {
    $(this).find('.collection-album-image-overlay').remove();
  };

  $collection.find('.collection-album-image-container').hover(onHover, offHover);

  
};


if (document.URL.match(/\/collection.html/)) {
$(document).ready(function() {
  updateCollectionView();
  });
}
