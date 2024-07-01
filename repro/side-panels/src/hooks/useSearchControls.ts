import React from 'react';

/**
 * Sort order for sorting data. Can be 'asc' or 'desc'.
 */
export type SortOrder = 'asc' | 'desc';

/**
 * A sort function that takes data and an order ('asc' or 'desc') and returns the
 * data sorted according to the order.
 */
export type SortFn<D> = (data: D[], order: SortOrder | undefined) => D[];

/**
 * A sort object that contains usefult reference information for the way data
 * should be sorted, as well as the sort function to be used. Useful to update
 * the UI according to the current sort state.
 */
interface Sort<D> {
  by: string;
  order: SortOrder;
  sortFn: SortFn<D>;
}

/**
 * A filter function that takes data and a term and returns a boolean indicating
 * whether the data should be included in the filtered data.
 */
export type FilterFn<D> = (data: D, term: unknown) => boolean;

/**
 * A filter object that contains the term and the filter function. The term will
 * be passed to the filter function along with the data to determine if the data
 * should be included in the filtered data.
 */
export interface Filter<D> {
  term: unknown;
  filterFn: FilterFn<D>;
}

/**
 * A map of filter keys to filter objects. The filter key is used to identify the
 * filter and the filter object contains the term and the filter function.
 */
export interface FilterMap<D> {
  [key: string]: Filter<D>;
}

/**
 * An object that contains the filter key and data to update a filter in the filter
 * map. The filter key is used to identify the filter and the data contains the term
 * and the filter function to update the filter.
 */
export interface UpdateFilterMap<D> {
  [key: string]: Partial<Filter<D>>;
}

/**
 * Hook that provides search controls for filtering and sorting data. Offers common
 * functionality for search bars, filters, and sort controls.
 *
 * @param initialData initial data to be used in the search controls
 * @param initialFilters initial filters to be used in the search controls
 * @param initialSort initial sort to be used in the search controls
 *
 * @returns
 * An object containing the following properties:
 *
 * `data` - the processed data after filtering and sorting
 *
 * `updateData` - function to update the data in the hook
 *
 * `sort` - the current sort object
 *
 * `updateSort` - function to update the sort object
 *
 * `setFilters` - function to set filters in the filter map
 *
 * `getFilterTerm` - function to get the filter term for a specific filter key
 *
 * `removeFilter` - function to remove a filter from the filter map
 */
export default function useSearchControls<D>(
  initialData?: D[],
  initialFilters?: FilterMap<D>,
  initialSort?: Sort<D>,
) {
  const [data, setData] = React.useState<D[]>(initialData || []);

  const [sort, setSort] = React.useState<Sort<D>>(
    initialSort || { by: '', order: 'asc', sortFn: () => data },
  );

  const [filterMap, setFilterMap] = React.useState<FilterMap<D>>(
    initialFilters || {},
  );

  const processedData = React.useMemo<D[]>(() => {
    const filteredData = data.filter((item) => {
      for (const key in filterMap) {
        const filter = filterMap[key];

        if (!filter.filterFn(item, filter.term)) {
          return false;
        }
      }

      return true;
    });

    let sortedData = filteredData;
    sortedData = sort.sortFn(filteredData, sort.order);
    return sortedData;
  }, [data, filterMap, sort]);

  /**
   * Update the data in the hook. Useful for updating the data from an external
   * source.
   *
   * @param newData new data to be used as base for filtering and sorting
   */
  function updateData(newData: D[]) {
    setData(newData);
  }

  /**
   * Update sort information. This will update any single or multiple properties of
   * the sort object.
   *
   * @param newSortFn new sort function to be used. See `SortFn` for more information.
   */
  function updateSort(newSort: Partial<Sort<D>>) {
    const updatedSort = { ...sort };

    if (newSort.by) {
      updatedSort.by = newSort.by;
    }

    if (newSort.order) {
      updatedSort.order = newSort.order;
    }

    if (newSort.sortFn) {
      updatedSort.sortFn = newSort.sortFn;
    }

    setSort(updatedSort);
  }

  /**
   * Returns the filter term for a specific filter key
   *
   * @param filterKey
   * @returns
   */
  function getFilterTerm(filterKey: string) {
    return filterMap[filterKey]?.term;
  }

  /**
   * Updates filters in the filter map. This will add new filters if they don't exist
   * and update existing filters if they do.
   *
   * @param filters
   */
  function setFilters(filters: UpdateFilterMap<D>) {
    const newFilterMap: FilterMap<D> = { ...filterMap };

    for (const key in filters) {
      // Add filter if it doesn't exist
      if (!newFilterMap[key]) {
        if (!filters[key].term || !filters[key].filterFn) {
          throw new Error(
            `Filter with key ${key} is not present in the filter map, and needs to be added but it's missing "term" or "filterFn"`,
          );
        }

        newFilterMap[key] = {
          term: filters[key].term,
          filterFn: filters[key].filterFn as FilterFn<D>,
        };
      }
      // Update filter if it exists
      else {
        if (typeof filters[key].term !== 'undefined') {
          newFilterMap[key].term = filters[key].term;
        }

        if (filters[key].filterFn) {
          newFilterMap[key].filterFn = filters[key].filterFn as FilterFn<D>;
        }
      }
    }

    setFilterMap(newFilterMap);
  }

  /**
   * Removes a filter from the filter map
   *
   * @param filterKey
   */
  function removeFilter(filterKey: string) {
    const newFilterMap: FilterMap<D> = { ...filterMap };
    delete newFilterMap[filterKey];

    setFilterMap(newFilterMap);
  }

  return {
    data: processedData,
    updateData,
    sort,
    updateSort,
    setFilters,
    getFilterTerm,
    removeFilter,
  };
}
