ui.UiFactory.customTypes["ui.InputNumberBox"] = {
  "type": "ui.FreeLayout",
  "frame": [0, 0, Graphics.width, Graphics.height],
  "controls": [
    {
      "type": "ui.FreeLayout",
      "sizeToFit": true,
      "alignmentX": "center",
      "frame": [0, 10],
      "zIndex": 1000,
      "controls": [
        {
          "type": "ui.FreeLayout",
          "sizeToFit": true,
          "controls": [
            {
              "type": "ui.Window",
              "frame": [0, 0, "MAX($tempFields.digits * 110, 460)", 470]
            }, {
              "type": "ui.Panel",
              "style": "windowSubPanel",
              "frame": ["MAX($tempFields.digits * 110, 460) - 130", 180, 130, 470 - 160],
              "zIndex": 10
            }, {
              "type": "ui.Panel",
              "style": "windowContentSeparator",
              "frame": [0, 180, "MAX($tempFields.digits * 110, 460)", 1],
              "zIndex": 10
            }, {
              "type": "ui.Text",
              "styles": ["regularUIText"],
              "sizeToFit": true,
              "text": "Number",
              "zIndex": 10,
              "frame": [20, 15]
            }, {
              "type": "ui.StackLayout",
              "components": [
                {
                  "id": "numberInput",
                  "type": "Component_NumberInput",
                  "params": {
                    "digits": $(function() {
                      return $tempFields.digits;
                    })
                  }
                }
              ],
              "sizeToFit": true,
              "id": "numberField",
              "zIndex": 10,
              "alignmentX": "center",
              "frame": [12, 50],
              "dataField": $(function() {
                return $tempFields.digits;
              }),
              "template": {
                "type": "ui.FreeLayout",
                "margin": [5, 5, 5, 5],
                "sizeToFit": true,
                "controls": [
                  {
                    "type": "ui.Image",
                    "image": "UI/entrybox.png"
                  }, {
                    "type": "ui.Text",
                    "frame": [0, 0],
                    "sizeToFit": true,
                    "alignmentX": "center",
                    "alignmentY": "center",
                    "style": "numberInputEntryText",
                    "text": "0"
                  }
                ]
              }
            }
          ]
        }, {
          "type": "ui.GridLayout",
          "sizeToFit": true,
          "rows": 4,
          "columns": 3,
          "alignmentY": 0,
          "frame": [30, 185],
          "cellSpacing": [0, 0, 40, 0],
          "controls": [
            {
              "type": "ui.Number",
              "params": {
                "text": "1",
                "number": 1,
                "target": $(function() {
                  return 'numberField.numberInput';
                })
              }
            }, {
              "type": "ui.Number",
              "params": {
                "text": "2",
                "number": 2,
                "target": $(function() {
                  return 'numberField.numberInput';
                })
              }
            }, {
              "type": "ui.Number",
              "params": {
                "text": "3",
                "number": 3,
                "target": $(function() {
                  return 'numberField.numberInput';
                })
              }
            }, {
              "type": "ui.Number",
              "params": {
                "text": "4",
                "number": 4,
                "target": $(function() {
                  return 'numberField.numberInput';
                })
              }
            }, {
              "type": "ui.Number",
              "params": {
                "text": "5",
                "number": 5,
                "target": $(function() {
                  return 'numberField.numberInput';
                })
              }
            }, {
              "type": "ui.Number",
              "params": {
                "text": "6",
                "number": 6,
                "target": $(function() {
                  return 'numberField.numberInput';
                })
              }
            }, {
              "type": "ui.Number",
              "params": {
                "text": "7",
                "number": 7,
                "target": $(function() {
                  return 'numberField.numberInput';
                })
              }
            }, {
              "type": "ui.Number",
              "params": {
                "text": "8",
                "number": 8,
                "target": $(function() {
                  return 'numberField.numberInput';
                })
              }
            }, {
              "type": "ui.Number",
              "params": {
                "text": "9",
                "number": 9,
                "target": $(function() {
                  return 'numberField.numberInput';
                })
              }
            }, {
              "type": "ui.Number",
              "params": {
                "text": "0",
                "number": 0,
                "target": $(function() {
                  return 'numberField.numberInput';
                })
              }
            }
          ]
        }, {
          "type": "ui.NumberBackspace",
          "params": {
            "target": $(function() {
              return 'numberField.numberInput';
            })
          },
          "frame": ["100% - 120", 260]
        }, {
          "type": "ui.NumberAccept",
          "frame": ["100% - 120", 200]
        }
      ]
    }
  ]
};

