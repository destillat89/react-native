module.exports = function (React) {
  var _React$PropTypes = React.PropTypes,
      shape = _React$PropTypes.shape,
      func = _React$PropTypes.func;


  var IMenuController = shape({
    open: func.isRequired,
    close: func.isRequired,
    toggle: func.isRequired,
    registerOptionsElement: func.isRequired
  });

  return { IMenuController: IMenuController };
};