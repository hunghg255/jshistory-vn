# The birth of language

## Prehistoric times
The concept and basic technology of the World Wide Web were created by Tim Berners-Lee [[2003](./references.md#tbl:history)] at CERN between 1989 and 1991. Web technologies have been circulating within high-energy physics circles for several years, but have not generated a strong response outside the physics community. The real opportunity for it to attract attention was *Mosaic*<sup>[g](./appendices.md#Mosaic)</sup>, which was developed in 1992-1993. The application, developed by undergraduate students Marc Andreessen and Eric Bina of the University of Illinois at Urbana-Champaign's Supercomputing Center (NCSA), essentially defines a new software category called "web browsers."

NCSA Mosaic is a web client that is not only easy to install and use, but also has a graphical interface. It popularized the concept of the World Wide Web outside the physics community and spread quite widely. By early 1994, commercial capital began to rush to join the browser wave by licensing Mosaic code or developing Mosaic-like browsers from scratch. Jim Clark, the founder of SGI (Silicon Valley Graphics Inc.), attracted venture capital and hired Marc Andreessen and Eric Bina. In April 1994, they founded a company together. The company, eventually named Netscape, aimed to replace Mosaic with the world's most popular browser. To this end, Netscape developed the next generation Mosaic browser *Netscape Navigator*<sup>[g](./appendices.md#Netscape-Navigator)</sup> from scratch, which was released in October 1994 . By early 1995, Netscape Navigator had achieved its initial goals and was rapidly replacing Mosaic.

At the heart of Tim Berners-Lee's Web technology is the use of the declarative HTML markup language to describe documents and render them as web pages. However, the industry is not interested in *scripting languages* that can facilitate end-users to orchestrate application operations. ], also showed considerable interest. These languages, such as Visual Basic in Microsoft Office and Apple's AppleScript [[Cook 2007](./references.md#applescript)], are not designed to implement the complex data structures and algorithmic components at the heart of an application. Instead, they provide users with new ways to "glue" such application components together. As Netscape expanded its audience on the World Wide Web, an important question was whether and how scripting languages should be integrated into web pages.

### Brendan Eich joins Netscape
Brendan Eich<sup>[4](./notes.md#4)</sup> graduated with a master's degree from the University of Illinois at Urbana-Champaign in 1985, and then immediately joined SGI, mainly working on the Unix kernel and network layer. He joined MicroUnity in 1992 after leaving SGI. This is a well-funded emerging company dedicated to developing video media processors. At both companies, he implemented small, specialized languages that supported kernel and network programming tasks. At MicroUnity, he also did some work on the GCC *compiler*<sup>[g](./appendices.md#compiler)</sup>.

In early 1995, Brendan Eich was impressed by Netscape's bait of "writing Scheme in the browser" <sup>[5](./notes.md#5)</sup> and quit. But when Eich joined Netscape on April 3, 1995, he found the company's current situation in both product marketing and programming languages complicated. Netscape rejected a low-ball acquisition offer from Microsoft in late 1994. Since then, Netscape management expects to face the attack of Microsoft's "Embrace, Expand, and Extinction" strategy [[Wikipedia 2019](./references.md#wikip:EEE)]. Under the direct leadership of Gates, Microsoft has quickly realized that their upcoming closed ecological information application Blackbird project [[Anderson 2007](./references.md#msft:blackbird)] will be used under the rise of the cross-platform Web. Insignificant. Thus, Gates' "Internet Wave" memo [[Gates 1995](./references.md#gates:tidalwave)] redirected Microsoft's strategy from Blackbird to *Internet Explorer*<sup>[g](./appendices .md#Internet-Explorer)</sup> and a complete set of server products to cope with Netscape's siege.

Alternative options for web scripting languages include research-oriented languages ​​such as Scheme, practical Unix-based languages ​​such as Perl/Python/Tcl, and proprietary languages ​​such as Microsoft Visual Basic. What Brendan Eich wants is to implement Scheme in the browser. But in early 1995, Sun (Sun Microsystems) began a guerrilla marketing campaign for the then-unreleased <sup>[6](./notes.md#6)</sup> Java [[Bous 1998](. /references.md#javahist)]. Sun and Netscape quickly reached an agreement to integrate Java into Netscape 2. Eich recalled that Marc Andreessen's slogan at the Netscape conference was "Netscape plus Java kills Windows." At Sun's Java conference on May 23, 1995, Netscape announced their intention to license Sun's Java technology [[Netscape 1995a](./references.md#netscape:press:java)] for use in browsers.

This rapid decision-making within Netscape severely hindered the selection of scripting languages such as Scheme/Perl/Python/Tcl/Visual Basic, which were not feasible from the perspective of business interests and/or time to market. OK. For senior executives at Netscape and Sun, especially Marc Andreessen and Sun's Bill Joy, they believed that the only feasible way was to design and implement a "small language" <sup>[7](./notes.md#7)< /sup> to supplement Java.

Skeptics of the decision were dominant at Sun and majority at Netscape. They question the need for such a simpler scripting language: Is Java inappropriate for scripting? How to explain why two languages are better than one? Does Netscape have the expertise to create new languages?

The first objection is easy to refute. Java in the spring of 1995 was not suitable for beginners. People had to put the code body of the Java main program inside the package *class*<sup>[g](./appendices.md#class)</sup> declaration under the name For `main`'s static *method*<sup>[g](./appendices.md#method)</sup>, you must also declare static *types*<sup>[g for all parameters, return values, and variables ](./appendices.md#type)</sup>. Judging from the experience of Visual Basic complementing Visual C++, and many Unix languages complementing native code components, it is clear that Java is not simple enough for "glue" script writers.

The basis for overcoming the second objection is a reference to Microsoft products. For professional Windows application programmers, Microsoft sells them Visual C++. And for hobbyists, part-time programmers, designers, accountants, and others, Microsoft offers Visual Basic as a scripting language. This allows less experienced part-time programmers to "glue" custom components built using Visual C++. A version of Visual Basic called "Visual Basic for Applications" (VBA) has been integrated into Microsoft Office to support the user extensions and scripting needs of these applications.

After overcoming the first two objections, Marc Andreessen proposed the codename "Mocha" for the browser scripting language. According to Eich, the proposal also hopes to rename the language "JavaScript" in due course. This Java auxiliary language must "look like Java", maintain ease of use and be "object-based" rather than class-based like Java.

Only one final objection remained: Did Netscape have the expertise to create an effective scripting language that would make it into the Netscape 2 beta in September 1995? Brendan Eich was on a mission to prove this by creating Mocha.

### Mocha’s Story
As Java's release approaches, Brendan Eich believes time is of the essence. A bird in the hand is worth two in the bush, so he spent ten consecutive days in May 1995 <sup>[8](./notes.md#8)</sup> on his first *Mocha* <sup >[g](./appendices.md#Mocha)</sup> Prototype implementation. The work was completed in time for the feasibility study deadline. This demo includes a minimal implementation of the language and is minimally integrated into a pre-alpha version of the Netscape 2 browser.

Eich's prototype was developed on the SGI Indy Unix workstation [[Netfreak 2019](./references.md#sgiIndy)], using a handwritten lexer and recursive descent parser. This parser emits bytecode instructions rather than a parse tree. The bytecode * interpreter * <sup>[g](./appendices.md#interpreter)</sup> is simple and slow <sup>[9](./notes.md#9)</sup>.

The bytecode feature grew out of a need for the Netscape LiveWire server <sup>[10](./notes.md#10)</sup>, whose developers wanted to embed it even before Mocha was prototyped. The team's former Borland management and engineering staff believed in the future of dynamic scripting languages, but they wanted to use bytecode rather than source code parsing to speed up the loading of server applications.

Marc Andreessen emphasized that Mocha should be so easy to use that anyone can write a few lines directly in an HTML document. Senior executives at Sun and Netscape reiterated the requirement that Mocha should "look like Java," explicitly ruling out BASIC-like stuff. But this Java-like appearance also brought expectations for Java-like behavior, which influenced the design of the language's *object*<sup>[g](./appendices.md#object)</sup> model. And the semantics of primitive types (such as `boolean` / `int` / `double` / `string`, etc.).

Beyond the requirements of a Java-like appearance, Brendan Eich was free to choose most language design details. After joining Netscape, he explored some "easy-to-use" and "educational use" languages, including HyperTalk language [[Apple Computer 1988](./references.md#apple1988hypercard)], Logo language [[Papert 1980](./ references.md#logo)] and the Self language [[Ungar and Smith 1987](./references.md#self)]. Everyone agrees that Mocha will be "object-based" but without classes. Because supporting classes would take a long time and risk competing with Java. In recognition of Self, Eich chose to use the delegation mechanism with a single prototype link to create a dynamic object model. He thought this would save implementation costs, but in the end there wasn't enough time to expose the mechanism in a Mocha prototype.

Objects are created by applying the `new` operator to a *constructor*<sup>[g](./appendices.md#constructor-function)</sup>. A default object constructor named `Object`, built into the environment along with other built-in objects. Each object consists of zero or more properties. Each *property*<sup>[g](./appendices.md#property)</sup> has a name (also called a *property key*<sup>[g](./appendices.md#property- key)</sup>) and a value, which can be a *function*<sup>[g](./appendices.md#function)</sup>, an object, or one of several other built-in data types. New properties can be created by assigning values to unused property keys. Properties have no visibility or assignment restrictions, and the constructor can also provide an initial set of properties. After the object is created, other properties can also be added. The LiveWire team particularly liked this very dynamic approach.

Although the allure of Scheme has faded, Brendan Eich still finds the Lisp-like concept of first-class functions attractive. This suite of tools for first-class functions is heavily inspired by the Scheme idiom, where methods do not have to be included in a class. This includes support for top-level subroutines, passing functions as arguments, methods on objects, and event handlers. Function expressions (also called *lambda expressions*<sup>[g](./appendices.md#lambda-expression)</sup>, or simply lambdas) were deferred due to time constraints, but are retained in the syntax . Event handlers and object methods are unified through the `this` keyword borrowed from Java (after C++). In all functions, it is used to represent the context object when the function is called as a method.

Spurred on by informal discussions with Marc Andreessen and some early Netscape engineers <sup>[11](./notes.md#11)</sup>, this prototype supported the `eval` function. It can parse and execute strings containing programs. Intuitively, this kind of dynamic "string-to-program" programming is important for certain applications in web browsers and servers<sup>[12](./notes.md#12)</sup>. However, the decision to support `eval` had immediate consequences. Some scenarios require the function to decompile its source code into a string through a Java-like `toString` method. For this reason, Eich chose to implement the bytecode decompiler within the ten-day sprint <sup>[13](./notes.md#13)</sup>, because whether the source code is placed in main memory (RAM or ROM) or Restoring from secondary storage (hard disk, etc.) may be too expensive for some supported target architectures. This is especially true for Windows 3.1 computers that are bound by the Intel 8086 16-bit segmented memory model. Because for unbounded or large structures in memory, multiple segments in memory need to be overwritten and manually managed.

At the end of ten days, the prototype was demonstrated at an all-Netscape engineering staff meeting (Figure 2). The demonstration was a success, leading to undue optimism for the delivery of a more complete and integrated Netscape 2. The first beta version of Netscape 2 was scheduled for release in September of that year. Brendan Eich's main work that summer was to integrate Mocha more fully into the browser. This requires designing and implementing APIs that enable Mocha programs to interact with web pages. At the same time, he also needs to turn prototype implementations of the language into shippable software and respond to bug reports, change suggestions, and feature requests from early internal users.

For more details on the story of the ten days that led to the creation of Mocha, see Brendan Eich's retelling [[Eich 2008c](./references.md#BrendanHistory08), [2011d](./references.md#BrendanHistory11); [JavaScript Jabber 2014] (./references.md#js-jabber:brendan); [Walker 2018](./references.md#jollyswagman:brendan)]. The source code for a production version of Mocha is also available through the Internet Archive [[Netscape 1997b](./references.md#netscape3.0.2)]. Jamie Zawinski [[1999](./references.md#nscpdorm)]'s "Netscape Dorm" also describes working as a Netscape software developer during this period.

## JavaScript 1.0 and 1.1
Netscape and Sun released JavaScript in a joint press release on December 4, 1995 [[Netscape and Sun 1995](./references.md#netscape:press:javascript); Appendix F]. JavaScript is described in the draft as "an object scripting language" that can be used to write scripts to dynamically "modify the properties and behavior of Java objects." It will serve as a "complement to Java to facilitate online application development." Even though their technical designs have only superficial similarities, the two companies have tried to create a strong brand connection between the Java and JavaScript languages. This similarity in names, and the suggestion that the two languages are closely related, has long been a source of confusion.

![](./images/2.png)

Figure 2. Mocha console. Brendan Eich's Mocha initial demo demonstrates the functionality of a "Mocha console" running in Netscape 2 pre-alpha on an SGI Unix workstation. This Mocha console was released in the official version of Netscape 2 basically as is, except for the name change. This is a screenshot of Netscape 2.02 running on Windows 95. This Mocha console can be activated by typing `mocha:` in the browser address bar - the official version of Netscape 2 has changed this to `javascript:`, but `mocha:` still works. After activating the console, the browser opens two page frames. The Mocha expression typed in the lower text box will be reflected in the upper page after its evaluation. This example shows calling the built-in `alert` function to get a popup window that evaluates an expression. The original demo's popup displayed "Mocha Alert" instead of "JavaScript Alert."

JavaScript, released under the name "LiveScript", was first released in September 1995 in the first beta version of Netscape Navigator 2.0 [[Netscape 1995b](./references.md#netscape:nav:2.0b1:releasenotes)]. This version was followed by four beta versions before the official release of Navigator 2.0 in March 1996. This official version supports JavaScript 1.0. Netscape Enterprise Server 2.0 was also released in March [[Netscape 1996f](./references.md#netscape:press:server2.0)], integrating JavaScript 1.0 into the script component of its LiveWire server.

JavaScript is a relatively small feature in Netscape Navigator, so its development has been constrained by the overall plan for Navigator 2.0. The plan calls for a feature freeze in August 1995. The feature set of JavaScript 1.0 actually marked out the features that were under development or about to be developed in the Mocha implementation in August of that year. Although Eich continued to fix bugs in the original Mocha implementation throughout the Navigator 2.0 release process, this feature set was incomplete relative to the envisioned language design, and there were still various difficult bugs and boundary conditions. Special behavior. Brendan Eich was interviewed shortly before the 1.0 release [[Shah 1996](./references.md#brendan96)], where he responded to JavaScript's official positioning as an add-on to Java, and the rushed nature of the initial release:

> BE (Brendan Eich): I hope it (JavaScript) can be implemented by other vendors based on the specification that Bill Joy and I are drafting. I'd like to see it stay small, but become ubiquitous on the web and become the preferred way to glue operations on HTML elements with other components such as Java applets.
>
> BE: ...as far as I know, the most common use is to make the page smarter and more lively. For example, you can load a different *URL*<sup>[g](./appendices.md#URL)</sup> when you click a link, depending on the time of day.
>
>…
>
> BE: There is light at the end of the tunnel. JavaScript is still too much of a one-man show, and 2.0 (Netscape Navigator version, translator's note) will contain many annoying little bugs. I hope all major bugs have solutions, and I've spent a lot of time working with developers to find bugs and their solutions.
>
> I will continue to work towards version 2.1 by fixing bugs, adding new features, and trying to make JavaScript consistent across all platforms. I don't know exactly when version 2.1 will be delivered, but I can guarantee it will be out by next fall - we're moving pretty fast here.

JavaScript 1.0 [[Netscape 1996d](./references.md#netscape:js1.0:handbook)] is a simple *dynamically typed*<sup>[g](./appendices.md#dynamically-typed)< /sup> language, which supports numeric, string and boolean values, first-class citizen functions, and object data types. Syntactically, JavaScript belongs to the C family like Java. Its control flow statements are borrowed from C, and its expression syntax also includes most of C's numeric operators. JavaScript 1.0 has a small library of built-in functions whose source code is usually embedded directly in HTML files, but its built-in library includes an `eval` function that can parse and evaluate JavaScript source code encoded into a string. JavaScript 1.0 as a whole is a very streamlined language. Figure 3 summarizes some of the missing features. To modern JavaScript programmers, the omission of these features may be surprising.

<table>
   <tr><td>Independent <code>Array</code> object type</td><td><code>Array</code> literal</td></tr>
   <tr><td>Regular expression</td><td>Object literal</td></tr>
   <tr><td>Global binding to <code>undefined</code></td><td><code>===</code> operator</td></tr>
   <tr><td><code>typeof</code>, <code>void</code>, <code>delete</code> operator</td><td><code>in</code>, <code>instanceof</code> operator</td></tr>
   <tr><td><code>do-while</code> statement</td><td><code>switch</code> statement</td></tr>
   <tr><td><code>try-catch-finally</code> statement</td><td><code>break</code>/<code>continue</code> to label</td>< /tr>
   <tr><td>Nested function declaration</td><td>Function expression</td></tr>
   <tr><td>The <code>call</code> and <code>apply</code> methods of the function</td><td>The <code>prototype</code> attribute of the function</td></ tr>
   <tr><td>Prototype-based inheritance</td><td>Access to built-in prototype objects</td></tr>
   <tr><td>Cyclic Garbage Collection<sup><a href="./appendices.md#cyclic-garbage-collection">g</a></sup></td><td>HTML <code> <code>src</code> attribute of &lt;script&gt;</code> tag</td></tr>
</table>

Figure 3. Commonly used JavaScript features not covered in JavaScript 1.0 (circa 2010).

In early 1996, development of Netscape Navigator 3.0, codenamed "Atlas", started [[Netscape 1996g](./references.md#netscape:nav:3.0b3:releasenotes)] and was released in August 1996. Brendan Eich was able to continue developing features during this period that were incomplete or missing when the feature freeze was released for version 2.0 in August 1995. Until JavaScript 1.1 was released in Navigator 3.0 [[Netscape 1996a](./references.md#netscape:js1.1:newfeatures), [e](./references.md#netscape:js1.1:handbook)] The initial definition and development is complete. The following sections outline the design of the JavaScript 1.0/1.1 language.

### JavaScript syntax
The syntax of JavaScript 1.0 is directly based on the C language [[ANSI </sup> Inspired by the language [[Aho et al. 1988](./references.md#aho1988awk)]. A script is a series of statements and declarations. Unlike C, JavaScript statements are not limited to appearing within function bodies. In JavaScript 1.0, script source code is embedded in an HTML document surrounded by `<script></script>` tags.

C-inspired statements in JavaScript 1.0 include: expression statements; `if` conditionals; `for` and `while` loops; `break`, `continue` and `return` statements for non-sequential control flow; and statements Blocks (supports using a sequence of statements separated by `{}` as if they were a single statement). `if`, `for` and `while` statements are compound statements <sup>[14](./notes.md#14)</sup>. JavaScript 1.0 does not include C's `do-while` statement, `switch` statement, statement label and `goto` statement.

Based on the basic C statement family bucket, JavaScript 1.0 added two compound statements for accessing properties of its object data types. The AWK-inspired `for-in` statement can iterate over an object's *property keys*<sup>[g](./appendices.md#property-key)</sup>. In the statement body of the `with` statement <sup>[15](./notes.md#15)</sup>, the attribute name of an object can be accessed as a variable. Since properties may be added dynamically (and removed in later versions of the language), the *binding*<sup>[g](./appendices.md#binding)</sup> of visible variables may change accordingly `with` changes during execution in the body of the statement.

Declarations in JavaScript do not follow C or Java style. JavaScript is dynamically typed and does not have language-level type names as syntactic prefixes to identify declarations. In contrast, JavaScript declarations are prefixed with keywords. JavaScript 1.0 has two forms of declarations, `function` declarations and `var` declarations. The syntax of the `function` declaration <sup>[16](./notes.md#16)</sup> is directly borrowed from AWK, defining the name, formal parameters and statement body of a single callable function. The `var` declaration can introduce one or more variable bindings and optionally assign values to variables. All `var` declarations are treated as statements and can appear in any statement context, including within statement blocks. In JavaScript 1.0/1.1, function declarations can only appear at the top level of a script, and nesting is not supported. `var` declarations can also appear inside function bodies. Variables defined by such declarations are local variables of the function.

Unlike C, JavaScript 1.0's statement blocks did not introduce the concept of declaration scope. Within a block of statements within a function body, `var` declarations are locally visible to the entire function body. `var` declarations located in blocks outside functions have global *scope*<sup>[g](./appendices.md#scope)</sup>. If a value is assigned to a variable name that does not exist in scope as a `function` or `var` declaration, a global variable with that name is implicitly created. This behavior turns out to be a significant source of errors, since misspelling a declared variable also silently creates a new variable with the wrong name.

Another important difference between JavaScript and traditional C syntax is its handling of semicolons at the end of statements. C treats the semicolon as a mandatory statement terminator, while JavaScript allows the semicolon to be omitted when it is the last valid character on the line. The exact rules for this behavior are not included in the JavaScript 1.0 documentation. The "Netscape 2.0 Manual" does not show semicolons when describing various JavaScript statement forms. It only states that "a statement may span multiple lines. If each statement is separated by a semicolon, multiple statements may appear on one line. Statement [[Netscape 1996d](./references.md#netscape:js1.0:handbook)]". The manual's JavaScript code example uses a semicolon-free coding style, as shown below:

``` js
var a, x, y
var r = 10
with (Math) {
  a = PI * r * r
  x = r * cos(PI)
  y = r * sin(PI / 2)
}
```

This feature of writing JavaScript code without using semicolons is called automatic semicolon insertion (ASI). ASI remains controversial among JavaScript programmers. A significant number of programmers still prefer to code in a semicolon-free style, while others never use ASI.

### Data types and expressions
JavaScript 1.0/1.1 is a dynamically typed language with five basic data types: numbers, strings, booleans, objects, and functions. "Dynamic typing" here means that runtime type information is associated with each piece of data, rather than with a "container of values" such as a variable. Runtime type checking ensures that operations are applied only to data values supported by each operation.

Boolean values, strings, and numbers are immutable values. The Boolean type has two values, `true` and `false`. A string value consists of an immutable sequence of 8-bit character encodings and has no Unicode support. The numeric type consists of all possible IEEE 754 [[IEEE 2008](./references.md#ieee754)] double-precision binary 64-bit floating-point values, except that only a canonical `NaN` value is exposed . Certain operations treat numeric values corresponding to "unsigned 32-bit integer" and "signed 32-bit two's complement integer" specially. Mocha uses alternative representations of such integer values internally, but has only one formal numeric data type.

JavaScript 1.0 has two special values used to indicate "lack of useful data values". Uninitialized variables will be set to the special value *undefined*<sup>[17](./notes.md#17)</sup>. This is also the value returned by a program when it attempts to access a property in the object that does not yet exist. In JavaScript 1.0, the value *undefined* can be obtained by declaring and accessing uninitialized variables. The value `null` is intended to indicate "no object" in a context where an object value is expected. It is modeled after Java's `null` value and helps integrate JavaScript with Java-implemented objects. Throughout history, the presence of two similar but significantly different values has led to confusion among JavaScript programmers, with many unsure of which one to use when.

JavaScript 1.0's expression syntax is essentially copied from C, using the same set of operators and precedence rules. The main parts omitted here are C's pointers and type-related operators, as well as the unary `+` operator. The binary `+` operator is overloaded to perform numeric addition and string concatenation. Shift and bitwise logical operators perform bit-level operations on signed 32-bit two's complement integers. If necessary, the operands are truncated to integers and reduced modulo to a 32-bit value. The `>>` operator performs a sign-extended arithmetic right shift on a 32-bit integer value. JavaScript also adds the `>>>>` operator, borrowed from Java, for performing unsigned right shifts.

JavaScript 1.1 added the `delete`, `typeof` and `void` operators. In JavaScript 1.1, the `delete` operator will only set its corresponding variable or object property operand to a `null` value. The `typeof` operator returns a string that identifies the primitive type of its operand. Possible string values include `"undefined"`, `"object"`, `"function"`, `"boolean"`, `"string"`, `"number"`, or a character determined by the implementation environment A string value to indicate the type of host object. Confusingly, `typeof null` returns the string value `"object"` instead of `"null"`. In fact, it can be said that this is consistent with Java, because all values in Java are objects, and `null` is essentially an object that expresses "no object". However, Java lacks an equivalent to the `typeof` operator and uses `null` as the default value for uninitialized variables. According to Brendan Eich's recollection, the value of `typeof null` was the result of an abstraction leak in the original Mocha implementation. The runtime value of `null` is encoded using the same internal tag value as the object value, so the implementation of the `typeof` operator simply returns `"object"` without any additional special handling. Practice shows that this choice brings a lot of trouble to JavaScript programmers. They usually want to test whether a value is actually an object before trying to access its properties. But simply testing whether a value is of type `"object"` is not enough to protect property access, because trying to access a `null` property will also generate a runtime error.

The `void` operator only evaluates its operands and returns *undefined*. A common way to access *undefined* is `void 0`. The `void` operator was introduced as an aid in defining HTML hyperlinks that execute JavaScript code when clicked. For example:

``` html
<a href="javascript:void usefulFunction()">
  Click to do something useful
</a>
```

Here the value of `href` *attribute*<sup>[g](./appendices.md#attribute)</sup> should be a URL, and `javascript:` is a special URL protocol recognized by the browser. This means that the JavaScript code behind is evaluated and the result converted to a string is used, just like with a response document fetched from a regular `href` URL. Unless *undefined* is obtained, the `<a>` element will attempt to continue processing the response document. Often all web developers want is for a JavaScript expression to be evaluated when a link is clicked. Prefixing an expression with `void` allows it to be used in this way, avoiding further processing of the `<a>` element.

The biggest difference between C and JavaScript expressions is that JavaScript operators automatically implicitly convert their operands to data types within the operator's domain. JavaScript 1.1 added a configurable mechanism for converting arbitrary objects into numeric or string values. Figure 4 summarizes JavaScript 1.1’s implicit type conversion (coercion) rules.

<table>
  <thead>
    <tr><th>From - To</th><th>function</th><th>object</th><th>number</th><th>boolean</th><th>string</th></tr>
  </thead>
  <tbody>
    <tr><td><b>undefined</b></td><td>error</td><td>null</td><td>error</td><td>false</td><td><code>"undefined"</code></td></tr>
    <tr><td><b>function</b></td><td>N/C</td><td>Function object</td><td>valueOf/error</td><td>valueOf/true</td><td>decompile</td></tr>
    <tr><td><b>object (not null)</b></td><td>Function object</td><td>N/C</td><td>valueOf/error</td><td>valueOf/true</td><td>toString/valueOf<sup>1</sup></td></tr>
    <tr><td><b>object (null)</b></td><td>error</td><td>N/C</td><td>0</td><td>false</td><td><code>"null"</code></td></tr>
    <tr><td><b>number (zero)</b></td><td>error</td><td>null</td><td>N/C</td><td>false</td><td><code>"0"</code></td></tr>
    <tr><td><b>number (nonzero)</b></td><td>error</td><td>Number</td><td>N/C</td><td>true</td><td>default</td></tr>
    <tr><td><b>number (NaN)</b></td><td>error</td><td>Number</td><td>N/C</td><td>false<sup>2</sup></td><td><code>"NaN"</code></td></tr>
    <tr><td><b>number (+Infinity)</b></td><td>error</td><td>Number</td><td>N/C</td><td>true</td><td><code>"+Infinity"</code></td></tr>
    <tr><td><b>number (-Infinity)</b></td><td>error</td><td>Number</td><td>N/C</td><td>true</td><td><code>"-Infinity"</code></td></tr>
    <tr><td><b>boolean (false)</b></td><td>error</td><td>Boolean</td><td>0</td><td>N/C</td><td><code>"false"</code></td></tr>
    <tr><td><b>boolean (true)</b></td><td>error</td><td>Boolean</td><td>1</td><td>N/C</td><td><code>"true"</code></td></tr>
    <tr><td><b>string (empty)</b></td><td>error</td><td>String</td><td>error<sup>3</sup></td><td>false</td><td>N/C</td></tr>
    <tr><td><b>string (non-empty)</b></td><td>error</td><td>String</td><td>number/error</td><td>true</td><td>N/C</td></tr>
  </tbody>
</table>

* If the results are separated by slashes, it means that JavaScript will try the former first and use the latter if unsuccessful.
* **N/C** means No Conversion Necessary.
* **decompile** represents a string containing the unique source code of the function.
* **toString** represents the result of calling the toString method.
* **valueOf** represents the result of calling the valueOf method when it can return a value for the target type.
* **number** represents the corresponding numerical value when the string is a valid integer or floating-point number literal.
* <sup>1</sup> If valueOf does not return a string, do the default object-to-string conversion.
* <sup>2</sup> In JavaScript 1.1 used by Navigator 3.0, NaN is converted to true.
* <sup>3</sup> In JavaScript 1.1 used by Navigator 3.0, empty strings are converted to 0.

Figure 4. The implicit type conversion rules proposed by Eich and McKinney in the initial specification of JavaScript 1.1 [[1996](./references.md#TC39:1996:002), page 23], the final standardized rules are slightly different from this . This is a reproduction of the original table, with some minor typographical differences. Footnote 3 does not appear in the original text.

### Object
JavaScript 1.0 objects are associative arrays whose elements are called properties. Each property has a string key and a value, which can be any JavaScript data type. Properties can be added dynamically. JavaScript 1.0/1.1 does not support removing properties from objects.

As long as a property's key string conforms to the syntax rules for identifiers, it can be accessed using dot notation of the form `obj.prop0`. All properties can be accessed using bracket notation, including those whose keys do not conform to the rules for identifiers. The expression enclosed in square brackets is evaluated and converted to a string used as the property key. For example, when `n` has a value of `0`, `obj["prop" + n]` is equivalent to `obj.prop0`. Assignment to a property that does not exist creates a new property, and accessing a property that does not exist usually returns *undefined*. But in JavaScript 1.0/1.1, if you use square bracket notation to access a non-existent property value, and the property key is a string representation of a non-negative integer, a `null` value is returned.

Properties can be used both as data stores and to associate behavior with objects. Properties whose values are functions can be called as methods on the object. A function called as an object method can access the object through dynamic binding of the keyword `this`.

To create objects, you can apply the `new` operator to a built-in function or a user-defined function. Functions that are intended to be used in this way are called constructors. Constructors typically add properties to new objects. These properties can be either data or methods. The built-in constructor `Object` can be used to create new objects that initially have no properties. Figure 5 shows how to create a new object using the `Object` constructor or a user-defined constructor.

``` js
//Use Object constructor
var p1 = new Object;
p1.x = 0;
p1.y = 0;

//Use custom constructor
function Point(x, y) {
   this.x = x;
   this.y = y;
}
var p2 = new Point(0, 0);
```

Figure 5. Alternative ways to create objects in JavaScript 1.0. Properties can be added after the object is created with `Object`, or they can be added when the object is created through a custom constructor.

JavaScript 1.0 also has a built-in `Array` constructor, but there is only one visible difference between objects created using the `Object` and `Array` constructors, and that is the debug string displayed for the object (in the form `"[ object Object]"` and so on, translator's note). In JavaScript 1.0, objects created by the `Array` constructor did not have a `length` property.

Array-like indexing behavior can be achieved on any object by creating properties with integer values as keys. Such objects can also have properties corresponding to non-integer keys:

``` js
var a = new Object; // or new Array
a[0] = "zero";
a[1] = "one";
a[2] = "two";
a.length = 3;
```

There is no concept of object *inheritance*<sup>[g](./appendices.md#inheritance)</sup> in JavaScript 1.0. The program must add all properties to each new object separately, usually by defining a constructor for each class object used by the program. Figure 6 shows a simple Point abstraction based on the JavaScript 1.0 definition.

``` js
// Define functions to be used as methods
function ptSum(pt2) {
   return new Point(this.x + pt2.x, this.y + pt2.y);
}
function ptDistance(pt2) {
   return Math.sqrt(Math.pow(pt2.x - this.x, 2) + Math.pow(pt2.y - this.y, 2));
}

//Define Point constructor
function Point(x, y) {
   //Create and initialize the data properties of the new object
   this.x = x;
   this.y = y;

   //Add methods to each object instance
   this.sum = ptSum;
   this.distance = ptDistance;
}
var origin = new Point(0, 0); // Create Point object
```

Figure 6. Using the Point abstraction defined in JavaScript 1.0, each instance object has its own method properties.

The important things to note in this example are the following:

* Each method must be defined as a globally visible function. The name of such a function is required and should not conflict with names used to define other class-like abstraction method functions (`ptSum`, `ptDistance`).
* When constructing an object, you must create an object property for each method and initialize its value to the corresponding global function.
* The method is called via the property name (`origin.distance`) rather than the declared global name (`ptDistance`).

JavaScript 1.1 eliminates the need to create method properties directly on each new instance. It associates the *prototype*<sup>[g](./appendices.md#prototype)</sup> object with the constructor through the function object's property named `prototype`. The JavaScript 1.1 Guide [[Netscape 1996e](./references.md#netscape:js1.1:handbook)] describes `prototype` as "a property shared by all objects of that type". This is a vague description, a better statement might be this: a prototype is a special object whose properties are shared with all objects created by the constructor.

There is no further explanation of this sharing mechanism, but it can be found that the prototype object has the following characteristics:

* When accessing an object property, if the name of this property has been defined on the "prototype associated with the object constructor", then the property value of the prototype object will be returned.
* Additions or modifications to prototype object properties are immediately visible to existing objects created through the "constructor associated with the prototype".
* When assigning values to object properties, it will *shadow*<sup>[g](./appendices.md#shadow)</sup><sup>[18](./notes.md#18)</sup> in A property value with the same name defined on the prototype associated with the object's constructor.

For the language's built-in `Object.prototype` object, all its properties can be obtained through property access on any object, unless the property has been obscured by the object or its prototype.

Figure 7 shows the definition of the simple Point abstraction of Figure 6 in JavaScript 1.1.

``` js
// Define functions to be used as methods
function ptSum(pt2) {
   return new Point(this.x + pt2.x, this.y + pt2.y);
}
function ptDistance(pt2) {
   return Math.sqrt(Math.pow(pt2.x - this.x, 2) + Math.pow(pt2.y - this.y, 2));
}

//Define Point constructor
function Point(x, y) {
   //Create and initialize the data properties of the new object
   this.x = x;
   this.y = y;
}

// Add methods to the shared prototype object
Point.prototype.sum = ptSum;
Point.prototype.distance = ptDistance;

var origin = new Point(0, 0); // Create Point object
```

Figure 7. Point abstraction defined using JavaScript 1.1. Instance objects inherit methods from the `Point.prototype` object, rather than defining method properties on each instance.

The difference here is that the method is only mounted once on the prototype object, rather than repeatedly when each instance object is constructed. Properties provided to an object by the prototype object are called * inherited properties * <sup>[g](./appendices.md#inherited-property)</sup>, while properties defined directly on the object are called * Own properties*<sup>[g](./appendices.md#own-property)</sup>. Owned properties overshadow inherited properties with the same name.

Properties of prototype objects are usually methods. In this case, the prototype provided by the constructor serves the same purpose as a vtable in C++ or a MethodDictionary in Smalltalk, which is to associate common behavior with a set of objects. The constructor actually acts as a class object, and its prototype is equivalent to a container that shares methods with class instances. This is a reasonable interpretation of the JavaScript 1.1 object model, but it's certainly not the only one.

The naming of the constructor prototype property clearly shows that Brendan Eich had an alternative object model in mind. This model is inspired by the Self programming language [[Ungar and Smith 1987](./references.md#self)]. In Self, new objects are created by partially cloning certain kinds of prototype objects. Each clone has a `parent` link back to its prototype, so that the prototype can provide functionality that is shared among all its clones. JavaScript 1.1's object model can be thought of as a variant of the Self model. In a prototype, the prototype object can be accessed indirectly through the constructor, and the `new` operator will clone a new instance from the prototype. These cloned instances will *inherit*<sup>[g](./appendices.md#inherit)</sup> the functionality that is commonly shared on the properties of the prototype object. Some JavaScript programmers call this mechanism "prototypal inheritance <sup>[g](./appendices.md#prototypal-inheritance)</sup>". This is a form of delegation mechanism. Some JavaScript programmers also use the quoted concept of "classical inheritance <sup>[g](./appendices.md#classical-inheritance)</sup>" to refer to the concept used in Java and many other object-oriented languages. Inherit the style.

The JavaScript 1.1 documentation [[Netscape 1996e](./references.md#netscape:js1.1:handbook)] does not fully describe these two object models. It maintains a marketing story consistent with a December 1995 Netscape/Sun press release. JavaScript is positioned as a language for "scripting object interactions", and the actual definition of object abstractions (class definitions) will be written in Java. At this time, the object abstraction capabilities of native JavaScript are limited to minor features. These minor features have attracted only minor attention, and many are not documented.

### Function object
In JavaScript 1.0/1.1, a function definition creates and names a callable function. JavaScript functions are first-class object values. The name provided in the `function` declaration is defined as a global variable, similar to the `var` declaration in top-level code. Its value is a function object that can be assigned to a variable, set as a property value, passed as a parameter in a function call, and used as the return value of a function. Because functions are also objects, properties can also be defined on them. The following example shows how to add properties to a function object:

``` js
function countedHello() {
   alert("Hello, World!");
   countedHello.callCount++; // Increase the callCount attribute of the function
}
countedHello.callCount = 0; //Associate the counter with the function
for (var i = 0; i < 5; i++) countedHello();
alert(countedHello.callCount); // Display 5
```

Functions need to be declared with a formal parameter list. However, the size of the parameter list does not limit the number of parameters that can be passed when calling the function. If the number of actual parameters (actual parameters, argument) passed when calling a function is less than the number of its declared formal parameters (formal parameters, parameter), then the extra formal parameters will be set to *undefined*. If the number of actual parameters passed exceeds the number of formal parameters, the additional actual parameters are evaluated, but these values cannot be obtained through the formal parameter names. However, during execution of the function body, you can also use an array-like argument object as the value of the `arguments` property of the function object. All actual arguments passed when calling a function are available as integer-keyed properties of the `arguments` object. In this way, functions with variable length parameter lists can be supported.

### Built-in libraries
JavaScript 1.0 comes with a library of built-in functions, objects, and constructors. Among the common objects <sup>[19](./notes.md#19)</sup> and functions defined by this library, a small number are universal, while a large number are host-specific. In Netscape Navigator, the *host object* <sup>[g](./appendices.md#host-object)</sup> provides a model that represents part of the current HTML document. These APIs were eventually called the Level 0 Document Object Model (DOM) [[Koch 2003](./references.md#dom0); [Netscape 1996b](./references.md#navdom0)]. For Netscape Enterprise Server, the host object supports communication between the client and the server, manages the session state between the client and the server, and accesses files and databases. This design of server-side hosted objects has not been adopted outside of Netscape's server products.

The early design of JavaScript was largely driven by the needs of the browser platform. In the Netscape documentation for earlier versions of JavaScript, there was no clear distinction between whether elements in the library were intended to be "host independent" or "host dependent". However, the design, evolution, and standardization of the DOM and other browser platform APIs are important stories of their own. This article will mention browser-related issues only as they relate to the overall design of JavaScript.

JavaScript 1.0 has only two common object classes, `String` and `Date`. In addition, there is a singleton global object `Math`, whose properties are commonly used mathematical constants and functions.

In JavaScript 1.0 programs, constructors for some classes that are inactive or incompletely implemented can also be seen, provided that the program knows how to access them.

JavaScript 1.1 implements these features and documents their existence. Figure 8 summarizes the host-independent classes defined in JavaScript 1.0 and 1.1.

<table>
  <thead>
    <tr><th colspan="2">基础对象</th><th colspan="2">属性</th></tr>
    <tr><th>1.0</th><th>1.1</th><th>1.0</th><th>1.1 新增</th></tr>
  </thead>
  <tbody>
    <tr><td colspan="2">(global functions)</td><td>eval, isNaN<sup>1</sup>, parseFloat<sup>2</sup>, parseInt<sup>2</sup></td><td></td></tr>
    <tr><td><del>Array</del><sup>3</sup></td><td>Array</td><td></td><td>join, reverse, sort, toString</td></tr>
    <tr><td><del>Boolean</del><sup>3</sup></td><td>Boolean</td><td></td><td>toString</td></tr>
    <tr><td>Date</td><td></td><td>getDate, getDay, getHours, getMinutes, getMonth, getSeconds, getTime, getTimezoneOffset, getYear, setDate, setHours, setMinutes, setMonth, setSeconds, setTime, setYear, toGMTString, toLocaleString, Date.parse, Date.UTC</td><td>toString</td></tr>
    <tr><td colspan="2">(function objects)</td><td>arguments, length, caller</td><td></td></tr>
    <tr><td><del>Function</del><sup>3</sup></td><td>Function</td><td></td><td>prototype, toString</td></tr>
    <tr><td>Math</td><td></td><td>E, LN2, LN10, LOG2E, LOG10E, PI, SQRT1_2, SQRT2, abs, acos, asin, atan, ceil, cos, exp, floor, log, max, min, pow, random<sup>1</sup>, round, sin, sqrt, tan</td><td></td></tr>
    <tr><td>Object</td><td></td><td></td><td>constructor, eval, toString, valueOf</td></tr>
    <tr><td><del>Number</del><sup>3</sup></td><td>Number</td><td></td><td>toString, Number.NaN, Number.MAX_VALUE, Number.MIN_VALUE, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY</td></tr>
    <tr><td colspan="2">(string values)</td><td>length</td><td></td></tr>
    <tr><td></td><td>String</td><td>charAt<sup>4</sup>, indexOf, lastIndexOf, <del>split</del><sup>3</sup>, substring, toLowerCase, toUpperCase, (plus 13 HTML wrapper methods)</td><td>split, toString, valueOf</td></tr>
  </tbody>
</table>

* <sup>1</sup> is only available on Unix platforms in 1.0.
* <sup>2</sup> behaves differently in 1.0 depending on the host operating system.
* <sup>3</sup> exists in 1.0, but lacks functionality or is buggy.
* <sup>4</sup> In 1.0 these methods are properties of string values. In 1.1 they were properties of String.prototype.

Figure 8. Host-independent built-in libraries in JavaScript 1.0/1.1.

The `String` class provides the `length` property and 6 general methods that operate on immutable string values, returning new string values when appropriate. JavaScript 1.0's `String` class also includes 13 methods for wrapping string values using various HTML tags. This example illustrates the blurred line between "host-specific features" and "generic features" in JavaScript 1.0/1.1. JavaScript 1.0 does not provide a global `String` constructor, all string values are created using string literals, operators, or built-in functions. JavaScript 1.1 added the global `String` constructor and `split` method.

The `Date` class is used to represent calendar dates and times. JavaScript 1.0's `Date` is implemented directly according to the `java.util.Date` class in Java 1.0 [[Gosling et al. 1996](./references.md#jls)], and even the bugs remain consistent. This includes encoding details such as using millisecond-resolution time values centered on January 1, 1970 00:00:00 GMT, externally numbering months from 0-11, and the presence of 2000 in the Java design year ambiguity. The rationale for this design decision was the need for interoperability with Java. The only Java methods that are excluded are `equal`, `before` and `after`. There is no need to use them here, because JavaScript has implicit type conversion (automatic coercion) conversion capabilities, and you can use numeric relational operators directly with Date objects.

Besides `Object`, `Date` is the only built-in constructor available in JavaScript 1.0. In addition to the instance methods of the class, `Date` is also the only class that exposes methods on the constructor object. Those browser-specific classes do not expose constructors.

The properties of objects provided by built-in libraries and hosts have special properties. These properties are not available in properties customized by JavaScript programmers. For example, some method attributes are not enumerated by the `for-in` statement, and some attributes are ignored by the `delete` operator, or have read-only values. Accessing or modifying some of these properties produces special behavior with visible side effects.

JavaScript 1.1 made the `Array` class available. The object created by the `Array` constructor can be used to represent multiple heterogeneous vectors indexed by integers and starting from zero. Array elements are represented as object properties, and their keys are string representations of their integer subscripts. Array objects also have a `length` property, the value of which is initialized by the constructor. The value of the `length` property is updated whenever an element index greater than or equal to the current `length` value is accessed. Therefore, the number of elements of an array object can grow dynamically.

### Execution model
In Netscape 2 and later browsers, HTML pages may contain multiple `<script>` elements. Once the page is loaded, the browser creates a new JavaScript execution environment and global context for the HTML document. The global context consists of a global object whose property keys include the names of built-in functions and variables (provided by JavaScript built-in libraries and the host environment), as well as global variables and functions defined in scripts.

In Netscape 2, the JavaScript code within each `<script>` element is parsed and evaluated one by one in the order in which they appear in the page's HTML file. In later browsers, the `<script>` element can also be marked to support deferred evaluation. This allows the browser to continue processing HTML while waiting for JavaScript code to be requested from the network. But in either case, the browser will only evaluate one script at a time. Scripts usually share the same global object. Global variables and functions created by a script are visible to all subsequent scripts. Each script will run to completion without preemption or interruption. This feature of early browsers has become a fundamental principle of JavaScript. A script is the basic unit of execution. The execution of each script, once started, continues until it completes. Inside the script, you don't have to worry about concurrent execution of other scripts because that won't happen.

Netscape 2 also introduced the concept of Web page frame <sup>[20](./notes.md#20)</sup>. A frame is an area of a web page into which a separate HTML document can be loaded. All frames on the page share the same JavaScript execution environment, and each frame has a separate global context within this environment. Scripts loaded in different page frames correspond to different global objects, different built-in objects, and different global variables and functions. However, the global context does not have an independent address space. The JavaScript execution environment corresponds to a single address space for storing objects, which is shared among all page frames in the environment. Since all objects are in the same address space, references to objects may be passed to each other via JavaScript code in different page frames, thus intermingling objects from different global contexts. This can lead to unexpected behavior. The JavaScript 1.1 example in Figure 9 illustrates this point.

``` js
// Just evaluate in other page frames new Object()
// This will make the alien variable refer to the object created there
var alien = createNewObjectInADifferentFrame();
var native = new Object(); // Create an object in the current page frame
Object.prototype.sharedProperty = "each frame has distinct built-ins";
alert(native.sharedProperty); // each frame has distinct built-ins
alert(alien.sharedProperty); // undefined
```

Figure 9. JavaScript 1.1 example showing that objects can interoperate even if different HTML frames have different built-in objects.

Each page frame has an independent `Object` constructor and `Object.prototype`. They provide properties that are inherited by all objects created by this constructor. Adding a property to a page frame's `Object.prototype` does not make the property visible to objects created by the `Object` constructor in other page frames.

Interactive JavaScript web pages are event-driven applications. The event loop is implemented by the browser. HyperCard [[Apple Computer 1988](./references.md#apple1988hypercard)] inspired Brendan Eich's concept of using events in his original Netscape 2 DOM [[Netscape 1996c](./references.md#navscripting)] design. Initially, events were primarily triggered by user interaction. But in modern browsers there are many kinds of events, only some of which originate from the user.

After all scripts defined by the web page have been executed, the page's JavaScript environment remains active, waiting for events to occur. Event handlers can be associated with objects provided by the browser, which includes many DOM objects. An event handler is a JavaScript function that can be called in response to the occurrence of an event. Assigning a function to some specific property of the browser object makes the function an event handler associated with that property. For example, objects corresponding to clickable pointing devices (mouse) have a settable `onclick` attribute. You can also use a piece of JavaScript code to define a JavaScript event handler directly in the HTML element. For example:

``` html
<button onclick="doSomethingWhenClicked()">
   Click me
</button>
```

After processing the HTML element, the browser creates a JavaScript function and assigns it the value of the button object's `onclick` property. The snippet of `onclick` will be used as the function body. When an event listened to by a JavaScript event handler occurs, it is placed into the pending event pool. Once there is no JavaScript code being executed, the browser gets a pending event from the event pool and calls the function associated with it. Like scripts, event handler functions run to completion.

### Confusing behavior and bugs
JavaScript has some strange or unexpected properties. Some of them are intentional, and some are the product of rapid design decisions made during the original Mocha 10-day sprint. JavaScript 1.0 also had bugs and half-finished features.

#### Redundant Statement
JavaScript allows multiple declarations with the same name within a scope. All variable names with the same name declared inside the function will correspond to the same variable binding. This binding is visible throughout the function body. For example, the following is a valid function definition:

``` js
function f(x, x) { // x corresponds to the second formal parameter, the first x is ignored
   var x; // Same binding as the second parameter
   for (var x in obj) { // Same binding as the second parameter
     var x = 1, x = 2; // Same binding as the second parameter
   }
   var x = 3; // Same binding as the second parameter
}
```

All `var` declarations in function `f` will point to the same variable binding, which is the binding of the second formal parameter of the function. The same name can appear multiple times in a function's parameter list. Before executing the function body, variables defined by `var` declaration will be initialized to *undefined*, except for `var` variables with the same name as the formal parameter name. In this case, the initial value of the variable will be the same as the actual parameter passed for the formal parameter with the same name. The initialization process of `var` declaration (including redundant declarations) has the same semantics as "assigning a value to the initialized variable". They are executed in the normal execution order within the function body when they arrive (initialization phase).

There may be multiple `function` declarations with the same name in a script. When this happens, the last function declaration with that name is hoisted to the top of the script and the global variable is initialized with that name. All other `function` declarations with the same name will be ignored. If there are both a global `function` declaration and a global `var` declaration with the same name, they both point to the same variable. All `var` declarations with initializers overwrite function values when an initializer (i.e. a literal) is encountered in the execution flow.

#### Implicit type conversion and `==` operator
Implicit type conversion is designed to lower the initial barrier to adoption of JavaScript as a simple scripting language. But as JavaScript evolved into a general-purpose language, it proved to be a significant source of confusion and coding errors, especially for the `==` operator. Some problematic transformation rules were added to Mocha after the initial 10-day sprint, originally in response to alpha user requests to simplify JavaScript integration with HTTP/HTML. For example, internal users at Netscape requested the use of `==` to compare HTTP status codes containing the string value `"404"` with the number 404. They also require that empty strings be automatically converted to `0` in numeric contexts, thus providing default values for empty fields in HTML forms. These type conversion rules introduce some surprises, such as `1 == '1'` and `1 == '1.0'`, but `'1' != '1.0'`.

JavaScript 1.0 also treats the `=` operator as `==` within the assertion of an `if` statement. For example:

``` js
// JavaScript 1.0-1.2
if (a = 0) alert("true"); // These two statements are equivalent
if (a == 0) alert("true");
```

#### 32-bit arithmetic
JavaScript bitwise logical operators that operate on 32-bit values encoded as IEEE double floating point numbers. The bitwise operators first truncate the integer and then perform a modulo conversion on their operand before performing the bitwise operation, resulting in a 32-bit two's complement value. Therefore, a numeric value `x` can be coerced to a 32-bit value via the expression `x|0`, where `|` is a bitwise logical OR operator. Based on this approach, we can perform 32-bit signed addition as follows:

``` js
function int32bitAdd(x, y) {
   return ((x | 0) + (y | 0)) | 0; // Addition with result truncated to 32 bits
}
```

A similar pattern can be used to perform unsigned 32-bit arithmetic operations, but in this case the unsigned right shift operator `>>>0` should be used instead of `|0`.

#### `this` keyword
Every function has an implicit `this` parameter. When calling a function as a method, this parameter is set to the object used to access the method. This has the same meaning as `this` (or `self`) in most object-oriented languages. But JavaScript uses a single definition form between "methods associated with objects" and "independent functions". This has caused confusion and bugs for many programmers.

When calling a function directly without qualifying an object, `this` will be implicitly set to the global object. The properties of the global object include all global variables of the program. Therefore, when calling a function directly, the property reference qualified by `this` is equivalent to a reference to a global variable. Because the processing of `this` depends on how the function is called, the same `this` reference may have different meanings in different calling scenarios. For example:

``` js
function setX(value) {
   this.x = value;
}
var obj = new Object;
obj.setX = setX; // Use setX as a method of obj

obj.setX(42); // Call setX as a method
alert(obj.x); // Display 42

setX(84); // Call setX directly
alert(x); // Get global variable x, display 84
alert(obj.x); // Display 42
```

`this` caused further confusion because some HTML implicitly converts JavaScript snippets into functions called as methods. For example:

``` html
<button name="B" onclick="alert(this.name + ' clicked')">
   Click me
</button>
```

When the event handler is executed, it will trigger the button's `onclick` method. At this point `this` points to the button object, and `this.name` will retrieve the value of its `name` property.

#### Arguments object
A function's `arguments` object is tied to its formal parameters - there is a dynamic mapping between the `arguments` object's numeric index properties and the function's formal parameters. Changes to the `arguments` object properties also change the values of the corresponding formal parameters. And you can find that changes to the formal parameters will also take effect on the corresponding `arguments` object properties:

``` js
// JavaScript 1.0-1.1
f(1, 2);
function f(argA, argB) {
   alert(argA); // display 1
   alert(f.arguments[0]); // Display 1
   f.arguments[0] = "one";
   alert(argA); // display one
   argB = "two";
   alert(f.arguments[1]); // display two
   alert(f.arguments.argB); // display two
}
```

As shown in the last line of the example above, formal parameters can also be accessed by using their name as a property key of the `arguments` object.

Conceptually, when a function is called, a new `arguments` object should be created for the triggered function and the value of the `arguments` property of the function object should be set to this new `arguments` object. But in JavaScript 1.0/1.1, function objects and `arguments` objects are the same object:

``` js
// JavaScript 1.0-1.1
function f(a, b) {
   if (f == f.arguments) alert("f and f.arguments are the same object");
}
if (f.arguments == null) alert("but only while a call to f is active");
```

Ideally, a function's `arguments` object can only be accessed within its function body. This is accomplished in part by automatically setting the function's `arguments` property to `null` when the function call returns. But suppose there are two functions `f1` and `f2`. If `f1` calls `f2`, then `f2` can access the actual parameters of `f1` by evaluating `f1.arguments`.

The `arguments` object also has a property called `caller`. The value of this `caller` attribute is the function object that "triggered the current function call". But if it is the outermost function call, this value is `null`. By using `caller` and `arguments`, any function can inspect the function and its arguments on the current call stack, and even modify the formal parameter values of the function on the call stack. There is also a `caller` property with the same meaning that can be accessed directly through the function object without going through the `arguments` object.

#### Special handling of numerical attribute keys
In JavaScript 1.0, square brackets have unusual semantics when used with integer keys. In some cases, integer keys with square brackets access the object's properties sequentially in the order in which they were created. If a property with that key does not already exist on the object, and the integer value n is less than the total number of object properties, then the object is accessed using property order. In this case, the nth property created on the object (starting at zero) will be accessed, for example:

``` js
// JavaScript 1.0
var a = new Object; // or new Array
a[0] = "zero";
a[1] = "one";
a.p1 = "two";

alert(a[2]); // display two
a[2] = "2";
alert(a.p1); // Display 2
```

JavaScript 1.1 removed this special treatment of square brackets.

#### Properties of original values
In JavaScript 1.0, numbers and Boolean values had no attributes. And when trying to access them or assign properties to them, an error message is produced. String values behave like objects with properties, but they all share the same set of properties and values, except for the read-only `length` property. For example:

``` js
// JavaScript 1.0
"xyz".prop = 42; // Set the prop attribute of all strings to 42
alert("xyz".prop); // Display 42
alert("abc".prop); // Display 42
```

In JavaScript 1.1, when doing property access or assignment to a number, Boolean or string value, a "wrapper object" is implicitly created using the built-in Number / Boolean / String constructor. Property access is performed on the wrapper, and inherited properties are typically accessed from their built-in prototype. Type conversions performed by automatic calls to the `valueOf` and `toString` methods allow the wrapper to be used as a primitive value in most cases. You can also create new properties on the wrapper object by assigning values. But wrappers created implicitly are usually inaccessible immediately after assignment. For example:

``` js
// JavaScript 1.1
"xyz".prop = 42; // Set the prop property of the string wrapper to 42
alert("xyz".prop); // Implicitly create another wrapper, display undefined
var abc = new String("abc"); // Explicitly create a wrapper object

alert(abc + "xyz"); // Implicitly convert the wrapper to a string and display abcxyz
abc.prop = 42; // Create a property on the wrapper object
alert(abc.prop); // Display 42
```

#### HTML comments in JavaScript
Potential JavaScript interoperability issues in Netscape 2 arise from what the Netscape 1 and Mosaic browsers do when they encounter the HTML `<script>` element. Older but still widely used browsers display the `<script>` body as text, which is the actual JavaScript source code when displaying a web page. In these browsers, you can avoid this by surrounding the body of the script with HTML comments <sup>[21](./notes.md#21)</sup>. For example:

``` html
<!-- Mosaic and Netscape 1 -->
<script>
   <!-- This is the HTML comment that wraps the script body
     alert("this is a message from JavaScript"); // Invisible to older browsers
     //End HTML comment on next line
   -->
</script>
```

Based on this encoding mode, the HTML parsers in Netscape 1 and Mosaic will recognize the entire script body as an HTML comment without displaying it. But according to the original Mocha implementation, this would prevent the browser from parsing the script into JavaScript because the delimiter of HTML comments is invalid syntax in JavaScript code. To avoid this problem, Brendan Eich made JavaScript 1.0 support `<!--` as the beginning of a single-line comment, which is equivalent to `//`. He didn't make `-->` a recognized JavaScript comment separator, since just preceding it with `//` would do. In this way, backward compatibility support for scripts can be achieved, as shown below:

``` html
<!-- Mosaic, Netscape 1, and Netscape 2 with JavaScript 1.0 -->
<script>
   <!-- This is both an HTML comment in older browsers and a JS single-line comment
   alert("this is a message from JavaScript"); // Invisible to older browsers
   // The next line not only ends the HTML comment, but also is a JS single-line comment
   //-->
</script>
```

Although `<!--` comments are not documented as formal JavaScript syntax, web developers have used them, and other browsers' JavaScript implementations support it. As a result `<!--` became the de facto *Web Reality*<sup>[g](./appendices.md#Web-Reality)</sup>. Twenty years later, in 2015, it was finally added to the ECMAScript standard—and it was always Web Reality that had the last laugh.

## Microsoft JScript<sup>[22](./notes.md#22)</sup>
In the same week that Netscape and Sun publicly released JavaScript, Microsoft announced that it intended to make Visual Basic "the standard for creating World Wide Web applications using Visual Basic Script" [[Wingfield 1995](./references.md#infoworld:1995:12:11 )]. Microsoft officially announced support for JavaScript in the Internet Explorer 3.0 Beta press release [[Microsoft 1996](./references.md#microsoft:pressIE3beta)] on May 29, 1996:

> **ActiveX Script**. With native support for Visual Basic® Script and JavaScript, Microsoft Internet Explorer 3.0 provides the most comprehensive, language-independent scripting capabilities. Microsoft Internet Explorer can be extended with support for other scripting languages, such as REXX, CGI, and PERL. Web designers can insert any scripting language into HTML code to create interactive pages that tie together ActiveX controls, Java applets, and other software components.

The development of JScript began in October 1995 when Robert Welland joined the Microsoft Internet Explorer (IE) team. Welland previously worked on Apple's Newton handheld computer and the NewtonScript programming language [[Smith 1995](./references.md#Smith:1995:UPL:217838.217844)]. NewtonScript is a prototype-based object-oriented language whose design is influenced by the Self language. Welland worked closely with Walter Smith, the lead designer of NewtonScript, and David Ungar, a consultant on the project, so Welland was very familiar with Self and Ungar's ideas for a prototype-based language. After leaving Apple, Welland had been thinking about how to add scripts to browsers, which led to him being recruited to implement Internet Explorer's scripting capabilities.

When Robert Welland came to Microsoft, he was told that Visual Basic should be put into IE, but when he and Microsoft's DevDiv developer tools department <sup>[g](./appendices.md#DevDiv)</sup >When the Visual Basic team discussed it, they said it would take two years. So he and Sam McKelvie quickly tried to make VBA<sup>[23](./notes.md#23)</sup> work in IE 2, but found that it was too complex to work with the browser's objects. Model integration. Welland studied LiveScript/JavaScript in the Netscape 2 public beta and began trying to implement a simple bytecode interpreter for JavaScript, which McKelvie later improved. Welland discovered that Peter Kukol of the DevDiv department had written a JavaScript parser <sup>[24](./notes.md#24)</sup> that could be used to generate bytecode. So Welland and McKelvie connected their interpreter, Kukol's parser, and a garbage collector written by Patrick Dussud to form the basis of JScript.

Microsoft's DevDiv division is responsible for the development of all Microsoft programming languages and developer tools. Therefore, it was politically sensitive for Robert Welland and Sam McKelvie, who worked on the IE team in the Windows division, to participate in the development of the new language implementation. There is also internal controversy over whether IE should support JavaScript. DevDiv wants to focus on using Visual Basic for scripts and Java for applications. But the IE team's goal is to make IE 3 compatible with Netscape 3, which involves support for JavaScript. Microsoft wasn't happy about having to support JavaScript, but it was too late to ignore it. The final compromise was that IE and Microsoft as a whole would support both JavaScript and Visual Basic for scripting, with responsibility for the scripting language part falling to DevDiv. The IE and Windows teams are responsible for integrating scripting capabilities into browsers and other products.

In January 1996, Sam McKelvie moved to DevDiv, while Robert Welland remained on the IE team. Also in January, Shon Katzenberger moved from the Microsoft Word team to DevDiv to work on script development. Katzenberger took over interpreter responsibilities and, with the help of the Visual Basic team, obtained a scriptable subset of Visual Basic that could run on the same interpreter. This is called Visual Basic Script (VBS).

Welland and McKelvie packaged the scripting system together, covering support for JScript and VBS. This was an embeddable component that came to be known as Active Scripting. This component has been available since 1996 as part of IE3 and the Microsoft Web server product IIS. In IIS, it provides server-side scripting support for Active Server Pages (ASP). Active Scripting subsequently became a standard component of Microsoft Windows and is still available to support legacy applications in 2019.

The IE team took competition with Netscape seriously. They hoped that the script debugger that was part of Active Scripting at the time would attract JavaScript web developers to IE, since Netscape didn't have a JavaScript debugger. But they also learned that website interoperability with the Netscape browser was critical to popularizing IE. So Shon Katzenberger and others ran a development version of IE 3 against thousands of websites using JavaScript and compared the results to Netscape 2 and Netscape 3. Whenever a difference was found, Katzenberger had to reverse-engineer the behavior of Netscape JavaScript to understand what was different. Some of the behavior surprised them. They were particularly shocked when they discovered that in Netscape's implementation HTML page frames shared a common object address space and could freely exchange objects. IE has implemented page frames as isolated environments, so considerable redesign was required to allow objects to be passed within them.

The lack of proper language specification has been an issue throughout the development of JScript. Welland recalled that throughout the development process, Thomas Reardon, who led the development of IE3, would seize every opportunity to berate his Netscape colleagues for the lack of JavaScript language specifications.

## From Mocha to SpiderMonkey
For all of 1995 and most of 1996, Brendan Eich was the only person working full-time on the JavaScript engine. 25](./notes.md#25)</sup>Netscape developer working on the development. Released in Netscape 3.0 in August 1996, JavaScript 1.1 still consisted primarily of 10 days of prototype code from May 1995. After releasing this version, Eich decided it was time to repay the technical debt of the *engine*<sup>[g](./appendices.md#engine)</sup> )</sup>, and strive to make JavaScript "a cleaner language." But Netscape management wanted him to work on language specifications. They are sensitive to Microsoft's criticism of the lack of a JavaScript specification and believe that the upcoming language standardization process needs such a specification as input. Eich refused, wanting to start by reimplementing Mocha. To write a specification, all he needed was to scrutinize Mocha's implementation. He decided that it would be most efficient to rewrite Mocha while it was being reviewed, which would also allow him to correct initial design errors before they were incorporated into the specification.

Frustrated by the debate, Brendan Eich left the office and worked from home for two weeks. During this time, he redesigned and implemented the core of the JavaScript engine. The gain from this move is a faster, more reliable and more flexible operating engine. He abandoned the practice of representing JavaScript values as *discriminated union*<sup>[g](./appendices.md#discriminated-union)</sup> and instead used a tagged pointer containing the immediate raw value ). He also implemented features such as nested functions, function expressions, and `switch` statements, which were never implemented in the original engine. The reference counting-based memory manager has also been replaced by a mark/sweep algorithm-based garbage collector.

When Eich returned to the office, the new engine had replaced the Mocha. Chris Houck, an early Netscape developer, also became involved as the second full-time member of the JavaScript team. Houck named the new engine "*SpiderMonkey*<sup>[g] after a scene from the movie "Beavis and Butt-Head Do America" [[Judge et al. 1996](./references.md#beavis)] (./appendices.md#SpiderMonkey)</sup>》<sup>[27](./notes.md#27)</sup>. Clayton Lewis joined the staff as manager and Norris Boyd was hired. Technical writer Rand McKinny was brought in to assist Eich in writing the specification.

Brendan Eich continued to enhance the language to JavaScript 1.2 to make it part of Netscape 4.0. It released its first beta version in December 1996, and regular expressions were added in the April 1997 beta version. Production versions of Netscape 4 on various platforms began to be released in June and were distributed in the second half of 1997.

The JavaScript 1.2 language and built-in libraries implemented by SpiderMonkey have been significantly enhanced compared to JavaScript 1.0/1.1. Figure 10 lists the major new features in JavaScript 1.2 [[Netscape 1997c](./references.md#netscape:js1.2:guide)].

```
* do statement
* Statement labels, and break/continue to labels
* switch statement
* Nested function declarations (using lexical scope)
* Function expression (lambda expression)
* Eliminate the implicit type conversion originally performed by the == operator
* delete operator for graceful deletion of attributes
* Object literal
* array literal
* Regular expression literal
* RegExp object for regular expression matching
* __proto__ pseudo-property on all objects
* New array methods push, pop, shift, unshift, splice, concat, slice
* New string method charCodeAt
* RegExp-based fromCharCode (ISO latin-1), match, replace, search, substr, split
* The arity attribute of the function
* Split the function and its arguments object into different objects
* The shape of the function is declared locally and can be used as the property name on the arguments object
*arguments.callee
* watch/unwatch function
* import/export statements and script signatures
```

Figure 10. New features in JavaScript 1.2.

In JavaScript 1.2, most of the new libraries added are inspired by existing features in other popular languages. The array `concat` and `slice` methods are inspired by Python's sequence operations, while the `push` / `pop` / `shift` / `unshift` / `splice` methods are all directly modeled after the Perl array functions of the same name. Python also inspired the `concat` / `slice` / `search` methods of strings. `match` / `replace` / `substr` for strings from Perl. Java inspired the `charCodeAt` method. As for the string matching syntax and semantics of regular expressions, Perl is still used for reference.

The additions made by JavaScript 1.2 at the statement level provide the statements that programmers previously familiar with the C family of languages have come to expect. The `do` statement directly replicates the syntax and similar semantics of the C language `do` statement, which was missing in JavaScript 1.0. Labeled statements and the ability to `break` / `continue` to a label name are modeled directly after the same features in Java. They allow early escape from multi-level nested loops and `switch` statements, as well as from non-iterative blocks of code. JavaScript 1.2's `switch` statement includes compile-time evaluation of `case` selector expressions [[Eich et al. 1998](./references.md#spidermonkey:js1.4-src), jsemit.c lines 757-776], which is consistent with C and Java.

In JavaScript 1.0/1.1, functions can only be defined in global declarations at the top level of a script. JavaScript 1.2 supports functions defined in another closed function through local declaration. Such internal function definitions can be nested to any level. Inner functions have lexical scope, and their local declarations overshadow declarations with the same name in the outer scope. In JavaScript 1.0/1.1, it was possible to make forward references to variables and functions because the language logically "promoted" top-level `var` and `function` declarations to the beginning of the script, and function-local `var` declarations were also will be "promoted" to the beginning of the function body. Similarly in JavaScript 1.2, nested `function` declarations are hoisted to the beginning of the enclosing function body. If there are multiple `function` declarations with the same name, the last declaration in the source code of the enclosing function body is bound to that name.

JavaScript 1.2 also provides lambda expression support by allowing function definitions to be expression primitives. They are called "function expressions" and are syntactically identical to function declarations, except that the function name becomes optional. If a function name is present, the language treats the function expression as a hoisted `function` declaration for binding purposes. A function expression without a function name defines an anonymous function. In either case, each runtime evaluation of the function expression creates a new closure. A new `callee` property has been added to the `arguments` object, allowing such closures to reference themselves recursively.

Array literals and object literals<sup>[28](./notes.md#28)</sup> are both inspired by similar features in Python. Array literals provide a concise syntax for creating and initializing elements of array objects, allowing JavaScript programmers to write the following:

``` js
// JavaScript 1.2
var p2 = [1, 2, 4, 8, 16, 32, 64];
```

Instead of this:

``` js
// JavaScript 1.1
var p2 = new Array();
p2[0] = 1;
p2[1] = 2;
p2[2] = 4;
// etc.
```

Similarly, object literals provide a concise syntax for creating objects and associating properties with them. With object literals, programmers can write the following:

``` js
// JavaScript 1.2
var origin = { x: 0, y: 0 };
```

Instead of this:

``` js
// JavaScript 1.0
var origin = new Object;
origin.x = 0;
origin.y = 0;
```

The combination of object literals and function expressions simplifies the definition of classless objects containing methods. For example:

``` js
// JavaScript 1.2
function Point(x, y) {
   return {
     x: x,
     y: y,
     distance: function (another) {
       return Math.sqrt(Math.pow(this.x - another.x, 2)
         + Math.pow(this.y - another.y, 2)
       );
     }
   }
}
var origin = new Point(0, 0);
alert(origin.distance(new Point(5, 5)));
```

Combining object literals and function expressions also provides a more convenient way to define prototype objects. Also added is the `__proto__` pseudo-property (pseudo-property), which enables JavaScript programs to dynamically access and modify the internal reference of each object (used to access inherited properties) <sup>[29](./ notes.md#29)</sup>. By using `__proto__`, a program can dynamically construct a property inheritance hierarchy of any depth and dynamically specify where an object should inherit properties from.

Eventually, some of the JavaScript 1.2 changes turned out to be mistakes. The `import` and `export` statements are intended for use with the Java-compatible script signing mechanism in Netscape 4 [[Netscape 1997a](./references.md#jssec)]. For signed scripts, global variables defined within them are private to the script, but functions within them can be explicitly exported using the `export` statement. Non-Netscape browsers have never adopted this feature.

Although user demand drove the implicit type conversion rules for the `==` operator in JavaScript 1.0/1.1, some users still find the behavior surprising and confusing. Brendan Eich decided to eliminate most implicit type conversions in JavaScript to fix `==` [[Netscape 1997a](./references.md#netscape:js1.2:guide:operators); [Rein 1997](./references .md#js1.2evol)]. If neither operand is of the same primitive type (number, string, boolean, object), then `==` will return `false`.

JavaScript 1.2 hopes to accommodate the semantic changes in JavaScript 1.0 and 1.1 through the `version` attribute of the `<script>` tag. But by the time JavaScript 1.2 was released to production, this form of version management had become unmaintainable for Web developers [[Rein 1997](./references.md#js1.2evol)], and for those who needed to work on non-Netscape This is especially true for web pages on browsers. These browsers maintain their own JavaScript implementations.


# Interlude: Feng Ping was murdered
From its inception, JavaScript has been fiercely criticized by public opinion. Some criticisms target fundamental design decisions in the language, such as design details such as dynamic typing or implicit type conversions. Other critics have significant objections to the way it integrates with HTML, or to the risk of it exposing browser security vulnerabilities [[Fair 1998](./references.md#Fair98)]. Robert Cailliau [[Wikinews 2007](./references.md#wikinews:cailliau)] called JavaScript "the most horrific piece of shit in the history of computing" and said: "I only know of one programming language worse than C, and that's Javascript (sic)." Bert Bos described JavaScript as "the worst invention ever" at the W3C Symposium [[2005](./references.md#bos05)].

For many novice programmers, JavaScript in the browser provides their first exposure to common programming problems, such as the challenges of floating point arithmetic. They often assume that these problems are specific to JavaScript. Many experienced programmers compare JavaScript to familiar programming languages (or to Java due to name confusion) and find JavaScript lacking. Articles introducing the quirks of JavaScript [[Cardy 2011](./references.md#gotchas)] and related sites such as `wtfjs.com` [[Leroux 2010](./references.md#wtfjs)] were once all over the Web Very popular.
