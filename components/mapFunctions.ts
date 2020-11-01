import {useState, useEffect} from 'react'

const useMapFunc = () => {
const [state, setState] = useState<any>({
    polygons: [],
      editing: null,
      creatingHole: false,
})

const finish = () => {
    const { polygons, editing } = state;
    setState({
      ...state,
      polygons: [...polygons, editing],
      editing: null,
      creatingHole: false,
    });
  }

  const cancel = () => {
    setState({
      ...state,
      polygons: [],
      editing: null,
      creatingHole: false,
    });
  }

  const createHole = () =>  {
    const { editing, creatingHole } = state;
    if (!creatingHole) {
      setState({
        ...state,
        creatingHole: true,
        editing: {
          ...editing,
          holes: [...editing.holes, []],
        },
      });
    } else {
      const holes = [...editing.holes];
      if (holes[holes.length - 1].length === 0) {
        holes.pop();
        setState({
          ...state,
          editing: {
            ...editing,
            holes,
          },
        });
      }
      setState({...state, creatingHole: false });
    }
  }

  const onPress = (e: any) =>  {
    const { editing, creatingHole } = state;
    let id=0;
    if (!editing) {
      setState({
        ...state,
        editing: {
          id: id++,
          coordinates: [e.nativeEvent.coordinate],
          holes: [],
        },
      });
    } else if (!creatingHole) {
      setState({
        ...state,
        editing: {
          ...editing,
          coordinates: [...editing.coordinates, e.nativeEvent.coordinate],
        },
      });
    } else {
      const holes = [...editing.holes];
      holes[holes.length - 1] = [
        ...holes[holes.length - 1],
        e.nativeEvent.coordinate,
      ];
      setState({
        editing: {
          ...state,
          ...editing,
          id: id++, // keep incrementing id to trigger display refresh
          coordinates: [...editing.coordinates],
          holes,
        },
      });
    }
  }

    const mapOptions:any = {
      scrollEnabled: true,
    };

  if (state.editing) {
      mapOptions.scrollEnabled = false;
      mapOptions.onPanDrag = (e:any) => onPress(e);
    }

    return {
        finish, cancel, createHole, mapOptions, onPress
    }
}
 export default useMapFunc;