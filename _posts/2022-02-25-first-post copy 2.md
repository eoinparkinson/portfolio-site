---
layout: post
title: My Second Post
excerpt: Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque.
date: 2022-03-02T00:00:00.000Z
categories: blog
image: /assets/images/image-3.jpg
tags:
  - update
---
Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Id neque aliquam vestibulum morbi blandit. 

Dheck out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Arcu felis bibendum ut tristique. Nec dui nunc mattis enim ut tellus.

# Accumsan sit
Amet nulla facilisi morbi tempus. Et malesuada fames ac turpis egestas integer. 

Orci nulla pellentesque dignissim enim sit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Leo a diam sollicitudin tempor id eu nisl nunc. Lectus quam id leo in. Maecenas sed enim ut sem viverra aliquet eget sit amet. Elit scelerisque mauris 
## Pellentesque pulvinar
Malesuada bibendum arcu vitae elementum. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. 


![Nature, somewhere...](/assets/images/image-2.jpg)


# Some Example Code

{% highlight python %}
1 #!/usr/bin/env python3
2 
3 import sys
4 
5 db = {}												    # database - initialised globally
6 commands = [tmp.strip() for tmp in sys.stdin]		    # stdin formatted into list
7 
8 def init_var(name, value):
9     db[name] = int(value)
10     return f"Assigned {name} to {value}"
11 
12 def calc(line):
13     try:
14         output = db[line[0]]		                    # assign the staring value as the first variable
15         reverse = {v: k for (k, v) in db.items()}	    # reversing dictionary
16     except KeyError:
17         return Noneca1
18 
19     scope = line[1:]				                    # scope contains even values - operator followed by variable e.g. ["+", "foo", "-", "bar"]
20     for i in range(0, (len(scope)), 2):
21         try:
22             if scope[i] == "+":		                    # addition
23                 output += db[scope[i + 1]]
24             else:					                    # subtraction
25                 output -= db[scope[i + 1]]
26         except KeyError:
27             return f"{' '.join(line)} = unknown"
28     try:
29         return f"{' '.join(line)} = {reverse[output]}"
30     except KeyError:
31         return f"{' '.join(line)} = unknown"
32 
33 
34 for command in commands:                                # calling the above functions for all lines in stdin
35     function = command.split()[0]
36     if function == "def":
37         init_var(command.split()[1], command.split()[2])
38     elif function == "calc":
39         result = calc(command.split()[1:-1])
40         if result is not None:
41             print(result)

{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

Mi bibendum neque egestas congue quisque egestas diam in arcu.

# Amet commodo
Nulla facilisi nullam vehicula. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Mattis molestie a iaculis at erat. Tellus cras adipiscing enim eu. Tempor commodo ullamcorper a lacus vestibulum sed. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Sit amet venenatis urna cursus eget nunc. 

Pellentesque diam volutpat commodo sed. Turpis in eu mi bibendum. Consequat nisl vel pretium lectus quam id leo. Sed turpis tincidunt id aliquet risus feugiat. Nulla aliquet enim tortor at auctor urna nunc.

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
