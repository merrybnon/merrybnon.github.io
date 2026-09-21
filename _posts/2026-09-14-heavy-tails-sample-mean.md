---
title: "When the sample mean stops meaning anything"
categories: [notes]
tags: [heavy tails, statistics]
---

For a distribution with tail $$P(X > x) \sim x^{-\alpha}$$, the variance is infinite once $$\alpha \le 2$$ and the mean is infinite once $$\alpha \le 1$$. A draft post; replace with your own.

<!--more-->

With $$1 < \alpha < 2$$ the generalized central limit theorem says the sum $$S_n = \sum_{i=1}^n X_i$$ fluctuates on the scale $$n^{1/\alpha}$$ rather than $$n^{1/2}$$, so

$$
\frac{S_n - n\mu}{n^{1/\alpha}} \xrightarrow{d} \text{stable}(\alpha).
$$

Here is a code block, to check highlighting:

```julia
using Distributions
x = rand(Pareto(1.5), 10^6)
cumsum(x) ./ (1:length(x))
```
