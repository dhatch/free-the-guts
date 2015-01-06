/*
 * Copywrite (c) 2015 David Hatch
 * MIT Licensed.  See LICENSE.txt.
 *
 * Insert necessary UI for sorting by difficulty rating.
 */

var insertSortUi = function () {
var sortHtml = '<div class="difficulty-average-sort"><h3 class="popover-title">Sort <button class="btn clear-btn" disabled="disabled">Clear</button></h3><div class="popover-content"><button class="btn sort-asc-btn">Ascending <i class="icon-arrow-up"></i></button><button class="btn sort-desc-btn">Descending <i class="icon-arrow-down"></i></button></div></div>',
        popupInner = $(".difficulty-average-popover > .popover-inner");

    popupInner.prepend(sortHtml);
};

insertSortUi();
