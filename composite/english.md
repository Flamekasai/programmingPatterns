# Overview
The Composite design pattern is one of the twenty-three well-known GoF
design patterns that describe how to solve recurring design problems to
design flexible and reusable object-oriented software, that is, objects
that are easier to implement, change, test, and reuse.

# Problems to solve
- A part-whole hierarchy should be represented so that clients can treat
  part and whole objects uniformly.
- A part-whole hierarchy should be represented as tree structure.

When defining `Part` objects and `Whole` objects that act as
containers for Part objects, clients must treat them separately, which
complicates client code.

# Solution to the problem
- Define a unified Component interface for both part (Leaf) objects and
  whole (Composite) objects.

- Individual Leaf objects implement the Component interface directly,
  and Composite objects forward requests to their child components.

This enables clients to work through the Component interface to treat
Leaf and Composite objects uniformly: Leaf objects perform a request
directly, and Composite objects forward the request to their child
components recursively downwards the tree structure. This makes client
classes easier to implement, change, test, and reuse.

# Definition
![UML Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Composite_UML_class_diagram_%28fixed%29.svg/600px-Composite_UML_class_diagram_%28fixed%29.svg.png)

## Component
- Is the abstraction for all components, including composite ones
- Declares the interface for objects in the composition
- (optional) defines an interface for accessing a component's
  parent in the recursive structure, and implements it if that's
  appropriate

## Leaf
- Represents leaf objects in the composition
- Implements all Component methods

## Composite
- Represents a composite Component (component having children)
- Implements methods to manipulate children
- Implements all Component methods, generally by delegating them
  to its children

# Aditional info
[Wikipedia article](https://en.wikipedia.org/wiki/Composite_pattern#UML_class_diagram)


