'''
Input: 
a text string containing English words, whitespace (spaces and new lines) and punctuation 
like commas, periods, question marks and semi-colons.

For example:

"""Hello, I like nuts. Do you like nuts? No? Are you sure? 
Why don't you like nuts? Are you nuts? I like you"""

Output:

Print a list of triplets. Each triplet is a pair of words and a count

For example the output for the sample input:

Are you: 2 
like nuts: 3 
you like: 3 
I like: 2

A pair of words should show up in the output if one of the words follows the other 
in the input and are separated only by whitespace. Every pair that shows up more than 
once should have an entry in the output with the correct number of occurrences. Note, 
that the order of the words in the pair doesn't matter: 'green bee' and 'bee green' are 
2 occurrences of the same pair. Ignore case. 'BlUe sKY' is the same pair as 'SKy bLUE'.
'''

import re
import json
regex = {}
regex['MATCH_SYMBOLS'] = re.compile(r'[?\',]')
regex['MATCH_LETTERS'] = re.compile(r'[a-zA-Z]')

def validate_user_input(str):
  str = re.sub(regex['MATCH_SYMBOLS'], '', str)
  return str.split(" ")

def validate_letters(words):
  return not not (
    re.match(regex['MATCH_LETTERS'], str(words[0])) and
    re.match(regex['MATCH_LETTERS'], str(words[1]))
  )

def construct_pairs(arr):
  all_pairs = {}
  for i in range(len(arr) - 1):
    words = [arr[i], arr[i + 1]]
    words.sort()
    if validate_letters(words):
      pair = json.dumps(words)
      if pair in all_pairs:
        all_pairs[pair] += 1
      else:
        all_pairs[pair] = 1

  return all_pairs

def display_valid_pairs(all_pairs):
  for key in all_pairs:
    occurences = all_pairs[key]
    if (occurences >= 2):
      pair = json.loads(key)
      print("{} {}: {}".format(pair[0], pair[1], occurences))

def display_word_pairs(input_str):
  arr = validate_user_input(input_str)
  all_pairs = construct_pairs(arr)
  display_valid_pairs(all_pairs)

input_str = "Hello, I like nuts. Do you like nuts? No? Are you sure?  Why don't you like nuts? Are you nuts? I like you"

display_word_pairs(input_str)

