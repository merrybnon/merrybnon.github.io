---
title: "Kramers–Kronig from causality, in one line"
categories: [notes]
tags: [complex analysis, response functions, Hilbert transform]
---

The Kramers–Kronig relations are usually derived by closing a contour in the upper half plane. There is a shorter route that makes the physics visible: a causal response function is unchanged by multiplying it with a step function.

<!--more-->

Let $$\chi(t)$$ be a linear response function, with $$\chi(\omega) = \int \chi(t)\, e^{i\omega t}\, \d t$$. Causality says $$\chi(t) = 0$$ for $$t < 0$$, which is the same as

$$
\chi(t) = \theta(t)\,\chi(t).
$$

The Fourier transform of the step is $$\tilde\theta(\omega) = \pi\delta(\omega) + i\,\mathrm{P}\frac{1}{\omega}$$. A product in time is a convolution in frequency, so

$$
\begin{aligned}
\chi(\omega) &= \frac{1}{2\pi}\int \chi(\omega')\left[\pi\delta(\omega-\omega') + i\,\mathrm{P}\frac{1}{\omega-\omega'}\right]\d\omega' \\
&= \tfrac12\chi(\omega) + \tfrac{i}{2}\,\H[\chi](\omega),
\end{aligned}
$$

where $$\H[f](\omega) = \frac{1}{\pi}\,\mathrm{P}\!\int \frac{f(\omega')}{\omega-\omega'}\,\d\omega'$$ is the Hilbert transform. Rearranging gives the whole story:

$$
\chi = i\,\H[\chi]
\quad\Longrightarrow\quad
\operatorname{Re}\chi = -\H[\operatorname{Im}\chi], \qquad \operatorname{Im}\chi = \H[\operatorname{Re}\chi].
$$

Dissipation ($$\operatorname{Im}\chi$$) and dispersion ($$\operatorname{Re}\chi$$) are not independent: each is the Hilbert transform of the other, and the only input was $$\chi_{t<0} = 0$$.
