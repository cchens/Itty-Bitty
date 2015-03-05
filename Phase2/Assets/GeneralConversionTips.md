#Ben's General Tips!

Since we’re a learning tool, we don’t want our users to be stuck only knowing base-2, base-10 and base-16 conversions. Here’s some generalizations about conversions that would be easy to teach.

I'm assuming the student has already learnt basic conversions (i.e. single bit stuff, 0-15 to 0-F, what 'most/least significant digit' means, etc)

- From Decimal:

We want to go from digit D’s base-10 to base-X. First, find out what two exponential values with X as the base is D in between. There exists some value of n for every potential D such that:
$$X^{n+1} > D \geq X^n, n \geq 0$$

Now we will divide $$D$$ by $$X^n$$. Convert the resulting number into base-X (assumed they know how).
Continue the above process using the remainder from the division above as the $$D$$ value and with a value of $$n$$ that holds the inequality.
After $$D / X^0$$ occurs, the process is stopped.
Put all the converted division results into a string where the first division is the most significant number and the final division is the least significant. Viola! You just converted decimal into a different base!

- To Decimal:

We want to go from digit D's base-X to base-10. This can be done using our good friend, summations!
Let's introduce a method to index into D. D[x] will give the value of the x+1'th least significant digit in D. Why x+1'th? Because the least signicicant digit is stored in D[0], the 2nd least is in D[1], etc. 

To convert to decimal, one must add up all the values of each of individual D's digits in that position converted to decimal. For example, 101 in binary is 4+1 in decimal which is 5.

Now we'll express this mathimatically. Let i go from the least significant digit in D to the most. Let N be the number of digits in D
$$\Sum\limits_{i=0}^{N-1} = (D[i] * X^i)$$

- Binary to Hexadecimal:

This is very easy. Just go from least to most significant in binary and grab 4-bit chunks of D. Convert that 0000-1111 value to 0-F (assumed known). Continue doing this until you reach the most significant bit. If the chunk with the most significant bit is a size less than 4, add 1-3 0's to the most significant position as padding.

- Hexadecimal to Binary:

Also very easy. Go from least to most significant digit in D (doesn't matter here). Take the value of 0-F and convert that into 0000-1111 (assumed known). Move on to the next digit until there is no more hexadecimal digits.

- Binary and Base-2^n:

Notice how with Binary and Hexadecimal, binary bit chunks of size 4 were used. This is because $$2^5 = 16$$, so with 4 bits binary can represent values 0 to 15. This logic can be extended!

If you want to convert to/from Base-$$2^n$$, you need to follow the same simple steps but instead of using 4-bit chunks, use $$n-1$$ sized chunks!


- Base-X and Base-X^n:

@ others find out if this is a thing later

- Doesn't follow above cases:

@ others find out if there's any cases I missed

This is not the ideal situation. It's fairly simple to explain but it's not the fastest way to do things.

First let's define the two bases, X and Y. To convert X to Y, first convert the value in base-X to base-10 (see 'To Decimal' above). After that, convert the base-10 number to base-Y (see 'From Decimal' above).