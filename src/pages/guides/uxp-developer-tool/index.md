# UXP Developer Toolkit

The UXP Developer Toolkit (UDT) is a standalone GUI application that loads, unloads, and helps debug your UXP plugins. It is the easiest way to create the initial shell for a plugin as well as to submit the plugin for inclusion in the Marketplace.

## Installation
You can download installers for the UDT [here](#LINKNEEDED). Once it's downloaded, run the installer just like any other one on Mac or Windows. On macOS, it creates a folder in your `Applications` folder named "Adobe UXP Developer Tool." On Windows, the folder is in the `Program Files->Adobe` folder.

## What Does it Do?
The Developer Toolkit makes it easy to build, debug, and package plugins. It has a "create" mode that walks you through the steps of creating the scaffolding for a basic plugin using either plain ("vanilla") JavaScript or React. The Toolkit connects to the host application (e.g., Photoshop) and controls the loading and unloading of plugins.

The Toolkit also contains a debugger which looks and acts very much like the one in Google Chrome. With the debugger, you can set breakpoints, examine HTML objects, watch variables, and look at network activity. It's an acquired taste, but once you're familiar with it you won't be able to live without it.

## Walkthrough

[Here is a walkthrough](../udt-walkthrough) showing how to use the UXP Developer Toolkit to create and load a plugin.