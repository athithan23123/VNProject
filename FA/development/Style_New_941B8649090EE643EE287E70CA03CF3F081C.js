
/*
 * CONSTANTS FOR FONT SIZE
 */
var DesktopUIConstants;

DesktopUIConstants = (function() {
  function DesktopUIConstants() {}

  DesktopUIConstants.TEXT_SIZE_SMALL = 20;

  DesktopUIConstants.TEXT_SIZE_MESSAGE = 24;

  DesktopUIConstants.TEXT_SIZE_MESSAGE_NAME = 25;

  return DesktopUIConstants;

})();

gs.DesktopUIConstants = DesktopUIConstants;

gs.UIConstants = DesktopUIConstants;


/*
 * NAME BOX
 */

ui.UIManager.styles.messageBoxNameText = {
  "font": {
    "name": "WRTishKid",
    "size": gs.UIConstants.TEXT_SIZE_MESSAGE_NAME,
    "smallCaps": false,
    "italic": false,
    "color": [59, 59, 59, 255]
  }
};


/*
 * ADV MODE
 */

ui.UIManager.styles.advMessageText = {
  "font": {
    "name": "WRTishKid",
    "size": gs.UIConstants.TEXT_SIZE_MESSAGE,
    "smallCaps": false,
    "italic": false,
    "color": [59, 59, 59, 255]
  }
};


/*
 * NVL MODE
 */

ui.UIManager.styles.nvlMessageText = {
  "font": {
    "name": "WRTishKid",
    "size": gs.UIConstants.TEXT_SIZE_MESSAGE,
    "smallCaps": false,
    "italic": false,
    "color": [59, 59, 59, 255]
  }
};


/*
 * CUSTOM MESSAGE
 */

ui.UIManager.styles.customMessageText = {
  "font": {
    "name": "WRTishKid",
    "size": gs.UIConstants.TEXT_SIZE_MESSAGE,
    "smallCaps": false,
    "italic": false,
    "color": [59, 59, 59, 255]
  }
};


/*
 * BACKLOG, ETC.
 */

ui.UIManager.styles.messageText = {
  "font": {
    "name": "WRTishKid",
    "size": gs.UIConstants.TEXT_SIZE_MESSAGE,
    "smallCaps": false,
    "italic": false
  }
};


/*
 * Defines the font used for the name-column of the message backlog.
 */

