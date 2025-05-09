# Outcome

## Introduction

The `outcome` component in Actional buttons within FlowAgent plays a pivotal role in defining the feedback or response after an action is executed. It determines how the result of the action is communicated to the user, thereby enhancing the interactive experience through clear and immediate feedback.

## Structure of `outcome`

The `outcome` object outlines the type of response presented to the user after an action is performed.

| Property    | Type    | Required | Options               | Description |
|-------------|---------|----------|-----------------------|-------------|
| `type`      | string  | Yes      | `toast`, `redirect`, `none`, `tab` | Specifies the type of outcome or feedback to present. |
| `title`     | string  | No       |                       | The title of the toast, if a toast is used for the outcome. |
| `message`   | string  | No       |                       | The content of the message or feedback to the user. |
| `uri`       | string  | No       |                       | The URI for redirection if specified as the outcome. |
| `tabKeyName`| string  | No       |                       | The key name of the tab to be opened, if `tab` is specified as the outcome. |
| `widgetsUpdate` | array | No    |                       | Specifies which widgets should be updated post-action. |
| `widgetsAllowSoftUpdate` | bool | No | `true` (defualt) or `false` | Decides if widget can be updated if data changes. |
| `dismissActionToast` | bool | No | `true` or `false` (default) | Decides if toast from actions should be hidden. |

### Outcome Types and Configurations

#### Toast
Used to display a toast message as an outcome.

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `title`  | string | Yes      | The heading or title of the toast message. |
| `message`| string | Yes      | The detailed message or content within the toast. |

#### Redirect
Used to redirect the user to another page or URI.

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `uri`    | string | Yes      | The target URI for redirection after the action. |

#### Tab
Used to open a specific tab in the system as an outcome.

| Property    | Type   | Required | Description |
|-------------|--------|----------|-------------|
| `tabKeyName`| string | Yes      | The key name of the tab to be opened after the action. |

### Widget Update

Actional Button should control which widgets to be updated on the page. If none is provided, it defaults to updating all widgets on a given page.

Following options are available for the `widgetsUpdate` property:

| Property    | Type  | Required | Description                                                             |
|-------------|-------|----------|-------------------------------------------------------------------------|
| `array`     |       |          | Updates keynames found in the array, if they exist on the page.         |

Note: Per default, a table row actional button will always update - as it's almost always expected that a button placed on a row will update something related to that row.

## JSON Examples

#### Example 1: Toast Outcome
```json
{
  "outcome": {
    "type": "toast",
    "title": "Action Completed",
    "message": "The task status has been successfully updated."
  }
}
```

In this example, a toast message is presented as feedback, offering clear and immediate communication about the action's result.

#### Example 2: Redirect Outcome (Internal URI)
```json
{
  "outcome": {
    "type": "redirect",
    "uri": "/dashboard"
  }
}
```

This example demonstrates redirection as the outcome, guiding the user to the dashboard after the action is executed, ensuring a seamless transition in the user's workflow.

#### Example 3: Redirect Outcome (External URL)
```json
{
  "outcome": {
    "type": "redirect",
    "uri": "www.google.com"
  }
}
```

In this example, the redirection outcome is used to open an external URL (`www.google.com`), allowing the user to navigate to an external resource after the action is completed.

#### Example 4: Tab Outcome
```json
{
  "outcome": {
    "type": "tab",
    "tabKeyName": "projekttab_sagsinfo"
  }
}
```

In this example, pressing the button opens a specific tab (`projekttab_sagsinfo`) in the system, providing a direct and efficient way for users to access relevant information.

#### Example 5: Widget Update

```json
{
  "outcome": {
    "widgetsUpdate": [
      "opgaverwidg_info",
      "opgaverwidg_tidsregistreringer"
    ]
  }
}
```

In this example the `widgetsUpdate` property is set to an array specifying which widgets on the page should be updated.

By configuring the `outcome` component effectively, you can ensure that Actional buttons provide meaningful feedback and guide users efficiently through their tasks within the system. The `outcome` component's flexibility in design allows for a responsive and user-friendly application, enhancing the overall user experience.

