ui.UiFactory.layouts.languageMenuLayout = {
  "type": "ui.FreeLayout",
  "frame": [0, 0, Graphics.width, Graphics.height],
  "music": $(function() {
    return $dataFields.database.system.languageMusic;
  }),
  "preload": {
    "sounds": [
      function() {
        return $dataFields.database.system.menuSelectSound;
      }, function() {
        return $dataFields.database.system.menuCancelSound;
      }, function() {
        return $dataFields.database.system.menuQuitSound;
      }, function() {
        return $dataFields.database.system.menuLoadSound;
      }, function() {
        return $dataFields.database.system.menuSaveSound;
      }
    ]
  },
  "controls": [
    {
      "type": "ui.Image",
      "imageFolder": function() {
        return $dataFields.database.system.languageScreen.folderPath || "Graphics/Pictures";
      },
      "image": function() {
        return $dataFields.database.system.languageScreen.name || 'UI/bg-generic.png';
      },
      "frame": [0, 0, Graphics.width, Graphics.height]
    }, {
      "type": "ui.StackLayout",
      "orientation": "vertical",
      "alignmentX": "center",
      "alignmentY": "center",
      "sizeToFit": true,
      "dataField": $(function() {
        return $dataFields.languages;
      }),
      "template": {
        "type": "ui.FreeLayout",
        "resizable": false,
        "anchor": [0.5, 0.5],
        "animations2": [
          {
            "event": "onTerminate",
            "condition": $(function() {
              return s.index > o.index;
            }),
            "flow": [
              {
                "type": "disappear",
                "animation": {
                  "type": 0,
                  "movement": 1
                },
                "duration": 30,
                "easing": "cubic_in",
                "wait": true
              }
            ]
          }, {
            "event": "onTerminate",
            "condition": {
              "if": $(function() {
                return o.index < t.index;
              }),
              "target": $(function() {
                return o.parent.subObjects;
              })
            },
            "flow": [
              {
                "type": "disappear",
                "animation": {
                  "type": 1,
                  "movement": 3
                },
                "duration": 30,
                "easing": "cubic_in",
                "wait": true
              }
            ]
          }, {
            "event": "onTerminate",
            "condition": {
              "if": $(function() {
                return o === t;
              }),
              "target": $(function() {
                return o.parent.subObjects;
              })
            },
            "flow": [
              {
                "type": "zoomTo",
                "zoom": [150, 150],
                "duration": 30,
                "wait": false
              }, {
                "type": "disappear",
                "animation": {
                  "type": 1
                },
                "duration": 30,
                "easing": "cubic_in",
                "wait": true
              }
            ]
          }
        ],
        "frame": [0, 0, 300, 50],
        "margin": [0, 0, 0, 15],
        "controls": [
          {
            "type": "ui.SelectableWindow",
            "frame": [0, 0, "100%", "100%"],
            "inheritProperties": true,
            "margin": [0, 0, 0, 0],
            "params": {
              "actions": [
                {
                  "name": "selectLanguage",
                  "params": $(function() {
                    return o.parent.parent.index;
                  })
                }, {
                  "name": "switchLayout",
                  "params": {
                    "name": "titleLayout"
                  }
                }
              ]
            },
            "zIndex": 4999
          }, {
            "type": "ui.Image",
            "imageFolder": "Graphics/Icons",
            "formulas": [
              $(function() {
                return o.image = $dataFields.languages[o.parent.index].icon.name;
              })
            ],
            "alignmentY": "center",
            "frame": [10, 0],
            "zIndex": "5100",
            "anchor": [0.5, 0.5],
            "sizeToFit": true
          }, {
            "type": "ui.Text",
            "sizeToFit": true,
            "styles": ["regularUIText"],
            "alignmentX": "center",
            "alignmentY": "center",
            "frame": [0, 0],
            "inheritProperties": true,
            "margin": [0, 0, 0, 0],
            "formulas": [
              $(function() {
                return o.text = $dataFields.languages[o.parent.index].name;
              })
            ],
            "zIndex": 5100
          }
        ]
      }
    }
  ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFyQixHQUEwQztFQUN0QyxNQUFBLEVBQVEsZUFEOEI7RUFFdEMsT0FBQSxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFRLENBQUMsS0FBaEIsRUFBdUIsUUFBUSxDQUFDLE1BQWhDLENBRjZCO0VBR3RDLE9BQUEsRUFBVSxDQUFBLENBQUUsU0FBQTtXQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0VBQS9CLENBQUYsQ0FINEI7RUFJdEMsU0FBQSxFQUFXO0lBQ1AsUUFBQSxFQUFVO01BQ04sU0FBQTtlQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO01BQS9CLENBRE0sRUFFTixTQUFBO2VBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7TUFBL0IsQ0FGTSxFQUdOLFNBQUE7ZUFBRyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztNQUEvQixDQUhNLEVBSU4sU0FBQTtlQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO01BQS9CLENBSk0sRUFLTixTQUFBO2VBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7TUFBL0IsQ0FMTTtLQURIO0dBSjJCO0VBYXRDLFVBQUEsRUFBWTtJQUNSO01BQ0ksTUFBQSxFQUFRLFVBRFo7TUFFSSxhQUFBLEVBQWMsU0FBQTtlQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUEzQyxJQUF1RDtNQUExRCxDQUZsQjtNQUdJLE9BQUEsRUFBUyxTQUFBO2VBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQTNDLElBQW1EO01BQXRELENBSGI7TUFJSSxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLFFBQVEs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LEdBQVMsV0FBVyxDQUFDLFNBQVUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQVQsQ0FBZSxDQUFDO2NBQWxELENBQUYsQ0FBRDthQVRoQjtZQVVJLFFBQUEsRUFBVSxJQVZkO1dBeEJPO1NBOUJIO09BUGhCO0tBUFE7R0FiMEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbnVpLlVpRmFjdG9yeS5sYXlvdXRzLmxhbmd1YWdlTWVudUxheW91dCA9IHtcbiAgICBcInR5cGVcIjogXCJ1aS5GcmVlTGF5b3V0XCIsXG4gICAgXCJmcmFtZVwiOiBbMCwgMCwgR3JhcGhpY3Mud2lkdGgsIEdyYXBoaWNzLmhlaWdodF0sXG4gICAgXCJtdXNpY1wiOiAoJCAtPiAkZGF0YUZpZWxkcy5kYXRhYmFzZS5zeXN0ZW0ubGFuZ3VhZ2VNdXNpYyksXG4gICAgXCJwcmVsb2FkXCI6IHtcbiAgICAgICAgXCJzb3VuZHNcIjogW1xuICAgICAgICAgICAgLT4gJGRhdGFGaWVsZHMuZGF0YWJhc2Uuc3lzdGVtLm1lbnVTZWxlY3RTb3VuZCxcbiAgICAgICAgICAgIC0+ICRkYXRhRmllbGRzLmRhdGFiYXNlLnN5c3RlbS5tZW51Q2FuY2VsU291bmQsXG4gICAgICAgICAgICAtPiAkZGF0YUZpZWxkcy5kYXRhYmFzZS5zeXN0ZW0ubWVudVF1aXRTb3VuZCxcbiAgICAgICAgICAgIC0+ICRkYXRhRmllbGRzLmRhdGFiYXNlLnN5c3RlbS5tZW51TG9hZFNvdW5kLFxuICAgICAgICAgICAgLT4gJGRhdGFGaWVsZHMuZGF0YWJhc2Uuc3lzdGVtLm1lbnVTYXZlU291bmRcbiAgICAgICAgXVxuICAgIH0sXG4gICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkltYWdlXCIsXG4gICAgICAgICAgICBcImltYWdlRm9sZGVyXCI6LT4gJGRhdGFGaWVsZHMuZGF0YWJhc2Uuc3lzdGVtLmxhbmd1YWdlU2NyZWVuLmZvbGRlclBhdGh8fFwiR3JhcGhpY3MvUGljdHVyZXNcIixcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogLT4gJGRhdGFGaWVsZHMuZGF0YWJhc2Uuc3lzdGVtLmxhbmd1YWdlU2NyZWVuLm5hbWUgb3IgJ1VJL2JnLWdlbmVyaWMucG5nJyxcbiAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDAsIEdyYXBoaWNzLndpZHRoLCBHcmFwaGljcy5oZWlnaHRdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBcIm9yaWVudGF0aW9uXCI6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIFwiYWxpZ25tZW50WFwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgXCJhbGlnbm1lbnRZXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJkYXRhRmllbGRcIjogJCAtPiAkZGF0YUZpZWxkcy5sYW5ndWFnZXNcbiAgICAgICAgICAgIFwidGVtcGxhdGVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkZyZWVMYXlvdXRcIixcbiAgICAgICAgICAgICAgICBcInJlc2l6YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImFuY2hvclwiOiBbMC41LCAwLjVdLFxuICAgICAgICAgICAgICAgIFwiYW5pbWF0aW9uczJcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50XCI6IFwib25UZXJtaW5hdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6ICgkIC0+IHMuaW5kZXggPiBvLmluZGV4KSAgI3sgXCJpZlwiOiAoJCAtPiBvLmluZGV4ID4gdC5pbmRleCksIFwidGFyZ2V0XCI6ICgkIC0+IG8ucGFyZW50LnN1Yk9iamVjdHMpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsb3dcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJ0eXBlXCI6IFwiZGlzYXBwZWFyXCIsIFwiYW5pbWF0aW9uXCI6IHsgXCJ0eXBlXCI6IDAsIFwibW92ZW1lbnRcIjogMSB9LCBcImR1cmF0aW9uXCI6IDMwLCBcImVhc2luZ1wiOiBcImN1YmljX2luXCIsIFwid2FpdFwiOiB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudFwiOiBcIm9uVGVybWluYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiB7IFwiaWZcIjogKCQgLT4gby5pbmRleCA8IHQuaW5kZXgpLCBcInRhcmdldFwiOiAoJCAtPiBvLnBhcmVudC5zdWJPYmplY3RzKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG93XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwidHlwZVwiOiBcImRpc2FwcGVhclwiLCBcImFuaW1hdGlvblwiOiB7IFwidHlwZVwiOiAxLCBcIm1vdmVtZW50XCI6IDMgfSwgXCJkdXJhdGlvblwiOiAzMCwgXCJlYXNpbmdcIjogXCJjdWJpY19pblwiLCBcIndhaXRcIjogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRcIjogXCJvblRlcm1pbmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb25cIjogeyBcImlmXCI6ICgkIC0+IG8gPT0gdCksIFwidGFyZ2V0XCI6ICgkIC0+IG8ucGFyZW50LnN1Yk9iamVjdHMpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsb3dcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJ0eXBlXCI6IFwiem9vbVRvXCIsIFwiem9vbVwiOiBbMTUwLCAxNTBdLCBcImR1cmF0aW9uXCI6IDMwLCBcIndhaXRcIjogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwidHlwZVwiOiBcImRpc2FwcGVhclwiLCBcImFuaW1hdGlvblwiOiB7IFwidHlwZVwiOiAxIH0sIFwiZHVyYXRpb25cIjogMzAsIFwiZWFzaW5nXCI6IFwiY3ViaWNfaW5cIiwgXCJ3YWl0XCI6IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwLCAzMDAsIDUwXSxcbiAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBbMCwgMCwgMCwgMTVdLFxuICAgICAgICAgICAgICAgIFwiY29udHJvbHNcIjpbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlNlbGVjdGFibGVXaW5kb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDAsIFwiMTAwJVwiLCBcIjEwMCVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImluaGVyaXRQcm9wZXJ0aWVzXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBbMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJzZWxlY3RMYW5ndWFnZVwiLCBcInBhcmFtc1wiOiAoJCAtPiBvLnBhcmVudC5wYXJlbnQuaW5kZXgpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwic3dpdGNoTGF5b3V0XCIsIFwicGFyYW1zXCI6IHsgXCJuYW1lXCI6IFwidGl0bGVMYXlvdXRcIiB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiekluZGV4XCI6IDQ5OTlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuSW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VGb2xkZXJcIjogXCJHcmFwaGljcy9JY29uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtdWxhc1wiOiBbJCAtPiBvLmltYWdlID0gJGRhdGFGaWVsZHMubGFuZ3VhZ2VzW28ucGFyZW50LmluZGV4XS5pY29uLm5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlnbm1lbnRZXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFsxMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInpJbmRleFwiOiBcIjUxMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5jaG9yXCI6IFswLjUsIDAuNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlc1wiOiBbXCJyZWd1bGFyVUlUZXh0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlnbm1lbnRYXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWdubWVudFlcIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmhlcml0UHJvcGVydGllc1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogWzAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtdWxhc1wiOiBbJCAtPiBvLnRleHQgPSAkZGF0YUZpZWxkcy5sYW5ndWFnZXNbby5wYXJlbnQuaW5kZXhdLm5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6SW5kZXhcIjogNTEwMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICBdXG59XG5cbiJdfQ==
//# sourceURL=Layout_LanguageMenu_122.js