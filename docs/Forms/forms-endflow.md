# Endflow and Redirection

The `endflow` component specifies the behavior when the form flow concludes, such as redirection to a specific page or item. It can be set globally for the entire form or specifically within a trigger.

## Default Behavior

When no specific `endflow` is defined, the form will automatically choose an action based on available information in the following order:

1. **Go to Defined Item**: Redirects to the first predefined item in the Items Array.
2. **Go to Created Item**: Redirects to a newly created item from the form's triggers.
3. **Go to Start Item**: Redirects to the starting item (the item on which the form was initiated).
4. **Go to Dashboard**: Redirects to the dashboard as a fallback option.

## Global Endflow

Global endflow is defined at the end of the document and applies to the entire form.

### Properties

| Property       | Default Value | Description |
|----------------|---------------|-------------|
| `redirect`     | N/A           | Specifies the redirection target (see commands table). |
| `redirect_uri` | N/A           | Used with `uri` command to define a specific URI for redirection. |

#### Example - Global Endflow

```json
{
  "endflow": {
    "redirect": "item"
  }
}
```
In this global endflow example, the form will redirect the user to the starting item upon completion.

## Trigger-Specific Endflow
Endflow can also be set within a trigger, overriding the global endflow. This is useful for specific outcomes necessary for a trigger.

### Properties
|Property	|Default Value	|Description
|----------------|---------------|-------------|
|`endflow`	        |false	|Ends the form when the trigger is activated and calls endflow_redirect if defined.
|`endflow_redirect`	|N/A	|Specifies the redirection target for the trigger-specific endflow.
|`closeModal`	        |false	|Closes the modal upon form completion. Other endflow commands will be ignored.

#### Example - Trigger Endflow and Redirection

```json
{
  "submit": {
    "triggers": [
      {
        "then": {
          "endflow": true,
          "endflow_redirect": "itemkey.item1"
        }
      }
    ]
  },
  "endflow": {
    "redirect": "uri",
    "redirect_uri": "/item/12345"
  }
}
```
In this trigger-specific endflow example, the form ends and redirects to "item1" upon trigger activation.

## Endflow Commands

The following commands are available for both global and trigger-specific endflows:

|Command	    |Description
|---------------|-------------|
|`back`	        |Returns to the previous page.
|`dashboard`	    |Redirects to the dashboard.
|`item`	        |Redirects to the starting item. Requires the form to have been started on an item.
|`uri`	        |Redirects to a given URI. Only possible for global endflow and requires redirect_uri.
|`itemkey.[item]`	|Redirects to a specific item defined in the flow. Requires the item key to exist.

### Endflow Command Examples

#### Endflow Command: `back`
```json
{
  "endflow": {
    "redirect": "back"
  }
},
{
  "endflow": {
    "redirect": "dashboard"
  }
},
{
  "items": {
    "existingItem": [
      ["id", "=", "[itemid]"]
    ]
  },
  "endflow": {
    "redirect": "item"
  }
},
{
  "endflow": {
    "redirect": "uri",
    "redirect_uri": "/specific-path"
  }
},
{
  "items": {
    "newItem": [
      // Item details...
    ]
  },
  "endflow": {
    "redirect": "itemkey.newItem"
  }
}
```

Understanding and utilizing the endflow component allows for precise control over the form's behavior upon completion, enhancing user experience and ensuring seamless navigation within the 1Relation system.
