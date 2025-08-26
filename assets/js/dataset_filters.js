var grid;
document.addEventListener('DOMContentLoaded',function(){
  var container = document.querySelector('.entries-grid');
  var filters = {};

  grid = new Isotope(container, {
    itemSelector: '.grid__item',
    layoutMode: 'fitRows'
  });

  window.addEventListener('resize', function(){
    grid.layout();
  });

  imagesLoaded(container).on('progress',function(){
    grid.layout();
  });

  var activeClass = "is-checked",
      comboClass = "comb",
      exclClass = "excl",
      resetClass = "show-all";

  var defaults = document.querySelectorAll("a." + activeClass + '[data-filter=""]');
  
  document.querySelectorAll(".filter-group a").forEach(function(element) {
    element.addEventListener("click", function(e) {
      var thisElement = this;
      var comboFilter,
        filterAttr = "data-filter";
      if (resetClass && !thisElement.classList.contains(resetClass)) {
        var filterValue = thisElement.getAttribute(filterAttr);
        var optionSet = thisElement.closest(".filter-group");
        var group = optionSet.getAttribute("data-filter-group");
        var filterGroup = filters[group];
        if (!filterGroup) {
          filterGroup = filters[group] = [];
        }
        var selectAll = optionSet.querySelectorAll("a[" + filterAttr + '=""]');
        document.querySelectorAll("." + resetClass).forEach(function(element) {
          element.classList.remove(activeClass);
        });
        comboFiltering(
          thisElement,
          filters,
          filterAttr,
          filterValue,
          optionSet,
          group,
          selectAll,
          activeClass,
          comboClass,
          exclClass
        );
        comboFilter = getComboFilter(filters);
        if (!comboFilter.length) document.querySelector("a." + resetClass).classList.add(activeClass);
        thisElement.classList.toggle(activeClass);
      } else {
        filters = {};
        comboFilter = "";
        document.querySelectorAll(".filter-group a").forEach(function(element) {
          element.classList.remove(activeClass);
        });
        thisElement.classList.add(activeClass);
        defaults.forEach(function(element) {
          element.classList.add(activeClass);
        });
      }
      grid.arrange({filter: comboFilter});
      e.preventDefault();
    });
  });
  grid.arrange(); 
});

function comboFiltering(
  element,
  filters,
  filterAttr,
  filterValue,
  optionSet,
  group,
  selectAll,
  activeClass,
  comboClass,
  exclClass
) {
  if (!optionSet.classList.contains(exclClass)) {
    if (!element.classList.contains(activeClass) && filterValue.length) {
      filters[group].push(filterValue);
      selectAll.forEach(function(element) {
        element.classList.remove(activeClass);
      });
    } else if (filterValue.length) {
      if (optionSet.classList.contains(comboClass)) {
        filters[group][0] = filters[group][0].replace(filterValue, "");
        if (!filters[group][0].length)
          filters[group].splice(0, 1);
      } else {
        var curIndex = filters[group].indexOf(filterValue);
        if (curIndex > -1) filters[group].splice(curIndex, 1);
      }
      if (!optionSet.querySelectorAll("a." + activeClass + ":not(["+filterAttr+"=''])").length)
        selectAll.forEach(function(element) {
          element.classList.add(activeClass);
        });
    } else {
      optionSet.querySelectorAll("a." + activeClass).forEach(function(element) {
        element.classList.remove(activeClass);
      });
      filters[group] = [];
    }
    if (optionSet.classList.contains(comboClass) && filters[group].length)
      filters[group] = [filters[group].join("")];
  } else {
    if (!element.classList.contains(activeClass) && filterValue.length) {
      optionSet.querySelectorAll("a." + activeClass).forEach(function(filterLink) {
        var removeFilter = filterLink.getAttribute(filterAttr);
        var removeIndex = filters[group].indexOf(removeFilter);
        filters[group].splice(removeIndex, 1);
      });
      filters[group].push(filterValue);
      optionSet.querySelectorAll("a." + activeClass).forEach(function(element) {
        element.classList.remove(activeClass);
      });
    } else if (filterValue.length) {
      var curIndex = filters[group].indexOf(filterValue);
      if (curIndex > -1) filters[group].splice(curIndex, 1);
      //if (!optionSet.querySelectorAll("a." + activeClass + ":not(["+filterAttr+"=''])").length)
      if (!filters[group].length)
        selectAll.forEach(function(element) {
          element.classList.add(activeClass);
        });
    } else {
      optionSet.querySelectorAll("a." + activeClass).forEach(function(element) {
        element.classList.remove(activeClass);
      });
      filters[group] = [];
    }
  }
}

function getComboFilter(filters) {
  var i = 0;
  var comboFilters = [];

  for (var prop in filters) {
    var filterGroup = filters[prop];
    if (!filterGroup.length) {
      continue;
    }
    if (i === 0) {
      comboFilters = filterGroup.slice(0);
    } else {
      var filterSelectors = [];
      var groupCombo = comboFilters.slice(0);
      for (var k = 0, len3 = filterGroup.length; k < len3; k++) {
        for (var j = 0, len2 = groupCombo.length; j < len2; j++) {
          filterSelectors.push(groupCombo[j] + filterGroup[k]);
        }
      }
      comboFilters = filterSelectors;
    }
    i++;
  }

  var comboFilter = comboFilters.join(", ");
  return comboFilter;
}
