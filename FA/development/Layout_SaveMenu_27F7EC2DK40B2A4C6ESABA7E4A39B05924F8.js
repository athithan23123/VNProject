ui.UiFactory.layouts.saveMenuLayout = {
  "type": "ui.FreeLayout",
  "frame": [0, 0, Graphics.width, Graphics.height],
  "preload": {
    graphics: [
      {
        folder: $(function() {
          return $dataFields.database.system.menuBackground.folderPath || "Graphics/Pictures";
        }),
        name: $(function() {
          return $dataFields.database.system.menuBackground.name || 'UI/bg-generic.png';
        })
      }
    ]
  },
  "controls": [
    {
      "executeFieldFormulas": true,
      "type": "ui.Image",
      "imageFolder": function() {
        return $dataFields.database.system.menuBackground.folderPath || "Graphics/Pictures";
      },
      "image": function() {
        return $dataFields.database.system.menuBackground.name || 'UI/bg-generic.png';
      },
      "frame": [0, 0, Graphics.width, Graphics.height],
      "action": {
        "event": "onCancel",
        "name": "previousLayout",
        "params": {}
      }
    }, {
      "type": "ui.BackButton",
      "frame": [Graphics.width - 170, Graphics.height - 65, 150, 45]
    }, {
      "type": "ui.TitledWindow",
      "frame": [20, 0, Math.floor((Graphics.width - 200) / 420) * 420, Graphics.height],
      "params": {
        "title": {
          "lcId": "17B8950C477FA042C418D7A591445017623C",
          "defaultText": "Save Game"
        }
      }
    }, {
      "type": "ui.DataScrollView",
      "frame": [20, 45, Math.floor((Graphics.width - 200) / 420) * 420, Graphics.height - 45],
      "params": {
        "spacing": [10, 10],
        "columns": Math.floor((Graphics.width - 200) / 420),
        "dataSource": $(function() {
          return $dataFields.saveGameSlots;
        }),
        "template": {
          "descriptor": {
            "type": "ui.SaveGameSlot",
            "params": {
              "actions": [
                {
                  "name": "saveGame",
                  "params": {
                    "slot": $(function() {
                      return o.parent.index;
                    })
                  }
                }, {
                  "name": "fullRefreshObject",
                  "params": $(function() {
                    return o.parent;
                  })
                }
              ]
            }
          }
        }
      }
    }
  ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQXJCLEdBQXNDO0VBQ2xDLE1BQUEsRUFBUSxlQUQwQjtFQUVsQyxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLFFBQVEsQ0FBQyxLQUFoQixFQUF1QixRQUFRLENBQUMsTUFBaEMsQ0FGeUI7RUFHbEMsU0FBQSxFQUFXO0lBQUUsUUFBQSxFQUFVO01BQUM7UUFBQSxNQUFBLEVBQVMsQ0FBQSxDQUFFLFNBQUE7aUJBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQTNDLElBQXVEO1FBQTFELENBQUYsQ0FBVDtRQUEyRixJQUFBLEVBQU0sQ0FBQSxDQUFFLFNBQUE7aUJBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQTNDLElBQW1EO1FBQXRELENBQUYsQ0FBakc7T0FBRDtLQUFaO0dBSHVCO0VBSWxDLFVBQUEsRUFBWTtJQUNSO01BQ0ksc0JBQUEsRUFBd0IsSUFENUI7TUFFSSxNQUFBLEVBQVEsVUFGWjtNQUdJLGFBQUEsRUFBZ0IsU0FBQTtlQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUEzQyxJQUF5RDtNQUE1RCxDQUhwQjtNQUlJLE9BQUEsRUFBUyxTQUFBO2VBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQTNDLElBQW1EO01BQXRELENBSmI7TUFLSSxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLFFBQVEsQ0FBQyxLQUFoQixFQUF1QixRQUFRLENBQUMsTUFBaEMsQ0FMYjtNQU1JLFFBQUEsRUFBVTtRQUFFLE9BQUEsRUFBUyxVQUFYO1FBQXVCLE1BQUEsRUFBUSxnQkFBL0I7UUFBaUQsUUFBQSxFQUFVLEVBQTNEO09BTmQ7S0FEUSxFQVNSO01BQ0ksTUFBQSxFQUFRLGVBRFo7TUFFSSxPQUFBLEVBQVMsQ0FBQyxRQUFRLENBQUMsS0FBVCxHQUFpQixHQUFsQixFQUF1QixRQUFRLENBQUMsTUFBVCxHQUFrQixFQUF6QyxFQUE2QyxHQUE3QyxFQUFrRCxFQUFsRCxDQUZiO0tBVFEsRUFhUjtNQUNJLE1BQUEsRUFBUSxpQkFEWjtNQUVJLE9BQUEsRUFBUyxDQUFDLEVBQUQsRUFBSyxDQUFMLEVBQVEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFULEdBQWUsR0FBaEIsQ0FBQSxHQUFxQixHQUFoQyxDQUFBLEdBQXFDLEdBQTdDLEVBQWtELFFBQVEsQ0FBQyxNQUEzRCxDQUZiO01BR0ksUUFBQSxFQUFVO1FBQUUsT0FBQSxFQUFTO1VBQUUsTUFBQSxFQUFRLHNDQUFWO1VBQWtELGFBQUEsRUFBZSxXQUFqRTtTQUFYO09BSGQ7S0FiUSxFQWtCUjtNQUNJLE1BQUEsRUFBUSxtQkFEWjtNQUVJLE9BQUEsRUFBUyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsSUFBSSxDQUFDLEtBQUwsQ0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFULEdBQWUsR0FBaEIsQ0FBQSxHQUFxQixHQUFoQyxDQUFBLEdBQXFDLEdBQTlDLEVBQW1ELFFBQVEsQ0FBQyxNQUFULEdBQWtCLEVBQXJFLENBRmI7TUFHSSxRQUFBLEVBQVU7UUFDTixTQUFBLEVBQVcsQ0FBQyxFQUFELEVBQUssRUFBTCxDQURMO1FBRU4sU0FBQSxFQUFXLElBQUksQ0FBQyxLQUFMLENBQVcsQ0FBQyxRQUFRLENBQUMsS0FBVCxHQUFlLEdBQWhCLENBQUEsR0FBcUIsR0FBaEMsQ0FGTDtRQUdOLFlBQUEsRUFBZSxDQUFBLENBQUUsU0FBQTtpQkFBRyxXQUFXLENBQUM7UUFBZixDQUFGLENBSFQ7UUFJTixVQUFBLEVBQVk7VUFDUixZQUFBLEVBQWM7WUFDVixNQUFBLEVBQVEsaUJBREU7WUFFVixRQUFBLEVBQVU7Y0FDTixTQUFBLEVBQVc7Z0JBQ1A7a0JBQUUsTUFBQSxFQUFRLFVBQVY7a0JBQXNCLFFBQUEsRUFBVTtvQkFBRSxNQUFBLEVBQVMsQ0FBQSxDQUFFLFNBQUE7NkJBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFBWixDQUFGLENBQVg7bUJBQWhDO2lCQURPLEVBRVA7a0JBQUUsTUFBQSxFQUFRLG1CQUFWO2tCQUErQixRQUFBLEVBQVcsQ0FBQSxDQUFFLFNBQUE7MkJBQUcsQ0FBQyxDQUFDO2tCQUFMLENBQUYsQ0FBMUM7aUJBRk87ZUFETDthQUZBO1dBRE47U0FKTjtPQUhkO0tBbEJRO0dBSnNCIiwic291cmNlc0NvbnRlbnQiOlsidWkuVWlGYWN0b3J5LmxheW91dHMuc2F2ZU1lbnVMYXlvdXQgPSB7XG4gICAgXCJ0eXBlXCI6IFwidWkuRnJlZUxheW91dFwiLFxuICAgIFwiZnJhbWVcIjogWzAsIDAsIEdyYXBoaWNzLndpZHRoLCBHcmFwaGljcy5oZWlnaHRdLFxuICAgIFwicHJlbG9hZFwiOiB7IGdyYXBoaWNzOiBbZm9sZGVyOiAoJCAtPiAkZGF0YUZpZWxkcy5kYXRhYmFzZS5zeXN0ZW0ubWVudUJhY2tncm91bmQuZm9sZGVyUGF0aHx8XCJHcmFwaGljcy9QaWN0dXJlc1wiKSwgbmFtZTogJCAtPiAkZGF0YUZpZWxkcy5kYXRhYmFzZS5zeXN0ZW0ubWVudUJhY2tncm91bmQubmFtZSBvciAnVUkvYmctZ2VuZXJpYy5wbmcnXSB9LFxuICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImV4ZWN1dGVGaWVsZEZvcm11bGFzXCI6IHRydWUsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5JbWFnZVwiLFxuICAgICAgICAgICAgXCJpbWFnZUZvbGRlclwiOiAgLT4gJGRhdGFGaWVsZHMuZGF0YWJhc2Uuc3lzdGVtLm1lbnVCYWNrZ3JvdW5kLmZvbGRlclBhdGggfHwgXCJHcmFwaGljcy9QaWN0dXJlc1wiLFxuICAgICAgICAgICAgXCJpbWFnZVwiOiAtPiAkZGF0YUZpZWxkcy5kYXRhYmFzZS5zeXN0ZW0ubWVudUJhY2tncm91bmQubmFtZSBvciAnVUkvYmctZ2VuZXJpYy5wbmcnXG4gICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwLCBHcmFwaGljcy53aWR0aCwgR3JhcGhpY3MuaGVpZ2h0XSxcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IHsgXCJldmVudFwiOiBcIm9uQ2FuY2VsXCIsIFwibmFtZVwiOiBcInByZXZpb3VzTGF5b3V0XCIsIFwicGFyYW1zXCI6IHt9fVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5CYWNrQnV0dG9uXCIsXG4gICAgICAgICAgICBcImZyYW1lXCI6IFtHcmFwaGljcy53aWR0aCAtIDE3MCwgR3JhcGhpY3MuaGVpZ2h0IC0gNjUsIDE1MCwgNDVdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlRpdGxlZFdpbmRvd1wiLFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbMjAsIDAsIE1hdGguZmxvb3IoKEdyYXBoaWNzLndpZHRoLTIwMCkvNDIwKSo0MjAsIEdyYXBoaWNzLmhlaWdodF0sXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7IFwidGl0bGVcIjogeyBcImxjSWRcIjogXCIxN0I4OTUwQzQ3N0ZBMDQyQzQxOEQ3QTU5MTQ0NTAxNzYyM0NcIiwgXCJkZWZhdWx0VGV4dFwiOiBcIlNhdmUgR2FtZVwiIH0gfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5EYXRhU2Nyb2xsVmlld1wiLFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbMjAsIDQ1LCBNYXRoLmZsb29yKChHcmFwaGljcy53aWR0aC0yMDApLzQyMCkqNDIwLCBHcmFwaGljcy5oZWlnaHQgLSA0NV0sXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7IFxuICAgICAgICAgICAgICAgIFwic3BhY2luZ1wiOiBbMTAsIDEwXSxcbiAgICAgICAgICAgICAgICBcImNvbHVtbnNcIjogTWF0aC5mbG9vcigoR3JhcGhpY3Mud2lkdGgtMjAwKS80MjApLFxuICAgICAgICAgICAgICAgIFwiZGF0YVNvdXJjZVwiOiAoJCAtPiAkZGF0YUZpZWxkcy5zYXZlR2FtZVNsb3RzKSwgXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5TYXZlR2FtZVNsb3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwibmFtZVwiOiBcInNhdmVHYW1lXCIsIFwicGFyYW1zXCI6IHsgXCJzbG90XCI6ICgkIC0+IG8ucGFyZW50LmluZGV4KSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiZnVsbFJlZnJlc2hPYmplY3RcIiwgXCJwYXJhbXNcIjogKCQgLT4gby5wYXJlbnQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdXG59Il19
//# sourceURL=Layout_SaveMenu_135.js