ui.UIManager.styles.backlogNameText = {
  "font": {
    "name": "WRTishKid",
    "size": gs.UIConstants.TEXT_SIZE_MESSAGE_NAME,
    "smallCaps": false,
    "italic": false,
    "border": true,
    "borderSize": 4
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0FBQUEsSUFBQTs7QUFHTTs7O0VBQ0Ysa0JBQUMsQ0FBQSxlQUFELEdBQW1COztFQUNuQixrQkFBQyxDQUFBLGlCQUFELEdBQXFCOztFQUNyQixrQkFBQyxDQUFBLHNCQUFELEdBQTBCOzs7Ozs7QUFDOUIsRUFBRSxDQUFDLGtCQUFILEdBQXdCOztBQUN4QixFQUFFLENBQUMsV0FBSCxHQUFpQjs7O0FBQ2pCOzs7O0FBR0EsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsa0JBQXBCLEdBQXlDO0VBQ3JDLE1BQUEsRUFBUTtJQUNKLE1BQUEsRUFBUSxXQURKO0lBRUosTUFBQSxFQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsc0JBRm5CO0lBR0osV0FBQSxFQUFhLEtBSFQ7SUFJSixRQUFBLEVBQVUsS0FKTjtJQUtKLE9BQUEsRUFBUyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEdBQWIsQ0FMTDtHQUQ2Qjs7OztBQVN6Qzs7OztBQUdBLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQXBCLEdBQXFDO0VBQ2pDLE1BQUEsRUFBUTtJQUNKLE1BQUEsRUFBUSxXQURKO0lBRUosTUFBQSxFQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsaUJBRm5CO0lBR0osV0FBQSxFQUFhLEtBSFQ7SUFJSixRQUFBLEVBQVUsS0FKTjtJQUtKLE9BQUEsRUFBUyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEdBQWIsQ0FMTDtHQUR5Qjs7OztBQVNyQzs7OztBQUdBLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQXBCLEdBQXFDO0VBQ2pDLE1BQUEsRUFBUTtJQUNKLE1BQUEsRUFBUSxXQURKO0lBRUosTUFBQSxFQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsaUJBRm5CO0lBR0osV0FBQSxFQUFhLEtBSFQ7SUFJSixRQUFBLEVBQVUsS0FKTjtJQUtKLE9BQUEsRUFBUyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEdBQWIsQ0FMTDtHQUR5Qjs7OztBQVVyQzs7OztBQUdBLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFwQixHQUF3QztFQUNwQyxNQUFBLEVBQVE7SUFDSixNQUFBLEVBQVEsV0FESjtJQUVKLE1BQUEsRUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLGlCQUZuQjtJQUdKLFdBQUEsRUFBYSxLQUhUO0lBSUosUUFBQSxFQUFVLEtBSk47SUFLSixPQUFBLEVBQVMsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxHQUFiLENBTEw7R0FENEI7Ozs7QUFTeEM7Ozs7QUFHQSxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFwQixHQUFrQztFQUM5QixNQUFBLEVBQVE7SUFDUixNQUFBLEVBQVEsV0FEQTtJQUVSLE1BQUEsRUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLGlCQUZmO0lBR1IsV0FBQSxFQUFhLEtBSEw7SUFJUixRQUFBLEVBQVUsS0FKRjtHQURzQjs7OztBQVFsQzs7OztBQUdBLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQXBCLEdBQXNDO0VBQ2xDLE1BQUEsRUFBUTtJQUNKLE1BQUEsRUFBUSxXQURKO0lBRUosTUFBQSxFQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsc0JBRm5CO0lBR0osV0FBQSxFQUFhLEtBSFQ7SUFJSixRQUFBLEVBQVUsS0FKTjtJQUtKLFFBQUEsRUFBVSxJQUxOO0lBTUosWUFBQSxFQUFjLENBTlY7R0FEMEIiLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcclxuIyBDT05TVEFOVFMgRk9SIEZPTlQgU0laRVxyXG4jIyNcclxuY2xhc3MgRGVza3RvcFVJQ29uc3RhbnRzXHJcbiAgICBAVEVYVF9TSVpFX1NNQUxMID0gMjBcclxuICAgIEBURVhUX1NJWkVfTUVTU0FHRSA9IDI0XHJcbiAgICBAVEVYVF9TSVpFX01FU1NBR0VfTkFNRSA9IDI1XHJcbmdzLkRlc2t0b3BVSUNvbnN0YW50cyA9IERlc2t0b3BVSUNvbnN0YW50c1xyXG5ncy5VSUNvbnN0YW50cyA9IERlc2t0b3BVSUNvbnN0YW50c1xyXG4jIyNcclxuIyBOQU1FIEJPWFxyXG4jIyNcclxudWkuVUlNYW5hZ2VyLnN0eWxlcy5tZXNzYWdlQm94TmFtZVRleHQgPSB7XHJcbiAgICBcImZvbnRcIjogeyBcclxuICAgICAgICBcIm5hbWVcIjogXCJXUlRpc2hLaWRcIiwgXHJcbiAgICAgICAgXCJzaXplXCI6IGdzLlVJQ29uc3RhbnRzLlRFWFRfU0laRV9NRVNTQUdFX05BTUUsIFxyXG4gICAgICAgIFwic21hbGxDYXBzXCI6IGZhbHNlLCBcclxuICAgICAgICBcIml0YWxpY1wiOiBmYWxzZSwgXHJcbiAgICAgICAgXCJjb2xvclwiOiBbNTksIDU5LCA1OSwgMjU1XSxcclxuICAgIH1cclxufVxyXG4jIyNcclxuIyBBRFYgTU9ERVxyXG4jIyNcclxudWkuVUlNYW5hZ2VyLnN0eWxlcy5hZHZNZXNzYWdlVGV4dCA9IHtcclxuICAgIFwiZm9udFwiOiB7IFxyXG4gICAgICAgIFwibmFtZVwiOiBcIldSVGlzaEtpZFwiLCBcclxuICAgICAgICBcInNpemVcIjogZ3MuVUlDb25zdGFudHMuVEVYVF9TSVpFX01FU1NBR0UsIFxyXG4gICAgICAgIFwic21hbGxDYXBzXCI6IGZhbHNlLCBcclxuICAgICAgICBcIml0YWxpY1wiOiBmYWxzZSwgXHJcbiAgICAgICAgXCJjb2xvclwiOiBbNTksIDU5LCA1OSwgMjU1XSxcclxuICAgIH1cclxufVxyXG4jIyNcclxuIyBOVkwgTU9ERVxyXG4jIyNcclxudWkuVUlNYW5hZ2VyLnN0eWxlcy5udmxNZXNzYWdlVGV4dCA9IHtcclxuICAgIFwiZm9udFwiOiB7IFxyXG4gICAgICAgIFwibmFtZVwiOiBcIldSVGlzaEtpZFwiLCBcclxuICAgICAgICBcInNpemVcIjogZ3MuVUlDb25zdGFudHMuVEVYVF9TSVpFX01FU1NBR0UsIFxyXG4gICAgICAgIFwic21hbGxDYXBzXCI6IGZhbHNlLCBcclxuICAgICAgICBcIml0YWxpY1wiOiBmYWxzZSwgXHJcbiAgICAgICAgXCJjb2xvclwiOiBbNTksIDU5LCA1OSwgMjU1XSxcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4jIyNcclxuIyBDVVNUT00gTUVTU0FHRVxyXG4jIyNcclxudWkuVUlNYW5hZ2VyLnN0eWxlcy5jdXN0b21NZXNzYWdlVGV4dCA9IHtcclxuICAgIFwiZm9udFwiOiB7IFxyXG4gICAgICAgIFwibmFtZVwiOiBcIldSVGlzaEtpZFwiLCBcclxuICAgICAgICBcInNpemVcIjogZ3MuVUlDb25zdGFudHMuVEVYVF9TSVpFX01FU1NBR0UsIFxyXG4gICAgICAgIFwic21hbGxDYXBzXCI6IGZhbHNlLCBcclxuICAgICAgICBcIml0YWxpY1wiOiBmYWxzZSwgXHJcbiAgICAgICAgXCJjb2xvclwiOiBbNTksIDU5LCA1OSwgMjU1XSxcclxuICAgICAgICB9IFxyXG59XHJcbiMjI1xyXG4jIEJBQ0tMT0csIEVUQy5cclxuIyMjXHJcbnVpLlVJTWFuYWdlci5zdHlsZXMubWVzc2FnZVRleHQgPSB7XHJcbiAgICBcImZvbnRcIjogeyBcclxuICAgIFwibmFtZVwiOiBcIldSVGlzaEtpZFwiLCBcclxuICAgIFwic2l6ZVwiOiBncy5VSUNvbnN0YW50cy5URVhUX1NJWkVfTUVTU0FHRSwgXHJcbiAgICBcInNtYWxsQ2Fwc1wiOiBmYWxzZSwgXHJcbiAgICBcIml0YWxpY1wiOiBmYWxzZSwgXHJcbiAgICB9XHJcbn1cclxuIyMjXHJcbiMgRGVmaW5lcyB0aGUgZm9udCB1c2VkIGZvciB0aGUgbmFtZS1jb2x1bW4gb2YgdGhlIG1lc3NhZ2UgYmFja2xvZy5cclxuIyMjXHJcbnVpLlVJTWFuYWdlci5zdHlsZXMuYmFja2xvZ05hbWVUZXh0ID0ge1xyXG4gICAgXCJmb250XCI6IHsgXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiV1JUaXNoS2lkXCIsIFxyXG4gICAgICAgIFwic2l6ZVwiOiBncy5VSUNvbnN0YW50cy5URVhUX1NJWkVfTUVTU0FHRV9OQU1FLCBcclxuICAgICAgICBcInNtYWxsQ2Fwc1wiOiBmYWxzZSwgXHJcbiAgICAgICAgXCJpdGFsaWNcIjogZmFsc2UsIFxyXG4gICAgICAgIFwiYm9yZGVyXCI6IHRydWUsIFxyXG4gICAgICAgIFwiYm9yZGVyU2l6ZVwiOiA0IH1cclxufSJdfQ==
//# sourceURL=Style_New_192.js