---
title: "Serpent OS, the next step in the evolution of Linux"
date: "2020-08-30T18:00:00.0Z"
description: "Some thoughts regarding a new modern Linux distro in development"
---

In the last month (July), it was announced that a new Linux distribution is in production by a team led by Ikey Doherty, who is known in the Linux world to be the lead developer of some loved projects like the Solus OS distro, the Budgie Desktop Environment and the Lipsy Snake Game Engine.

## But beefore you say "Oh no another distro! How much distros do we already have?"

While each one of the previous linux distributions had their own specific quirks, all of them relied on the system components developed by the GNU Project, on top of the Linux kernel. The use of this components led to some [wellknown arguments](https://en.wikipedia.org/wiki/GNU/Linux_naming_controversy). This was the norm, until one day appeared the distribution which the majority of the population uses and its name is... Android. The famous mobile operating system relies on the linux kernel just like any classic distro, but instead of using the GNU System, Google developed their own components (some open-source, others proprietary), and that's why Android is so different from the others.

Returning to Serpent OS, Ikey's plan is to build a new distro using the Linux kernel, but using new modern, fast, lightweight components and toolchains, while keeping the system moduler, in order to easily replace older components for modern ones. In order, this will be a new distro using some new tech without relying in the GNU system. Now the GNU folks can't use the "It's GNU/Linux, because Linux is only the kernel" anymore. According to Ikey this new distro will reveal Linux true potential and will be optimized to modern hardware.

## Techinal aspects

Now entering in some techinal aspects, some of the plans to Serpent OS, include:
* No more usrbin split
* 100% clang-built throughout (including kernel)
* musl as libc, relying on compiler optimisations instead of inline asm
* libc++ instead of libstdc++
* LLVM’s binutils variants (lld, as, etc.)
* Mixed source/binary distribution
* Moving away from x86_64-generic baseline to newer CPUs, including Intel and AMD specific optimisations
* Capability based subscriptions in package manager (Hardware/ user choice / etc)
* UEFI only for x86_64 hardware. No more legacy boot.
* Completely open source, down to the bootstrap / rebuild scripts
* Seriously optimised for serious workloads.
* Third party applications reliant on containers only. No compat-hacks
* Wayland-only. X11 compatibility via containers will be investigated
* Fully stateless with management tools and upstreaming of patches.

There also many more aspects that the Serpent OS team will reveal eventually, and you can follow their progress in [www.serpentos.com/](https://www.serpentos.com/).

## Conclusion

Serpent OS of the most ambitious projects in the Linux world, in the recent years, and I'm really curious to see how the final product will look like, and I hope that everyone reading this blog post can find some potential in this projecto too.

I also hope that you enjoyed my first post and thanks a lot to giving it a shot.

