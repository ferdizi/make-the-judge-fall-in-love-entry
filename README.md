# Make the Judge Fall in Love in One Line

One line, 114 characters — a small, stubborn ritual of love, told without ever saying the word.

[![make.fun badge](https://make.fun/badge/u-deranalabs-make-the-judge-fall-in-love-in-one-line-8e712c13.svg)](https://make.fun/bounty/u-deranalabs-make-the-judge-fall-in-love-in-one-line-8e712c13)
[![make.fun rank](https://make.fun/badge/u-deranalabs-make-the-judge-fall-in-love-in-one-line-8e712c13/ferdizi/make-the-judge-fall-in-love-entry/rank.svg)](https://make.fun/bounty/u-deranalabs-make-the-judge-fall-in-love-in-one-line-8e712c13)
[![make.fun reward](https://make.fun/badge/u-deranalabs-make-the-judge-fall-in-love-in-one-line-8e712c13/ferdizi/make-the-judge-fall-in-love-entry/reward.svg)](https://make.fun/bounty/u-deranalabs-make-the-judge-fall-in-love-in-one-line-8e712c13)

## The line

> You leave an inch of tea in every mug, and after nine years I have stopped asking why and started leaving one too.

## How it works

`main.ts` (Node 22, TypeScript) writes the line exactly as-is — no trailing
newline — to `<output dir>/entry.txt`, where the output dir is
`process.env.MAKEFUN_OUTPUT_DIR` or `/output` by default. It refuses to run
if the line ever exceeds the 240-character limit.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