ui.UiFactory.customTypes["ui.Number"] = {
  "type": "ui.FreeLayout",
  "sizeToFit": true,
  "controls": [
    {
      "type": "ui.Frame",
      "style": "selectableWindowShadow",
      "images": ["", "UI/selection.png", "", "", ""],
      "zIndex": 5000,
      "padding": [-16, -16, -16, -16],
      "frame": [0, 0, 70, 70],
      "actions": [
        {
          "name": "action_addNumber",
          "target": (function() {
            return p.target;
          }),
          "params": {
            "number": (function() {
              return p.number;
            })
          }
        }
      ]
    }, {
      "type": "ui.Text",
      "sizeToFit": true,
      "alignmentX": "center",
      "alignmentY": "center",
      "style": "numberInputDigitText",
      "text": (function() {
        return p.text;
      }),
      "zIndex": 5000
    }
  ]
};

ui.UiFactory.customTypes["ui.NumberBackspace"] = {
  "type": "ui.FreeLayout",
  "sizeToFit": true,
  "controls": [
    {
      "type": "ui.Text",
      "sizeToFit": true,
      "styles": ["regularUIText"],
      "text": "Back",
      "zIndex": 5000,
      "action": {
        "name": "action_removeNumber",
        "target": (function() {
          return p.target;
        }),
        "params": {
          "number": (function() {
            return p.number;
          })
        }
      }
    }
  ]
};

ui.UiFactory.customTypes["ui.NumberAccept"] = {
  "type": "ui.FreeLayout",
  "sizeToFit": true,
  "controls": [
    {
      "type": "ui.Text",
      "sizeToFit": true,
      "styles": ["regularUIText"],
      "text": "Confirm",
      "zIndex": 5000,
      "action": {
        "name": "emitEvent",
        "params": {
          "name": "accept",
          "source": $(function() {
            return o.parent.parent.parent;
          }),
          "data": {
            "number": $(function() {
              return $numberField.numberInput.number;
            })
          }
        }
      }
    }
  ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBWSxDQUFBLG1CQUFBLENBQXpCLEdBQWdEO0VBQzVDLE1BQUEsRUFBUSxlQURvQztFQUU1QyxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLFFBQVEsQ0FBQyxLQUFoQixFQUF1QixRQUFRLENBQUMsTUFBaEMsQ0FGbUM7RUFHNUMsVUFBQSxFQUFZO0lBQ1I7TUFDSSxNQUFBLEVBQVEsZUFEWjtNQUVJLFdBQUEsRUFBYSxJQUZqQjtNQUdJLFlBQUEsRUFBYyxRQUhsQjtNQUlJLE9BQUEsRUFBUyxDQUFDLENBQUQsRUFBSSxFQUFKLENBSmI7TUFLSSxRQUFBLEVBQVUsSUFMZDtNQU1JLFVBQUEsRUFBWTtRQUNSO1VBQ0ksTUFBQSxFQUFRLGVBRFo7VUFFSSxXQUFBLEVBQWEsSUFGakI7VUFHSSxVQUFBLEVBQVk7WUFDUjtjQUNJLE1BQUEsRUFBUSxXQURaO2NBRUksT0FBQSxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxvQ0FBUCxFQUE2QyxHQUE3QyxDQUZiO2FBRFEsRUFLUjtjQUNJLE1BQUEsRUFBUSxVQURaO2NBRUksT0FBQSxFQUFTLGdCQUZiO2NBR0ksT0FBQSxFQUFTLENBQUMsMENBQUQsRUFBNkMsR0FBN0MsRUFBa0QsR0FBbEQsRUFBdUQsR0FBQSxHQUFNLEdBQTdELENBSGI7Y0FJSSxRQUFBLEVBQVUsRUFKZDthQUxRLEVBV1I7Y0FDSSxNQUFBLEVBQVEsVUFEWjtjQUVJLE9BQUEsRUFBUyx3QkFGYjtjQUdJLE9BQUEsRUFBUyxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsb0NBQVQsRUFBK0MsQ0FBL0MsQ0FIYjtjQUlJLFFBQUEsRUFBVSxFQUpkO2FBWFEsRUFpQlI7Y0FDSSxNQUFBLEVBQVEsU0FEWjtjQUVJLFFBQUEsRUFBVSxDQUFDLGVBQUQsQ0FGZDtjQUdJLFdBQUEsRUFB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WUFBWSxDQUFDLFdBQVcsQ0FBQztZQUE1QixDQUFGLENBQWI7V0FBckU7U0FBaEM7T0FOZDtLQURRO0dBSDhCIiwic291cmNlc0NvbnRlbnQiOlsidWkuVWlGYWN0b3J5LmN1c3RvbVR5cGVzW1widWkuSW5wdXROdW1iZXJCb3hcIl0gPSB7XG4gICAgXCJ0eXBlXCI6IFwidWkuRnJlZUxheW91dFwiLFxuICAgIFwiZnJhbWVcIjogWzAsIDAsIEdyYXBoaWNzLndpZHRoLCBHcmFwaGljcy5oZWlnaHRdLFxuICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5GcmVlTGF5b3V0XCIsXG4gICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJhbGlnbm1lbnRYXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBcImZyYW1lXCI6IFswLCAxMF0sXG4gICAgICAgICAgICBcInpJbmRleFwiOiAxMDAwLFxuICAgICAgICAgICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5GcmVlTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLldpbmRvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDAsIFwiTUFYKCR0ZW1wRmllbGRzLmRpZ2l0cyAqIDExMCwgNDYwKVwiLCA0NzBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIndpbmRvd1N1YlBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcmFtZVwiOiBbXCJNQVgoJHRlbXBGaWVsZHMuZGlnaXRzICogMTEwLCA0NjApIC0gMTMwXCIsIDE4MCwgMTMwLCA0NzAgLSAxNjBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiekluZGV4XCI6IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcIndpbmRvd0NvbnRlbnRTZXBhcmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFswLCAxODAsIFwiTUFYKCR0ZW1wRmllbGRzLmRpZ2l0cyAqIDExMCwgNDYwKVwiLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInpJbmRleFwiOiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5UZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXNcIjogW1wicmVndWxhclVJVGV4dFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIk51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiekluZGV4XCI6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzIwLCAxNV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudHNcIjogW3sgXCJpZFwiOiBcIm51bWJlcklucHV0XCIsIFwidHlwZVwiOiBcIkNvbXBvbmVudF9OdW1iZXJJbnB1dFwiLCBcInBhcmFtc1wiOiB7IFwiZGlnaXRzXCI6ICgkIC0+ICR0ZW1wRmllbGRzLmRpZ2l0cykgfSB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJudW1iZXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiekluZGV4XCI6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ25tZW50WFwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzEyLCA1MF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhRmllbGRcIjogJCAtPiAkdGVtcEZpZWxkcy5kaWdpdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuRnJlZUxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBbNSwgNSwgNSwgNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBcIlVJL2VudHJ5Ym94LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ25tZW50WFwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ25tZW50WVwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJudW1iZXJJbnB1dEVudHJ5VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJyb3dzXCI6IDQsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sdW1uc1wiOiAzLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWdubWVudFlcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJmcmFtZVwiOiBbMzAsIDE4NV0sXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsbFNwYWNpbmdcIjogWzAsIDAsIDQwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuTnVtYmVyXCIsIFwicGFyYW1zXCI6IHsgXCJ0ZXh0XCI6IFwiMVwiLCBcIm51bWJlclwiOiAxLCBcInRhcmdldFwiOiAoJCAtPiAnbnVtYmVyRmllbGQubnVtYmVySW5wdXQnKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLk51bWJlclwiLCBcInBhcmFtc1wiOiB7IFwidGV4dFwiOiBcIjJcIiwgXCJudW1iZXJcIjogMiwgXCJ0YXJnZXRcIjogKCQgLT4gJ251bWJlckZpZWxkLm51bWJlcklucHV0JykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5OdW1iZXJcIiwgXCJwYXJhbXNcIjogeyBcInRleHRcIjogXCIzXCIsIFwibnVtYmVyXCI6IDMsIFwidGFyZ2V0XCI6ICgkIC0+ICdudW1iZXJGaWVsZC5udW1iZXJJbnB1dCcpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuTnVtYmVyXCIsIFwicGFyYW1zXCI6IHsgXCJ0ZXh0XCI6IFwiNFwiLCBcIm51bWJlclwiOiA0LCBcInRhcmdldFwiOiAoJCAtPiAnbnVtYmVyRmllbGQubnVtYmVySW5wdXQnKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLk51bWJlclwiLCBcInBhcmFtc1wiOiB7IFwidGV4dFwiOiBcIjVcIiwgXCJudW1iZXJcIjogNSwgXCJ0YXJnZXRcIjogKCQgLT4gJ251bWJlckZpZWxkLm51bWJlcklucHV0JykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5OdW1iZXJcIiwgXCJwYXJhbXNcIjogeyBcInRleHRcIjogXCI2XCIsIFwibnVtYmVyXCI6IDYsIFwidGFyZ2V0XCI6ICgkIC0+ICdudW1iZXJGaWVsZC5udW1iZXJJbnB1dCcpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuTnVtYmVyXCIsIFwicGFyYW1zXCI6IHsgXCJ0ZXh0XCI6IFwiN1wiLCBcIm51bWJlclwiOiA3LCBcInRhcmdldFwiOiAoJCAtPiAnbnVtYmVyRmllbGQubnVtYmVySW5wdXQnKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLk51bWJlclwiLCBcInBhcmFtc1wiOiB7IFwidGV4dFwiOiBcIjhcIiwgXCJudW1iZXJcIjogOCwgXCJ0YXJnZXRcIjogKCQgLT4gJ251bWJlckZpZWxkLm51bWJlcklucHV0JykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5OdW1iZXJcIiwgXCJwYXJhbXNcIjogeyBcInRleHRcIjogXCI5XCIsIFwibnVtYmVyXCI6IDksIFwidGFyZ2V0XCI6ICgkIC0+ICdudW1iZXJGaWVsZC5udW1iZXJJbnB1dCcpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuTnVtYmVyXCIsIFwicGFyYW1zXCI6IHsgXCJ0ZXh0XCI6IFwiMFwiLCBcIm51bWJlclwiOiAwLCBcInRhcmdldFwiOiAoJCAtPiAnbnVtYmVyRmllbGQubnVtYmVySW5wdXQnKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuTnVtYmVyQmFja3NwYWNlXCIsIFwicGFyYW1zXCI6IHsgXCJ0YXJnZXRcIjogKCQgLT4gJ251bWJlckZpZWxkLm51bWJlcklucHV0JykgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJmcmFtZVwiOiBbXCIxMDAlIC0gMTIwXCIsIDI2MF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuTnVtYmVyQWNjZXB0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogW1wiMTAwJSAtIDEyMFwiLCAyMDBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXVxufVxuXG51aS5VaUZhY3RvcnkuY3VzdG9tVHlwZXNbXCJ1aS5OdW1iZXJcIl0gPSB7XG4gICAgXCJ0eXBlXCI6IFwidWkuRnJlZUxheW91dFwiLFxuICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkZyYW1lXCIsXG4gICAgICAgICAgICBcInN0eWxlXCI6IFwic2VsZWN0YWJsZVdpbmRvd1NoYWRvd1wiLFxuICAgICAgICAgICAgXCJpbWFnZXNcIjogW1wiXCIsIFwiVUkvc2VsZWN0aW9uLnBuZ1wiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgIFwiekluZGV4XCI6IDUwMDAsXG4gICAgICAgICAgICBcInBhZGRpbmdcIjogWy0xNiwgLTE2LCAtMTYsIC0xNl0sXG4gICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwLCA3MCwgNzBdLFxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFt7XCJuYW1lXCI6IFwiYWN0aW9uX2FkZE51bWJlclwiLCBcInRhcmdldFwiOiAoLT4gcC50YXJnZXQpLCBcInBhcmFtc1wiOiB7IFwibnVtYmVyXCI6ICgtPiBwLm51bWJlcikgfSB9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5UZXh0XCIsXG4gICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJhbGlnbm1lbnRYXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBcImFsaWdubWVudFlcIjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm51bWJlcklucHV0RGlnaXRUZXh0XCIsXG4gICAgICAgICAgICBcInRleHRcIjogKC0+IHAudGV4dCksXG4gICAgICAgICAgICBcInpJbmRleFwiOiA1MDAwXG4gICAgICAgIH1cbiAgICBdXG59XG51aS5VaUZhY3RvcnkuY3VzdG9tVHlwZXNbXCJ1aS5OdW1iZXJCYWNrc3BhY2VcIl0gPSB7XG4gICAgXCJ0eXBlXCI6IFwidWkuRnJlZUxheW91dFwiLFxuICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlRleHRcIixcbiAgICAgICAgICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBbXCJyZWd1bGFyVUlUZXh0XCJdLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQmFja1wiLFxuICAgICAgICAgICAgXCJ6SW5kZXhcIjogNTAwMCxcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IHtcIm5hbWVcIjogXCJhY3Rpb25fcmVtb3ZlTnVtYmVyXCIsIFwidGFyZ2V0XCI6ICgtPiBwLnRhcmdldCksIFwicGFyYW1zXCI6IHsgXCJudW1iZXJcIjogKC0+IHAubnVtYmVyKSB9IH1cbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICBdXG59XG51aS5VaUZhY3RvcnkuY3VzdG9tVHlwZXNbXCJ1aS5OdW1iZXJBY2NlcHRcIl0gPSB7XG4gICAgXCJ0eXBlXCI6IFwidWkuRnJlZUxheW91dFwiLFxuICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlRleHRcIixcbiAgICAgICAgICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBbXCJyZWd1bGFyVUlUZXh0XCJdLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQ29uZmlybVwiLFxuICAgICAgICAgICAgXCJ6SW5kZXhcIjogNTAwMCxcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IHtcIm5hbWVcIjogXCJlbWl0RXZlbnRcIiwgXCJwYXJhbXNcIjogeyBcIm5hbWVcIjogXCJhY2NlcHRcIiwgXCJzb3VyY2VcIjogKCQgLT4gby5wYXJlbnQucGFyZW50LnBhcmVudCksIFwiZGF0YVwiOiB7IFwibnVtYmVyXCI6ICgkIC0+ICRudW1iZXJGaWVsZC5udW1iZXJJbnB1dC5udW1iZXIpIH0gfSB9XG4gICAgICAgIH1cbiAgICBdXG59Il19
//# sourceURL=Template_InputNumberBox_144.js